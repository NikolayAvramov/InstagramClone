import {createContext, useContext, useState} from "react";
import {upload} from "../services/dataService.js";
const ContentContext = createContext();

export function ContentProvider({children}) {
	const [showUpload, setShowUpload] = useState(false);

	async function send(data) {
		const response = await upload(data);

		if (response.ok) {
			setShowUpload(false);
		}
		console.log(response);
	}

	const contextValues = {
		showUpload,

		send
	};
	return <ContentContext.Provider value={contextValues}>{children}</ContentContext.Provider>;
}
export const useContentContext = () => {
	const context = useContext(ContentContext);
	return context;
};
