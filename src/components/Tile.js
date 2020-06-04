import React from 'react';
import ReactDOM from 'react-dom';

export default class Tile extends React.Component {

	state = {
		toggled: true
	};

	getHogImgUrl = () => {
		const name = this.props.name;
		const formattedName = name.toLowerCase().split(' ').join('_');
		const url = require(`../hog-imgs/${formattedName}.jpg`)
		return url
	}

	toggleHogDetails = event => {
		this.setState({
			toggled: !this.state.toggled
		})
	}

	hideTile = event => {
		event.target.parentNode.style.display = 'none'
	}

	getHogDetails = () => {
		return <ul>
			<li><strong>Specialty: </strong>{this.props.specialty}</li>
			<li><strong>Greased? </strong>{this.props.greased ? "yes" : "no"}</li>
			<li><strong>Weight: </strong>{this.props.weight}</li>
			<li><strong>Highest Medal: </strong>{this.props["highest medal achieved"]}</li>
		</ul>
	}

	render() {
		
	return (
		<div className="ui eight wide column" onClick={this.toggleHogDetails}>
			<h3>{this.props.name}</h3>
			{ this.state.toggled ? <img src={this.getHogImgUrl()} /> : this.getHogDetails() }
			<button onClick={this.hideTile}>Hide</button>
		</div>
	)
	}
}
