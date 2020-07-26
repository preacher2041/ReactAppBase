import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import HomePage from '../pages/home-page';
import { Route, Switch } from 'react-router-dom';
import RequiredAuth from './required-auth/required-auth-container';

const App = () => {
	return (
		<React.Fragment>
			<CssBaseline />
			<Switch>
				<Route
					exact
					path="/"
					render={(props) => <HomePage {...props} />}
				/>
				<Route
					path="/auth/home"
					render={(props) => <RequiredAuth {...props} />}></Route>
			</Switch>
		</React.Fragment>
	);
};

export default App;
