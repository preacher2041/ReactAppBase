import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import HomePage from '../pages/home-page';
import { Route, Switch } from 'react-router-dom';
import RequiredAuth from './user-authentication/required-auth';

const App = () => {
	return (
		<React.Fragment>
			<CssBaseline />
			<Switch>
				<Route exact path="/" render={props => <HomePage {...props} />} />
				<Route path="/auth" render={props => <RequiredAuth {...props} />} />
			</Switch>
		</React.Fragment>
	)
};

export default App;