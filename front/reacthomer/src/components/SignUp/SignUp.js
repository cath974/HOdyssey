import React, { useState } from 'react';
import { TextField, Button, SnackbarContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 300,
      display: "flex",
      flexDirection: "column"
    },
    '& .MuiButtonBase-root': {
        marginLeft: theme.spacing(30),
        marginBottom:  theme.spacing(30),
        width: 30,
      },

  },
}));

const SignUp = () => {

    const classes = useStyles();
   
    const [ signUP, setSignUp ] = useState({
    email: '',
    password:'',
    passwordbis: '',
    name:'',
    lastname: '',
    flash:''
    }); 

 const  updateField = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setSignUp({...signUP, [name]: value })
  }

  const handleSubmit = (event) => {
      event.preventDefault();
                fetch("/auth/signup",
            {
                method:  'POST',
                headers:  new  Headers({
                    'Content-Type':  'application/json'
                }),
                body:  JSON.stringify(signUP),
            })
            .then(res  =>  res.json())
            .then(
                res  =>  setSignUp({...signUP, flash: res.flash }),
                err  =>  setSignUp({...signUP, flash: err.flash })
            )
            console.log (signUP)
  }


      return (
        <div>
            {/* <h1>{JSON.stringify(signUP,1,1)}</h1> */}
                <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField id="standard-basic"  label="Email" type="email" name="email" required value={signUP.email} onChange={updateField}/>
                <TextField id="standard-basic"  label="Password" type="password" name="password" required value={signUP.password} onChange={updateField}/>
                <TextField id="standard-basic"  label="Password Copy" type="password" name="passwordbis" required value={signUP.passwordbis} onChange={updateField}/>
                <TextField id="standard-basic"  label="Name" type="text" name="name" value={signUP.name} required onChange={updateField}/>
                <TextField id="standard-basic"  label="LastName" type="text" name="lastname" required value={signUP.lastname} onChange={updateField}/>
                <Button variant="contained" color="primary" type="submit" name="submit">Submit</Button>
                </form>
               <div> 
                   {signUP.flash &&  <SnackbarContent message={signUP.flash} />}
               </div>
         
        </div>          
                   
    )
}

export default SignUp;

