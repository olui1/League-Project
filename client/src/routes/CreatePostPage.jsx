import React, { Component } from 'react';
import PostsFinder from '../apis/PostsFinder';
import {Alert} from 'react-bootstrap';

class CreatePostPage extends Component{
    constructor(props){
        super(props);
        this.state={
            name: [],
            comment: [],
            success: false
        }
        this.successRedirect = this.successRedirect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.backToHome = this.backToHome.bind(this);
    }

    successRedirect(e){
        e.preventDefault();
        this.setState({success: true});
        setTimeout(
            this.backToHome, 
            2500
        );   
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await PostsFinder.post("/", {
                name: this.state.name,
                comment: this.state.comment
            })
            this.successRedirect(e);
        }
        catch(err){
            console.log(err);
        }
    }

    backToHome(){
        this.props.history.push('/')
    }

    render() {
        return (    
        <div>
            <Alert show={this.state.success} variant="success">
                <Alert.Heading>
                    Post Created Successfully!
                </Alert.Heading>
                <p>
                    The post have been received. Sit tight as we redirect you back to home shortly.
                </p>
            </Alert>
            <form action="">
                <div className="form-column">
                    <div className="form-floating">
                        <input value={this.state.name} onChange={e => this.setState({name: e.target.value})} type="text" className="form-control my-4" placeholder="name"/>
                        <label for="floatingTextarea2">Name</label>
                    </div>
                    <div className="form-floating">
                        <textarea value={this.state.comment} onChange={e => this.setState({comment: e.target.value})} class="form-control" placeholder="Leave a comment here" style={{height: 450}}></textarea>
                        <label for="floatingTextarea2">Comment</label>
                    </div>
                    <button className="btn btn-danger" onClick={this.backToHome}>Cancel</button> 
                    <button onClick={this.handleSubmit} type="submit"className="btn btn-primary">Create Post</button>
                </div>
            </form>
        </div>
        )
    }
}
export default CreatePostPage;
