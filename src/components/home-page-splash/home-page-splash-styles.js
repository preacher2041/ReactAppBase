export const styles = (theme) => ({
	container: {
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		backgroundColor: theme.palette.primary.main,
		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
	},
	h2: {
		color: theme.palette.primary.contrastText
	}
});
