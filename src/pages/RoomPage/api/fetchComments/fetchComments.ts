import { createAPI } from 'helpers/api/api';

const api = createAPI();

export function fetchComments(id: any) {
    return api.get(`/comments/${id}`);
}
