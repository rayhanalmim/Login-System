import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Proptypes from 'prop-types';
import { Navigate } from "react-router-dom";

const BeforeLogin = ({children}) => {
    const {user, looding} = useContext(AuthContext);
    if(looding){
        return <div className="flex justify-center">
            <span className="loading loading-dots loading-lg"></span>;
        </div>
    }
    if(!user){
        return children;
    } 
    return <Navigate to='/'></Navigate>
};
BeforeLogin.propTypes = {
    children: Proptypes.node,
}
export default BeforeLogin;