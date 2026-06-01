import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 html {
   scroll-behavior: smooth;
 }

 body{
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;

    @media screen and (min-width: 768px) {
      font-size: 1.0625rem;
      line-height: 1.75;
    }
 }

 span, h2, nav{
    font-family: 'Cinzel', serif;
 }

`
