import {Navigate, Outlet} from "react-router-dom";
import {useAuthContext} from "../../contexts/AuthContext.jsx";

export function RouteGuards() {
	const {user} = useAuthContext();
	console.log(user);
	if (user) {
		return <Outlet />;
	}

	return <Navigate to="/login" />;
}
