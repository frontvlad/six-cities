import { RedirectForAuth } from 'modules/Authorization/hoc/RedirectForAuth/RedirectForAuth';
import { RedirectForNoAuth } from 'modules/Authorization/hoc/RedirectForNoAuth/RedirectForNoAuth';
import { FavoritesPage } from 'pages/FavoritesPage';
import { LoginPage } from 'pages/LoginPage';
import { MainPage } from 'pages/MainPage';
import { RoomPage } from 'pages/RoomPage';
import { RouteProps } from 'react-router-dom';

enum AppRoutes {
    MAIN = 'main',
    FAVORITES = 'favorites',
    ROOM = 'room',
    LOGIN = 'login',
    NOT_FOUND = 'not_found',
}

const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.FAVORITES]: '/favorites',
    [AppRoutes.ROOM]: '/offer/:id',
    [AppRoutes.LOGIN]: '/login',
    [AppRoutes.NOT_FOUND]: '*',
};

const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.FAVORITES]: {
        path: RoutePath.favorites,
        element: <RedirectForNoAuth><FavoritesPage /></RedirectForNoAuth>,
    },
    [AppRoutes.ROOM]: {
        path: RoutePath.room,
        element: <RoomPage />,
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <RedirectForAuth><LoginPage /></RedirectForAuth>,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <p>Not found</p>,
    },
};

export { AppRoutes, RoutePath, routeConfig };
