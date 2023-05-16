import { createAPI } from 'helpers/api/api';

const api = createAPI();

export function fetchSetFavorite(offerId: number, status: number) {
    return api.post(`/favorite/${offerId}/${status}`);
}
