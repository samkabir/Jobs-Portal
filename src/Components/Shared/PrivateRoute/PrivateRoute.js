import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../../../../../ProgramingHero/Assignments/assignment10/src/hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user} = useAuth();
    const location = useLocation();
    if(user.email){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;