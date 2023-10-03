import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


// ei part ta amra koyk ber use tokhon aro valo vabe bujbo akhon ow bujsi
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>;
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login"></Navigate>;
};


PrivateRoute.propTypes = {
    children: PropTypes.node
}


export default PrivateRoute;