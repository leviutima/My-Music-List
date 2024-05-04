import PropTypes from 'prop-types'
import { Button, Img, Rota,  } from './Botao.styled'

function Botao ({ children, imgImport, url }) {
    return(
        <Rota href={url} >
        <Button>
            <div>
                <Img src={imgImport}></Img>
            </div>
            <div>
                {children}
            </div>
        </Button>
        </Rota>
    )
}

Botao.propTypes = {
    children: PropTypes.string.isRequired,
    imgImport: PropTypes.string,
    url: PropTypes.string,}

export default Botao