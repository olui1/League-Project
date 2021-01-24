import React, { Component } from 'react';
import AbilitiesFinder from '../apis/AbilitiesFinder';
import ChampionsFinder from '../apis/ChampionsFinder';
import first from '../utils/accessor';

export default class ChampionDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            abilities: [],
            champions: {},
            isLoading: false
        }
    }

    async componentDidMount(){
        const id = this.props.match.params.id;
        const abilitiesResponse = await AbilitiesFinder.get(`/${id}`);
        const championsResponse = await ChampionsFinder.get(`/${id}`);
        this.setState({
            abilities: abilitiesResponse.data,
            champions: first(championsResponse.data),
            isLoading: true
        })
        console.log(this.state.abilities)
        console.log(this.state.champions)
    }
  
    render() {
        const { abilities, champions, isLoading } = this.state;
        const id = this.props.match.params.id;

        if (isLoading && champions && abilities.length > 0) {
            return(
                <div class="d-flex flex-column">
                    <div className="d-flex justify-content-center" key={champions.id}>
                        <img className="championLoadImage" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champions.ChampionsNoSpace}_0.jpg`}/>  
                    </div> 
                    <div className="mb-3 display-5 text-center" style={{color: "White"}}>
                    {champions.Champions}
                    </div>
                    {abilities.map((champ, index) => {
                        for(const property in champ){
                            if(champ[property] === "")
                                champ[property] = 'N/A'
                        }
                        return(
                  
                            <div key={index} className="d-flex justify-content-around p-3 mb-3 rounded" style={{backgroundColor: "#290661", color: "white", borderColor:"black"}}>
                                <div className="group-1">
                                <img src={process.env.PUBLIC_URL + `/skills/${champions.ChampionsNoSpace}${champ.Type}.png`}/> <br/>
                                {champ.Ability}
                                </div>
                                <div className="group-2">
                                Type: {champ.Type} <br/>
                                Range: {champ.Range} <br/>
                                Cooldown: {champ.Cooldown} <br/>
                                Cost: {champ.Cost} 
                                </div>
                                <div className="group-3">
                                {champ.Description}
                                </div>
                            </div>

                        )
                    })}  
                </div>
            )
        }
        return (<div>NOT FOUND</div>) 
    }
}
