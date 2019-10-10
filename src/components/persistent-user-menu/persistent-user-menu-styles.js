export const styles = (theme) => ({
	drawerPaper: {
		height: `calc(100% - ${theme.globalVariables.appBarHeight})`,
		width: theme.globalVariables.mainMenuDrawerWidth,
		marginTop: theme.globalVariables.appBarHeight,
	},
	user: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},
	avatar: {
		marginBottom: theme.spacing(2),
	},
	listText: {
		textAlign: 'center'
	},
	navLink: {
		textDecoration: 'none',
		color: theme.palette.text.primary,
	},
});