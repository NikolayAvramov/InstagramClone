import {HomePage} from "./components/HomePage/HomePage.jsx";
import AppCss from "./App.module.css";
import {Routes, Route} from "react-router-dom";
import {ContentProvider} from "./contexts/ContentContex.jsx";
import {AuthProvider} from "./contexts/AuthContext.jsx";
import {Login} from "./components/Login/Login.jsx";
import {Register} from "./components/Register/Register.jsx";
import {RouteGuards} from "./components/Guards/RouteGuards.jsx";

function App() {
	return (
		<AuthProvider>
			<ContentProvider>
				<div className={AppCss.app}>
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route element={<RouteGuards />}>
							<Route path="/" element={<HomePage />} />
						</Route>
					</Routes>
				</div>
			</ContentProvider>
		</AuthProvider>
	);
}

export default App;
