export const styles = (theme) => ({
	dialogTitle: {
		width: '464px',
		padding: '24px 24px 0 24px'
	},
	closeButton: {
		position: 'absolute',
		left: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500]
	},
	dialog_h2: {
		textAlign: 'center',
		fontWeight: 700,
		marginTop: '-9px'
	},
	dialog_body: {
		textAlign: 'center',
		fontWeight: 300,
		marginTop: '-5px'
	},
	dialogContent: {
		width: '464px',
		padding: '24px'
	},
	textField: {
		width: '100%',
		height: '48px',
		marginBottom: '32px'
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
		}
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
	}
});
