import { Fragment, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { HOME_ROUTE } from '../constants/routes';
import { LinearProgress } from '@material-ui/core';

const Home = lazy(() => import('../pages/Home'));

const MainContainer = () => {

    return (
        <Fragment>
            <Suspense fallback={<div><LinearProgress /></div>}>
                <Switch>
                    <Route exact path={HOME_ROUTE} component={Home} />
                </Switch>
            </Suspense>
        </Fragment>
    )
};

export default MainContainer;