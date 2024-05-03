import styled from "styled-components";


export const Card = styled.div `
    
`

export const StatusBar = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 22px;
    border: 1px solid;
    width: 16vw;
    height: 4.5vh;
    background-color: aliceblue;
`

export const ImgCapa = styled.img `
    width: 16.1vw;
    border-radius: 10px 10px 0 0;
`

export const ImgPlay = styled.img`
    width: 1.5vw;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);

    &:active {
        transform: scale(0.9);
    }
    }
`

export const ImgPause = styled.img`
    width: 1.5vw;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);

    &:active {
        transform: scale(0.9);
    }
    }
`