import { Sorts } from 'const/Sorts';
import { ICard } from 'types/ICard';
import { IOfferCard } from 'types/IOfferCard';

export const getSortedOffers = {
    [Sorts.POPULAR]: (offers:IOfferCard[]) => offers,
    [Sorts.PRICE_LOW]: (offers:IOfferCard[]) => (offers ? offers.slice().sort((a:ICard, b:ICard) => a.price - b.price) : []),
    [Sorts.PRICE_HIGH]: (offers:IOfferCard[]) => (offers ? offers.slice().sort((a:ICard, b:ICard) => b.price - a.price) : []),
    [Sorts.TOP_RATED]: (offers:IOfferCard[]) => (offers ? offers.slice().sort((a:ICard, b:ICard) => b.rating - a.rating) : []),
};
