import React, {useState, createContext} from 'react';

export const SummonerContext = createContext();

export const SummonerContextProvider = props => {
    const [summonerName, setSummonerName] = useState(" ");
    const [region, setRegion] = useState("na1");

    return (
        <SummonerContext.Provider value={{summonerName, setSummonerName, region, setRegion}}>
            {props.children}
        </SummonerContext.Provider> 
    )
}