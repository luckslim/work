import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font: 400 1rem "Roboto", sans-serif;
        background-image: linear-gradient(to bottom,${props => props.theme['slate-100']} 75%,${props => props.theme['slate-950']} 25%); 
        background-position: center;
        background-size: cover;
        height: auto;
        -webkit-font-smoothing: antialiased;  
    }
`;