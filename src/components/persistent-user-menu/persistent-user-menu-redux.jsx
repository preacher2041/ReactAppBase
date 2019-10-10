import React from 'react'
import {connect} from 'react-redux';
import PersistentUserMenuView from './persistent-user-menu-view'

const PersistentUserMenuRedux = ({userDetails}) => (
		<PersistentUserMenuView
			userDetails={userDetails}
		/>
);

const mapStateToProps = state => ({
	userDetails: state.userAuthentication.userObj
});

export default connect(mapStateToProps)(PersistentUserMenuRedux);
