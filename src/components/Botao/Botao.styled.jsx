import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border: 1px solid;
    border-radius: 10px;
    padding: auto;
    width: 8vw;
    height: 4.5vh;
    cursor: pointer;
    @media (max-width: 1512px)and (min-width: 1185px){
        width: 10vw;
    }
`

export const LinkStyle = styled(Link)`
    color: black;
    text-decoration: none;
`

export const Rota = styled.a`
    color: black;
    text-decoration: none;
`

export const Img = styled.img`
    width: 1vw;
`