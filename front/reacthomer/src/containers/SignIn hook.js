import React, { useState } from 'react';
import { TextField, Button, SnackbarContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link,  useHistory }  from 'react-router-dom'; 
import { connect } from  'react-redux';

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


const SignIn = () => {

    const classes = useStyles();

    const history = useHistory();
   
    const [ signIN, setSignIN ] = useState({
    email: '',
    password:'',
    flash:''
    }); 

 const  updateField = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setSignIN({...signIN, [name]: value })
  }

  const handleSubmit = (event) => {
      event.preventDefault();
     
        fetch("/auth/signin",
            {
                method:  'POST',
                headers:  new  Headers({
                    'Content-Type':  'application/json'
                }),
                body:  JSON.stringify(signIN),
            })
        .then((res) => res.json())
        
        .then (res => {
            console.log(res)
            this.props.dispatch(
                {
                    type : "CREATE_SESSION",
                    user: res.user,
                    token : res.token,
                    message : res.message
                })
                setSignIN({...signIN, flash: res.token })                  
        }
         ) 
          

        .catch(err  => setSignIN({...signIN, flash: err.flash }))
        
            // history.push({pathname: '/profile'})
            console.log (signIN)
  }


      return (
        <div>
            {/* <h1>{JSON.stringify(signUP,1,1)}</h1> */}
                <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField id="standard-basic"  label="Email" type="email" name="email" required value={signIN.email} onChange={updateField}/>
                <TextField id="standard-basic"  label="Password" type="password" name="password" required value={signIN.password} onChange={updateField}/>
                <Button variant="contained" color="primary" type="submit" name="submit">Submit</Button>
                </form>
                <Link className="" to="/signup">Sign Up</Link>
               <div> 
                   {signIN.flash &&  <SnackbarContent message={signIN.flash} />}
               </div>
         
        </div>          
                   
    )
}

const mapStateToProps = (state) => {
    return {
      flash: state.auth.token,
    };
  };
  export default connect(mapStateToProps)(SignIn);

