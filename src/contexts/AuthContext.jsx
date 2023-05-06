import {createContext, useState} from "react";
import {useContext} from "react";
const AuthContext = createContext();

export function AuthProvider({children}) {
	const host = "https://parseapi.back4app.com";
	const [user, setUser] = useState(false);

	async function onLogin(data) {
		const response = await fetch(host + "/login", {
			method: "POST",
			headers: {
				"X-Parse-Application-Id": "Nod77Suh6pVQC0OaelhM67KBCV8kdGrPUwIBmdAQ",
				"X-Parse-REST-API-Key": "ED6avMsWaV66pmV2mX02WtHkDR0ojA4ppYfpUWDl",
				"X-Parse-Revocable-Session": "1",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		});
		if (!response.ok) {
			const error = await response.json();
			return error;
		}
		const result = await response.json();
		setUser(state => ({...state, result}));
		console.log(user);
		return result;
	}

	async function onRegister(data) {
		const response = await fetch(host + "/users", {
			method: "POST",
			headers: {
				"X-Parse-Application-Id": "Nod77Suh6pVQC0OaelhM67KBCV8kdGrPUwIBmdAQ",
				"X-Parse-REST-API-Key": "ED6avMsWaV66pmV2mX02WtHkDR0ojA4ppYfpUWDl",
				"X-Parse-Revocable-Session": "1",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		});
		if (!response.ok) {
			const error = await response.json();
			return error;
		}
		const result = await response.json();
		setUser(result);
		return result;
	}

	const authValues = {
		onLogin,
		onRegister,
		user
	};
	return <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>;
}
export function useAuthContext() {
	const context = useContext(AuthContext);
	return context;
}
