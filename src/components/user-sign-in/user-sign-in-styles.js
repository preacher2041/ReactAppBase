export const styles = theme => ({
	form: {
		width: '100%', // Fix IE11 issue.
		marginTop: theme.spacing(1)
	},
	loginNotice: {
		marginTop: theme.spacing(6),
		marginBottom: theme.spacing(4),
		textAlign: 'center',
		lineHeight: '1.25'
	},
	googleButton: {
		marginTop: theme.spacing(6),
		backgroundColor: "white",
		width: "100%",
		textTransform: "none"
	},
	googleIcon: {
		width: 30,
		marginRight: theme.spacing(2)
	},
	formDividerText: {
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2)
	},
	formDividerContainer: {
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(3),
		display: "flex",
		alignItems: "center"
	},
	formDivider: {
		flexGrow: 1,
		height: 1,
		backgroundColor: theme.palette.text.hint
	},
	textField: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1)
	},
	formButtons: {
		width: "100%",
		marginTop: theme.spacing(4),
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center"
	},
	forgottenPasswordButton: {
		textTransform: "none",
		fontWeight: 400
	},
});