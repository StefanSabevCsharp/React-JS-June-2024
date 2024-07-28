import { post,get } from "./requester"


const baseUrl = 'http://localhost:3030/users'

export const login = async ({ email, password }) => {

    const authData = await post(`${baseUrl}/login`, { email, password });

    return authData;
}

export const register = async ( { email, password }) => {
    const authData = await post(`${baseUrl}/register`, { email, password });
    return authData;
}

export const logout = () => get(`${baseUrl}/logout`);
