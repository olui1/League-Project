import React, { useState } from 'react';
import champions from '../champions.json';
import summonerspells from '../summonerspells.json';
import runes from '../runes.json';
import moment from 'moment';
import CurrentPlayer from '../models/CurrentPlayer';
import { getVersion } from '../utils/patch';
import 'moment-duration-format';

const MatchHistory = (props) => {
    const summonerName = props.getSummonerInfo.name;
    var [currentVersion, setcurrentVersion] = useState('');
    var [isLoading, setisLoading] = useState(false);

    const KDA = (kills, deaths, assists) => {
        if(deaths === 0)
            return "Perfect"
        return (((kills+assists)/deaths).toFixed(2))
    }

    const version = () => {
      getVersion((response) => {
            // Success
            setcurrentVersion(response);
            setisLoading(true);
        },(err) => {
            // Error
            alert(err);
        })  
    }
    return (

        <div className="matchlist">
               {version()}
            {React.Children.toArray(
            props.getMatchInfo.map(match => {
                var gameCreation = new moment(match.info.gameCreation);
                var gameDuration = moment.duration(match.info.gameDuration, 'seconds')
                var formatted = gameDuration.format("mm[m] ss[s]");

                var players = [];
                var itemArr = [];
                var champArr = [];
                var champPicArr = [];

                var playersMap = new Map();
                var currentPlayer = new CurrentPlayer();

                if(match.gameDuration <= 360)
                    currentPlayer.win = 'Remake';
                if(isLoading)
                return(
                    <div>
                    {match.info.participants.forEach(summoner => {
                        players.push(summoner.summonerName);
                        playersMap.set(summoner.summonerId, summoner.summonerName)
                    })}
                    {playersMap.forEach((value, key) => {
                        if(value === summonerName){
                            currentPlayer.playerId = key;                         
                        }
                    })}
                    
                    {match.info.participants.forEach(player => {
                        champArr.push(player.championId);

                        if(player.summonerId === currentPlayer.playerId){
                            currentPlayer.ChampionId = player.championId;
                            currentPlayer.spell1 = player.summoner1Id;
                            currentPlayer.spell2 = player.summoner2Id;
                            currentPlayer.rune1 = player.perks.styles[0].style;
                            currentPlayer.rune2 = player.perks.styles[1].style;
                            currentPlayer.kills = player.kills;
                            currentPlayer.deaths = player.deaths;
                            currentPlayer.assists = player.assists;
                            
                            itemArr.push(player.item0);
                            itemArr.push(player.item1);
                            itemArr.push(player.item2);
                            itemArr.push(player.item3);
                            itemArr.push(player.item4);
                            itemArr.push(player.item5);
                            itemArr.push(player.item6);
                            
                            currentPlayer.cs = (player.neutralMinionsKilled + player.totalMinionsKilled)
                            for(let i of champions){
                                if(i.id === currentPlayer.ChampionId){
                                    currentPlayer.ChampionId = i.champion
                                }
                            }
                            for(let i of summonerspells){
                                if(i.id === currentPlayer.spell1){
                                    currentPlayer.spell1 = i.spell
                                }
                                if(i.id === currentPlayer.spell2){
                                    currentPlayer.spell2 = i.spell
                                }
                            }
                            for(let i of runes){
                                if(i.id === currentPlayer.rune1){
                                    currentPlayer.rune1 = i.rune
                                }
                                if(i.id === currentPlayer.rune2){
                                    currentPlayer.rune2 = i.rune
                                }
                            }
                            if(player.win === true && currentPlayer.win!=='Remake'){
                                currentPlayer.win = 'Victory'
                            }
                            else if(player.win === false && currentPlayer.win!=='Remake'){
                                currentPlayer.win = 'Defeat'
                            }
                        }   
                    })}

                <div className="d-flex mt-3 justify-content-start" style={{marginBottom: '10px'}}>
                   <div className="matchinfo" style={{tableLayout: 'fixed', backgroundColor: `${currentPlayer.win === "Victory"?"#0c5929":currentPlayer.win === "Defeat"?"#ba1a1a":"#505452"}`, color: "white", borderColor:"black", display: 'table', justifyContent: 'space-between'}}>
                    <div className="match-stats"> 
                        {match.info.gameType} <br/>
                        {gameCreation.fromNow(true)} ago <br/>
                        {currentPlayer.win} <br/>
                        {formatted}
                    </div>
                    <div className="match-player-config">
                        <div className="match-history-champ">
                            <img alt={`${currentPlayer.ChampionId}`} className="matchHistory-champIcon" src={process.env.PUBLIC_URL + `/championicons/${currentPlayer.ChampionId}.png`}/>
                        </div>
                        <div className="match-history-spell">
                            <img alt={`${currentPlayer.spell1}`} className="matchHistory-spellIcon" src={process.env.PUBLIC_URL + `/summonerspells/${currentPlayer.spell1}.png`}/> <br/>
                            <img alt={`${currentPlayer.spell2}`} className="matchHistory-spellIcon" src={process.env.PUBLIC_URL + `/summonerspells/${currentPlayer.spell2}.png`}/>
                        </div>
                        <div className="match-history-rune">
                            <img alt={`${currentPlayer.rune1}`} className="matchHistory-runeIcon" src={process.env.PUBLIC_URL + `/runeicons/${currentPlayer.rune1}.png`}/> <br/>
                            <img alt={`${currentPlayer.rune2}`} className="matchHistory-runeIcon" src={process.env.PUBLIC_URL + `/runeicons/${currentPlayer.rune2}.png`}/>
                        </div>
                    </div>
                    <div className="match-KDA">
                        {currentPlayer.kills} / {currentPlayer.deaths} / {currentPlayer.assists} <br/>
                        {KDA(currentPlayer.kills, currentPlayer.deaths, currentPlayer.assists)} KDA<br/>
                        {currentPlayer.cs} CS
                    </div>
                    <div className="match-items">
                        {itemArr.map(item => {
                            var isEmpty = false;
                            if(item === 0){
                                item = 1004;
                                isEmpty = true;
                            }
                            return(
                                    <div className="item">
                                        <img alt={`${item}`} className={`matchHistory-itemIcon${isEmpty?"-empty":""}`} src={`http://ddragon.leagueoflegends.com/cdn/${currentVersion}/img/item/${item}.png`}/>
                                    </div>
                            )
                        })}
                    </div>
                    
                    <div className="match-teams">
                        {champArr.forEach(champ => {
                            for(let i of champions){
                                if(i.id === champ){
                                    champPicArr.push(i.champion);
                                }
                            }
                        })}

                        <div className="team1">
                            <div className="players">
                                <div className="players-champImage">
                                <img alt="Not Found" className="matchHistory-team-champIcon" src={process.env.PUBLIC_URL + `/championicons/${champPicArr[0]}.png`}/>
                                </div>
                                <div className="players-summoner">
                                {players[0]}
                                </div>
                            </div>
                            <div className="players">
                            <div className="players-champImage">
                                <img alt="Not Found" className="matchHistory-team-champIcon" src={process.env.PUBLIC_URL + `/championicons/${champPicArr[1]}.png`}/>
                                </div>
                                <div className="players-summoner">
                                {players[1]}
                                </div>
                            </div>
                            <div className="players">
                            <div className="players-champImage">
                                <img alt="Not Found" className="matchHistory-team-champIcon" src={process.env.PUBLIC_URL + `/championicons/${champPicArr[2]}.png`}/>
                                </div>
                                <div className="players-summoner">
                                {players[2]}
                                </div>
                            </div>
                            <div className="players">
                            <div className="players-champImage">
                                <img alt="Not Found" className="matchHistory-team-champIcon" src={process.env.PUBLIC_URL + `/championicons/${champPicArr[3]}.png`}/>
                                </div>
                                <div className="players-summoner">
                                {players[3]}
                                </div>
                            </div>
                            <div className="players">
                            <div className="players-champImage">
                                <img alt="Not Found" className="matchHistory-team-champIcon" src={process.env.PUBLIC_URL + `/championicons/${champPicArr[4]}.png`}/>
                                </div>
                                <div className="players-summoner">
                                {players[4]}
                                </div>
                            </div>
                        </div>
                        <div className="team2">
                            <div className="players">
                            <div className="players-champImage">
                                <img alt="Not Found" className="matchHistory-team-champIcon" src={process.env.PUBLIC_URL + `/championicons/${champPicArr[5]}.png`}/>
                                </div>
                                <div className="players-summoner">
                                {players[5]}
                                </div>
                            </div>
                            <div className="players">
                            <div className="players-champImage">
                                <img alt="Not Found" className="matchHistory-team-champIcon" src={process.env.PUBLIC_URL + `/championicons/${champPicArr[6]}.png`}/>
                                </div>
                                <div className="players-summoner">
                                {players[6]}
                                </div>
                            </div>
                            <div className="players">
                            <div className="players-champImage">
                                <img alt="Not Found" className="matchHistory-team-champIcon" src={process.env.PUBLIC_URL + `/championicons/${champPicArr[7]}.png`}/>
                                </div>
                                <div className="players-summoner">
                                {players[7]}
                                </div>
                            </div>
                            <div className="players">
                            <div className="players-champImage">
                                <img alt="Not Found" className="matchHistory-team-champIcon" src={process.env.PUBLIC_URL + `/championicons/${champPicArr[8]}.png`}/>
                                </div>
                                <div className="players-summoner">
                                {players[8]}
                                </div>
                            </div>
                            <div className="players">
                            <div className="players-champImage">
                                <img alt="Not Found" className="matchHistory-team-champIcon" src={process.env.PUBLIC_URL + `/championicons/${champPicArr[9]}.png`}/>
                                </div>
                                <div className="players-summoner">
                                {players[9]}
                                </div>
                            </div>
                        </div>    
                    </div>
                    </div>
                </div>
                    </div>
                )
                }))}
        </div>
    )
}

export default MatchHistory
