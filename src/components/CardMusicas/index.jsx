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

    const tempoMusic = () => {
        const audio = audioMusic.current;
      };

      const controlador = (e) => {
        const audio = audioMusic.current;
        const controle = e.target.value;
        audio.currentTime = controle;
      };

    
    return(
        <Card>
            <div>
                <ImgCapa src={imgMusica}></ImgCapa>
            </div>
            <StatusBar>
                <div>
                    <input type="range" 
                    min={0} 
                    max={audioMusic.current ? audioMusic.current.duration: 0}
                    value={audioMusic.current ? audioMusic.current.currentTime:0}
                    onChange={controlador}/>
                </div>
                <div>
                    {musicPlay? (
                    <ImgPause src={pause} onClick={clickStat}></ImgPause>): (
                    <ImgPlay src={play} onClick={clickStat}></ImgPlay>)}
                </div>
                <div>
                    {tituloMusica}
                </div>
                <div>
                    <audio ref={audioMusic} src={music} onTimeUpdate={tempoMusic}/>
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
