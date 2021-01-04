import React, {Component} from 'react';

class Navbar extends Component {

    render(){
        return(
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark d-flex justify-content-end">
                <div className="d-flex justify-content-end">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className="nav-item">
                    <a className="nav-link active" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="/searchUser">User Search</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="/leaderboard">Leaderboard</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="/champions">Champions</a>
                    </li>
                </ul>
                </div> 
            </nav>
        )
    }
}

export default Navbar;