import styled from "styled-components";


export const Card = styled.div `
    
`

export const StatusBar = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 22px;
    border: 1px solid aliceblue;
    border-radius: 0 0 10px 10px;
    width: 17vw;
    height: 4.5vh;
    background-color: aliceblue;
    box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.9);
`

export const ImgCapa = styled.img `
flex-shrink: 0;
    position: relative;
    top: 21px;
    width: 17.1vw;
    border-radius: 10px 10px 0 0;
    box-shadow: 3px 0 4px rgba(0, 0, 0, 0.8);
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