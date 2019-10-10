export const styles = theme => ({
	root: {
		flexGrow: 1
	},
	appBar: {
		[theme.breakpoints.up('lg')]: {
			marginLeft: theme.globalVariables.mainMenuDrawerWidth,
			width: `calc(100% - ${theme.globalVariables.mainMenuDrawerWidth})`
		}
	},
	grow: {
		flexGrow: 1,
		textDecoration: 'none'
	},
	title: {
		color: theme.palette.primary.contrastText
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	},
	menuButtonHidden: {
		display: 'none'
	}
});