import {createContext, useContext, useState} from "react";
import {getPost, upload} from "../services/dataService.js";
const ContentContext = createContext();

export function ContentProvider({children}) {
	const [showUpload, setShowUpload] = useState(false);
	const [posts, setPosts] = useState([]);

	async function send(data) {
		const response = await upload(data);

		if (response.ok) {
			setShowUpload(false);
		}
		console.log(response);
	}

	async function showLastTwentyPosts() {
		const posts = await getPost();
		setPosts(state => {...state,posts})
	}

	const contextValues = {
		showUpload,
		setShowUpload,
		send,
		posts
	};
	return <ContentContext.Provider value={contextValues}>{children}</ContentContext.Provider>;
}
export const useContentContext = () => {
	const context = useContext(ContentContext);
	return context;
};
