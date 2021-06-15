import { Fragment, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getCurrentIdiom, getCurrentRoute } from '../../store/selectors';
import { AppHeaderWrapper, AppHeaderInner, PageHeaderTitle, TypeInputWrapper } from './styles'
import { ESP, IDIOMS } from './../../constants/idioms'
import { useDispatch } from 'react-redux';
import { SET_CURRENT_IDIOM } from '../../constants';

const TitleMenu = () => {

    const currentRoute = useSelector(getCurrentRoute);
    const currentIdiom = useSelector(getCurrentIdiom);
    const dispatch = useDispatch();

    const handleCurrentIdiom = useCallback(idiom => {
        dispatch({
            type: SET_CURRENT_IDIOM,
            payload: idiom
        });
    }, [dispatch]);

    const handleChange = (change) => {
        handleCurrentIdiom(IDIOMS.find(x => x.value === change.target.value))
    }

    return (
        <AppHeaderWrapper>
            <AppHeaderInner>
                <PageHeaderTitle>
                    <Fragment>
                        {currentRoute?.Icono}
                        {currentIdiom.value === ESP ? currentRoute.titleESP?.toUpperCase() : currentRoute.titleENG?.toUpperCase()}
                    </Fragment>
                </PageHeaderTitle>
                <TypeInputWrapper options={IDIOMS} defaultValue={currentIdiom.value} onChange={handleChange} optionType="button" />
            </AppHeaderInner>
        </AppHeaderWrapper>
    )
}

export default TitleMenu;