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
                <div className="d-flex justify-content-end" style={{marginLeft: '200px' ,marginRight: '200px', marginTop: '30px', marginBottom: '10px'}}>
                    <input type="text" value={filter} onChange={this.handleChange} placeholder="Search Champion"/>
                </div>
            <div className="champion">
                {filteredData.map(champion => {
                    return(
                        <div key={champion.id} style={{backgroundColor: "#290661", color: "white"}}>
                            <div>
                                <a href={`/champions/${champion.Champions}`}>
                                    <img className="championImage" alt={`${champion.ChampionsNoSpace}`} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${champion.ChampionsNoSpace}_0.jpg`}/>
                                </a>
                            </div>
                            <div>
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
