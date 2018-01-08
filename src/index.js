import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Week from './containers/dashboard-content/week';
import Month from './containers/dashboard-content/month';
import Today from './containers/dashboard-content/today';
import Dashboard from './containers/dashboard';



const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<BrowserRouter>
					  <Route path="/" component={Dashboard} />				
			</BrowserRouter>
		)
	};
}

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<App/>
	</Provider>,
	document.querySelector('.container'));