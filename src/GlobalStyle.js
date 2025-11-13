import { createGlobalStyle } from 'styled-components';
import lexendFont from './fonts/Lexend/Lexend-VariableFont_wght.ttf';
import modakFont from './fonts/Modak/Modak-Regular.ttf';
import BagelFont from './fonts/Bagel_Fat_One/BagelFatOne-Regular.ttf';
import ComicFontBold from './fonts/Comic_Relief/ComicRelief-Bold.ttf';
import Ephesis from './fonts/Ephesis/Ephesis-Regular.ttf';


export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Lexend';
    src: url(${lexendFont});
  }

  @font-face {
    font-family: 'Modak';
    src: url(${modakFont}); // Agora sim ele encontra
  }

  @font-face {
    font-family: "Bagel Fat One";
    src: url(${BagelFont});
  }

  @font-face {
    font-family: "Comic Relief";
    src: url(${ComicFontBold});
  }

  @font-face {
    font-family: "Ephesis";
    src: url(${Ephesis});
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Lexend';
    font-weight: 400;
    cursor: url('/src/assets/rosquinha.png') 16 16, auto;
    
  }

  
`

export default GlobalStyle
