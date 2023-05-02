import {Link} from "react-router-dom";
import {AiFillFacebook} from "react-icons/ai";
import LoginCss from "./Login.module.css";
export function Login() {
	return (
		<div className={LoginCss.container}>
			<div className={LoginCss.wrapper}>
				<h3 className={LoginCss.title}>Minstagram</h3>
				<div className={LoginCss.inputBox}>
					<input className={LoginCss.input} type="text" placeholder="Please enter your email here" />
					<input className={LoginCss.input} type="password" placeholder="Password" />
					<button className={LoginCss.loginBtn}>Log in</button>
				</div>
				<p className={LoginCss.or}>or</p>
				<p>
					<AiFillFacebook />
					Log in with Facebook
				</p>
				<Link>Forgot password?</Link>

				<div className="noAcc">
					<p>Don't have an account? Sign up</p>
				</div>
			</div>
		</div>
	);
}
