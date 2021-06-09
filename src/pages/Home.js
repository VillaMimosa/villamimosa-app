import { lazy, Suspense } from 'react';
import { Main } from './styles';

const LeftMenu = lazy(() => import("../components/LeftMenu"));
const DetailView = lazy(() => import("../components/DetailView"));

const Home = () => {


    return (
        <Main>
            <Suspense fallback="...">
                <LeftMenu></LeftMenu>
                <DetailView></DetailView>
            </Suspense>
        </Main>
    )
}

export default Home;