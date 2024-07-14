import { displayError } from "../utils/notification.js";
import { getUserData,clearUserData } from "./userData.js";

async function requester(method,url,data){
    let options = {
        method,
        headers:{}
    };

    if(data){
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }


    let userData = getUserData();
    if(userData){
        options.headers['X-Authorization'] = userData.accessToken;
    }


    try{
        let responce = await fetch(url,options);

        if(!responce.ok){

            if(responce.status == 403){
                clearUserData();
            }
            let error = await responce.json();
            throw new Error(error.message);
        }
        if(responce.status == 204){
            return responce;
        }
        let data = await responce.json();
        return data;
        

    }catch(err){
        //to do add custom error handling base on the exam requirements
        
        displayError(err.message);
        throw err;
    }
    
}
let get =  function(url){
    return requester('GET',url);
}
let post =  function(url,data){
    return requester('POST',url,data);
}
let put =  function(url,data){
    return requester('PUT',url,data);
}
let del =  function(url){
    return  requester('DELETE',url);
}

export {
    get,
    post,
    put,
    del
}