import { useState, useEffect } from 'react';
import { getUserData } from '../dataService/userData';

const baseUrl = `http://localhost:3030/jsonstore`;

function useFetch(url,initialState) {

    const [data, setData] = useState(initialState);

    useEffect(() => {
        (
            async () => {
                const responce = await fetch(`${baseUrl}/${url}`);
                const data = await responce.json();
                setData(Object.values(data));
            }
        )();

    }, [url]);

    return data;
}

export default useFetch;