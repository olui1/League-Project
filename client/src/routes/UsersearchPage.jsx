import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { SummonerContext } from '../context/SummonerContext';


const UsersearchPage = (props) => {
    const {summonerName, setSummonerName, region, setRegion} = useContext(SummonerContext);
    let history = useHistory();

    const handleUpdate = (e) => {
        setSummonerName(e.target.value)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') 
            history.push(`/searchUser/${region}/${summonerName}`);
    }

    return (
        <div className="search-form">
           <div className="search-box">
            <div className="region-box">   
            <select value={region} onChange={(e) => setRegion(e.target.value)} className="form-select form-select-sm" aria-label="Default select example" style={{height: '49px'}}>
                <option defaultValue value="na1">NA</option>
                <option value="euw1">EUW</option>
                <option value="kr">KR</option>
                <option value="jp1">JP</option>
            </select>
            </div>
            <div className="input-box"> 
                <input placeholder="Enter Summoner Name" onKeyDown={handleKeyDown} onChange={handleUpdate} className="form-control form-control-lg" type="text"/>
            </div>
            </div>
        </div>
    )
}

export default UsersearchPage
