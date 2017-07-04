import React, { Component } from 'react';
import Button from 'material-ui/Button';
import {withRouter} from 'react-router-dom';

class HomeComponent extends Component {
	constructor (props) {
		super (props);
		this.gameClickHandler = this.gameClickHandler.bind(this);
	}
	gameClickHandler () {
		this.props.history.push('/game');
	}
	render() {
		return (
			<div>
				<Button onClick = {this.gameClickHandler} raised color = 'primary'>New Game!</Button>
				<Button raised color = 'accent'>Solver</Button>
			</div>
		);
	}
}

export default withRouter(HomeComponent);
