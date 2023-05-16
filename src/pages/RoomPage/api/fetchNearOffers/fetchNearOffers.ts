import { createAPI } from 'helpers/api/api';

const api = createAPI();

export function fetchNearOffers(id: any) {
    return api.get(`/hotels/${id}/nearby`);
}
