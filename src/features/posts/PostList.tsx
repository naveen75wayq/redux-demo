import React from 'react'
import { extendedApiSlice, selectPostIds } from './postSlice'
import { useGetPostsQuery } from './postSlice'
import { useSelector } from 'react-redux';
import PostsExcerpt from './PostExcerpt';
import { EntityId } from '@reduxjs/toolkit';
function PostList() {
    
    const{
        data: posts,
        isError,
        isLoading,
        isSuccess,
        error
    } = useGetPostsQuery({});

    const orderedPostIds = useSelector(selectPostIds)
    
    let content;
    if (isLoading) {
        content = <p>"Loading..."</p>;
    } else if (isSuccess) {
        content = orderedPostIds.map((postId) => <PostsExcerpt key={postId} postId={postId} />)
    } 
  return (
    <main>
        <div>PostList</div>
        {content}
    </main>
  )
}

export default PostList