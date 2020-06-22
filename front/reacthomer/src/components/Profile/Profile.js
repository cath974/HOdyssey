import React, { useState } from 'react';
import { List, ListItem, ListItemText, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiListItem-root': {
      margin: theme.spacing(1),
      width: 300,
      display: "flex",
      flexDirection: "column",
      alignItems: "start"
    }
}}));

const Profile = () => {

    const classes = useStyles();
   
    const [ profileUser, setProfileUser ] = useState({
    email: 'homer.simpson@wildcodeschool.fr',
    name:'Homer',
    lastname: 'Simpson',
    }); 

//  const  updateField = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setProfileUser({...profileUser, [name]: value })
//   }

//   const handleSubmit = (event) => {
//       event.preventDefault();
//             //     fetch("/auth/signup",
//             // {
//             //     method:  'PUT',
//             //     headers:  new  Headers({
//             //         'Content-Type':  'application/json'
//             //     }),
//             //     body:  JSON.stringify(profileUser),
//             // })
//             // .then(res  =>  res.json())
//             // .then(
//             //     res  =>  setProfileUser({...profileUser, flash: res.flash }),
//             //     err  =>  setProfileUser({...profileUser, flash: err.flash })
//             // )
//             console.log (profileUser)
//   }


      return (
       
        <List className={classes.root}>
            <ListItem>
                <ListItemText primary="Email" secondary={profileUser.email}/>
                <ListItemText primary="Name" secondary={profileUser.name}/>
                <ListItemText primary="LastName" secondary={profileUser.lastname}/>
            </ListItem>
            <Button variant="contained" color="primary" type="submit" name="submit">
            <Link className="" to="/signin">Deconnexion</Link>
            </Button>
        </List>
                   
    )
}

export default Profile;

