



import { useSelector } from "react-redux";
import { selectPostById } from "./postSlice";
import { EntityId } from "@reduxjs/toolkit";

const PostsExcerpt = ({ postId }: {postId : EntityId}) => {
    const post = useSelector(state => selectPostById(state, postId))

    return (
        <article>
            <h2>{post.title}</h2>
            <p className="excerpt">{post.body.substring(0, 75)}...</p>
            {/* <p className="postCredit">
                <Link to={`post/${post.id}`}>View Post</Link>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p> */}
            {/* <ReactionButtons post={post} /> */}
        </article>
    )
}

export default PostsExcerpt