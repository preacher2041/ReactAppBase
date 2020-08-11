export const styles = (theme) => ({
	dialogTitle: {
		width: '464px',
		padding: '24px 24px 24px 24px'
	},
	closeButton: {
		position: 'absolute',
		left: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500]
	},
	dialogText: {
		textAlign: 'center'
	},
	dialogTitleText: {
		fontWeight: 700,
		marginTop: '-7px',
		marginBottom: '12px'
	},
	dialogSubTitleText: {
		fontWeight: 300,
		marginBottom: '-2px'
	},
	dialogContent: {
		width: '464px',
		padding: '0 24px 24px 24px'
	},
	textField: {
		width: '100%',
		height: '48px',
		marginBottom: '24px'
	},
	textFieldInput: {
		'& input': {
			paddingTop: '15px',
			paddingBottom: '15px'
		}
	},
	textFieldIcon: {
		color: '#D8D8DA'
	},
	button: {
		width: '100%',
		height: '48px',
		boxShadow: 'none',
		'&:hover': {
			boxShadow: 'none'
		},
		marginBottom: '10px'
	},
	checkbox: {
		marginBottom: '-11px'
	},
	dialogFooter: {
		width: '464px',
		padding: '24px 24px 24px 24px',
		borderTop: '1px solid #D8D8DA'
	},
	dialogFooterText: {
		textAlign: 'center',
		fontWeight: 300
	},
	dialogFooterLinks: {
		fontWeight: 400
	},
	signInLink: {
		marginTop: '-5px',
		marginBottom: '-2px'
	}
});
