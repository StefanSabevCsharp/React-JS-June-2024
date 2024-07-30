import { useState, useEffect } from 'react';


const baseUrl = `http://localhost:3030/jsonstore`;

function useFetch(url,initialState) {

    const [data, setData] = useState(initialState);
    const [toggle, setToggle] = useState(false);
    const [loading, setLoading] = useState(true);
    const abortController = new AbortController();

    function refetch() {
        setToggle(toggle => !toggle);
    }

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

    return {
        data,
        loading,
        refetch
    };
}

export default useFetch;