import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/useAuth";
import { clearUserData, getUserData } from "../dataService/userData";


const AuthContext = createContext();

export default AuthContext;

export function AuthProvider(props){
    const navigate = useNavigate();

    const [authState, setAuthState] = useState(() => {
        const localdata = getUserData();
        if(localdata){
            return localdata;
        }
        return [];
    });

    const contextData = {
        email: authState.email,
        accessToken: authState.accessToken,
        userId: authState._id,
        isAuthenticated: authState.email,
        changeState: (state) => {
            setAuthState(state);
        },
        logout: () => {
            useLogout();
            setAuthState({});
            clearUserData();
            navigate("/");
        }
    }

   
    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    )
}