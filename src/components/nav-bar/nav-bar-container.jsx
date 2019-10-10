import React from 'react';
import NavBarView from './nav-bar-view';

const NavBarContainer = ({userIsAuthenticated}) => {

	return (
		<NavBarView userIsAuthenticated={userIsAuthenticated}/>
	);
};

export default NavBarContainer;