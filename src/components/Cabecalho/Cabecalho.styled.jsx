
import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 60px;

    @media (max-width: 768px) {
        display: flex;
        padding-bottom: 10px; 
    }
    
`



export const Img = styled.img`
    width: 7vw;
    @media (max-width: 768px) {
        width: 16vw;
    }
`

export const ButtonStyle = styled.div `
    @media (max-width: 768px) {
        display: none;
    }
    @media(max-width: 1185px){
        display: none;
    }
`

export const HamburguerSection = styled.section`

    @media(min-width: 1185px){
    display: none;
    }
    
`