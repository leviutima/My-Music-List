import PropTypes from 'prop-types'
import { TituloStyle } from './Titulo.styled'

function Titulo ({children}) {
    return(
        <TituloStyle>
            {children}
        </TituloStyle>
    )
}

Titulo.propTypes = {
    children: PropTypes.string.isRequired
}

export default Titulo