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
            {VideoESP && currentIdiom.value === ESP && <Divider>{'Vídeo'}</Divider>}
            {VideoENG && currentIdiom.value !== ESP && <Divider>{'Video'}</Divider>}
            {VideoESP && currentIdiom.value === ESP &&
                <Player
                    playsInline
                    poster="/assets/poster.png"
                    src={URL + VideoESP.url}
                />}
            {VideoENG && currentIdiom.value !== ESP &&
                < Player
                    playsInline
                    poster="/assets/poster.png"
                    src={URL + VideoENG?.url}
                />}
            {ParagrafosESP && currentIdiom.value === ESP && <Divider>{'Explicación'}</Divider>}
            {ParagrafosENG && currentIdiom.value !== ESP && <Divider>{'Explanation'}</Divider>}
            {ParagrafosESP && currentIdiom.value === ESP && <div dangerouslySetInnerHTML={{ __html: marked(ParagrafosESP) }} />}
            {ParagrafosENG && currentIdiom.value !== ESP && <div dangerouslySetInnerHTML={{ __html: marked(ParagrafosENG) }} />}
            <Divider></Divider>
        </ObjectDetailMain>
    )

};

export default ObjectDetail;