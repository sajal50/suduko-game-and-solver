import React, { Component } from 'react';
import { CircularProgress } from 'material-ui/Progress';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import styleSheet from './assets/css.js';
import SudokuBoardComponent from '../commonComponents/SudokuBoardComponent/SudokuBoardComponent.js';
import TextField from 'material-ui/TextField';
import solver from './solver/solver.js';



class GameComponent extends Component {
	constructor (props) {
		super (props);
		this.state = {
			board : null
		};
	}
	onClickSolveGameHandler () {
		let sudokuStringToBeSolved = this.sudokuStringRef.value;
		let board = [];

		try {
			let solvedString = solver (sudokuStringToBeSolved);
			solvedString = solvedString.split("");
			board = solvedString.map((singleValue, index) => {
				return {
					value : +singleValue,
					index
				};
			});
		} catch (e) {
			console.log (e);
		}
		this.setState ({board});
	}
	render() {
		let {classes} = this.props;
		return (
			<Grid container justify = 'center' className = {classes.root}>

				<Grid item xs = {12} sm = {10} md = {6}>
					<Paper elevation = {4} className = {classes.sudokuContainer} >
						<SudokuBoardComponent board = {this.state.board} />
					</Paper>
					<Grid item xs = {12} sm = {10} md = {6} className = {classes.bottomContainer}>
							<Paper elevation = {4} className = {classes.sudokuContainer} >
								<div className = {classes.helperText} >
									<h3>Sample Sudoku</h3>003020600900305001001806400008102900700000008006708200002609500800203009005010300
									<div><i>0 represents unfilled spots.</i></div>
								</div>
								<TextField
						          id="sudokuString"
						          label="Enter a Sudoku Puzzle"
						          type="text"
						          helperText=""
						          inputRef = {(ref) => this.sudokuStringRef = ref}
						          className = {classes.inputSudokuString}

						        />
								<Button 
									className = {classes.submitButton}
									raised 
									color = 'primary'
									onClick = {() => this.onClickSolveGameHandler()}
								> 
									Solve
								</Button>
							</Paper>
					</Grid>
				</Grid>
			</Grid>
		);
		
	}
}

export default withStyles(styleSheet)(GameComponent);
