/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase.config";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const loginHandler = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;

            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);

            });
    }
    // sign out 

    const logOut = () => {
        return signOut(auth);
    }
    // trace change data
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        });
        return () => unsubscribe();
    }, [])




    const authInfo = { loginHandler, user, logOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;