import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { ClipLoader } from "react-spinners";
import auth from '../firebase.init';

const RequireAuth = ({children}) => {
    const [user,loading] = useAuthState(auth);
    const location=useLocation()
    if(loading){
        return <p className="text-center mt-24 "><ClipLoader /></p>
         
    }
    if(!user){
        return <Navigate to='/signIn'state={{from:location}}replace />
    }
    return children
};

export default RequireAuth;