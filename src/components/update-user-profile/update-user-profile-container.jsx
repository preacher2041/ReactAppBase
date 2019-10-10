import React, {useState} from 'react';
import UpdateUserProfileView from './update-user-profile-view';

const UpdateUserProfileContainer = ({history, updateName}) => {
	const [name, setName] = useState('');

	const updateNameState = event => {
		setName(event.target.value)
	};

	const setProfileName = () => {
		updateName(name, history);
	};

	return (
		<UpdateUserProfileView
			updateUser={updateNameState}
			setName={setProfileName}
		/>
	);
};

export default UpdateUserProfileContainer;
