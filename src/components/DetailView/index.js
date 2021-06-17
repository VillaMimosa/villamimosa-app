import { useSelector } from "react-redux";
import { v4 as key } from 'uuid';
import { HOME_ROUTE_OBJECT } from "../../constants/routes";
import { getCurrentRoute } from "../../store/selectors";
import { DetailViewMain } from "./styles";
import TitleMenu from "./TitleMenu";
import HomeDetail from "./HomeDetail";
import ObjectDetail from "./ObjectDetail";

const DetailView = () => {

    const currentRoute = useSelector(getCurrentRoute);

    return (
        <DetailViewMain>
            <TitleMenu></TitleMenu>
            {currentRoute.key === HOME_ROUTE_OBJECT.key ?
                <HomeDetail></HomeDetail> :
                <div>
                    {currentRoute.detalles.map(detalle => (<ObjectDetail key={key()} detalle={detalle}></ObjectDetail>))}
                </div>
            }
        </DetailViewMain>
    )

};

export default DetailView;