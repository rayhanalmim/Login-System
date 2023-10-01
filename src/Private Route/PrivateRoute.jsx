import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Component/AuthProvider";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const {user, looding} = useContext(AuthContext);
    if(looding){
        return <span className="loading loading-dots loading-lg"></span>;
    }
    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoute;