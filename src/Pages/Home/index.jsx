import Cabecalho from "../../components/Cabecalho"
import CardMusicas from "../../components/CardMusicas"
import Titulo from "../../components/Titulo"
import high from '../../../public/musics/High - Japa (256).mp3'
import capaHigh from '../../../public/capas/high.png'
import { CardSection } from "./Home.styled"


function Home () {
    return(
        <>
        <Cabecalho/>
        <Titulo>
            MINHAS MÚSICAS
        </Titulo>
        <CardSection>
            <CardMusicas imgMusica={capaHigh} tituloMusica='high - JAPA' music={high}/>
            <CardMusicas />
        </CardSection>
        </>
    )
}

export default Home