import useFetch from "../hooks/useFetch";
import { get } from "./requester";

const baseUrl = 'http://localhost:3030/jsonstore/clothes';

export async function getAllClothes(){
    const data = await  get(`${baseUrl}/clothes`);
    return data;
}

export async function getSingleClothes(id){
    const data = await get(`${baseUrl}/clothes/${id}`);
    return data;
}

export async function createClothes(data){
    const res = await post(`${baseUrl}/clothes`,data);
    return res;
}