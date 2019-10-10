import React from 'react';
import {Avatar, Button, Drawer, Hidden, List, ListItem, ListItemText, Typography, withStyles} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import {styles} from './persistent-user-menu-styles';
import Divider from '@material-ui/core/Divider';

const PersistentUserMenuView = ({classes, userDetails}) => {
	console.log('User Details View: ', userDetails);
	return (
		<div >
			<Hidden lgDown>
				<Drawer variant='permanent' anchor='right' open  classes={{
					paper: classes.drawerPaper,
				}}>
					<div className={classes.user}>
						{!userDetails.photoURL ? (
							<Avatar className={classes.avatar}>LH</Avatar>
						) : (
							<Avatar src={userDetails.photoURL} className={classes.avatar} />
						)}
						<Typography variant='h6'>
							{userDetails.displayName}
						</Typography>
						<Typography variant='body2'>
							{userDetails.email}
						</Typography>
					</div>
					<Divider variant='middle' />
						<List>
							<ListItem>
								<ListItemText classes={{
									root: classes.listText
								}}>
									<NavLink to='/auth/my-profile' className={classes.navLink}>
										My Profile
									</NavLink>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText classes={{
									root: classes.listText
								}}>
									<NavLink to='/auth/update-profile' className={classes.navLink}>
										Update Profile
									</NavLink>
								</ListItemText>
							</ListItem>
						</List>
					<Divider variant='middle' />
					<Button>Sign Out</Button>
				</Drawer>
			</Hidden>
		</div>
	)
};

export default withStyles(styles)(PersistentUserMenuView);