
import { get, post, put } from "./requester";

const baseUrl = 'http://localhost:3030/data/';

export async function getAllClothes(){
    const data = await  get(`${baseUrl}/clothes`);
   
    return data;
}

export async function getSingleClothes(id){
    const data = await get(`${baseUrl}clothes/${id}`);
    return data;
}

export async function createClothes(data){
    const res = await post(`${baseUrl}/clothes`,data);
    
    return res;
}

export async function updateClothes(id,data){
    const res = await put(`${baseUrl}clothes/${id}`,data);
    return res;
}
