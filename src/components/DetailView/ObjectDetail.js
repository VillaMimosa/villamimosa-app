import { useSelector } from "react-redux";
import { getCurrentIdiom, getCurrentRoute } from "../../store/selectors";
import { ObjectDetailMain } from './styles'
import React from 'react';
import { Player } from 'video-react';

import "./../../../node_modules/video-react/dist/video-react.css"; // import css
import { Divider } from "antd";
import { ESP } from "../../constants/idioms";
import { URL } from "../../constants";
import marked from "marked";

const ObjectDetail = () => {

    const currentRoute = useSelector(getCurrentRoute);
    const currentIdiom = useSelector(getCurrentIdiom);

    const { tituloESP, tituloENG, videoESP, videoENG, paragrafosESP, paragrafosENG } = currentRoute.detalle;

    return (
        <ObjectDetailMain>
            <h1>{currentIdiom.value === ESP ? tituloESP : tituloENG}</h1>
            <Divider>{currentIdiom.value === ESP ? 'Vídeo' : 'Video'}</Divider>
            <Player
                playsInline
                poster="/assets/poster.png"
                src={currentIdiom.value === ESP ? URL + videoESP.url : URL + videoENG.url}
            />
            <Divider>{currentIdiom.value === ESP ? 'Explicación' : 'Explanation'}</Divider>
            <div dangerouslySetInnerHTML={{__html: marked(currentIdiom.value === ESP ? paragrafosESP : paragrafosENG)}} />
            <Divider></Divider>
            <Divider></Divider>
        </ObjectDetailMain>
    )

};

export default ObjectDetail;