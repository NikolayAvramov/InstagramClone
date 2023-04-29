import {createContext, useContext, useState} from "react";

const ContentContext = createContext();

export function ContentProvider({children}) {
	const [showUpload, setShowUpload] = useState(false);
	function changeShowUpload(state) {
		setShowUpload(state);
	}

	const contextValues = {
		showUpload,
		changeShowUpload
	};
	return <ContentContext.Provider value={contextValues}>{children}</ContentContext.Provider>;
}
export const useContentContext = () => {
	const context = useContext(ContentContext);
	return context;
};
