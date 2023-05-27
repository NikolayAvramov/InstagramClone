import { useState } from "react";
import UploadCss from "./Upload.module.css";
import { useContentContext } from "../../contexts/ContentContex.jsx";
import { useAuthContext } from "../../contexts/AuthContext";

const apiKey = "Nod77Suh6pVQC0OaelhM67KBCV8kdGrPUwIBmdAQ";
const jsKey = "YEkcMzkJtePGSvK42biSaZejFiEpiXT94xkmXt0m";
export function Upload() {
    const { user } = useAuthContext();
    console.log(user);
    const [data, setData] = useState({
        image: "",
        post: "",
        ownerId: user.objectId,
    });

    const { changeShowUpload, setShowUpload, send } = useContentContext();
    function onDataChange(e) {
        setData(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    return (
        <div onClick={() => setShowUpload(false)} className={UploadCss.overlay}>
            <div onClick={e => e.stopPropagation()} className={UploadCss.modal}>
                <h3 className={UploadCss.title}>Create new post</h3>
                <span
                    onClick={() => setShowUpload(false)}
                    className={UploadCss.closeBtn}
                >
                    x
                </span>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        send(data);
                    }}
                    className={UploadCss.form}
                    action="upload"
                >
                    <label htmlFor="info">About post</label>
                    <input
                        type="text"
                        name="post"
                        placeholder="Say something about this post"
                        value={data.post}
                        onChange={onDataChange}
                    />
                    <label htmlFor="image">Image</label>
                    <input
                        type="text"
                        placeholder="ImageUrl"
                        name="image"
                        value={data.image}
                        onChange={onDataChange}
                    />
                    <button type="submit" className={UploadCss.button}>
                        upload
                    </button>
                </form>
            </div>
        </div>
    );
}
