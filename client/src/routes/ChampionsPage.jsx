import React, { Component } from 'react';
import ChampionsFinder from '../apis/ChampionsFinder';
import { withStyles } from '@material-ui/core/styles';
import '../App.css';

const styles = () => ({
    gridItem:{
        textAlign: 'center',
        display: 'grid',
      },
})

class ChampionsPage extends Component {
    constructor(props){
        super(props);
        this.state={
            championName: [],
            filter: ""
        }
    }

    async componentDidMount(){
        const response = await ChampionsFinder.get("/");
        this.setState({championName: response.data})
        console.log(this.state.championName)
    };

    handleChange = e => {
        this.setState({filter: e.target.value})
    }

    render() {
        
        const {championName, filter} = this.state;
        const lowercasedFilter = filter.toLowerCase();
        const filteredData = championName.filter(item => 
        item.Champions.toLowerCase().includes(lowercasedFilter)
    );
        return (      
            <>
                <>
                <h1 className="mt-5 display-6 text-center" style={{color:"white"}}>Comprehensive Guides For A Player's Need</h1> 
                </>
                <div className="champion-searchbar">
                    <input type="text" value={filter} onChange={this.handleChange} placeholder="Search Champion"/>
                </div>
            <div className="champion-grid">
                
                {filteredData.map(champion => {
                    return(
                        <div className="champion-grid-item" key={champion.id} style={{backgroundColor: "#290661", color: "white"}}>
                            <div>
                                <a href={`/champions/${champion.Champions}`}>
                                    <img className="championImage" alt={`${champion.ChampionsNoSpace}`} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${champion.ChampionsNoSpace}_0.jpg`}/>
                                </a>
                            </div>
                            <div style={{fontSize:'13px'}}>
                                {champion.Champions}
                            </div> 
                        </div> 
                    )  
                })}
                
            </div>
            </>
        )
    }
}
export default withStyles(styles)(ChampionsPage);
