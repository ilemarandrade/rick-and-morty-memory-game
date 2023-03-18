import { lazy, LazyExoticComponent, Suspense } from "react";
import { Route, Switch } from "react-router";
import routes from "../constants/routes";

interface IRoutesPublic {
  component: LazyExoticComponent<() => JSX.Element>;
  path: string;
  exact?: boolean;
}

const routesPublic: IRoutesPublic[] = [
  {
    component: lazy(() => import("../pages/Home")),
    path: routes.HOME,
    exact: true,
  },
  {
    component: lazy(() => import("../pages/Play")),
    path: routes.PLAY,
  },
  {
    component: lazy(() => import("../pages/GameOver")),
    path: routes.GAME_OVER,
  },
];

const Routes = () => {
  return (
    <Switch>
      <Suspense fallback="...loading">
        {routesPublic.map(({ path, component, exact }) => (
          <Route {...{ path, component, exact }} key={path} />
        ))}
      </Suspense>
    </Switch>
  );
};

export default Routes;
