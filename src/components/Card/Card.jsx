import {useState} from "react";
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import {FaRegComment, FaRegPaperPlane} from "react-icons/fa";
import {TfiBookmark} from "react-icons/tfi";
import {Link} from "react-router-dom";
import CardCss from "./Card.module.css";
export function Card() {
	const [isLiked, setIsLiked] = useState(false);

	function chagneLikeStatus() {
		setIsLiked(state => !state);
	}
	return (
		<div className={CardCss.card}>
			<div className={CardCss.user}>
				<img className={CardCss.userImg} src="https://img.freepik.com/free-photo/senior-man-face-portrait-wearing-bowler-hat_53876-148154.jpg" alt="user" />
				<h4>ffdfdfsd</h4>
			</div>
			<img className={CardCss.image} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mona_Lisa-restored.jpg/1200px-Mona_Lisa-restored.jpg" alt="MonaLisa" />
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
			<div className="about"></div>
			<div>33 likes</div>
			<div className="coments">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, molestias dolorem laudantium rerum architecto adipisci ipsam dolorum enim similique sapiente dolores eos quaerat officia. Dicta ullam provident eaque vel repellendus? </p>
			</div>
			<input type="text" placeholder="Добавяне на коментар" />
		</div>
	);
}
