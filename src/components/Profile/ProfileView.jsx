//import { GiCometSpark } from "react-icons/gi";
import { GrSettingsOption } from "react-icons/gr";

import { useAuthContext } from "../../contexts/AuthContext.jsx";

export function ProfileView() {
    const { user } = useAuthContext();
    return (
        <div>
            <section>
                <div className="head">
                    <img src={user.profilePic} alt="" />

                    <div className="info">
                        <div>
                            <h4>{user.username}</h4>
                            <button>Edit Profile</button>
                            <GrSettingsOption />
                        </div>
                        <div>
                            <p>Публикаций</p>
                            <p>Последовали</p>
                            <p>Последвани</p>
                        </div>
                        <div>
                            <p>Информация</p>
                        </div>
                    </div>
                </div>
                <div className="body">
                    <p>Публикаций</p>
                    <p>Записани</p>
                    <p>Отбелязани</p>
                </div>
            </section>
        </div>
    );
}
