import { get, post } from "./requester";


const baseUrl = 'http://localhost:3030/jsonstore/clothes/clothes';

export async  function createComment({comment,productId}) {

    return await post(`${baseUrl}/${productId}/comments`,{comment});


}

export async function getComments(productId) {
    const data = await get(`${baseUrl}/${productId}/comments`);
    return data;
}