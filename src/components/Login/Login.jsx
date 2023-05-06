import {Link} from "react-router-dom";
import {AiFillFacebook} from "react-icons/ai";
import LoginCss from "./Login.module.css";
import iphoneImg from "../../assets/1.png";
import {useState} from "react";
import {useAuthContext} from "../../contexts/AuthContext.jsx";
export function Login() {
	const [data, setData] = useState({
		email: "",
		password: ""
	});
	const {onLogin} = useAuthContext();
	function onDataChange(e) {
		setData(state => ({...state, [e.target.name]: e.target.value}));
	}

	async function onLoginSybmit(e) {
		e.preventDefault();
		const result = await onLogin(data);
		console.log(result);
	}

	return (
		<div className={LoginCss.container}>
			<img className={LoginCss.image} src={iphoneImg} alt="" />
			<div className={LoginCss.wrapper}>
				<div className={LoginCss.acc}>
					<h3 className={LoginCss.title}>Minstagram</h3>
					<form onSubmit={onLoginSybmit} className={LoginCss.inputBox}>
						<input className={LoginCss.input} name="email" type="text" placeholder="Please enter your email here" value={data.email} onChange={onDataChange} />
						<input className={LoginCss.input} name="password" type="password" placeholder="Password" value={data.password} onChange={onDataChange} />
						<button className={LoginCss.loginBtn}>Log in</button>
					</form>
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
