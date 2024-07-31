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
