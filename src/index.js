import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import {
	MuiThemeProvider,
	createMuiTheme,
	responsiveFontSizes
} from '@material-ui/core/styles';

import App from './components/app';
import store, { history } from './services/store';
import themes from './theme';

let theme = createMuiTheme({ ...themes });
theme = responsiveFontSizes(theme);

const app = (
	<Provider store={store}>
		<MuiThemeProvider theme={theme}>
			<ConnectedRouter history={history}>
				<App />
			</ConnectedRouter>
		</MuiThemeProvider>
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));
