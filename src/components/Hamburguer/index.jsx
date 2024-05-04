import { IoClose } from "react-icons/io5";
import PropTypes from 'prop-types'
import { Container } from "./Hambuerguer.styled"
import { Link } from "react-router-dom";

function Hamburguer ({menuVisible, setMenuVisible, menuOpen}) {
    return(
        <>
        <Container menuOpen={menuVisible}>
            <IoClose size={45} onClick={() => setMenuVisible(false)}/>
                <ul>
                    <Link to='/'>
                        <li>HOME</li>
                    </Link>
                    <Link to='/playlist'>
                        <li>PLAYLIST</li>
                    </Link>
                    <Link to='avaliacao'>
                        <li>AVALIAÇÃO</li>
                    </Link>
                    <a href="https://w.app/LeviUtima">
                        <li>FALE COMIGO</li>
                    </a>
                </ul>
                
        </Container>
        </>
    )
}

Hamburguer.propTypes = {
    menuOpen: PropTypes.bool,
    menuVisible: PropTypes.bool.isRequired,
    setMenuVisible: PropTypes.func.isRequired
}

export default Hamburguer