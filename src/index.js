import React from 'react';
import ReactDOM from 'react-dom';
import {Route, HashRouter} from 'react-router-dom';
import {MuiThemeProvider} from 'material-ui/styles';
import injectTapEventPlugin from 'react-tap-event-plugin';

import registerServiceWorker from './registerServiceWorker';
import store  from './store/store.js';
import {Provider} from 'react-redux';
import BaseContainer from './containers/BaseContainer/BaseContainer.js';
import './index.css';
import './globalAssets/roboto.css';
injectTapEventPlugin();

ReactDOM.render(
	<Provider store = {store}>
		<MuiThemeProvider>
			<HashRouter>
				<Route path = '/' component = {BaseContainer}/>
			</HashRouter>
		</MuiThemeProvider>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
