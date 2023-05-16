import React, { useState } from 'react';
import { classNames } from 'helpers/classNames/classNames';
import ArrowIcon from '../assets/icon/icon-arrow-select.svg';
import cls from './Select.module.scss';

const ViewTypes = {
    OPEN: true,
    CLOSE: false,
};

interface ISelectProps {
    items: {
        [identifier: string]: string;
    },
    currentItem: string,
    onClick: (p: string) => void,
    className?: string,
    children?: string,
}

const Select: React.FC<ISelectProps> = ({
    items, currentItem, onClick, className, children,
}) => {
    const [activeItem, setActiveItem] = useState(currentItem);
    const [viewType, setViewType] = useState(ViewTypes.CLOSE);

    const onClickItem = (item: string) => {
        setActiveItem(item);
        onClick(item);
        setViewType(ViewTypes.CLOSE);
    };

    return (
        <div
            className={classNames(cls.select, {}, [className])}
        >
            <span className={cls.caption}>
                {children}
            </span>
            <span
                onClick={() => setViewType((state) => !state)}
                className={cls.currentText}
            >
                {activeItem}
                <svg className={cls.selectArrow} width="7" height="4">
                    <ArrowIcon />
                </svg>
            </span>
            <ul className={classNames(cls.optionsList, { [cls.opened]: viewType }, [])}>
                {Object.values(items).map((item) => {
                    const isActive = item === activeItem;

                    return (
                        <li
                            className={classNames(cls.option, { [cls.active]: isActive }, [])}
                            onClick={() => onClickItem(item)}
                            key={item}
                        >
                            {item}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export { Select };
