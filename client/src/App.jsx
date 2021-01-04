import React, { Component } from 'react';
import { createBrowserHistory } from "history";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ChampionDetail from './routes/ChampionDetail';
import ChampionsPage from './routes/ChampionsPage';
import CreatePostPage from './routes/CreatePostPage';
import HomePage from './routes/HomePage';
import LeaderboardPage from './routes/LeaderboardPage';
import UpdatePostPage from './routes/UpdatePostPage';
import UsersearchPage from './routes/UsersearchPage';
import { PostsContextProvider } from './context/PostsContext';

const history = createBrowserHistory();

class App extends Component {
  render(){
    return(
      <div> 
      <Navbar/>
      <PostsContextProvider>
      <div className="container">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/searchUser" component={UsersearchPage}/>
          <Route exact path="/leaderboard" component={LeaderboardPage}/>
          <Route exact path="/champions" component={ChampionsPage}/>
          <Route exact path="/champions/:id" component={ChampionDetail}/>
          <Route exact path="/posts/:id/update" component={UpdatePostPage}/>
          <Route exact path="/posts/create" component={CreatePostPage}/>
        </Switch>
      </Router>
      </div>
      </PostsContextProvider> 
      </div> 
  )
  }
}

export default App;