import { login , register } from "../dataService/authService";


export const useLogin = ({ email, password }) => login({ email, password });

export const useRegister = ({ email, password }) => register({ email, password });