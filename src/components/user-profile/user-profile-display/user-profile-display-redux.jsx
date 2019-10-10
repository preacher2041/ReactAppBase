import React from 'react';
import {connect} from 'react-redux'
import UserProfileDisplayView from './user-profile-display-view';
import { Grid } from '@material-ui/core';

const UserProfileDisplayRedux = ({userDetails}) => {
	return (
		<React.Fragment>
			{/*<Grid item md={3} />*/}
			<Grid item md={12}>
				<UserProfileDisplayView
					userDetails={userDetails}
				/>
			</Grid>
			{/*<Grid item md={3} />*/}
		</React.Fragment>
	)
};

const mapStateToProps = state => ({
	userDetails: state.userAuthentication.userObj
});

export default connect(mapStateToProps)(UserProfileDisplayRedux);