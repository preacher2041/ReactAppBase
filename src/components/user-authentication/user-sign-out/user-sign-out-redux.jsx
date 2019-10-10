import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserSignOutContainer from './user-sign-out-container';
import { signOutSubmitted } from '../store/actions';

const UserSignOut = ({history, signOut}) => (
	<UserSignOutContainer
		signOut={signOut}
		history={history}
	/>
);


UserSignOut.propTypes = {
	history: PropTypes.object,
	signOut: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
	signOut: (history) => dispatch(signOutSubmitted(history))
});

export default withRouter(connect(null, mapDispatchToProps)(UserSignOut));