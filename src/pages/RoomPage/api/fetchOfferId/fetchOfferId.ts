import { createAPI } from 'helpers/api/api';

const api = createAPI();

export function fetchOfferId(id: any) {
    return api.get(`/hotels/${id}`);
}
