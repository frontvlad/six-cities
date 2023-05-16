import React from 'react';
import { classNames } from 'helpers/classNames/classNames';
import cls from './Button.module.scss';

interface IButtonProps {
    children: string;
    isActive: boolean;
    onClick: () => void;
    className?: string;
}

const Button: React.FC<IButtonProps> = ({
    children, isActive, onClick, className,
}) => (
    <button
        onClick={() => onClick()}
        className={classNames(cls.button, { [cls.active]: isActive }, [className])}
        type="button"
    >
        <span>{children}</span>
    </button>
);

export { Button };
