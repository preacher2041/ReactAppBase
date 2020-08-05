import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import NavBar from './NavBar';
import HomePage from '../pages/Home';

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
