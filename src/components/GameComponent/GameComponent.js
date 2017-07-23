import React, { Component } from 'react';
import { CircularProgress } from 'material-ui/Progress';
import Button from 'material-ui/Button';
import * as localforage from 'localforage';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import styleSheet from './assets/css.js';
import SudokuBoardComponent from '../commonComponents/SudokuBoardComponent/SudokuBoardComponent.js';
import NumberPalleteComponent from './NumberPalleteComponent/NumberPalleteComponent.js';
import isValidSudokuSolution from '../../utils/sudokuChecker.js';


class GameComponent extends Component {
	constructor (props) {
		super (props);
		this.state = {
			selectedCubeIndex : null,
			errorMessage : ''
		};
		this.onClickCubeHandler = this.onClickCubeHandler.bind(this);
		this.onClickNumberHandler = this.onClickNumberHandler.bind(this);
	}
	componentWillMount () {
		const {newGame} = this.props.flags;
		if (newGame) {
			this.props.getNewGame();
		} else {
			localforage.getItem ('previousGameBoard')
			.then ((previousGameBoard) => {
				if (previousGameBoard && previousGameBoard.length) {
					this.props.getPreviousGameBoard();
				} else {
					this.props.getNewGame();
				}
			});
		}
	}
	onClickCubeHandler (selectedCube) {
		if (!selectedCube.fixed) {
			this.setState ({selectedCubeIndex : selectedCube.index, errorMessage : ''});
		}
	}
	onClickNumberHandler (selectedNumber) {
		if (this.state.selectedCubeIndex>=0 && this.state.selectedCubeIndex <=80) {
			this.props.updateCurrentGameBoard (this.state.selectedCubeIndex, selectedNumber);
			this.setState ({selectedCubeIndex : null});
		}
	}
	onClickSubmitGameHandler () {
		let sudokuArray = this._extractSudokuArray();
		if (isValidSudokuSolution (sudokuArray)) {
			this.setState ({errorMessage : 'Game Completed!'});
		} else {
			this.setState ({errorMessage : 'This is not a valid solution.'});
		}
	}
	render() {
		const {gameLoaded} = this.props.flags;
		const {currentGameBoard, classes} = this.props;
		const {selectedCubeIndex, errorMessage} = this.state;


		if (gameLoaded) {
			return (
				<Grid container justify = 'center' className = {classes.root}>

					<Grid item xs = {12} sm = {10} md = {6}>
						<Paper elevation = {4} className = {classes.sudokuContainer} >
							<SudokuBoardComponent 
								selectedCubeIndex = {selectedCubeIndex}
								board = {currentGameBoard}
								onClickCubeHandler = {this.onClickCubeHandler}  />
							<Grid container align = 'center' justify = 'center' gutter = {0}>
								<h2>{errorMessage}</h2>
							</Grid>
						</Paper>

						<Grid item xs = {12} sm = {10} md = {6} className = {classes.bottomContainer}>
							<Paper elevation = {4} className = {classes.sudokuContainer} >
								<NumberPalleteComponent onClickNumberHandler = {this.onClickNumberHandler} />
								<Button 
									className = {classes.submitButton}
									raised 
									color = 'primary'
									onClick = {() => this.onClickSubmitGameHandler()}
								> 
									Submit
								</Button>
							</Paper>
						</Grid>
						

					</Grid>
				</Grid>
			);

		} else {

			return (<CircularProgress />);
		}
		
	}

	_extractSudokuArray () {
		return this.props.currentGameBoard.map ((singleCube) => {
			return singleCube.value;
		})
	}
}

export default withStyles(styleSheet)(GameComponent);
