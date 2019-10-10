import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setPersistedUserStatus } from '../store/actions';
import RequiredAuthContainer from './required-auth-container';

const RequiredAuth = ({match: {path}, setPersistedUserStatus, userIsAuthenticated}) => (
	<RequiredAuthContainer
		path={path}
		setPersistedUserStatus={setPersistedUserStatus}
		userIsAuthenticated={userIsAuthenticated}
	/>
);

RequiredAuth.propTypes = {
	path: PropTypes.object,
	userIsAuthenticated: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.string
	]),
	setPersistedUserStatus: PropTypes.func
};

const mapStateToProps = state => ({
	userIsAuthenticated: state.userAuthentication.userIsAuthenticated
});

const mapDispatchToProps = dispatch => ({
	setPersistedUserStatus: (status, user) => dispatch(setPersistedUserStatus(status, user))
});

export default connect(mapStateToProps, mapDispatchToProps)(RequiredAuth);