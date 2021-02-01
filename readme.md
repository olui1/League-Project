# League of Legends Hub

Full stack project that allows users to post comments/guides, look up the leaderboard, read up on a champion guide, and search up the profile of a player. Most importantly, this application is mobile responsive as well, which allows all the mentioned features to be done on the go.

## <ins> Breakdown of how each component works </ins>

### **Home**  
Upon user entry into website, the targeted address is "/", in this case "league-hub.herokuapp.com" after deployment. In homepage, users are given the access to perform CRUD operations through posts. Creating or editing a post will redirect to "/posts/create" and "posts/id/update" respectively.

![Homepage](https://i.imgur.com/uzeYXHb.png)

### **User Search**
The user search section prompts the user for a summoner name as well as the region the summoner resides in. The result contains rank information, a match history, and champion mastery.

![Usersearch](https://i.imgur.com/QBp1RCZ.png)

In general the result will look something like this...

![UserProfile](https://i.imgur.com/vF5NkP9.png)

If the summoner doesn't have a rank associated with their profile, a "User has not been placed in a rank yet" will be rendered instead.

![Unranked](https://i.imgur.com/kjxjJEC.png)

### **Leaderboard**
The leaderboard section renders a leaderboard ranking of the top players in the Ranked Solo Queue division.

![Leaderboard](https://i.imgur.com/4tHncBc.png)

### **Champions**
In here, a comprehensive guide of the champions' abilities allows user to pick any champion and read about them 

![ChampionGrid](https://i.imgur.com/8GM9dOx.png)

Clicking a champion redirects the user to something like this...

![Champion](https://i.imgur.com/E6lQh1E.png)

## <ins> Code Breakdown </ins>

### **Frontend**
The frontend component utilzes the React framework to render components mentioned earlier. Instead of taking the Redux approach, Context API, an "alternative" to state management was utilized to pass props to specific components. Instead of making API calls in the frontend component, data was passed to the backend, and from there to retrieve the response to be rendered back at the frontend; this was mainly done to prevent cross origin complications as well as keeping it organized since the database queries/routes are located there as well.

### **Backend & Database**
The backend component consists of the runtime environment Nodejs paired with the backend framework, Express. Through the backend, the mysql database connection is made which allows queries to be made to a database through Amazon RDS. The most important advantage of RDS is that the database is stored in the cloud server, which makes backup and security a lot more promising and efficient.