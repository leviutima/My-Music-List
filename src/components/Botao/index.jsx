import PropTypes from 'prop-types'
import { Button, Img } from './Botao.styled'


function Botao ({texto, imgImport}) {
    return(
        <Button>
            <div>
                <Img src={imgImport}></Img>
            </div>
            <div>
                {texto}
            </div>
        </Button>
    )
}

Botao.propTypes = {
    texto: PropTypes.string.isRequired,
    imgImport: PropTypes.string
}

export default Botao