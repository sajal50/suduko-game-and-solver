import React, { Component } from 'react';
import * as _ from 'lodash';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import styleSheet from './assets/css.js';

class NumberPalleteComponent extends Component {
	getNumbers () {
		const numbers = [];
		for (let i = 1; i <= 9; i ++ ) {
			numbers.push (
				<Grid
					item 
					className = {this.props.classes.number} 
					xs = {1} 
					key = {i} 
					onClick = {() => this.props.onClickNumberHandler(i)} 
					> {i} 
				</Grid>
				);
		}
		return numbers;
	}
	render() {
		const {classes} = this.props
		return (
			<Grid container justify = 'center' className = {classes.root}>
				{this.getNumbers()}
			</Grid>
		);
	}
}

export default withStyles(styleSheet)(NumberPalleteComponent);
