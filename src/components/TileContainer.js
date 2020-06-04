import React, { Fragment } from "react";
import Tile from './Tile.js';

class TileContainer extends React.Component {
  render() {
    return (
      <div className="ui grid container">
          {
			this.props.hogs.map((hog, index) => {
				return <Tile key={index} {...hog} />
		  })
          }
      </div>
    );
  }
}

export default TileContainer;
