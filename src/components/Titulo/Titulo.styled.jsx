import styled from "styled-components";

export const TituloStyle = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 8em;
    font-weight: 400;
    font-style: italic;
    @media (max-width: 768px) {
        font-size: 2em;
    }
`