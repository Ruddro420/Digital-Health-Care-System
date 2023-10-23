/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
    const { user } = useContext(AuthContext)
    if (!user?.email) {
        return <Navigate to="/login" /* state={{ from: history.location }} */ />
    }
    return children;
};

export default Protected;