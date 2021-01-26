import React from 'react';
import champions from '../champions.json';

const ChampionMastery = (props) => {
    
    return (
        <div className="mastery-points">
           
            <div className="d-flex" style={{backgroundColor: "#290661", color: "white", borderColor:"black", display: 'flex', justifyContent: 'center'}}>      
                <h4 style={{color:"white", width:"290px", fontSize: '20px', textAlign: 'center'}}>Champion Mastery Points</h4>
            </div>
 
          {props.getMasteryInfo.map(post => {
              for(let i of champions){
                  if(i.id === post.championId){
                      post.championId = i.champion
                  }
              }
              return(
                <div key={post.championId} >
                    <div className="mastery-champion">      
                                <div style={{alignSelf: 'center', marginLeft: '10px'}}>
                                    <img alt={`${post.championId}`} className="mastery-icon" src={process.env.PUBLIC_URL + `/championicons/${post.championId}.png`}/>
                                </div>
                                <div style={{textAlign: 'right', marginRight: '10px'}}>
                            {post.championId} <br/>
                            Lv.{post.championLevel} <br/>
                                <div style={{fontSize: '28px'}}>
                                    {post.championPoints} 
                                </div>
                                </div>
                    </div>
                </div>
              )
          })} 
        </div> 
    )
}

export default ChampionMastery
