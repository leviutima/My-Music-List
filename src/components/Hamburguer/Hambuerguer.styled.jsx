import styled, { css } from "styled-components";

export const Container = styled.section `
    position: absolute;
    backdrop-filter: blur(3px);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width:780px) {
        display: none;
    }

    background: rgba(17, 18, 17, 0.95);
    background: linear-gradient(34deg, rgba(12, 12, 12, 0.95) 0%, rgb(12, 3, 24) 95%);

    opacity: 0;
    pointer-events: none;
    transform: translateX(50px);

    transition: .5s;
    > svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
        color: white;
        transform: rotate(45deg);
        transition: .7s;
    }

        a {
            text-decoration: none;
            color: white;
        }    

        ul {
        display: flex;
        flex-direction: column;
        padding-right: 30px;
        align-items: center;
        gap: 42px;
        color: white;
        list-style: none;
        font-size: 24px;
        transform: scale(0.7);
        transition: 0.7s;
        }

        ${({ menuOpen }) => menuOpen && css`
        opacity: 1;
        pointer-events: auto;
        transform: translateX(0px);
        
        > svg {
        transform: rotate(0deg);   
        }
        
        ul{
            transform: scale(1);
        }  
    
 `}
`
