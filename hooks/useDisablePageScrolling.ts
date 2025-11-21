import { useEffect, useRef } from 'react';

// Robust scroll lock that works reliably on iOS Safari and Android:
// - Locks body via position: fixed and stores/restores scrollY
// - Adds overscroll-behavior: none on html/body to stop rubber-band
// - Keeps overflow hidden and compensates scrollbar width to avoid layout shift
// simple shared state to coordinate multiple consumers of the hook
let activeLocks = 0;
let lastSavedScrollY = 0;

export const useDisablePageScrolling = (enabled = true) => {
  const STYLE_ELEMENT_ID = 'scroll-lock-style';
  const BODY_ELEMENT_ID = 'app-body';
  const savedScrollRef = useRef<number>(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const body = document.getElementById(BODY_ELEMENT_ID) as HTMLBodyElement | null;
    const html = document.documentElement;
    if (!body) return;

    // Create style element (for overscroll-behavior and safety net overflow hidden)
    let styleEl = document.getElementById(STYLE_ELEMENT_ID) as HTMLStyleElement | null;
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = STYLE_ELEMENT_ID;
      document.head.appendChild(styleEl);
    }

    // Saved values for restore
    const prev = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      paddingRight: body.style.paddingRight,
    };

    let applied = false;

    if (enabled) {
      // Compute and save current scroll position
      const scrollY = window.scrollY || window.pageYOffset || 0;
      savedScrollRef.current = scrollY;
      lastSavedScrollY = scrollY;
      activeLocks += 1;

      // Compute scrollbar width for compensation
      const scrollbarWidth = window.innerWidth - html.clientWidth;
      const computedPaddingRight = parseFloat(getComputedStyle(body).paddingRight || '0') || 0;
      const targetPaddingRight = `${computedPaddingRight + (scrollbarWidth > 0 ? scrollbarWidth : 0)}px`;

      // Apply CSS to prevent rubber-band and ensure no scroll
      styleEl.innerHTML = `
        html, body#${BODY_ELEMENT_ID} {
          overscroll-behavior: none !important;
        }
        body#${BODY_ELEMENT_ID} {
          overflow: hidden !important;
        }
      `;

      // Lock the body by fixing it in place
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      body.style.left = '0';
      body.style.right = '0';
      body.style.width = '100%';
      body.style.overflow = 'hidden';
      body.style.paddingRight = targetPaddingRight;

      applied = true;
    } else {
      // If disabled, ensure style element reflects normal state
      styleEl.innerHTML = '';
    }

    return () => {
      // Cleanup when unmounting or when enabled becomes false
      if (applied) {
        // Determine scrollY to restore
        // Prefer saved value, fallback to parsing body.style.top
        const top = body.style.top;
        const parsed = top ? parseInt(top.replace(/[^-\d]/g, ''), 10) || 0 : 0;
        const restoreY = savedScrollRef.current || lastSavedScrollY || -parsed || 0;

        // Restore styles
        body.style.position = prev.position;
        body.style.top = prev.top;
        body.style.left = prev.left;
        body.style.right = prev.right;
        body.style.width = prev.width;
        body.style.overflow = prev.overflow;
        body.style.paddingRight = prev.paddingRight;

        // Scroll back to previous position in a way that doesn't fight smooth scroll
        const html = document.documentElement;
        const prevScrollBehavior = html.style.scrollBehavior;
        html.style.scrollBehavior = 'auto';
        // Use rAF to ensure layout is unfixed before restore
        requestAnimationFrame(() => {
          window.scrollTo(0, restoreY);
          // restore scroll-behavior on next frame
          requestAnimationFrame(() => {
            html.style.scrollBehavior = prevScrollBehavior;
          });
        });

        // Decrease lock counter
        activeLocks = Math.max(0, activeLocks - 1);
      }

      // Remove the style element only when there are no active locks
      const currentStyleEl = document.getElementById(STYLE_ELEMENT_ID);
      if (activeLocks === 0 && currentStyleEl?.parentNode) {
        currentStyleEl.parentNode.removeChild(currentStyleEl);
      }
    };
  }, [enabled]);
};
