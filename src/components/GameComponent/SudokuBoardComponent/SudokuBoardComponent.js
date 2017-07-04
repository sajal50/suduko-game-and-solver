import React, { Component } from 'react';
import * as _ from 'lodash';

class SudokuBoardComponent extends Component {
	
	getAllCubes (board) {
		let rows = _.chunk (board, 9);
		return rows.map ((singleRow, rowIndex) => {
			return (
				<div key = {rowIndex} >
					{
						singleRow.map ((singleCube, cubeIndex) => {
							return (
								<span 
									key = {cubeIndex}
									onClick = {() => this.props.onClickCubeHandler(singleCube)}
								> 
									{
										(singleCube.index === this.props.selectedCubeIndex) ?
										 <b>{singleCube.value}</b>  :
										 singleCube.value
									}
								</span>
							);
						})
					}
				</div>
				);
			
		});
	}
	render() {
		const {board} = this.props;
		return (
			<div>
				{this.getAllCubes(board)}
			</div>
		);
	}
}

export default SudokuBoardComponent;
