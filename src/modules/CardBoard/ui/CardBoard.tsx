import React, { useEffect, useMemo, useState } from 'react';
import { Navbar } from 'components/Navbar';
import { Select } from 'components/Select';
import { Cities } from 'const/Cities';
import { Sorts } from 'const/Sorts';
import { useSelector } from 'react-redux';
import { IOfferCard } from 'types/IOfferCard';
import { getAuthorizationStatus } from 'modules/Authorization/store/selectors/getAuthorizationStatus/getAuthorizationStatus';
import { AuthorizationStatus } from 'modules/Authorization/store/const/const';
import { Map } from 'components/Map';
import { DefaultLocation } from 'const/defaultLocations';
import { OfferCard } from 'components/OfferCard';
import { Loader } from 'ui/Loader';
import { getFilteredOffers } from '../assets/filterOffer/filterOffer';
import { getSortedOffers } from '../assets/sorOffer/sortOffer';
import { fetchSetFavorite } from '../api/fetchSetFavorite/fetchSetFavorite';

interface ICardBoardProps {
    offers: IOfferCard[]
    isLoading?: boolean;
  }

const CardBoard: React.FC<ICardBoardProps> = ({ offers, isLoading }) => {
    const [hoveringId, setHoveringId] = useState(null);
    const [places, setPlaces] = useState([]);
    const [sortType, changeSortType] = useState(Sorts.POPULAR);
    const [city, changeCity] = useState(Cities.AMSTERDAM);
    const authorizationStatus = useSelector(getAuthorizationStatus);

    useEffect(() => {
        setPlaces(offers);
    }, [offers]);

    const onClickButtonMark = (offerId: number, isFavorite: boolean) => {
        fetchSetFavorite(offerId, isFavorite ? 0 : 1).then(() => {
            const index = offers.findIndex(({ id }) => id === offerId);

            if (index === -1) {
                throw new Error();
            }

            offers[index].is_favorite = !isFavorite;

            setPlaces([
                ...offers.slice(0, index),
                offers[index],
                ...offers.slice(index + 1),
            ]);
        });
    };

    const onHoverCard = (evt: any) => {
        const { target, relatedTarget } = evt;
        const newTarget = target.closest('.cities__place-card');
        const oldTarget = relatedTarget ? relatedTarget.closest('.cities__place-card') : null;
        if (newTarget) {
            if (newTarget === oldTarget) {
                return;
            }
            setHoveringId(Number(newTarget.dataset.id));
        }
    };

    const onCardBlur = (evt: any) => {
        const { target, relatedTarget } = evt;
        const newTarget = relatedTarget.closest('.cities__place-card');
        const oldTarget = target.closest('.cities__place-card');
        if (oldTarget) {
            if (newTarget === oldTarget) {
                return;
            }
            setHoveringId(null);
        }
    };

    const filtredOffers = useMemo(() => getFilteredOffers(places, city), [places, city]);
    const sortedOffers = useMemo(() => getSortedOffers[sortType](filtredOffers), [filtredOffers, sortType]);

    return (
        <>
            <div className="tabs">
                <section className="locations container">
                    <Navbar items={Cities} currentItem={city} onClick={(active) => changeCity(active)} />
                </section>
            </div>
            <div className="cities">
                <div className="cities__places-container container">
                    <section className="cities__places places">
                        <h2 className="visually-hidden">Places</h2>
                        <b className="places__found">{`${filtredOffers.length} places to stay in ${city}`}</b>
                        <Select items={Sorts} currentItem={sortType} onClick={(active) => changeSortType(active)}>
                            Sort by
                        </Select>
                        <div
                            onMouseOver={onHoverCard}
                            onMouseOut={onCardBlur}
                            className="cities__places-list places__list tabs__content"
                        >
                            {/* <Loader /> */}
                            {isLoading
                                ? <Loader />
                                : sortedOffers.map((offer: IOfferCard) => {
                                    const {
                                        title,
                                        id,
                                        preview_image: image,
                                        is_premium: isPremium,
                                        is_favorite: isFavorite,
                                        price,
                                        rating,
                                        type,
                                    } = offer;

                                    return (
                                        <OfferCard
                                            onClickButtonMark={() => onClickButtonMark(id, isFavorite)}
                                            isShowButtonMark={
                                                authorizationStatus === AuthorizationStatus.AUTH && true
                                            }
                                            isPremium={isPremium}
                                            image={image}
                                            price={price}
                                            rating={rating}
                                            title={title}
                                            type={type}
                                            isFavorite={isFavorite}
                                            className="cities__place-card"
                                            id={id}
                                            key={id}
                                        />
                                    );
                                })}
                        </div>
                    </section>
                    <div className="cities__right-section">
                        <section className="cities__map map">
                            <Map
                                offers={filtredOffers}
                                city={city}
                                location={DefaultLocation}
                                activeMarkerId={hoveringId}
                            />

                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export { CardBoard };
