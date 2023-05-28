import { Navigation } from "../Navigation/Navigation.jsx";
import { Upload } from "../Upload/Upload.jsx";
import { useContentContext } from "../../contexts/ContentContex.jsx";
import HomeCss from "./Home.module.css";
import { Card } from "../Card/Card.jsx";
import { useEffect } from "react";
import { ProfileView } from "../Profile/ProfileView.jsx";
//import { useAuthContext } from "../../contexts/AuthContext.jsx";
export function HomePage() {
    //  const { user } = useAuthContext();
    const { posts, showUpload, showLastTwentyPosts, showingContent } =
        useContentContext();
    useEffect(() => {
        showLastTwentyPosts();
    }, [showUpload]);
    console.log(showingContent);
    return (
        <div className={HomeCss.homePage}>
            {showUpload && <Upload />}
            <div className={HomeCss.sideNav}>
                <Navigation />
            </div>

            <div className={HomeCss.timeLine}>
                {showingContent == "home" ? (
                    <div className={HomeCss.cards}>
                        {posts &&
                            posts.map(post => (
                                <Card key={post.id} info={post}></Card>
                            ))}
                    </div>
                ) : (
                    <ProfileView />
                )}

                <div className={HomeCss.suggestion}></div>
            </div>
        </div>
    );
}
