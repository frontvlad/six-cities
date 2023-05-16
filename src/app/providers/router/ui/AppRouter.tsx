import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from 'ui/Loader';
import { routeConfig } from '../config/routeConfig';

const AppRouter: React.FC = () => (
    <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<Loader />}>
                        {element}
                    </Suspense>

                )}
            />
        ))}
    </Routes>
);

export { AppRouter };
