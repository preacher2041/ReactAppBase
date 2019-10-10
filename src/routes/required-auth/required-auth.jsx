import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../../pages/signed-in-user-landing-page';
import UpdateProfile from '../../components/update-user-profile/update-user-profile-container';
import UserProfile from '../../pages/user-profile-page';

const RequiredAuthRoutes = ({path}) => {
	return (
		<Switch>
			<Route path={`${path}/home`} component={Home}/>
			<Route path={`${path}/update-profile`} component={UpdateProfile}/>
			<Route path={`${path}/my-profile`} component={UserProfile}/>
		</Switch>
	)
};

export default RequiredAuthRoutes;