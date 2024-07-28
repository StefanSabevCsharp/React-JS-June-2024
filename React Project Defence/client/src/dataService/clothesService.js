
import { del, get, post, put } from "./requester";

const baseUrl = 'http://localhost:3030/data/';

export async function getAllClothes(){
    const sortBy = '?sortBy=_createdOn desc';
    const url = `${baseUrl}clothes${sortBy}`;
    const data = await  get(url);
   
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

export function deleteClothes(id) { 
    del(`${baseUrl}clothes/${id}`) 
}

export async function getLatestClothes(){
    const sortBy = '?sortBy=_createdOn desc';
    const pageSize = '&pageSize=4';
    const url = `${baseUrl}clothes${sortBy}${pageSize}`;
    
    try {
        const latestClothes = await get(url);
        return latestClothes;
    } catch (error) {
        console.error('Error fetching latest clothes:', error);
        throw error;
    }
}

