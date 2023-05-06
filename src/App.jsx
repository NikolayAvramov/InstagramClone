import {HomePage} from "./components/HomePage/HomePage.jsx";
import AppCss from "./App.module.css";
import {Routes, Route} from "react-router-dom";
import {ContentProvider} from "./contexts/ContentContex.jsx";
import {AuthProvider} from "./contexts/AuthContext.jsx";

function App() {
	return (
		<AuthProvider>
			<ContentProvider>
				<div className={AppCss.app}>
					<Routes>
						<Route path="/" element={<HomePage />} />
					</Routes>
				</div>
			</ContentProvider>
		</AuthProvider>
	);
}

export default App;
