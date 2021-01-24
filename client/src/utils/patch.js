import axios from 'axios';


export function getVersion(successcallback, errorcallback){
    axios.get('https://ddragon.leagueoflegends.com/api/versions.json')
    .then(response => {
      if(successcallback != null){
         successcallback(response.data[0]);
      }
    })
    .catch(err => {
      // catch error
      if(errorcallback != null){
         errorcallback(err);
      }
    })
}
