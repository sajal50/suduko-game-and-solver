import React, { Component } from 'react';
import * as _ from 'lodash';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import styleSheet from './assets/css.js';
import classnames from 'classnames';

class SudokuBoardComponent extends Component {
	
	getAllCubes (board) {
		let rows = _.chunk (board, 9);
		return rows.map ((singleRow, rowIndex) => {
			return (
				<div key = {rowIndex} >
					<Grid container align = 'center' justify = 'center' gutter = {0}>
						{
							singleRow.map ((singleCube, cubeIndex) => {
								return (
									<Grid item xs = {1} key = {cubeIndex}>
										<div className = {classnames(this._getClassForCube(singleCube))}
											key = {cubeIndex}
											onClick = {() => this.props.onClickCubeHandler(singleCube)}
										> 
											<span 
												className = {classnames(this._getClassForValue(singleCube.value))}
											>
											{singleCube.value}
											</span>
										</div>
									</Grid>
								);
							})
						}
					</Grid>
				</div>
				);
			
		});
	}
	_getClassForValue (value) {
		const classes = {};
		classes[this.props.classes.hidden] = !value;
		return classes;
	}
	_getClassForCube (cube) {
		const {singleCube, fixed,
			selected,
			outerBorderLeft, outerBorderRight, outerBorderBottom, outerBorderTop,
			innerBoxLeft,innerBoxTop

		} = this.props.classes;
		const classes = {
		};
		classes[singleCube] = true;
		classes[fixed] = cube.fixed;
		classes[selected] = cube.index === this.props.selectedCubeIndex;

		classes[innerBoxLeft] = this._isInnerBoxLeft (cube.index);
		classes[innerBoxTop] = this._isInnerBoxTop (cube.index);

		classes[outerBorderLeft] = this._isOuterBorderLeft (cube.index);
		classes[outerBorderRight] = this._isOuterBorderRight (cube.index);
		classes[outerBorderTop] = this._isOuterBorderTop (cube.index);
		classes[outerBorderBottom] = this._isOuterBorderBottom (cube.index);

		return classes;
	}
	_isInnerBoxLeft (index) {
		const set = new Set([3,12,21,30,39,48,57,66,75,6,15,24,33,42,51,60,69,78]);
		return set.has(index);
	}
	_isInnerBoxTop (index) {
		const set = new Set([27,28,29,30,31,32,33,34,35,54,55,56,57,58,59,60,61,62]);
		return set.has(index);
	}
	_isOuterBorderLeft (index) {
		const set = new Set([0,9,18,27,36,45,54,63,72]);
		return set.has(index);
	}
	_isOuterBorderRight (index) {
		const set = new Set([8,17,26,35,44,53,62,71,80]);
		return set.has(index);
	}
	_isOuterBorderBottom (index) {
		const set = new Set([72,73,74,75,76,77,78,79,80]);
		return set.has(index);
	}
	_isOuterBorderTop (index) {
		const set = new Set([0,1,2,3,4,5,6,7,8]);
		return set.has(index);
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

export default withStyles(styleSheet)(SudokuBoardComponent);