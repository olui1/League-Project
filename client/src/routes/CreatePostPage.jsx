import React, { Component } from 'react';

class CreatePostPage extends Component{
    constructor(props){
        super(props);
        this.backToHome = this.backToHome.bind(this);
    }

    backToHome(){
        this.props.history.push('/')
    }

    render() {
        return (
        <div className="container">
            <form action="">
                <div className="form-column">
                    <div className="form-floating">
                        <input type="text" className="form-control my-4" placeholder="name"/>
                        <label for="floatingTextarea2">Name</label>
                    </div>
                    <div className="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" style={{height: 450}}></textarea>
                        <label for="floatingTextarea2">Comment</label>
                    </div>
                    <button className="btn btn-danger" onClick={this.backToHome}>Cancel</button> 
                    <button className="btn btn-primary">Create Post</button>
                </div>
            </form>
        </div>
        )
    }
}
export default CreatePostPage;
