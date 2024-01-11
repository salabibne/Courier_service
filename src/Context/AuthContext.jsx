import { createContext,  useEffect } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { useState } from "react";
import app from "../../firebase.config";
const auth = getAuth(app);
export const CourierContext = createContext(null)
const AuthContext = ({ children }) => {
    // user information 
    const [user, setUser] = useState(null)


    // Create user with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in with regesterd email & password
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Logout 
    const logOut = () => {
        return signOut(auth)
    }

    // user state observing:
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            if (user) {


                console.log(user);
            }
            else {
                console.log("user is not there");
            }
        })
        return () => {
            return unsubscribe()
        }
    })


    // values
    let value = { user, createUser, signIn, logOut }
    return (
        <CourierContext.Provider value={value}>
            {children}
        </CourierContext.Provider>
    )


};

export default AuthContext;