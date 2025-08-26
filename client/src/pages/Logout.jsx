import { memo, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../api/AuthContext";

const Logout = memo(() => {

    const {logoutUser} = useAuth();

    useEffect( () => {
        logoutUser();
    },[logoutUser]);

    return <Navigate to='/login'/>
})

export default Logout;