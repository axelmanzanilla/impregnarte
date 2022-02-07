import { createGlobalStyle } from 'styled-components';
import lemonMilkLight from './assets/fonts/lemon milk/light.otf';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Lemon Milk Light;
        src: url(${lemonMilkLight}) format("truetype");
    }
`;

export default GlobalStyle;
