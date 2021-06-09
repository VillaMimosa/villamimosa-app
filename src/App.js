import { lazy, Suspense, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadInitialData } from "./actions/authActions";
import { Loading } from "./layout/utils/AppLoading";
import { getRoutes } from "./store/selectors";

const MainContainer = lazy(() => import("./containers/MainContainer"));

const App = () => {

  const dispatch = useDispatch();
  const routes = useSelector(getRoutes);

  const fetchInitialData = useCallback(() => {
    dispatch(loadInitialData());
  }, [dispatch]);

  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  return (
    <Suspense fallback={<Loading centered />}>
      {routes &&
        <MainContainer />}
    </Suspense>
  );
};

export default App;
