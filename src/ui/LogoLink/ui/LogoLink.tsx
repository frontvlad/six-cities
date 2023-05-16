import { Link } from 'react-router-dom';
import React from 'react';
import cls from './LogoLink.module.scss';
import LogoIcon from '../assets/icon/logo.svg';

interface ILogoLink {
    link: string
}

const LogoLink: React.FC<ILogoLink> = ({
    link,
}) => (

    <Link className={cls.logoLink} to={link}>
        <LogoIcon />
    </Link>

);

export { LogoLink };
