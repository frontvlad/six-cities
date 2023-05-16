import { createAPI } from 'helpers/api/api';

const api = createAPI();

export function fetchFavoriteOffers() {
    return api.get('/favorite');
}
