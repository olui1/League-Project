import React, { Component } from 'react';
import Header from '../components/Header';
import PostsList from '../components/PostsList'


class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.onCreatePage = this.onCreatePage.bind(this);
    }

    onCreatePage(){
        this.props.history.push('/posts/create')
    }

    render() {
        return (
        <div>
            <Header/>
            <div class="d-flex justify-content-end">
                <button className="btn btn-primary my-3" onClick={this.onCreatePage}>Create New Post</button>
            </div>
            <PostsList/>
        </div>
        )
    }
}
export default HomePage;
