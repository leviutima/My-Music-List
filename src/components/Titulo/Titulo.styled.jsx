import styled from "styled-components";

export const TituloStyle = styled.div `
@media(min-width: 1200px){
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 8em;
    font-weight: 400;
    font-style: italic;}
    @media screen and (max-width: 768px){
        text-align: center;
        font-size: 4em;
    }
    @media (max-width: 1300px) and (min-width: 768px){
        text-align: center;
        font-size: 5em;
    }
    
`