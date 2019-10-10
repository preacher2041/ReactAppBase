export default {
	palette: {
		common: {
			black: '#000',
			white: '#fff'
		},
		background: {
			paper: '#fff',
			default: '#fcfcfc'
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
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 1024,
			lg: 1440,
			xl: 1920,
		},
	},
	globalVariables: {
		mainMenuDrawerWidth: '250px',
		persistentUserMenuDrawerWidth: '250px',
		appBarHeight: '64px',
	}
};