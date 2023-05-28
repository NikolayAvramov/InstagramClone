import PostCss from "./MyPosts.module.css";

export function MyPosts({ posts }) {
    return (
        <div className={PostCss.postWrapper}>
            {posts.map(post => (
                <img
                    key={post.objectId}
                    className={PostCss.image}
                    src={post.image}
                    alt={post.post}
                />
            ))}
        </div>
    );
}
