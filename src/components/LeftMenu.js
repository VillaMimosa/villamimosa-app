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

    console.log(routes)

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
                        route => (
                            <Menu.Item
                                key={route.key}
                                to={route.key}
                                onClick={goTo}
                                icon={route.Icono?.url ? <img alt={'imagen-menu'} style={{ filter: 'invert(1)' }} src={URL + route.Icono.url}></img> : route.icon}>
                                {currentIdiom.value === ESP ? route.TitleESP.toUpperCase() : route.TitleENG.toUpperCase()}
                            </Menu.Item>
                        )
                    )
                }
            </Menu>
        </LeftMenuMain>
    )
};

export default LeftMenu;