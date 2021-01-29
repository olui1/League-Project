import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PostsFinder from '../apis/PostsFinder';

const UpdatePosts = (props) => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    let history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await PostsFinder.get(`/${id}`);
                setName(response.data[0].name);
                setComment(response.data[0].comment);
            }
            catch(err){
                console.log(err)
            }
        };
        fetchData();
    },[])
    
    const backToHome = () => {
        history.push('/');
    } 

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedPosts = await PostsFinder.put(`/${id}`, {
            name,
            comment
        });
        backToHome();
    }

    return (
        <div>
           <form action="">
                <div className="form-column">
                    <div className="form-floating">
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control my-4" placeholder="name"/>
                        <label htmlFor="floatingTextarea2">Name</label>
                    </div>
                    <div className="form-floating">
                        <textarea value={comment} onChange={(e) => setComment(e.target.value)} class="form-control" placeholder="Leave a comment here" style={{height: 450}}></textarea>
                        <label htmlFor="floatingTextarea2">Comment</label>
                    </div>
                    <button onClick={backToHome} className="btn btn-danger">Cancel</button> 
                    <button onClick={handleSubmit} type="submit" className="btn btn-primary">Edit Post</button>
                </div>
            </form> 
        </div>
    )
}

export default UpdatePosts
