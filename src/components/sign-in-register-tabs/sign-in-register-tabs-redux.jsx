import React from 'react';
import {connect} from 'react-redux';
import SignInRegisterTabsContainer from './sign-in-register-tabs-container';

const SignInRegisterTabs = ({isSubmitting}) => (
	<SignInRegisterTabsContainer
		isSubmitting={isSubmitting}
	/>
);

const mapStateToProps = state => ({
	isSubmitting: state.userAuthentication.isSubmitting
});

export default connect(mapStateToProps)(SignInRegisterTabs);