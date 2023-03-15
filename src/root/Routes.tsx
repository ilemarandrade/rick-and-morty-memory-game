import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import routes from "../constants/routes";

const routesPublic = [
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
    path: routes.GAMEOVER,
  },
];
const Routes = () => {
  return (
    <Switch>
      <Suspense fallback="...loading">
        {routesPublic.map(({ ...args }) => (
          <Route {...{ ...args }} />
        ))}
      </Suspense>
    </Switch>
  );
};
export default Routes;
