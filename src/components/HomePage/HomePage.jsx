import {Navigation} from "../Navigation/Navigation.jsx";
import {Upload} from "../Upload/Upload.jsx";
import {useContentContext} from "../../contexts/ContentContex.jsx";

import HomeCss from "./Home.module.css";
export function HomePage() {
	const {showUpload} = useContentContext();
	console.log(showUpload);
	return (
		<div className={HomeCss.homePage}>
			<div className={HomeCss.sideNav}>
				{showUpload && <Upload />}

				<Navigation />
			</div>
			<div className={HomeCss.timeLine}></div>
		</div>
	);
}
