import {Link} from "react-router-dom";
import {AiFillFacebook} from "react-icons/ai";
import RegisterCss from "./Register.module.css";
import {useAuthContext} from "../../contexts/AuthContext.jsx";
import {useState} from "react";

export function Register() {
	const [data, setData] = useState({
		email: "",
		fullName: "",
		username: "",
		password: ""
	});
	const {onRegister} = useAuthContext();
	function onDataChange(e) {
		setData(state => ({...state, [e.target.name]: e.target.value}));
	}
	async function onREgisterSybmit(e) {
		e.preventDefault();
		const result = await onRegister(data);
		console.log(result);
	}

	return (
		<div className={RegisterCss.container}>
			<div className={RegisterCss.wrapper}>
				<div className={RegisterCss.acc}>
					<h3 className={RegisterCss.title}>Minstagram</h3>

					<p className={RegisterCss.text}> Sign up to see photos and videos from your friends</p>
					<div className={RegisterCss.alternative}>
						<AiFillFacebook />
						<p>Log in with Facebook</p>
					</div>
					<p className={RegisterCss.or}>or</p>
					<form onSubmit={onREgisterSybmit} className={RegisterCss.inputBox}>
						<input className={RegisterCss.input} name="email" type="text" placeholder="Email" onChange={onDataChange} />
						<input className={RegisterCss.input} name="fullName" type="text" placeholder="Full Name" onChange={onDataChange} />
						<input className={RegisterCss.input} name="username" type="text" placeholder="Username" onChange={onDataChange} />
						<input className={RegisterCss.input} name="password" type="password" placeholder="Password" onChange={onDataChange} />
						<button type="submit" className={RegisterCss.loginBtn}>
							Sign up
						</button>
						<p className={RegisterCss.textAgree}>
							By signing up, you agree to our <strong>Terms,Data Policy</strong>, and <strong>Cookies Policy</strong>
						</p>
					</form>
				</div>

				<div className={RegisterCss.noAcc}>
					<p>
						Have an account? <Link className={RegisterCss.signULink}>Log in</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
