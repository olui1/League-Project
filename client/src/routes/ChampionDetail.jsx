import React, { Component } from 'react';
import AbilitiesFinder from '../apis/AbilitiesFinder';
import ChampionsFinder from '../apis/ChampionsFinder';
import { v4 as uuidv4 } from 'uuid';

export default class ChampionDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            abilities: [],
            champions: []
        }
    }

    async componentDidMount(){
        const id = this.props.match.params.id;
        const abilitiesResponse = await AbilitiesFinder.get(`/${id}`);
        const championsResponse = await ChampionsFinder.get(`/${id}`);
        this.setState({abilities: abilitiesResponse.data})
        this.setState({champions: championsResponse.data})
        console.log(this.state.abilities)
        console.log(this.state.champions)
    }
  
    render() {
        const {abilities, champions} = this.state;
        const id = this.props.match.params.id;
        return (
            <div>
                {champions.map(champ => {
                    return(
                    <div key={champ.id}>
                        <img className="championLoadImage" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.ChampionsNoSpace}_0.jpg`}/>
                        {champ.Champions}
                    </div> 
                    )
                })}
                {abilities.map(champ => {
                    for(const property in champ){
                        if(champ[property] == "")
                            champ[property] = 'N/A'
                    }
                    return(
                        <div key={uuidv4()}>
                        <div className="p-3 m-3 rounded" style={{backgroundColor: "#290661", color: "white", borderColor:"black"}}>
                            {champ.Ability} <br/>
                            Type: {champ.Type} <br/>
                            Range: {champ.Range} <br/>
                            Cooldown: {champ.Cooldown} <br/>
                            Cost: {champ.Cost} <br/>
                            {champ.Description}
                        </div>
                        </div>
                    )
                })}  
            </div>
        )
    }
}
