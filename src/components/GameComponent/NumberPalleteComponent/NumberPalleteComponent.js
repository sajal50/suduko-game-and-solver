import React, { Component } from 'react';
import * as _ from 'lodash';

class NumberPalleteComponent extends Component {
	getNumbers () {
		const numbers = [];
		for (let i = 1; i <= 9; i ++ ) {
			numbers.push (<span key = {i} onClick = {() => this.props.onClickNumberHandler(i)} > {i} </span>);
		}
		return numbers;
	}
	render() {
		return (
			<div>
				<hr/>
				{this.getNumbers()}
			</div>
		);
	}
}

export default NumberPalleteComponent;
