import { createContext, useContext, useState } from "react";
import { getPost, upload } from "../services/dataService.js";
const ContentContext = createContext();

export function ContentProvider({ children }) {
    const [showUpload, setShowUpload] = useState(false);
    const [posts, setPosts] = useState([]);
    const [ownerPosts, setOwnerPosts] = useState([]);

    async function send(data) {
        const response = await upload(data);

        if (response.ok) {
            setShowUpload(false);
        }
        console.log(response);
    }

    async function showLastTwentyPosts() {
        const takedPosts = await getPost();

        setPosts(takedPosts.results);
        console.log(posts);
    }
    // if (posts.length > 0) {
    //     setOwnerPosts(posts.filter());
    // }
    const contextValues = {
        showLastTwentyPosts,
        showUpload,
        setShowUpload,
        send,
        posts,
    };
    return (
        <ContentContext.Provider value={contextValues}>
            {children}
        </ContentContext.Provider>
    );
}
export const useContentContext = () => {
    const context = useContext(ContentContext);
    return context;
};
