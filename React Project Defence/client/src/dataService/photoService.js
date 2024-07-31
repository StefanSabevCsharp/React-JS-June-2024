import { get, post } from "./requester"

const baseUrl = "http://localhost:3030/data/photos";

export const createPhoto = async (photoUrl) => {
    try {
        const response = await post(baseUrl, photoUrl);
        return response;
    }catch(err){
        return alert(err);
    }
}

export const getOwnPhotos = async (userId) => {
    const relations = encodeURIComponent('author=_ownerId:users');
    const url = `${baseUrl}?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc&load=${relations}`;
 
    return await get(url).then(data => data);
   
    
}

