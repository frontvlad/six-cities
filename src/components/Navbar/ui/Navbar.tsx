import React, { useCallback, useState } from 'react';
import { classNames } from 'helpers/classNames/classNames';
import { Button } from 'ui/Button';
import cls from './Navbar.module.scss';

interface INavbarProps {
    items: {
        [identifier: string]: string;
    },
    currentItem: string,
    className?: string,
    onClick: (p: string) => void,
}

const Navbar: React.FC<INavbarProps> = ({
    items, currentItem, onClick, className,
}) => {
    const [activeItem, setActiveItem] = useState(currentItem);

    const onClickButton = useCallback((item: string) => {
        setActiveItem(item);
        onClick(item);
    }, [onClick]);

    return (
        <ul className={classNames(cls.navbar, {}, [className])}>
            {Object.values(items).map((item) => {
                const isActive = item === activeItem;

                return (
                    <li
                        className={cls.item}
                        key={item}
                    >
                        <Button isActive={isActive} onClick={() => onClickButton(item)}>
                            {item}
                        </Button>
                    </li>
                );
            })}
        </ul>
    );
};

export { Navbar };
