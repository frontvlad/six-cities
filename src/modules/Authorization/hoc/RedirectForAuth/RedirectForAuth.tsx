import { RoutePath } from 'app/providers/router/config/routeConfig';
import { AuthorizationStatus } from 'modules/Authorization/store/const/const';
import { getAuthorizationStatus } from 'modules/Authorization/store/selectors/getAuthorizationStatus/getAuthorizationStatus';

import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

interface IRedirectForAuth {
  children?: ReactElement
}

const RedirectForAuth: React.FC<IRedirectForAuth> = ({ children }) => {
    const isAuth = useSelector(getAuthorizationStatus);

    if (isAuth === AuthorizationStatus.AUTH) {
        return <Navigate to={RoutePath.favorites} />;
    }

    return children;
};

export { RedirectForAuth };
