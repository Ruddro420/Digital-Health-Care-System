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
    const [superEmail, setSuperEmail] = useState('')
    const [superPass, setSuperPass] = useState('')

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


    // find my location

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        if ("geolocation" in navigator) {
            // Get the user's current location
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLatitude(latitude);
                    setLongitude(longitude);
                },
                (error) => {
                    setError("Error getting location: " + error.message);
                }
            );
        } else {
            setError("Geolocation is not supported by your browser.");
        }
    }, []);




    const authInfo = { loginHandler, user, logOut, latitude, longitude, superEmail, superPass, setSuperEmail, setSuperPass }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;