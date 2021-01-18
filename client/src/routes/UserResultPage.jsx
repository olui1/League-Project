import React, { Component } from 'react';
import UserInfo from '../components/UserInfo';
import UserResultPageHeader from '../components/UserResultPageHeader';
import UserFinder from '../apis/UserFinder';
import InfoFinder from '../apis/InfoFinder';
import MasteryFinder from '../apis/MasteryFinder';
import ith from '../utils/ith';
import first from '../utils/accessor';
import ChampionMastery from '../components/ChampionMastery';

class UserResultPage extends Component{
    constructor(props){
        super(props);
        this.state={
            summonerInfo: {},
            rankInfo: {},
            masteryInfo: [],
            isLoading: false
        }
    }

    async componentDidMount(){
        const {region, summonerName} = this.props.match.params;
        const idResponse = await UserFinder.get(`/${region}/${summonerName}`);
        const infoResponse = await InfoFinder.get(`/${region}/${idResponse.data.id}`);
        const masteryResponse = await MasteryFinder.get(`/${region}/${idResponse.data.id}`);
        const topMastery = [];
        for(let i=0; i<10; i++){
            topMastery.push(masteryResponse.data[i])
          }
        if(infoResponse.data.length <= 0){
            this.setState({
                rankInfo: null,
                summonerInfo: idResponse.data,
                masteryInfo: topMastery,
                isLoading: true
            }) 
        }
        else{
            this.setState({
                rankInfo: infoResponse.data,
                summonerInfo: idResponse.data,
                masteryInfo: topMastery,
                isLoading: true
            })
        }
        
        console.log(this.state.rankInfo)
        console.log(this.state.summonerInfo)
        console.log(this.state.masteryInfo)
    };

    render() {
        if(this.state.isLoading)
            return (
                <div className="container-userSearch">
                    <UserResultPageHeader getSummonerInfo={this.state.summonerInfo}/>
                    <UserInfo getRankInfo={this.state.rankInfo}/>
                    <ChampionMastery getMasteryInfo={this.state.masteryInfo}/>
                </div>
                )
        else{return(<div>Loading..</div>)}
        
    }
}

export default UserResultPage;
