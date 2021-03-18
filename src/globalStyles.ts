import { createGlobalStyle } from 'styled-components';
import sanitizeGlobalStyles from 'sanitize-global-styles';

export const GlobalStyle = createGlobalStyle`
    ${sanitizeGlobalStyles()}
    html {
      box-sizing: border-box;
      font-size: ${({ theme }) => theme.typeScale.paragraph};
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.text};
    }};
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }
    body {
      margin: 0;
      padding: 0;
      font-family: ${({ theme }) => theme.fontFamilies.primary};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
`;
