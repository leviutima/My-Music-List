import styled from "styled-components";


export const Card = styled.div `
`

export const StatusBar = styled.div`
    position: relative;
    display: grid;
    align-items: center;
    border: 1px solid aliceblue;
    border-radius: 0 0 10px 10px;
    width: 17vw;
    height: 7vh;
    background-color: aliceblue;
    box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.9);
    @media (max-width: 768px) {
        width: 80vw;
        height: 10vh;
    }
`

export const ContainerStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const InputWrapper = styled.div`
    width: 16.5vw;
    position: relative;
    @media (max-width: 768px) {
        width: 79vw; /* Ajuste a largura do wrapper em telas menores */
    }

    input[type='range'] {
        -webkit-appearance: none;
        width: 100%;
        height: 15px;
        background: transparent;
        outline: none;
        position: relative;
        z-index: 1;
    }

    input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        width: 15px;
        height: 15px;
        background-color: #ff0000;
        border-radius: 50%; 
        cursor: pointer; 
}

    input[type='range']::-webkit-slider-runnable-track {
        width: 100%;
        height: 4px;
        background: #ddd; 
        border-radius: 2px; 
        position: relative;
        z-index: 0;
        cursor: pointer;
    }
`;

export const InputStyle = styled.input`
    width: 16.5vw;
    @media (max-width: 768px) {
        width: 30vw;
    }
    
`

export const ContainerStatusBar = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`

export const ImgCapa = styled.img `
flex-shrink: 0;
    position: relative;
    top: 21px;
    width: 17.1vw;
    border-radius: 10px 10px 0 0;
    box-shadow: 3px 0 4px rgba(0, 0, 0, 0.8);
    @media (max-width: 768px) {
        width: 80.52vw;
    }
`

export const ImgPlay = styled.img`
    width: 1.5vw;
    cursor: pointer;

    @media (max-width: 768px) {
        width: 9vw;
    }

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

    @media (max-width: 768px){
         width: 9vw;
    }
    &:hover {
        transform: scale(1.1);

    &:active {
        transform: scale(0.9);
    }
    }
`