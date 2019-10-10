import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import UpdateUserProfileContainer from './update-user-profile-container';
import { updateNameSubmitted } from '../user-authentication/store/actions';



const UpdateUserProfile = ({history, isSubmitting, updateName}) => {
	return (
		<UpdateUserProfileContainer
			history={history}
			updateName={updateName}
			isSubmitting={isSubmitting}
		/>
	);
};

UpdateUserProfile.propTypes = {
	classes: PropTypes.object,
	updateName: PropTypes.func,
	history: PropTypes.object
};

const mapStateToProps = state => ({
	isSubmitting: state.userAuthentication.isSubmitting
});

const mapDispatchToProps = dispatch => ({
	updateName: (name, history) => dispatch(updateNameSubmitted(name, history))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdateUserProfile));
