import { RoutePath } from 'app/providers/router/config/routeConfig';
import { AuthorizationStatus } from 'modules/Authorization/store/const/const';
import { getAuthorizationStatus } from 'modules/Authorization/store/selectors/getAuthorizationStatus/getAuthorizationStatus';

import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

interface IRedirectForNoAuth {
  children?: ReactElement
}

const RedirectForNoAuth: React.FC<IRedirectForNoAuth> = ({ children }) => {
    const isAuth = useSelector(getAuthorizationStatus);

    if (isAuth === AuthorizationStatus.NO_AUTH) {
        return <Navigate to={RoutePath.login} />;
    }

    return children;
};

export { RedirectForNoAuth };
