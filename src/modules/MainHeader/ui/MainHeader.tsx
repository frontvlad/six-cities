import React from 'react';
import { RoutePath } from 'app/providers/router/config/routeConfig';
import { Header } from 'components/Header';
import { AuthorizationStatus } from 'modules/Authorization/store/const/const';
import { getAuthorizationStatus } from 'modules/Authorization/store/selectors/getAuthorizationStatus/getAuthorizationStatus';
import { getIsLoading } from 'modules/Authorization/store/selectors/getIsLoading/getIsLoading';
import { getUserData } from 'modules/Authorization/store/selectors/getUserData/getUserData';
import { useSelector } from 'react-redux';

const MainHeader: React.FC = () => {
    const authorizationStatus = useSelector(getAuthorizationStatus);
    const isLoading = useSelector(getIsLoading);
    const userData = useSelector(getUserData);

    const isAuth = authorizationStatus === AuthorizationStatus.AUTH;

    return (
        <Header
            isLoading={isLoading}
            isAuthorization={isAuth}
            userName={isAuth && userData.name}
            logoLink={RoutePath.main}
            userLink={isAuth ? RoutePath.favorites : RoutePath.login}
            userAvatar={isAuth && userData.avatarUrl}
        />
    );
};

export { MainHeader };
