import { apiSlice } from "../api/apiSlice";
import { sub } from 'date-fns';
import type { Post } from "../../interfaces/interfaces";
import {
    createSelector,
    createEntityAdapter,
    EntityId,
    EntityState
} from "@reduxjs/toolkit";


const postsAdapter = createEntityAdapter<Post, EntityId>({
    sortComparer: (a, b) => b.date.localeCompare(a.date),
    selectId: (post) => post.id,
    
})

const initialState:EntityState<Post, EntityId> = postsAdapter.getInitialState()

  
// extende api slice
export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({

        // reducers
        getPosts: builder.query({
            query: () => '/posts',
            transformResponse: (responseData: Post[])=> {
                let min = 1;
                const loadedPosts = responseData.map(post => {
                    if (!post?.date) post.date = sub(new Date(), { minutes: min++ }).toISOString();
                    if (!post?.reactions) post.reactions = {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    }
                    return post;
                });
                return postsAdapter.setAll(initialState, loadedPosts)
            },
            providesTags: (result:any, error, arg) => [
                { type: 'Post', id: "LIST" },
                ...result.ids.map((id: any) => ({ type: 'Post', id }))
            ]
        }),

        getPostsByUserId: builder.query({
            query: (id) => `/posts/?userId=${id}`,
            transformResponse: (responseData: Post[])=> {
                let min = 1;
                const loadedPosts = responseData.map(post => {
                    if (!post?.date) post.date = sub(new Date(), { minutes: min++ }).toISOString();
                    if (!post?.reactions) post.reactions = {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    }
                    return post;
                });
                return postsAdapter.setAll(initialState, loadedPosts)
            },
            providesTags: (result:any,error,arg) => {
                console.log(result)
                return [
                    ...result.ids.map((id:any) => ({type: 'Post', id}))
                ]
            }

        }),


        addNewPost: builder.mutation({
            query: intitalPost => ({
                url:'/posts',
                method: 'POST',
                body:{
                    ...intitalPost,
                    userId: Number(intitalPost.userId),
                    date: new Date().toISOString(),
                    reactions: {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    }
                }
            }),
            invalidatesTags: [
                {type: "Post", id: "LIST"}
            ]
        }),
        updatePost: builder.mutation({
            query: initialPost => ({
                url: `/posts/${initialPost.id}`,
                method: 'PUT',
                body: {
                    ...initialPost,
                    date: new Date().toISOString()
                }
            }),
            invalidatesTags: (result:any, error, arg) => [
                { type: 'Post', id: arg.id }
            ]
        }),
        deletePost: builder.mutation({
            query: ({ id }) => ({
                url: `/posts/${id}`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result:any, error, arg) => [
                { type: 'Post', id: arg.id }
            ]
        })
        
    }
    )
})

// custom hooks using RTK query
export const { 
    useGetPostsQuery,
    useGetPostsByUserIdQuery,
    useAddNewPostMutation,
    useUpdatePostMutation,
    useDeletePostMutation,
 } = extendedApiSlice


//return query result object
export const selectPostsResult = extendedApiSlice.endpoints.getPosts.select({})


// create memoized selector
const selectPostsData = createSelector(
    selectPostsResult,
    postsResult => postsResult.data
)


// selectors that are exported
// and we rename them with aliases
export const {
selectAll: selectAllPosts,
selectById: selectPostById,
selectIds: selectPostIds
} = postsAdapter.getSelectors((state:any) =>selectPostsData(state) ?? initialState)



