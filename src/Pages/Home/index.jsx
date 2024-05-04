import Cabecalho from "../../components/Cabecalho"
import CardMusicas from "../../components/CardMusicas"
import Titulo from "../../components/Titulo"
import high from '../../../public/musics/High - Japa (256).mp3'
import capaHigh from '../../../public/capas/high.png'
import { CardSection } from "./Home.styled"
import YRONE from '../../../public/musics/Sports - You Are The Right One (128).mp3'
import right from '../../../public/capas/right one.png'
import dfyou from '../../../public/musics/Die For You ft. Grabbitz -- Official Music Video -- VALORANT Champions 2021 (192).mp3'
import dfy from '../../../public/capas/fory.png'
import fashion from '../../../public/musics/Britney Manson - FΛSHION (Single, 2023) (192).mp3'
import fash from '../../../public/capas/fash.png'
import bbDoll from '../../../public/musics/Ari Abdul - BABYDOLL (Lyric Video) (192).mp3'
import babyD from '../../../public/capas/bby doll.png'
import Rodape from "../../components/Rodape"
import nMentir from '../../../public/musics/Lagum - Não Vou Mentir (Liu remix) (192).mp3'
import lagum from '../../../public/capas/nmenti.png'
import mortals from '../../../public/musics/Warriyo - Mortals (ft. Laura Brehm) (192).mp3'
import pngMortals from '../../../public/capas/mortal.png'
import valho from '../../../public/musics/Eu Não Valho Nada (192).mp3'
import vaNada from '../../../public/capas/valho.png'

function Home () {
    return(
        <>
        <Cabecalho/>
        <Titulo>
            MINHAS MÚSICAS
        </Titulo>
        <CardSection>
            <CardMusicas imgMusica={capaHigh} tituloMusica='high - JAPA' music={high}/>
            <CardMusicas imgMusica={right} tituloMusica='You Are the right one -  Sports' music={YRONE}/>
            <CardMusicas imgMusica={dfy} tituloMusica='Die For You - VALORANT' music={dfyou}/>
        </CardSection>
        <CardSection>
            <CardMusicas imgMusica={fash} tituloMusica="Fashion - Britney Manson" music={fashion}/> 
            <CardMusicas imgMusica={babyD} tituloMusica='BABYDOLL - Ari Abdul' music={bbDoll}/>
            <CardMusicas imgMusica={lagum} tituloMusica='Não Vou Mentir - Lagum,liu'music={nMentir}/>
        </CardSection>
        <CardSection>
            <CardMusicas imgMusica={pngMortals} tituloMusica='Mortals - Warriyo' music={mortals} />
            <CardMusicas imgMusica={vaNada} tituloMusica='Eu não Valho Nada - Lagum, KVSH' music={valho}/>
        </CardSection>
        <Rodape/>
        </>
    )
}

export default Home