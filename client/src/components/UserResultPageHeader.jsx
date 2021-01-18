import React from 'react';

const UserResultPageHeader = (props) => {
    const{name, profileIconId} = props.getSummonerInfo;
    return (
        <div className="d-flex flex-row mt-5">
            <div> 
                <img src={`http://ddragon.leagueoflegends.com/cdn/11.1.1/img/profileicon/${profileIconId}.png`} style={{height: '100px', width: '100px'}}/>
            </div>
            <div className="mt-3 ms-3 text-center" style={{color: 'white', fontSize: '230%'}}>
                {name}
            </div>
        </div>
    )
}

export default UserResultPageHeader
