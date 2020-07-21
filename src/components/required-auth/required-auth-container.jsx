import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userFetchProfileData } from '../../services/actions/userAuthActions';

import NavBar from '../nav-bar';
import SignedInUserLandingPage from '../../pages/signed-in-user-landing-page';

const RequiredAuthContainer = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(userFetchProfileData.request());
	}, [dispatch]);

	return (
		<>
			<NavBar />
			<SignedInUserLandingPage />
		</>
	);
};

export default RequiredAuthContainer;
