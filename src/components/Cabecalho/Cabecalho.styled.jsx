import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 60px;

`

export const Img = styled.img`
    width: 7vw;
`

export const ListContainer = styled.ul`
    display: flex;
    gap: 75px;
    cursor: pointer;
`

export const List = styled.li`
    list-style: none;
`

export const LinkStyle = styled(Link)`
    text-decoration: none;
    color: inherit;
`