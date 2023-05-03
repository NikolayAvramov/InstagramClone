import {Link} from "react-router-dom";
import {AiFillFacebook} from "react-icons/ai";
import RegisterCss from "./Register.module.css";

export function Register() {
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
					<div className={RegisterCss.inputBox}>
						<input className={RegisterCss.input} type="text" placeholder="Email" />
						<input className={RegisterCss.input} type="text" placeholder="Full Name" />
						<input className={RegisterCss.input} type="text" placeholder="Username" />
						<input className={RegisterCss.input} type="password" placeholder="Password" />
						<button className={RegisterCss.loginBtn}>Sign up</button>
						<p className={RegisterCss.textAgree}>
							By signing up, you agree to our <strong>Terms,Data Policy</strong>, and <strong>Cookies Policy</strong>
						</p>
					</div>
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
