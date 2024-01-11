import { createContext } from "react";

export const CourierContext =createContext(null)
const AuthContext = ({children}) => {

    let value={}
    return (
        <CourierContext.Provider value={value}>
            {children}
        </CourierContext.Provider>
    )
    
    
};

export default AuthContext;