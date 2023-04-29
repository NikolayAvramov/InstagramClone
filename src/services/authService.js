const host = "https://parseapi.back4app.com/";
const appID = "Nod77Suh6pVQC0OaelhM67KBCV8kdGrPUwIBmdAQ";
const apiKey = "ED6avMsWaV66pmV2mX02WtHkDR0ojA4ppYfpUWDl";

export async function login(data) {
	const response = await fetch(host + "login", {
		method: "POST",
		headers: {
			"X-Parse-Application-Id": appID,
			"X-Parse-JavaScript-Key": apiKey,
			"X-Parse-Revocable-Session": "1",
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	});

	return response;
}

export async function register(data) {
	const response = await fetch(host + "users", {
		method: "POST",
		headers: {
			"X-Parse-Application-Id": appID,
			"X-Parse-JavaScript-Key": apiKey,
			"X-Parse-Revocable-Session": "1",
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	});

	return response;
}

export async function logout(sessionToken) {
	const response = await fetch(host + "logout", {
		method: "POST",
		headers: {
			"X-Parse-Application-Id": appID,
			"X-Parse-JavaScript-Key": apiKey,
			"X-Parse-Session-Token": sessionToken
		}
	});
	const result = await response.json();

	return response;
}
