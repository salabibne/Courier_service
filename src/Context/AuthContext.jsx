import { createContext, useEffect } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { useState } from "react";
import app from "../../firebase.config";
import { Link } from "react-router-dom";
import usePublicUrl from "../Hooks/usePublicUrl";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const CourierContext = createContext(null)
const AuthContext = ({ children }) => {
    // user information 
    const [user, setUser] = useState(null)
    const public_api = usePublicUrl()
    


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

    // signIn with google 
    const googleSignIn = ()=>{
        return signInWithPopup(auth,provider)
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
               
            const user_email = {email:user.email}
            public_api.post("/jwt", user_email)
            .then(res =>{
                if(res.data.token){
                    localStorage.setItem("access-token", res.data.token)
                }
            })

                console.log(user);
            }
            else {
                localStorage.removeItem("access-token")
                console.log("user is not there");
            }
        })
        return () => {
            return unsubscribe()
        }
    })


    // values
    let value = { user, createUser, signIn, logOut, updateUser,googleSignIn }
    return (
        <CourierContext.Provider value={value}>
            {children}
        </CourierContext.Provider>
    )


};

export default AuthContext;