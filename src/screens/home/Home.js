import React, { Component } from "react";
import Header from "../../common/header/Header";
import "../../screens/home/Home.css";



 class Home extends Component {
  render() {
    return (
    
      <div>
        <Header />
        <div className="upcoming_movies">
        <span >Upcoming Movies</span>
        </div>
        
    </div>
      

    );
  
}
 }
export default Home;
