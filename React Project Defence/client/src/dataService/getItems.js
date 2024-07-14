import { del, get, post } from "./requester.js";
import { put } from "./requester.js";

const baseUrl = "http://localhost:3030/"

const endpoints = {
    allItems: "data/cyberpunk?sortBy=_createdOn%20desc",
    singleItem : "data/cyberpunk/",
    createItem : "data/cyberpunk"
}


export async function getAllItems(){

    let url = baseUrl + endpoints.allItems;
    let data = await get(url);
    return data;

}

export async function getSingleItem(itemId){

    let url = baseUrl + endpoints.singleItem + itemId;
    let singleItem = await get(url);
    return singleItem;

}

export async function editSignleItem(itemId,data){
    
    let url = baseUrl + endpoints.singleItem + itemId;
    let response = await put(url,data);
   
}

export async function deleteSingleItem(itemId){
    let url = baseUrl + endpoints.singleItem + itemId;
    await del(url);
}

export async function createSingleItem(data){
    let url = baseUrl + endpoints.createItem;
    await post(url,data);

}