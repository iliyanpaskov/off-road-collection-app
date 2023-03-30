import { useContext } from "react";
import { AuthCotext } from "../../../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const { isAuthenticated } = useContext(AuthCotext);
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    return <Outlet />;
}

export default PrivateRoute;