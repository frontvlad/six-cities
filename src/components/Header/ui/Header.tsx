import { Link } from 'react-router-dom';
import React from 'react';
import { LogoLink } from 'ui/LogoLink';
import { HeaderWrapper } from 'ui/HeaderWrapper';
import cls from './Header.module.scss';

interface IHeaderProps {
    isLoading?: boolean,
    isAuthorization: boolean,
    userName: string,
    logoLink?: string,
    userLink?: string,
    userAvatar: string,
}

const Header: React.FC<IHeaderProps> = ({
    isAuthorization, userName, logoLink, userLink = '/', userAvatar, isLoading,
}) => (
    <HeaderWrapper>
        <div className={cls.leftSide}>
            <LogoLink
                link={logoLink}
            />
        </div>
        <nav className={cls.nav}>
            <ul className={cls.navList}>
                {isLoading
                    ? '....'
                    : (
                        <li className={cls.navItem}>
                            <Link className={cls.navLink} to={userLink}>
                                {isAuthorization
                                        && (
                                            <div className={cls.avatarWrapper} style={{ backgroundImage: `url(${userAvatar})` }} />
                                        )}
                                <span className={cls.userName}>
                                    {isAuthorization ? userName : 'Sign in'}
                                </span>
                            </Link>
                        </li>
                    )}

            </ul>
        </nav>
    </HeaderWrapper>
);

Header.defaultProps = {
    logoLink: '/',
    userLink: '/',
};

export { Header };
