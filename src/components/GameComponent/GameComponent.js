import React, { Component } from 'react';
import { CircularProgress } from 'material-ui/Progress';
import SudokuBoardComponent from './SudokuBoardComponent/SudokuBoardComponent.js';
import NumberPalleteComponent from './NumberPalleteComponent/NumberPalleteComponent.js';


class HomeComponent extends Component {
	constructor (props) {
		super (props);
		this.state = {
			selectedCubeIndex : null
		};
		this.onClickCubeHandler = this.onClickCubeHandler.bind(this);
		this.onClickNumberHandler = this.onClickNumberHandler.bind(this);
	}
	componentWillMount () {
		const {newGame} = this.props.flags;
		if (newGame) {
			this.props.getNewGame();
		} else {
			console.log ('load old game');
		}
	}
	onClickCubeHandler (selectedCube) {
		console.log (selectedCube);
		if (!selectedCube.fixed) {
			this.setState ({selectedCubeIndex : selectedCube.index})
		}
	}
	onClickNumberHandler (selectedNumber) {
		if (this.state.selectedCubeIndex>=0 && this.state.selectedCubeIndex <=80) {
			this.props.updateCurrentGameBoard (this.state.selectedCubeIndex, selectedNumber);
		}
	}
	render() {
		const {gameLoaded} = this.props.flags;
		const {currentGameBoard} = this.props;
		const {selectedCubeIndex} = this.state;

		if (gameLoaded) {
			return (
				<div>
					<SudokuBoardComponent 
						selectedCubeIndex = {selectedCubeIndex}
						board = {currentGameBoard}
						onClickCubeHandler = {this.onClickCubeHandler}  />
					<NumberPalleteComponent onClickNumberHandler = {this.onClickNumberHandler} />
				</div>
			);

		} else {

			return (<CircularProgress />);
		}
		
	}
}

export default HomeComponent;
