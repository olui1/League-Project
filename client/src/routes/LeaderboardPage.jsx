import React, { Component } from 'react';
import LeaderboardFinder from '../apis/LeaderboardFinder';

class LeaderboardPage extends Component{
    constructor(props){
        super(props);
        this.state={
            leaderboard: [],
            isLoading: false,
        }
    }   

    async componentDidMount(){
        const response = await LeaderboardFinder.get("/");
        this.setState({
            leaderboard: response.data.entries,
            isLoading: true
        })
    }

    render(){
        const {isLoading, leaderboard} = this.state;
        leaderboard.sort(
            function(a, b) {
                return b.leaguePoints - a.leaguePoints;
            }
        );
        
        if(isLoading)
        return (
            <div className="d-flex flex-column justify-content-center">
                <div>
                    <h1 className="mt-5 mb-5 display-6 text-center" style={{color:"white"}}>Ranked Solo Challenger Leaderboard</h1> 
                </div>
                <div className="d-flex justify-content-md-center">
                    <div className="col col-lg-7">
                    <table class="table table-fixed table-bordered">
                        <thead>
                            <tr class="table-light">
                                <th className="th-sm" scope="col">Rank</th>
                                <th className="th-sm" scope="col">Summoner</th>
                                <th className="th-sm" scope="col">LP</th>
                                <th className="th-sm" scope="col">W/L</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaderboard.map((player, index)=>{
                                return(
                                    <tr class="table-secondary">
                                    <th scope="row">{index}</th>
                                    <td>{player.summonerName}</td>
                                    <td>{player.leaguePoints}</td>
                                    <td>{player.wins}/{player.losses}</td>
                                </tr>
                                )   
                            })}
                        </tbody>
                    </table> 
                    </div>
                </div>
                {console.log(this.state.leaderboard)}
            </div>
        )
        else{return(<div>Loading..</div>)}
    }
    
}

export default LeaderboardPage;
