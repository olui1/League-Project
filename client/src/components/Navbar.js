import React, {Component} from 'react';

class Navbar extends Component {

    render(){
        return(
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark d-flex justify-content-end">
                <div class="d-flex justify-content-end">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" href="#">User Search</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" href="#">Leaderboard</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" href="#">Champions</a>
                    </li>
                </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;