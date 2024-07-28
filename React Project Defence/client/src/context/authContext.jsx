import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/useAuth";
import { clearUserData } from "../dataService/userData";


const AuthContext = createContext();

export default AuthContext;

export function AuthProvider(props){
    const navigate = useNavigate();

    const [authState, setAuthState] = useState([]);

    const contextData = {
        email: authState.email,
        token: authState.accesToken,
        userId: authState.userId,
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