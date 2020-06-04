import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import TileContainer from "./TileContainer";

class App extends Component {

	state = {
		hogs: hogs,
		filter: 'none'
		// none, onlyGreased, name, weightt
	}


	updateFilter = event => {
		const filter = event.target.value;
		let filtered = [...hogs];

		console.log(filter)

		if (filter === 'weight'){
			filtered = filtered.sort((a,b) => a.weight - b.weight)
		} else if (filter === 'name') {
			filtered = filtered.sort((a,b) => a.name - b.name)
		} else if (filter === 'greased') {
			filtered = filtered.filter(hog => hog.greased)
		}
		this.setState({
			hogs: filtered,
			filter: filter
		})
	}

  render() {
    return (
      <div className="App">
        <Nav handleFilterChange={this.updateFilter}/>
        <TileContainer hogs={this.state.hogs} />
      </div>
    );
  }
}

export default App;
