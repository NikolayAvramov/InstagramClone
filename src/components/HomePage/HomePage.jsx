import {Navigation} from "../Navigation/Navigation.jsx";
import HomeCss from "./Home.module.css";
export function HomePage() {
	return (
		<div className={HomeCss.homePage}>
			<div className={HomeCss.sideNav}>
				<Navigation />
			</div>
			<div className={HomeCss.timeLine}>TimeLine</div>
		</div>
	);
}
