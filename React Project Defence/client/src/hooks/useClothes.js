import { useEffect, useState } from "react"
import { createClothes, getAllClothes, getSingleClothes, updateClothes } from "../dataService/clothesService";



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

export const useGetLatestClothes = () => {
    const allClothes = useGetClothes();
    const latestClothes = Object.values(allClothes).sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0,4);
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