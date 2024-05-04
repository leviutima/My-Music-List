import styled from "styled-components";

export const Container = styled.div`
    @media (max-width: 768px) {
        display: grid;
        justify-content: center;
    }
`


export const CardSection = styled.section`
   padding-top: 7vh;
    display: flex;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap; /* Permite que os cards sejam distribuídos em várias linhas */
    @media (max-width: 768px) {
        margin: 0; /* Remove a margem horizontal para telas menores */
        padding-top: 20px; /* Ajusta o espaçamento superior */
    }
`