export const styles = theme => ({
	paper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`
	},
	form: {
		width: '100%', // Fix IE11 issue.
		marginTop: theme.spacing(1)
	},
	textField: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1)
	},
	button: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1)
	},
	rightIcon: {
		marginLeft: theme.spacing(1)
	},
	progress: {
		margin: theme.spacing(2)
	}
});