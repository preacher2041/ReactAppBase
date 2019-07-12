import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import App from './components/app';
import store from './config/store';

const theme = createMuiTheme({
	palette: {
		common: {
			black: '#000',
			white: '#fff'
		},
		background: {
			paper: '#fff',
			default: '#fafafa'
		},
		primary: {
			light: '#c54949',
			main: '#b71c1c',
			dark: '#801313',
			contrastText: '#fff'
		},
		secondary: {
			light: '#86b25f',
			main: '#689f38',
			dark: '#486f27',
			contrastText: '#fff'
		},
		error: {
			light: '#e57373',
			main: '#f44336',
			dark: '#d32f2f',
			contrastText: '#fff'
		},
		text: {
			primary: 'rgba(0, 0, 0, 0.87)',
			secondary: 'rgba(0, 0, 0, 0.54)',
			disabled: 'rgba(0, 0, 0, 0.38)',
			hint: 'rgba(0, 0, 0, 0.38)'
		}
	},
	typography: {
		useNextVariants: true,
		fontFamily: [
			'hack',
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
	},
});

const app = <Provider store={store}>
	<MuiThemeProvider theme={theme}>
		<Router>
			<App />
		</Router>
	</MuiThemeProvider>
</Provider>;

ReactDOM.render(app, document.getElementById('root'));