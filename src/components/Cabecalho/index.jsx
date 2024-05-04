import { ButtonStyle, HamburguerSection, Header, Img } from "./Cabecalho.styled"
import logo from '../../../public/images/notaMusica.png'
import { Link } from "react-router-dom"
import Menu from "../Menu"
import Botao from "../Botao"
import wp from '../../../public/images/wp.png'
import PropTypes from 'prop-types'
import { IoMenu } from "react-icons/io5";


function Cabecalho ({setMenuVisible}) {
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
                <Botao imgImport={wp} url='https://w.app/LeviUtima'>Fale Comigo</Botao>
            </ButtonStyle>
            <HamburguerSection>
            <IoMenu size={45} onClick={() => typeof setMenuVisible === 'function' && setMenuVisible(true)}/>
            </HamburguerSection>
        </Header>
    )
}

Cabecalho.propTypes = {
    setMenuVisible: PropTypes.func
  }

export default Cabecalho