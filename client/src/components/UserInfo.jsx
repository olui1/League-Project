import React from 'react';

const UserInfo = (props) => {

const winrate = (wins, losses) => {
    return Math.round((wins/(wins + losses))*100)
}

if(props.getRankInfo != null){
    if(props.getRankInfo.length > 1){
        const{wins, losses, tier, rank, leaguePoints} = props.getRankInfo[1];
        return(
            <>
            <div className="d-flex justify-content-start mt-3 mb-3 rounded" >
                <div className="d-flex flex-fill p-4 rounded" style={{backgroundColor: "#290661", color: "white", borderColor:"black", width: '290px'}}>
                    <div style={{alignSelf: 'center'}}>
                        <img className="rank-emblem" src={process.env.PUBLIC_URL + `/rankicons/${tier}.png`}/>
                    </div>
                    <div className="ms-3">
                        Ranked Solo<br/>
                        {tier} {rank}<br/>
                        {leaguePoints} LP<br/>
                        W:{wins} / L:{losses} WR:{winrate(wins, losses)}%
                    </div>    
                </div>
            </div>
            <div className="d-flex justify-content-start mt-3 mb-3 rounded" >    
                <div className="d-flex flex-fill p-4 rounded" style={{backgroundColor: "#290661", color: "white", borderColor:"black", width: '290px'}}>
                    <div style={{alignSelf: 'center'}}>
                        <img className="rank-emblem" src={process.env.PUBLIC_URL + `/rankicons/${props.getRankInfo[0].tier}.png`}/>
                    </div>
                    <div className="ms-3">
                        Ranked Flex<br/>
                        {props.getRankInfo[0].tier} {props.getRankInfo[0].rank}<br/>
                        {props.getRankInfo[0].leaguePoints} LP<br/>
                        W:{props.getRankInfo[0].wins} / L:{props.getRankInfo[0].losses} WR:{winrate(props.getRankInfo[0].wins, props.getRankInfo[0].losses)}%
                    </div>    
                </div>
            </div>
            </>
        )
    }
    else{
        const{wins, losses, tier, rank, leaguePoints} = props.getRankInfo;
        return (
            <div className="d-flex justify-content-start mt-3 mb-3 rounded">
                <div className="d-flex flex-fill p-4 rounded" style={{backgroundColor: "#290661", color: "white", borderColor:"black", width: '290px'}}>
                    <div style={{alignSelf: 'center'}}>
                        <img className="rank-emblem" src={process.env.PUBLIC_URL + `/rankicons/${tier}.png`}/>
                    </div>
                    <div className="ms-3">
                        Ranked Solo<br/>
                        {tier} {rank}<br/>
                        {leaguePoints} LP<br/>
                        W:{wins} / L:{losses} WR:{winrate(wins, losses)}%
                    </div>    
                </div>
            </div>
        )
    }
}
else{
    return (
    <div className="d-flex justify-content-start mt-3 mb-3 rounded" >
        <div className="d-flex flex-fill p-4 rounded" style={{backgroundColor: "#290661", color: "white", borderColor:"black", width: '290px'}}>
            User has not been placed in a rank yet
        </div>
    </div>) 
}
}

export default UserInfo
