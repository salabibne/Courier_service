import { createContext, useEffect } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

import { useState } from "react";
import app from "../../firebase.config";
const auth = getAuth(app);
const user_login = auth.currentUser;
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

    // update user profile 
    const updateUser = (name, profilelink) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: profilelink
        })

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
    let value = { user,user_login, createUser, signIn, logOut, updateUser }
    return (
        <CourierContext.Provider value={value}>
            {children}
        </CourierContext.Provider>
    )


};

export default AuthContext;