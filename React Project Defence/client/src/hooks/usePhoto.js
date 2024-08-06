// import { useEffect, useState } from "react";
// import { post } from "../dataService/requester";
// import { createPhoto, getOwnPhotos } from "../dataService/photoService";


// export const useCreatePhoto = () => {
//     const [photoUrl,setPhotoUrl] = useState('');

//     useEffect(() => {
       
//         (
//             async () => {
//                 try {
//                     const response = await createPhoto(photoUrl);
//                     setPhotoUrl(response);
//                 }catch(err){
//                     return alert(err);
//                 }
//             }
//         )();
//     },[]);
//     return photoUrl;
// }

// export const useGetPhotoUrl = async () => {
//     const [photoUrl,setPhotoUrl] = useState('');
//     useEffect(() => {
//         (
//             async () => {
//                 try {
//                    const response = await getOwnPhotos();
//                 }catch(err){
//                     //TO DO add error handling properly
//                     return alert(err);
//                 }
//             }
//         )();
//     },[]);
//     return photoUrl;
// }