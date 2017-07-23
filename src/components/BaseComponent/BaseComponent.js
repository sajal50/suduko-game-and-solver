import React from 'react';
import HomeContainer from '../../containers/HomeContainer/HomeContainer.js';
import GameContainer from '../../containers/GameContainer/GameContainer.js';
import SolverComponent from '../../components/SolverComponent/SolverComponent.js';
import {Route, Switch, Redirect} from 'react-router-dom';


class BaseComponent extends React.Component {

	componentWillMount () {
		this.props.fetchNewGame ();
	}
	render () {

		return (
			<div>
				<Switch>
					<Route path = '/home' component={HomeContainer} />
					<Route path = '/game' component={GameContainer} />
					<Route path = '/solve' component={SolverComponent} />
					<Redirect from = '/' to = '/home' />
					<Route from='*' component={HomeContainer}/>
				</Switch>
			</div>

		);
	}
}

export default BaseComponent;
