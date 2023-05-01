import {Navigation} from "../Navigation/Navigation.jsx";
import {Upload} from "../Upload/Upload.jsx";
import {useContentContext} from "../../contexts/ContentContex.jsx";

import HomeCss from "./Home.module.css";
import {Card} from "../Card/Card.jsx";
export function HomePage() {
	const {showUpload} = useContentContext();
	console.log(showUpload);
	return (
		<div className={HomeCss.homePage}>
			{showUpload && <Upload />}
			<div className={HomeCss.sideNav}>
				<Navigation />
			</div>
			<div className={HomeCss.timeLine}>
				<div className={HomeCss.cards}>
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
}
