import {useState} from "react";
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import {FaRegComment, FaRegPaperPlane} from "react-icons/fa";
import {TfiBookmark} from "react-icons/tfi";
import {Link} from "react-router-dom";
import CardCss from "./Card.module.css";
export function Card({info}) {
	const [isLiked, setIsLiked] = useState(false);
	console.log(info);
	function chagneLikeStatus() {
		setIsLiked(state => !state);
	}
	return (
		<div className={CardCss.card}>
			<div className={CardCss.user}>
				<img className={CardCss.userImg} src="https://img.freepik.com/free-photo/senior-man-face-portrait-wearing-bowler-hat_53876-148154.jpg" alt="user" />
				<h4>ffdfdfsd</h4>
			</div>
			<img className={CardCss.image} src={info.image} alt="MonaLisa" />
			<div className={CardCss.activeButtons}>
				<div>
					{isLiked ? (
						<Link className={CardCss.link} onClick={chagneLikeStatus}>
							<AiFillHeart />
						</Link>
					) : (
						<Link className={CardCss.link}>
							<AiOutlineHeart onClick={chagneLikeStatus} />
						</Link>
					)}

					<Link className={CardCss.link}>
						<FaRegComment />
					</Link>
					<Link className={CardCss.link}>
						<FaRegPaperPlane />
					</Link>
				</div>
				<div className="save">
					<Link className={CardCss.link}>
						<TfiBookmark />
					</Link>
				</div>
			</div>
			<div className="about">{info.post}</div>
			<div>33 likes</div>
			<div className="coments">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eligendi recusandae provident sequi, maiores qui consequuntur eum error perferendis aliquid voluptate amet soluta quidem, odit velit. Perferendis at ipsam minima.</p>
			</div>
			<input type="text" placeholder="Добавяне на коментар" />
		</div>
	);
}
