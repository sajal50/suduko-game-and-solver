import React, { Component } from 'react';
import Button from 'material-ui/Button';
import {withRouter} from 'react-router-dom';
import * as localforage from 'localforage';

class HomeComponent extends Component {
	constructor (props) {
		super (props);
		this.newGameClickHandler = this.newGameClickHandler.bind(this);
		this.resumeGameClickHandler = this.resumeGameClickHandler.bind(this);
		this.solveClickHandler = this.solveClickHandler.bind(this);
		this.state = {
			isPreviousGameBoardAvailable : false
		};
	}
	componentWillMount () {
		localforage.getItem ('previousGameBoard')
		.then ((previousGameBoard) => {
			if (previousGameBoard && previousGameBoard.length) {
				this.setState({isPreviousGameBoardAvailable:true});
			}
		});
	}
	newGameClickHandler () {
		this.props.setFlags ({newGame : true});
		this.props.history.push('/game');
	}
	resumeGameClickHandler () {
		this.props.setFlags ({newGame : false});
		this.props.history.push('/game');
	}
	solveClickHandler () {
		this.props.history.push('/solve');
	}
	render() {
		const {isPreviousGameBoardAvailable} = this.state;
		return (
			<div>
				<Button onClick = {this.newGameClickHandler} raised color = 'primary'>New Game!</Button>
				<Button raised color = 'accent' onClick = {this.solveClickHandler} >Solver</Button>
				{
					(isPreviousGameBoardAvailable) ?
					<Button raised color = 'primary' onClick = {this.resumeGameClickHandler}>Resume</Button>
					:
					null
				}
			</div>
		);
	}
}

export default withRouter(HomeComponent);
