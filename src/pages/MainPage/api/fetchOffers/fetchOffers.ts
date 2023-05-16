import { createAPI } from 'helpers/api/api';

const api = createAPI();

export function fetchOffers() {
    return api.get('/hotels');
}
