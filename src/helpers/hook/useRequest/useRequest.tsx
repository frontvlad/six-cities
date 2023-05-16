import { useEffect, useState } from 'react';

export function useRequest(request: any, id?: any) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true);
        request(id)
            .then((response: any) => setData(response.data))
            .catch((error: any) => setError(error))
            .finally(() => setLoading(false));
    }, [request, id]);

    return [data, loading, error];
}
