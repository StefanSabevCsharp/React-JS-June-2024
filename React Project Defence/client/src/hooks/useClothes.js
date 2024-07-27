import { useEffect, useState } from "react"
import { getAllClothes, getSingleClothes } from "../dataService/clothesService";


export const useGetClothes = () => {
    const [clothes,setClothes] = useState([]);

    useEffect( () => {
        (
            async () => {
                const data = await getAllClothes();
                setClothes(data);
            }
        )();
    },[]);

    return clothes;
}

export const useGetSingleClothes = (id) => {
    const [singleCloth,setSingleCloth] = useState({});

    useEffect( () => {
        (
            async () => {
                const data = await getSingleClothes(id);
                setSingleCloth(data);
            }
        )();
    },[]);

    return singleCloth;
}

