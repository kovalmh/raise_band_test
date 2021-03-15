import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
 
export const GlobalStyle = createGlobalStyle`
  ${normalize}
  img {
    max-width: 100%;
    max-height: 100%
  }
`