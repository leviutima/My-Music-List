import { Container, LinkStyle, List, ListContainer } from "./Menu.styled"


function Menu () {
    return(
        <Container>
            <ListContainer>
                        <LinkStyle to='/'>
                            <List>
                                Home
                            </List>
                        </LinkStyle>
                    <LinkStyle to='/playlist'>
                        <List>
                            PlayLists
                        </List>
                    </LinkStyle>
                    <LinkStyle to='/avaliacao'>
                        <List>
                            Avaliações
                        </List>
                    </LinkStyle>
            </ListContainer>
        </Container>
    )
}

export default Menu