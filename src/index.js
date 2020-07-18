import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import {
	MuiThemeProvider,
	createMuiTheme,
	responsiveFontSizes
} from '@material-ui/core/styles';

import App from './components/app';
import store from './services/store';
import themes from './theme';

let theme = createMuiTheme({ ...themes });
theme = responsiveFontSizes(theme);

const app = (
	<Provider store={store}>
		<MuiThemeProvider theme={theme}>
			<Router>
				<App />
			</Router>
		</MuiThemeProvider>
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));
