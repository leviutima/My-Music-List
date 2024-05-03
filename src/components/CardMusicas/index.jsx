import { Card, StatusBar, ImgCapa, ImgPause, ImgPlay } from "./CardMusica.styled"
import PropTypes from 'prop-types'
import play from '../../../public/images/play.png'
import pause from  '../../../public/images/pause.png'
import { useRef, useState } from "react"


function CardMusicas ({imgMusica, tituloMusica,music}) {

    const [musicPlay, setMusicPlay] = useState(false)
    const audioMusic = useRef(null)

    const clickStat = () => {
        const audio = audioMusic.current
        if (musicPlay) {
            audio.pause()
        }else{
            audio.play()
        }setMusicPlay(!musicPlay)
    }

    return(
        <Card>
            <div>
                <ImgCapa src={imgMusica}></ImgCapa>
            </div>
            <StatusBar>
                <div>
                    {musicPlay? (
                    <ImgPlay src={pause} onClick={clickStat}></ImgPlay>): (
                    <ImgPause src={play} onClick={clickStat}></ImgPause>)}
                </div>
                <div>
                    {tituloMusica}
                </div>
                <div>
                    <audio ref={audioMusic} src={music}/>
                </div>
            </StatusBar>
        </Card>
    )
}

CardMusicas.propTypes = { 
    imgMusica: PropTypes.string.isRequired,
    tituloMusica: PropTypes.string.isRequired,
    music: PropTypes.string.isRequired
}

export default CardMusicas
