import {Navigation} from "../Navigation/Navigation.jsx";
import {Upload} from "../Upload/Upload.jsx";
import {useContentContext} from "../../contexts/ContentContex.jsx";

import HomeCss from "./Home.module.css";
import {Card} from "../Card/Card.jsx";
import {Login} from "../Login/Login.jsx";
import {Register} from "../Register/Register.jsx";
export function HomePage() {
	const {showUpload} = useContentContext();
	console.log(showUpload);
	return (
		<div className={HomeCss.homePage}>
			<Register />
			{/* {showUpload && <Upload />}
			<div className={HomeCss.sideNav}>
				<Navigation />
			</div>
			 */}
			{/* <div className={HomeCss.timeLine}>
				<div className={HomeCss.cards}>
					<Card />
					<Card />
					<Card />
				</div>
				<div className={HomeCss.suggestion}></div>
			</div> */}
		</div>
	);
}
