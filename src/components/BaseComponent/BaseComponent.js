import React from 'react';
import HomeContainer from '../../containers/HomeContainer/HomeContainer.js';
import GameContainer from '../../containers/GameContainer/GameContainer.js';
import {Route, Redirect} from 'react-router-dom';


class BaseComponent extends React.Component {

	componentWillMount () {
		this.props.fetchNewGame ();
		this.props.fetchPreviousGameIfAny ();
	}
	render () {

		return (
			<div>
				<Route path = '/home' component={HomeContainer} />
				<Route path = '/game' component={GameContainer} />
			</div>

		);
	}
}

export default BaseComponent;
