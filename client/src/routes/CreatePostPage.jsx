import React from 'react';
import {useParams} from 'react-router-dom';

const CreatePostPage = (props) => {
   const {id} = useParams();
   console.log(test);
   return <div>
       <form action="">
           <div className="form-group">
               <label htmlFor="name">Name</label>
               <input id="name" className="form-control" type="text"/>
           </div>
           <div className="form-group">
               <label htmlFor="comment">Comment</label>
               <input id="name" className="form-control" type="text"/>
           </div>
       </form>
   </div>

    
};

export default CreatePostPage;
