export default {
	palette: {
		common: {
			black: '#000000',
			white: '#F7F7F7'
		},
		background: {
			paper: '#F7F7F7',
			default: '#fcfcfc'
		},
		primary: {
			light: '#355975',
			main: '#003049',
			dark: '#000722',
			contrastText: '#fff'
		},
		secondary: {
			light: '#FFB042',
			main: '#F77F00',
			dark: '#BD5000',
			contrastText: '#fff'
		},
		error: {
			light: '#ff6152',
			main: '#d62828',
			dark: '#9c0000',
			contrastText: '#fff'
		},
		text: {
			primary: '#0C0C0C',
			secondary: 'rgba(0, 0, 0, 0.54)',
			disabled: '#D8D8DA',
			hint: 'rgba(0, 0, 0, 0.38)'
		}
	},
	typography: {
		useNextVariants: true,
		fontFamily: [
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"'
		].join(','),

		h1: {
			fontSize: '3.052em',
			marginTop: 0,
			fontWeight: 400,
			lineHeight: 1.15
		},
		h2: {
			fontSize: '2.441em',
			margin: '2.75rem 0 1.05rem',
			fontWeight: 400,
			lineHeight: 1.15
		},
		h3: {
			fontSize: '1.953em',
			margin: '2.75rem 0 1.05rem',
			fontWeight: 400,
			lineHeight: 1.15
		},
		h4: {
			fontSize: '1.563em',
			margin: '2.75rem 0 1.05rem',
			fontWeight: 400,
			lineHeight: 1.15
		},
		h5: {
			fontSize: '1.25em',
			margin: '2.75rem 0 1.05rem',
			fontWeight: 400,
			lineHeight: 1.15
		}
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 1024,
			lg: 1440,
			xl: 1920
		}
	}
};
