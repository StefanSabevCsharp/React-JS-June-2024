import { login , logout, register } from "../dataService/authService";


export const useLogin = ({ email, password }) => login({ email, password });

export const useRegister = ({ email, password }) => register({ email, password });

export const useLogout = () =>  logout();