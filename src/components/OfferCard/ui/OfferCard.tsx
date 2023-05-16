import React from 'react';
import { classNames } from 'helpers/classNames/classNames';
import { Link } from 'react-router-dom';
import cls from './OfferCard.module.scss';
import IconBookmark from '../assets/icon/icon-bookmark.svg';

interface IOfferCardProps {
    onClickButtonMark: () => void
    isPremium: boolean,
    image: string,
    price: number,
    rating: number,
    title: string,
    type: string,
    isFavorite: boolean,
    className?: string,
    isShowButtonMark: boolean
    id: number
}

const OfferCard: React.FC<IOfferCardProps> = ({
    isPremium, image, price, rating, title, type, isFavorite, className, isShowButtonMark, onClickButtonMark, id,
}) => (
    <article
        data-id={id}
        className={classNames(cls.card, {}, [className])}
    >
        {isPremium && (
            <div className={cls.mark}>
                <span>Premium</span>
            </div>
        )}

        <div className={cls.imageWrapper}>
            <Link to={`/offer/${id}`}>
                <img className={cls.image} src={image} width="260" height="200" alt="Place image" />
            </Link>
        </div>
        <div className={cls.info}>
            <div className={cls.priceWrapper}>
                <div className={cls.price}>
                    <b className={cls.priceValue}>
                        &euro;
                        {price}
                    </b>
                    <span className={cls.priceText}>&#47;&nbsp;night</span>
                </div>
                {isShowButtonMark && (
                    <button
                        className={classNames(cls.bookmarkButton, { [cls.bookmarkActive]: isFavorite }, [className, 'button'])}
                        type="button"
                        onClick={onClickButtonMark}
                    >
                        <svg className={cls.bookmarkIcon} width="18" height="19">
                            <IconBookmark />
                        </svg>
                        <span className="visually-hidden">To bookmarks</span>
                    </button>
                )}

            </div>
            <div className={cls.rating}>
                <div className={classNames(cls.stars, {}, ['rating__stars'])}>
                    <span style={{ width: `${rating * 20}%` }} />
                    <span className="visually-hidden">Rating</span>
                </div>
            </div>
            <h2 className={cls.name}>
                <Link to={`/offer/${id}`}>{title}</Link>
            </h2>
            <p className={cls.type}>{`${type[0].toUpperCase()}${type.slice(1)} `}</p>
        </div>
    </article>
);

export { OfferCard };
