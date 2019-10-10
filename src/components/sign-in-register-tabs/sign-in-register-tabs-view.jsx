import React, {useState} from 'react';
import {CircularProgress, Tabs} from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import { styles } from './sign-in-register-tabs-styles';

const SignInRegisterTabsView = ({classes, tabs, content, isSubmitting}) => {
	const [tabValue, setTabValue] = useState(0);

	const handleChange = (event, value) => {
		setTabValue(value);
	};

	if (isSubmitting) {
		return (
			<main className={classes.layout}>
				<CircularProgress />
			</main>
		)
	} else {
		return (
			<main className={classes.layout}>
				<Tabs
					variant='fullWidth'
					value={tabValue}
					onChange={handleChange}
				>
					{tabs.map(tab => tab)}
				</Tabs>
				{content.map((content, key) => {
					const Content = () => content;

					return tabValue === key ? <Content key={key} /> : null;
				})}
			</main>
		);
	}


};

export default withStyles(styles)(SignInRegisterTabsView);