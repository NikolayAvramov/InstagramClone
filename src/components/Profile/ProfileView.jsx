//import { GiCometSpark } from "react-icons/gi";
import ProfileCss from "./Profile.module.css";
import { GrSettingsOption } from "react-icons/gr";

import { useAuthContext } from "../../contexts/AuthContext.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { useContentContext } from "../../contexts/ContentContex.jsx";
import { MyPosts } from "../MyPosts/MyPosts";

export function ProfileView() {
    const [ownerPosts, setOwnerPosts] = useState([]);
    const { user } = useAuthContext();
    const { filterPost } = useContentContext();

    useEffect(() => {
        setOwnerPosts(filterPost(user.objectId));
    }, []);
    console.log(ownerPosts);

    return (
        <div className={ProfileCss.profile}>
            <section>
                <div className={ProfileCss.head}>
                    <img
                        className={ProfileCss.userImg}
                        src={user.profilePic}
                        alt=""
                    />

                    <div className={ProfileCss.info}>
                        <div className={ProfileCss.settings}>
                            <h4>{user.username}</h4>
                            <button>Edit Profile</button>
                            <GrSettingsOption />
                        </div>
                        <div className={ProfileCss.settings}>
                            <p>{`${ownerPosts.length} Публикаций`}</p>
                            <p>Последовали</p>
                            <p>Последвани</p>
                        </div>
                        <div>
                            <p>This is my first profil info👌</p>
                        </div>
                    </div>
                </div>
                <div className={ProfileCss.body}>
                    <div className={ProfileCss.bodyNav}>
                        <p>Публикаций</p>
                        <p>Записани</p>
                        <p>Отбелязани</p>
                    </div>
                    <div>
                        {console.log(ownerPosts)}
                        <MyPosts posts={ownerPosts} />
                    </div>
                </div>
            </section>
        </div>
    );
}
