import {useState} from "react";
import UploadCss from "./Upload.module.css";

const apiKey = "Nod77Suh6pVQC0OaelhM67KBCV8kdGrPUwIBmdAQ";
const jsKey = "YEkcMzkJtePGSvK42biSaZejFiEpiXT94xkmXt0m";
export function Upload() {
	const [data, setData] = useState({
		image: "",
		post: ""
	});

	function onDataChange(e) {
		setData(state => ({...state, [e.target.name]: e.target.value}));
	}

	async function send() {
		const response = await fetch("https://parseapi.back4app.com/classes/image", {
			method: "POST",
			headers: {
				"X-Parse-Application-Id": "Nod77Suh6pVQC0OaelhM67KBCV8kdGrPUwIBmdAQ",
				"X-Parse-REST-API-Key": "ED6avMsWaV66pmV2mX02WtHkDR0ojA4ppYfpUWDl",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(file)
		});
	}

	return (
		<div className={UploadCss.overlay}>
			<div className={UploadCss.modal}>
				<h3 className={UploadCss.title}>Create new post</h3>
				<p className={UploadCss.closeBtn}>x</p>
				<form className={UploadCss.form} action="upload">
					<label htmlFor="info">About post</label>
					<input type="text" name="post" placeholder="Say something about this post" value={data.post} onChange={onDataChange} />
					<label htmlFor="image">Image</label>
					<input type="text" placeholder="ImageUrl" name="image" value={data.image} onChange={onDataChange} />
					<button type="submit" className={UploadCss.button}>
						upload
					</button>
				</form>
			</div>
		</div>
	);
}
