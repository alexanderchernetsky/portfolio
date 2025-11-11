import { useEffect } from 'react';

export const useDisablePageScrolling = (enabled = true) => {
    const STYLE_ELEMENT_ID = 'body-overflow-style';
    const BODY_ELEMENT_ID = 'app-body';

    // overcomplicated approach, but works against unknown style overrides
    useEffect(() => {
        const bodyElement = document.getElementById(BODY_ELEMENT_ID);

        if (!bodyElement) return;

        const desiredOverflow = enabled ? 'hidden' : 'visible';

        // Create a stylesheet with the highest priority
        let styleElement = document.getElementById(STYLE_ELEMENT_ID);
        if (!styleElement) {
            styleElement = document.createElement('style');
            styleElement.id = STYLE_ELEMENT_ID;
            document.head.appendChild(styleElement);
        }

        // Set the style with very high specificity
        styleElement.innerHTML = `
            body#${BODY_ELEMENT_ID} {
                overflow: ${desiredOverflow} !important;
            }
        `;

        return () => {
            const styleElement = document.getElementById(STYLE_ELEMENT_ID);
            if (styleElement?.parentNode) {
                styleElement?.parentNode?.removeChild(styleElement);
            }
        };
    }, [enabled]);
};
