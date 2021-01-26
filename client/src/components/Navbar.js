import React, {Component} from 'react';

class Navbar extends Component {

    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">

              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active" href="/">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="/searchUser">User Search</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="/leaderboard">Leaderboard</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="/champions">Champions</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )
    }
}

export default Navbar;