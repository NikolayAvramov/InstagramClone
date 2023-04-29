import {createContext, useContext} from "react";

const ContentContext = createContext();

export function ContentProvider({children}) {
	const [showUpload, setShowUpload] = useState(false);
	function changeShowUpload() {
		setShowUpload(state => !state);
	}

	contextValues = {
		showUpload,
		changeShowUpload
	};
	return <ContentContext.Provider>{children}</ContentContext.Provider>;
}
export function useConentContext() {
	const context = useContext(ContentContext);
	return context;
}
