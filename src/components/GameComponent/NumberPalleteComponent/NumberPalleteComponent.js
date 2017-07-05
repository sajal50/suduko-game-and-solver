import React, { Component } from 'react';
import * as _ from 'lodash';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import styleSheet from './assets/css.js';

class NumberPalleteComponent extends Component {
	getNumbers () {
		const numbers = [];
		for (let i = 1; i <= 9; i ++ ) {
			numbers.push (<span key = {i} onClick = {() => this.props.onClickNumberHandler(i)} > {i} </span>);
		}
		return numbers;
	}
	render() {
		const {classes} = this.props
		return (
			<div className = {classes.root}>
				{this.getNumbers()}
			</div>
		);
	}
}

export default withStyles(styleSheet)(NumberPalleteComponent);
