import { lazy } from 'react';
import { RouteObject, createBrowserRouter } from 'react-router-dom';

const Home = lazy(() => import('pages/home'));
const Page404 = lazy(() => import('pages/404'));
interface Options {
  disableNavbar?: boolean;
  disableToolbar?: boolean;
  absolute?: boolean;
  children?: CRouteObject[];
}

export type CRouteObject = RouteObject & Options;

export const routes: CRouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <Page404 />,
  },
];

const router = createBrowserRouter(routes);

export default router;
