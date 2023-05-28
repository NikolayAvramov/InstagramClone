import { createContext, useContext, useState } from "react";
import { getPost, upload } from "../services/dataService.js";
const ContentContext = createContext();

export function ContentProvider({ children }) {
    const [showUpload, setShowUpload] = useState(false);
    const [posts, setPosts] = useState([]);
    const [showingContent, setShowingContent] = useState("");

    async function send(data) {
        const response = await upload(data);

        if (response.ok) {
            setShowUpload(false);
        }
    }

    async function showLastTwentyPosts() {
        const takedPosts = await getPost();

        setPosts(takedPosts.results);
    }

    function filterPost(userId) {
        const postArray = [];
        for (let post of posts) {
            if (userId == post.ownerId) {
                postArray.push(post);
            }
        }

        return postArray;
    }

    const contextValues = {
        showLastTwentyPosts,
        showUpload,
        setShowUpload,
        send,
        posts,
        filterPost,
        setShowingContent,
        showingContent,
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
