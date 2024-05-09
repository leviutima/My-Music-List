import { Link } from "react-router-dom"
import styled from "styled-components"


export const Container = styled.div`
`

export const ListContainer = styled.ul`
    display: flex;
    gap: 75px;
    cursor: pointer;
    
`

export const List = styled.li`
    list-style: none;
    @media (max-width: 768px) {
        display: none;
    }
    @media(max-width: 1185px){
        display: none;
    }
`

export const LinkStyle = styled(Link)`
    text-decoration: none;
    color: inherit;
`

