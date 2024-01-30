import React, { ChangeEvent, useState } from 'react'
import { useAddNewPostMutation } from './postSlice'
import { useNavigate } from 'react-router-dom';
const AddPostForm = () => {
    const [addNewPost, {isLoading,isSuccess}] = useAddNewPostMutation();
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    const navigate = useNavigate();
    const canSave = [title, content, userId].every(Boolean) && !isLoading;


    const onSavePostClicked = async () =>{
       if(canSave){
        try {
            await addNewPost({title, body: content, userId}).unwrap()
            setTitle('')
            setContent('')
            setUserId('')
            navigate('/')
        } catch (error) {
            console.error(`Failed to save the post`, error);
        }
       }
    }
    const onTitleChanged = async (e: any ) => {
        setTitle(e.target.value)
    }
    const onAuthorChanged = async (e: any ) => {
        setUserId(e.target.value)
    }
    const onContentChanged = async (e: any ) => {
        setContent(e.target.value)
    }
    

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {/* {usersOptions} */}
                </select>
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >Save Post</button>
            </form>
        </section>
    )
}

export default AddPostForm