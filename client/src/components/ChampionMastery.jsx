import React from 'react';
import champions from '../champions.json';

const ChampionMastery = (props) => {
    
    return (
        <div className="mastery-points">
            <div className="d-flex justify-content-start">
            <div className="d-flex rounded" style={{backgroundColor: "#290661", color: "white", borderColor:"black", width: '290px', display: 'flex', justifyContent: 'center'}}>      
                <h4 style={{color:"white", fontSize: '20px', alignSelf: 'center'}}>Champion Mastery Points</h4>
            </div>
            </div>
          {props.getMasteryInfo.map(post => {
              for(let i of champions){
                  if(i.id === post.championId){
                      post.championId = i.champion
                  }
              }
              return(
                <div key={post.championId} className="d-flex justify-content-start">
                    <div className="d-flex p-3 rounded" style={{backgroundColor: "#290661", color: "white", borderColor:"black", width: '290px', display: 'flex', justifyContent: 'space-between'}}>      
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
