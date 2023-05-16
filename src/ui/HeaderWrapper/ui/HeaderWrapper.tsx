import React from 'react';
import cls from './HeaderWrapper.module.scss';

interface IHeaderWrapper {
    children?: React.ReactNode,
}

const HeaderWrapper: React.FC<IHeaderWrapper> = ({
    children,
}) => (
    <header>
        <div className="container">
            <div className={cls.wrapper}>
                {children}
            </div>
        </div>
    </header>
);

export { HeaderWrapper };
