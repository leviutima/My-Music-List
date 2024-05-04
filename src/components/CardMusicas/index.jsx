import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  StatusBar,
  ImgCapa,
  ImgPause,
  ImgPlay,
  ContainerStatusBar,
  InputStyle,
  ContainerStyle,
} from "./CardMusica.styled";
import play from "../../../public/images/play.png";
import pause from "../../../public/images/pause.png";

function CardMusicas({ imgMusica, tituloMusica, music }) {
  const [musicPlay, setMusicPlay] = useState(false);
  const [tempoDeDuracao, setTempoDeDuracao] = useState(0);
  const [duracao, setDuracao] = useState(0);
  const audioRef = useRef(null);

  const controleDePause = () => {
    const audio = audioRef.current;
    if (musicPlay) {
      audio.pause();
    } else {
      audio.play();
    }
    setMusicPlay(!musicPlay);
  };

  const controleDeAtualizacao = () => {
    const audio = audioRef.current;
    setTempoDeDuracao(audio.currentTime);
  };

  const LoadedMetadata = () => {
    const audio = audioRef.current;
    setDuracao(audio.duration);
  };

  const controleDePonto = (e) => {
    const audio = audioRef.current;
    const controle = e.target.value;
    audio.currentTime = controle;
    setTempoDeDuracao(controle);
  };

  return (
    <Card>
      <ContainerStyle>
        <ImgCapa src={imgMusica} />
      </ContainerStyle>
      <StatusBar>
        <div>
          <InputStyle
            type="range"
            min={0}
            max={duracao}
            value={tempoDeDuracao}
            onChange={controleDePonto}
          />
        </div>
        <ContainerStatusBar>
          <div onClick={controleDePause}>
            {musicPlay ? <ImgPause src={pause} /> : <ImgPlay src={play} />}
          </div>
          <div>{tituloMusica}</div>
          <div>
            <audio
              ref={audioRef}
              src={music}
              onTimeUpdate={controleDeAtualizacao}
              onLoadedMetadata={LoadedMetadata}
            />
          </div>
        </ContainerStatusBar>
      </StatusBar>
    </Card>
  );
}

CardMusicas.propTypes = {
  imgMusica: PropTypes.string.isRequired,
  tituloMusica: PropTypes.string.isRequired,
  music: PropTypes.string.isRequired,
};

export default CardMusicas;
