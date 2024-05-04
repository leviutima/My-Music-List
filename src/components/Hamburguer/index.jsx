import { IoClose } from "react-icons/io5";
import PropTypes from 'prop-types'
import { Container } from "./Hambuerguer.styled"

function Hamburguer ({menuVisible, setMenuVisible, menuOpen}) {
    return(
        <>
        <Container menuOpen={menuVisible}>
            <IoClose size={45} onClick={() => setMenuVisible(false)}/>
                <ul>
                    <li>HOME</li>
                    <li>PLAYLIST</li>
                    <li>AVALIAÇÃO</li>
                    <li>FALE COMIGO</li>
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