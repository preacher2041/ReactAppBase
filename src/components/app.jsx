import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import NavBar from './navBar';
import HomePage from '../pages/home';

const App = () => {
	return (
		<React.Fragment>
			<CssBaseline />
			<NavBar />
			<HomePage/>
		</React.Fragment>
	);
};

export default App;
