import piggy from "../porco.png";
import React from "react";

class Nav extends React.Component {
  	render() {
  	  return (
    	<div className="navWrapper">
      	  <span className="headerText">Hogwarts</span>
      	  <div className="TwirlyPig">
        	<img src={piggy} className="App-logo" alt="piggy" />
      	  </div>
      	  <span className="normalText">A React App for County Fair Hog Fans</span>
      	  <h5>Filter hogs: </h5>
      		<select onChange={this.props.handleFilterChange}>
      			<option value="none">None</option>
				<option value="name">Sort By Name</option>
				<option value='weight'>Sort By Weight</option>
				<option value="greased">Show Only Greased Hogs</option>
      		</select>
    	</div>
  	  );
  	}
};

export default Nav;
