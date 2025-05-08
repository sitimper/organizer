import { useState, useEffect } from 'react';
import api from '../api';


export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        api.get(url)
        .then(res => {
            setData(res.data);
        })
        .catch(err => {
            setError(`An error occurred: ${err}`);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [url])

    return { data, loading, error }

}