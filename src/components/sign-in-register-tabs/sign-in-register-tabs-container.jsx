import React from 'react';
import Tab from '@material-ui/core/Tab';
import SignInRegisterTabsView from './sign-in-register-tabs-view';
import SignInComponent from '../user-authentication/user-sign-in';
import RegistrationComponent from '../user-authentication/user-registration';

const SignInRegisterTabsContainer = ({isSubmitting}) => {
	const props = {
		tabs: [
			<Tab label="Sign-In" key={0}/>,
			<Tab label="Register" key={1}/>
		],
		content: [
			<SignInComponent />,
			<RegistrationComponent />
		],
	};

	return (
		<SignInRegisterTabsView {...props}
			isSubmitting={isSubmitting}
		/>
	);
};

export default SignInRegisterTabsContainer;