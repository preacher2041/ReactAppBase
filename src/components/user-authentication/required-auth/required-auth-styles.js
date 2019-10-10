export const styles = (theme) => ({
	root: {
		flexGrow: 1,
		width: '100%',
		[theme.breakpoints.up('lg')]: {
			width: `calc(100% - ${theme.globalVariables.mainMenuDrawerWidth})`,
			marginLeft: theme.globalVariables.mainMenuDrawerWidth,
		},[theme.breakpoints.up('xl')]: {
			width: `calc(100% - ${theme.globalVariables.mainMenuDrawerWidth} - ${theme.globalVariables.persistentUserMenuDrawerWidth})`,
			margin: '0 auto',
		},
	}
});