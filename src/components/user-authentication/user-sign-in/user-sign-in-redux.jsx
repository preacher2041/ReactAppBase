import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { signInWithGoogleSubmitted, signInWithCredentialsSubmitted } from '../store/actions';
import UserSignInContainer from './user-sign-in-container';

const UserSignIn = ({history, signInWithCredentials, signInWithGoogle, isSubmitting}) => {
	return (
		<UserSignInContainer
			history={history}
			signInWithCredentials={signInWithCredentials}
			signInWithGoogle={signInWithGoogle}
			isSubmitting={isSubmitting}
		/>
	);
};

UserSignIn.propTypes = {
	history: PropTypes.object,
	isSubmitting: PropTypes.bool,
	signInWithGoogle: PropTypes.func,
	signInWithCredentials: PropTypes.func
};

const mapStateToProps = state => ({
	isSubmitting: state.userAuthentication.isSubmitting
});

const mapDispatchToProps = dispatch => ({
	signInWithGoogle: (history) => dispatch(signInWithGoogleSubmitted(history)),
	signInWithCredentials: (email, password, history) => dispatch(signInWithCredentialsSubmitted(email, password, history))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserSignIn));
