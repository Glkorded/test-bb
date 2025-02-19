import { createGlobalStyle } from "styled-components";
import { COLORS } from "@ui-kit/consts";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
        padding: 0;
    }

    ul[role="list"],
    ol[role="list"] {
        list-style: none;
    }

    html:focus-within {
        scroll-behavior: smooth;
    }

    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
            transition: none;
        }
    }

    body,
    html {
        height: 100%;
        width: 100%;
        scroll-behavior: smooth;
        background-color: ${COLORS.BLACK};
    }
    
    body {
        overflow-x: hidden;
    }
`;
