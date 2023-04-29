import {HomePage} from "./components/HomePage/HomePage.jsx";
import AppCss from "./App.module.css";
import {Routes, Route} from "react-router-dom";
import {ContentProvider} from "./contexts/ContentContex.jsx";

function App() {
	async function getall() {
		const response = await fetch("https://parseapi.back4app.com/classes/image", {
			method: "GET",
			headers: {
				"X-Parse-Application-Id": "Nod77Suh6pVQC0OaelhM67KBCV8kdGrPUwIBmdAQ",
				"X-Parse-REST-API-Key": "ED6avMsWaV66pmV2mX02WtHkDR0ojA4ppYfpUWDl",
				"Content-Type": "application/json"
			}
		});
		const result = await response.json();
	}

	return (
		<ContentProvider>
			<div className={AppCss.app}>
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
			</div>
		</ContentProvider>
	);
}

export default App;
