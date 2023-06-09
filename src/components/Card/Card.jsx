import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegComment, FaRegPaperPlane } from "react-icons/fa";
import { TfiBookmark } from "react-icons/tfi";
import { Link } from "react-router-dom";
import CardCss from "./Card.module.css";
import { useAuthContext } from "../../contexts/AuthContext.jsx";
import { giveALike } from "../../services/dataService";
export function Card({ info }) {
    const [isLiked, setIsLiked] = useState(false);
    const { user } = useAuthContext();

    function chagneLikeStatus() {
        setIsLiked(state => !state);
        const newLike = info.likes * 1 + 1;

        let data = {
            image: "",
            post: "",
            likes: newLike,
        };

        giveALike(info.objectId, data);
    }
    return (
        <div className={CardCss.card}>
            <div className={CardCss.user}>
                <img
                    className={CardCss.userImg}
                    src={user.profilePic}
                    alt="user"
                />
                <h4>{user.username}</h4>
            </div>
            <img className={CardCss.image} src={info.image} alt={info.post} />
            <div className={CardCss.activeButtons}>
                <div>
                    {isLiked ? (
                        <Link
                            className={CardCss.link}
                            onClick={chagneLikeStatus}
                        >
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
            <div>{info.likes} likes</div>
            <div className="coments">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum eligendi recusandae provident sequi, maiores qui
                    consequuntur eum error perferendis aliquid voluptate amet
                    soluta quidem, odit velit. Perferendis at ipsam minima.
                </p>
            </div>
            <input type="text" placeholder="Добавяне на коментар" />
        </div>
    );
}
