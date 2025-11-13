import { createGlobalStyle } from 'styled-components';
import lexendFont from './fonts/Lexend/Lexend-VariableFont_wght.ttf';
import modakFont from './fonts/Modak/Modak-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Lexend';
    src: url(${lexendFont});
  }

  @font-face {
    font-family: 'Modak';
    src: url(${modakFont}); // Agora sim ele encontra
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Lexend';
    font-weight: 400;
  }
`

export default GlobalStyle
