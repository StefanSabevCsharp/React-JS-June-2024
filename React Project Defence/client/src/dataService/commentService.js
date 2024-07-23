import { post } from "./requester";


const baseUrl = 'http://localhost:3030/jsonstore/clothes/clothes';

export async  function createComment({comment,productId}) {

    return await post(`${baseUrl}/${productId}/comments`,{comment});


}