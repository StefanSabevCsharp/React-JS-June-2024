import useFetch from "../hooks/useFetch";
import { get } from "./requester";

const baseUrl = 'http://localhost:3030/jsonstore/clothes';

export async function getAllClothes(){
    const data = await  get(`${baseUrl}/clothes`);
    return data;
}
