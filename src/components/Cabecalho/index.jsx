import { ButtonStyle, Header, Img } from "./Cabecalho.styled"
import logo from '../../../public/images/notaMusica.png'
import { Link } from "react-router-dom"
import Menu from "../Menu"
import Botao from "../Botao"
import wp from '../../../public/images/wp.png'

function Cabecalho () {
    return(
        <Header>
            <div>
                <Link to='/'>
                    <Img src={logo}/>
                </Link>
            </div>
            <div>
                <Menu/>
            </div>
            <ButtonStyle>
                <Botao texto="fale comigo" imgImport={wp}></Botao>
            </ButtonStyle>
        </Header>
    )
}

export default Cabecalho