import {Link} from "react-router-dom";
import {AiFillFacebook} from "react-icons/ai";
import LoginCss from "./Login.module.css";
import iphoneImg from "../../assets/1.png";
import {useState} from "react";
import {useAuthContext} from "../../contexts/AuthContext.jsx";
export function Login() {
	const {onLogin} = useAuthContext();
	const [data, setData] = useState({
		email: "",
		password: ""
	});
	function onDataChange(e) {
		setData(state => ({...state, [e.target.name]: e.target.value}));
	}

	async function onLoginSybmit() {
		const result = await onLogin(data);
		console.log(result);
	}

	return (
		<div className={LoginCss.container}>
			<img className={LoginCss.image} src={iphoneImg} alt="" />
			<div className={LoginCss.wrapper}>
				<div className={LoginCss.acc}>
					<h3 className={LoginCss.title}>Minstagram</h3>
					<div onSubmit={onLoginSybmit} className={LoginCss.inputBox}>
						<input className={LoginCss.input} name="email" type="text" placeholder="Please enter your email here" />
						<input className={LoginCss.input} name="password" type="password" placeholder="Password" />
						<button className={LoginCss.loginBtn}>Log in</button>
					</div>
					<p className={LoginCss.or}>or</p>
					<div className={LoginCss.alternative}>
						<AiFillFacebook />
						<p>Log in with Facebook</p>
					</div>
					<Link className={LoginCss.forgotPass}>Forgot password?</Link>
				</div>

				<div className={LoginCss.noAcc}>
					<p>
						Don't have an account? <Link className={LoginCss.signULink}>Sign up</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
