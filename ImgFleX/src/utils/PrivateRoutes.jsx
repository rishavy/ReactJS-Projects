import { useContext } from "react"
import { AuthContext } from "../main"
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
    const { auth } = useContext(AuthContext)

    if(!auth ){
        return <Navigate to="/" replace={true}/>;
    }

    return <Outlet />;
}

export default PrivateRoutes