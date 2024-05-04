import { Header, Img, LinkStyle, List, ListContainer } from "./Cabecalho.styled"
import logo from '../../../public/images/notaMusica.png'
import wp from '../../../public/images/wp.png'
import Botao from "../Botao"
import { Link } from "react-router-dom"

function Cabecalho () {
    return(
        <Header>
            <div>
                <Link to='/'>
                    <Img src={logo}/>
                </Link>
            </div>
            <div>
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
                <LinkStyle>
                    <List>
                        Avaliações
                    </List>
                </LinkStyle>
                </ListContainer>
            </div>
            <div>
                <Botao texto="fale comigo" imgImport={wp}></Botao>
            </div>
        </Header>
    )
}

export default Cabecalho