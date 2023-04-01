import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser } from "../../../redux/features/userSlice";

const PrivateRoute = () => {
    const user = useSelector(getUser);
    if (!user.isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    return <Outlet />;
}

export default PrivateRoute;