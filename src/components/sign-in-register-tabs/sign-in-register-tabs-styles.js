export const styles = theme => ({
	layout: {
		width: 'auto',
		display: 'block', // Fix IE11 issue.
		marginLeft: theme.spacing(3),
		marginRight: theme.spacing(3),
		marginTop: '15%',
		[theme.breakpoints.down('sm')]: {
			marginTop: '0',
			marginBottom: '5%'
		},
		[theme.breakpoints.up(400 + theme.spacing(3) * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	}
});