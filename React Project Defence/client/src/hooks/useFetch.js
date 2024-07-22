import { useState, useEffect } from 'react';


const baseUrl = `http://localhost:3030/jsonstore`;

function useFetch(url,initialState) {

    const [data, setData] = useState(initialState);
    const [loading, setLoading] = useState(true);
    const abortController = new AbortController();

    useEffect(() => {
        setLoading(true);
        (
            async () => {
                const responce = await fetch(`${baseUrl}/${url}` , {signal: abortController.signal});
                const data = await responce.json();
                setData(data);
                setLoading(false);
            }
        )();

        return () => {
            abortController.abort();
        }

    }, [url]);

    return {data,loading};
}

export default useFetch;