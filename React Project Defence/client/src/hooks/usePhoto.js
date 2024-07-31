import { useEffect, useState } from "react";
import { post } from "../dataService/requester";
import { createPhoto, getOwnPhotos } from "../dataService/photoService";


export const useCreatePhoto = () => {
    const [photoUrl,setPhotoUrl] = useState('');

    useEffect(() => {
       
        (
            async () => {
                try {
                    const response = await createPhoto(photoUrl);
                    console.log(`Photo created: ${response}`);
                    setPhotoUrl(response);
                }catch(err){
                    return alert(err);
                }
            }
        )();
    },[]);
    return photoUrl;
}

export const useGetPhotoUrl = async () => {
    const [photoUrl,setPhotoUrl] = useState('');
    useEffect(() => {
        (
            async () => {
                try {
                   const response = await getOwnPhotos();
                     console.log(`Photo fetched: ${response}`);
                     console.log(response);
                }catch(err){
                    return alert(err);
                }
            }
        )();
    },[]);
    return photoUrl;
}