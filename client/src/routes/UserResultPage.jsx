import React, { Component } from 'react';
import UserInfo from '../components/UserInfo';
import UserResultPageHeader from '../components/UserResultPageHeader';
import UserFinder from '../apis/UserFinder';
import InfoFinder from '../apis/InfoFinder';
import MasteryFinder from '../apis/MasteryFinder';
import ChampionMastery from '../components/ChampionMastery';
import MatchListFinder from '../apis/MatchListFinder';
import MatchHistory from '../components/MatchHistory';
import MatchFinder from '../apis/MatchFinder';

class UserResultPage extends Component{
    constructor(props){
        super(props);
        this.state={
            summonerInfo: {},
            rankInfo: {},
            masteryInfo: [],
            matchlistInfo: [],
            matchInfo: [],
            isLoading: false,
            matchInfoisLoading: false,
        }
    }

    getMatch = (arr) => {
    
    var returnarr = []
       let responses = arr.map(match => {
           return new Promise((resolve, reject) => {
                MatchFinder.get(`/${match.platformId}/${match.gameId}`)
            .then(res => {
                return resolve(res); 
            }) .catch(err => reject(err))
           })
       })
       Promise.all(responses).then((res) => {
           res.forEach(res => {
               if(res){
                   returnarr.push(res.data)
               }
           })
           this.setState({matchInfo: returnarr, matchInfoisLoading: true})
       }
       ).catch(err => console.log(err)) 
       console.log(returnarr)
    }

    async componentDidMount(){
        const {region, summonerName} = this.props.match.params;
        const idResponse = await UserFinder.get(`/${region}/${summonerName}`);
        const infoResponse = await InfoFinder.get(`/${region}/${idResponse.data.id}`);
        const masteryResponse = await MasteryFinder.get(`/${region}/${idResponse.data.id}`);
        const matchlistResponse = await MatchListFinder.get(`/${region}/${idResponse.data.accountId}`);
        this.getMatch(matchlistResponse.data.matches);

        const topMastery = [];
        for(let i=0; i<10; i++){
            topMastery.push(masteryResponse.data[i])
          }
        if(infoResponse.data.length <= 0){
            this.setState({
                rankInfo: null,
                summonerInfo: idResponse.data,
                masteryInfo: topMastery,
                matchlistInfo: matchlistResponse.data.matches,
                isLoading: true,
            }) 
        }
        
        else{
            this.setState({
                rankInfo: infoResponse.data,
                summonerInfo: idResponse.data,
                masteryInfo: topMastery,
                matchlistInfo: matchlistResponse.data.matches,
                isLoading: true,
            })
        }
    };

    render() {
        if(this.state.isLoading, this.state.matchInfoisLoading)
                
            return (
                    <div className="d-sm-flex flex-sm-wrap flex-column">
                        <div className="row">
                        <div className="user-result-header" >
                        <UserResultPageHeader getSummonerInfo={this.state.summonerInfo}/>
                        </div>
                        <div className="d-sm-flex justify-content-center">
                            <div className="left-content">
                                <UserInfo getRankInfo={this.state.rankInfo}/>
                                <ChampionMastery getMasteryInfo={this.state.masteryInfo}/>
                            </div>
                            <div className="right-content">
                                <MatchHistory getMatchInfo={this.state.matchInfo} getSummonerInfo={this.state.summonerInfo}/>
                            </div>
                        </div>
                        </div>
                    </div>
                    ) 
        else{return(<div>Loading..</div>)}
        
    }
}

export default UserResultPage;
