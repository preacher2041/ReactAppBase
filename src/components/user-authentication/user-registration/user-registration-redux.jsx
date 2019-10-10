import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { registerNewUser, signInWithGoogleSubmitted } from '../store/actions';
import UserRegistrationContainer from './user-registration-container';

const UserRegistration = ({history, register, signInWithGoogle}) => (
	<UserRegistrationContainer
		history={history}
		register={register}
		signInWithGoogle={signInWithGoogle}
	/>
);

UserRegistration.propTypes = {
	classes: PropTypes.object,
	register: PropTypes.func,
	history: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
	register: (email, password, history) => dispatch(registerNewUser(email, password, history)),
	signInWithGoogle: (history) => dispatch(signInWithGoogleSubmitted(history)),
});

export default withRouter(connect(null, mapDispatchToProps)(UserRegistration));