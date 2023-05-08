export async function upload(data) {
	const response = await fetch("https://parseapi.back4app.com/classes/image", {
		method: "POST",
		headers: {
			"X-Parse-Application-Id": "Nod77Suh6pVQC0OaelhM67KBCV8kdGrPUwIBmdAQ",
			"X-Parse-REST-API-Key": "ED6avMsWaV66pmV2mX02WtHkDR0ojA4ppYfpUWDl",
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	});

	return response;
}

export async function getPost() {
	const response = await fetch("https://parseapi.back4app.com/classes/image", {
		method: "GET",
		headers: {
			"X-Parse-Application-Id": "Nod77Suh6pVQC0OaelhM67KBCV8kdGrPUwIBmdAQ",
			"X-Parse-REST-API-Key": "ED6avMsWaV66pmV2mX02WtHkDR0ojA4ppYfpUWDl",
			"Content-Type": "application/json"
		}
	});
	const result = await response.json();

	return result;
}
