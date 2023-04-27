import {useState} from "react";
import {HomePage} from "./components/HomePage/HomePage.jsx";
import AppCss from "./App.module.css";

function App() {
	return (
		<div className={AppCss.app}>
			<HomePage />
		</div>
	);
}

export default App;
