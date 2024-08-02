import { get, post } from "./requester";


const baseUrl = 'http://localhost:3030/data/comments';

export async function createComment(comment, productId) {

    return await post(`${baseUrl}`, { comment, productId });


}

export async function getComments(productId) {

    const relations = encodeURIComponent('author=_ownerId:users');
    const url = `${baseUrl}?where=productId%3D%22${productId}%22&sortBy=_createdOn%20desc&load=${relations}`;   
    return await get(url);

}
