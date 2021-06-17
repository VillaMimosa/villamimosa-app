import AppLogo from "../layout/AppLogo";
import { LeftMenuMain } from "./styles";
import { Menu } from 'antd';
import { useDispatch } from 'react-redux';
import { SET_CURRENT_ROUTE } from '../constants';
import { useCallback } from "react";
import { getCurrentIdiom, getRoutes } from "../store/selectors";
import { useSelector } from "react-redux";
import { ESP } from "../constants/idioms";
import { URL } from "../constants/index";
import SubMenu from "antd/lib/menu/SubMenu";

const LeftMenu = () => {

    const dispatch = useDispatch();
    const currentIdiom = useSelector(getCurrentIdiom);
    const routes = useSelector(getRoutes);

    const handleCurrentRoute = useCallback(route => {
        dispatch({
            type: SET_CURRENT_ROUTE,
            payload: routes[route ? route : 'home']
        });
    }, [dispatch, routes]);

    const goTo = e => {
        const path = e.item.props.to
        handleCurrentRoute(path);
    };

    return (
        <LeftMenuMain>
            <AppLogo padding="0px 0px 0px 15px" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['home']}
            >
                {
                    Object.values(routes).map(
                        route => {
                            if (route.subRutas.length === 0 && route.ruta === null) {
                                return (<Menu.Item
                                    key={route.key}
                                    to={route.key}
                                    onClick={goTo}
                                    icon={route.Icono?.url ? <img alt={'imagen-menu'} style={{ filter: 'invert(1)' }} src={URL + route.Icono.url}></img> : route.icon}>
                                    {currentIdiom.value === ESP ? route.TitleESP.toUpperCase() : route.TitleENG.toUpperCase()}
                                </Menu.Item>)
                            } else if (route.subRutas.length !== 0) {
                                return (<SubMenu key={route.key} icon={route.Icono?.url ? <img alt={'imagen-menu'} style={{ filter: 'invert(1)' }} src={URL + route.Icono.url}></img> : route.icon} title={currentIdiom.value === ESP ? route.TitleESP.toUpperCase() : route.TitleENG.toUpperCase()}>
                                    {
                                        route.subRutas.map(
                                            subroute => (
                                                <Menu.Item
                                                    key={subroute.key}
                                                    to={subroute.key}
                                                    onClick={goTo}
                                                    icon={subroute.Icono?.url ? <img alt={'imagen-menu'} style={{ filter: 'invert(1)' }} src={URL + subroute.Icono.url}></img> : subroute.icon}>
                                                    {currentIdiom.value === ESP ? subroute.TitleESP.toUpperCase() : subroute.TitleENG.toUpperCase()}
                                                </Menu.Item>
                                            )
                                        )
                                    }
                                </SubMenu>)
                            } else {
                                return null
                            }
                        }
                    )
                }
            </Menu>
        </LeftMenuMain>
    )
};

export default LeftMenu;