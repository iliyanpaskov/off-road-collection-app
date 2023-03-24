import { createContext,useState } from "react";

export const AuthContext = createContext();

export const AuthenticationProvider = ({children}) => {

const [user ,setUser ] = useState({
    objectId: null,
    username: null,
    sessionToken: null,
})

    const loginData = (authenticationData) => {
        setUser(authenticationData);
    }

    const logoutData = () => {
        setUser({
            objectId: null,
            username: null,
            sessionToken: null,
        });
    }

    return (
        <AuthContext.Provider value={{user, loginData, logoutData, isAuthenticated:Boolean(user.sessionToken)}}>
            {children}
        </AuthContext.Provider>
    )

}
