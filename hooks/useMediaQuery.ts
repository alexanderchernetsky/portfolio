'use client';

import { useEffect, useState } from 'react';

/**
 * Generic media query hook. SSR-safe.
 *
 * @param query CSS media query string, e.g. '(min-width: 1024px)'
 * @param initialState Optional initial state to avoid hydration mismatch
 */
export function useMediaQuery(query: string, initialState?: boolean): boolean {
  const [matches, setMatches] = useState<boolean>(initialState ?? false);

  useEffect(() => {
    if (typeof window === 'undefined' || !('matchMedia' in window)) return;

    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);

    // Set initial state
    onChange();

      mq.addEventListener('change', onChange);
      return () => mq.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}

// Convenience hook aligned with Tailwind breakpoints
export const useIsDesktop = () => useMediaQuery('(min-width: 1024px)');
