import React, {useContext, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import {PencilIcon, TrashIcon} from '@primer/octicons-react';
import PostsFinder from '../apis/PostsFinder';
import { PostsContext } from '../context/PostsContext';

const PostsList = (props) => {
    const {posts, setPosts} = useContext(PostsContext);

    let history = useHistory();

    useEffect(() => {
        const postsData = async () => {
            try{
                const response = await PostsFinder.get("/");
                setPosts(response.data);
            }
            catch(err){
                console.log(err)
            }
        };
        postsData();
    },[])

    const handleUpdate = (id) => {
        history.push(`/posts/${id}/update`);
    }

    const handleDelete = async (id) => {
        try{
            const response = await PostsFinder.delete(`/${id}`);
            setPosts(posts.filter(post => {
                return post.id !== id 
            }));
        }
        catch(err){console.log(err)}
    }

    return (
        <div>
            <div class="d-grid mb-4 gap-3">
                {posts && posts.map(post => {
                    return(
                        <div key={post.id} className="p-2 rounded" style={{backgroundColor: "#290661", color: "white"}}>
                            {post.name}<br></br>
                        <div className="d-flex mb-3">
                            <div className="me-auto p-4 ">{post.comment}</div> 
                            <div><button onClick={() => {handleUpdate(post.id)}} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit Post" className="btn btn-warning"><PencilIcon size={16}/></button></div>
                            <div><button onClick={() => {handleDelete(post.id)}} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Delete Post" className="btn btn-danger"><TrashIcon size={16}/></button></div>
                        </div>
                        </div>
                    )  
                })}
            </div>           
        </div>
    )
}

export default PostsList
