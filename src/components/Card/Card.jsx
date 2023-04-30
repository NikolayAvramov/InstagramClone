import {useState} from "react";
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import {FaComment, FaRegPaperPlane} from "react-icons/fa";
import {TfiBookmark} from "react-icons/tfi";

export function Card() {
	const [isLiked, setIsLiked] = useState(false);
	return (
		<div className="card">
			<img src="" alt="" />
			<div className="activeButtons">
				<div>
					{isLiked ? (
						<Link>
							<AiFillHeart />
						</Link>
					) : (
						<Link>
							<AiOutlineHeart />
						</Link>
					)}

					<Link>
						<FaComment />
					</Link>
					<Link>
						<FaRegPaperPlane />
					</Link>
				</div>
				<div className="save">
					<Link>
						<TfiBookmark />
					</Link>
				</div>
			</div>
		</div>
	);
}
