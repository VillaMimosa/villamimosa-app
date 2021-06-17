import { useSelector } from "react-redux";
import { getCurrentIdiom } from "../../store/selectors";
import { ObjectDetailMain } from './styles'
import React from 'react';
import { Player } from 'video-react';

import "./../../../node_modules/video-react/dist/video-react.css"; // import css
import { Divider } from "antd";
import { ESP } from "../../constants/idioms";
import { URL } from "../../constants";
import marked from "marked";

const ObjectDetail = ({ detalle }) => {

    const currentIdiom = useSelector(getCurrentIdiom);

    const { TituloESP, TituloENG, VideoESP, VideoENG, ParagrafosESP, ParagrafosENG } = detalle;

    return (
        <ObjectDetailMain>
            <h1>{currentIdiom.value === ESP ? TituloESP : TituloENG}</h1>
            {VideoESP && VideoENG && <Divider>{currentIdiom.value === ESP ? 'Vídeo' : 'Video'}</Divider>}
            {VideoESP && VideoENG &&
                <Player
                    playsInline
                    poster="/assets/poster.png"
                    src={currentIdiom.value === ESP ? URL + VideoESP.url : URL + VideoENG?.url}
                />}
            {ParagrafosESP && ParagrafosENG && <Divider>{currentIdiom.value === ESP ? 'Explicación' : 'Explanation'}</Divider>}
            {ParagrafosESP && ParagrafosENG &&
                <div dangerouslySetInnerHTML={{ __html: marked(currentIdiom.value === ESP ? ParagrafosESP : ParagrafosENG) }} />}
            <Divider></Divider>
        </ObjectDetailMain>
    )

};

export default ObjectDetail;