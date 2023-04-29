import {Link} from "react-router-dom";

import NavCss from "./Navigation.module.css";

import {BiHome} from "react-icons/bi";
import {CgDetailsMore} from "react-icons/cg";
import {BsSearch} from "react-icons/bs";
import {TiMessages} from "react-icons/ti";
import {FiUpload} from "react-icons/fi";
import {MdOutlineNotificationsActive} from "react-icons/md";
import {useContentContext} from "../../contexts/ContentContex.jsx";

export function Navigation() {
	const {changeShowUpload} = useContentContext();

	return (
		<div className={NavCss.navContainer}>
			<div className={NavCss.name}>Minstagram</div>
			<nav>
				<ul className={NavCss.nav}>
					<li className={NavCss.listItem}>
						<Link className={NavCss.linkItem}>
							<BiHome />
							<span> Home</span>
						</Link>
					</li>
					<li className={NavCss.listItem}>
						<Link className={NavCss.linkItem}>
							<BsSearch />
							<span> Search</span>
						</Link>
					</li>
					<li className={NavCss.listItem}>
						<Link className={NavCss.linkItem}>
							<TiMessages />
							<span> Message</span>
						</Link>
					</li>
					<li
						onClick={() => {
							changeShowUpload(true);
						}}
						className={NavCss.listItem}
					>
						<Link className={NavCss.linkItem}>
							<FiUpload />
							<span> Upload</span>
						</Link>
					</li>
					<li className={NavCss.listItem}>
						<Link className={NavCss.linkItem}>
							<MdOutlineNotificationsActive />
							<span> Notifications</span>
						</Link>
					</li>
				</ul>
			</nav>
			<div className={NavCss.more}>
				<CgDetailsMore />
			</div>
		</div>
	);
}
