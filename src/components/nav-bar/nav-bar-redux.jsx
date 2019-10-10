import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBarContainer from './nav-bar-container';

const NavBar = ({userIsAuthenticated}) => {

	return (
		<NavBarContainer userIsAuthenticated={userIsAuthenticated}/>
	);
};

NavBar.propTypes = {
	classes: PropTypes.object,
	signedInUser: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.bool
	])
};

const mapStateToProps = state => ({
	userIsAuthenticated: state.userAuthentication.userIsAuthenticated
});

export default connect(mapStateToProps)(NavBar);
