import {Link} from "react-router-dom";
import {AiFillFacebook} from "react-icons/ai";
import LoginCss from "./Login.module.css";
import iphoneImg from "../../assets/1.png";
export function Login() {
	return (
		<div className={LoginCss.container}>
			<img className={LoginCss.image} src={iphoneImg} alt="" />
			<div className={LoginCss.wrapper}>
				<div className={LoginCss.acc}>
					<h3 className={LoginCss.title}>Minstagram</h3>
					<div className={LoginCss.inputBox}>
						<input className={LoginCss.input} type="text" placeholder="Please enter your email here" />
						<input className={LoginCss.input} type="password" placeholder="Password" />
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
