import {Navigation} from "../components/Navigation/Navigation.jsx";
import {Upload} from "../components/Upload/Upload.jsx";
import {useConentContext} from "../contexts/ContentCntex.js";
import HomeCss from "./Home.module.css";
export function HomePage() {
	const isUpload = useConentContext();
	return (
		<div className={HomeCss.homePage}>
			<div className={HomeCss.sideNav}>
				{isUpload && <Upload />}

				<Navigation />
			</div>
			<div className={HomeCss.timeLine}></div>
		</div>
	);
}
