import React from 'react';
import { connect } from 'react-redux';
import SignedInUserLandingPageSplashView from './signed-in-user-landing-page-splash-view';

const SignedInUserLandingPageSplashRedux = ({userDetails}) => {
	return  (
		<SignedInUserLandingPageSplashView
			userDetails={userDetails}
		/>
	)
};

const mapStateToProps = state => ({
	userDetails: state.userAuthentication.userObj
});

export default connect(mapStateToProps)(SignedInUserLandingPageSplashRedux);