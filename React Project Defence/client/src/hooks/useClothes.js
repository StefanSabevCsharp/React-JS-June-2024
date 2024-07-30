import { useEffect, useState } from "react"
import { createClothes, deleteClothes, getAllClothes, getLatestClothes, getSingleClothes, updateClothes } from "../dataService/clothesService";

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
    const [singleCloth,setSingleCloth] = useState([]);

    useEffect( () => {
        (
            async () => {
                const data = await getSingleClothes(id);
                setSingleCloth(data);
            }
        )();
    },[]);

    return [singleCloth,setSingleCloth];
}

export const useGetLatestClothes = () => {
    const [latestClothes,setLatestClothes] = useState([]);
    
    useEffect( () => {
        (
            async () => {
                const data = await getLatestClothes();
                setLatestClothes(data);
            }
        )();
    },[]);

    return latestClothes;
}

export const useCreateClothes = (data) => {
    const newcloth = createClothes(data);
    return newcloth;
}

export const useUpdateClothes = (productID,data) => {    
   const promise = updateClothes(productID,data);
    const res = promise.then((res) => {
        console.log('in update');
        console.log(res);
    });
}

export const useDeleteClothes = (productID) => deleteClothes(productID);
   