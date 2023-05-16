import { IOfferCard } from 'types/IOfferCard';

export const getFilteredOffers = (offers:IOfferCard[], city:string) => (offers ? offers.filter((offer:any) => offer.city.name === city) : []);
