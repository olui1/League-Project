import React, { useState } from 'react';
import { getVersion } from '../utils/patch';

const UserResultPageHeader = (props) => {

    const{name, profileIconId} = props.getSummonerInfo;
    var [currentVersion, setcurrentVersion] = useState('');
   
    const version = () => {
        getVersion((response) => {
              // Success
              setcurrentVersion(response);
          },(err) => {
              // Error
              alert(err);
          })  
    } 
    version()
    return (
        <div className="d-flex flex-row ms-5 me-5 mt-5">
           
            <div> 
                <img src={`http://ddragon.leagueoflegends.com/cdn/${currentVersion}/img/profileicon/${profileIconId}.png`} style={{height: '100px', width: '100px'}}/>
            </div>
            <div className="mt-3 ms-3 text-center" style={{color: 'white', fontSize: '230%'}}>
                {name}
            </div>
        </div>
    )
}

export default UserResultPageHeader
