import React, { Component } from 'react'

export default class UserProfile extends Component {
  
	render() {
      
      const users = this.props.users;  
  	  const movies = this.props.movies;
      const profiles = this.props.profiles;
      //Jane Cruz's favorite movie is Planet Earth 1.
	  return (
      	<ul>
        	{profiles.map((profile) => {
      			const userName = users[profile.userID].name;
      			const favMovie = movies[profile.favoriteMovieID];
        		
        		return (
                  <li key={profile.id}><p>
                  		{
                  			`${userName}'s favorite movie is ${favMovie}.` 
    					} 
        			</p></li>	
      			)})}
        </ul>
      );
    }
}
