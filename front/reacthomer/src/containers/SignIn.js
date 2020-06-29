import React, { Component } from "react";
import { TextField, Button, Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link,  Redirect }  from 'react-router-dom'; 
import { connect } from  'react-redux';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: 300,
//       display: "flex",
//       flexDirection: "column"
//     },
//     '& .MuiButtonBase-root': {
//         marginLeft: theme.spacing(30),
//         marginBottom:  theme.spacing(30),
//         width: 30,
//       },

//   },
// }));

// const classes = useStyles();


class SignIn extends Component {
  state = {
    email: '',
    password: '',
    signin: false,
    flash: "",
    open: false,
  };
 
  // const classes = useStyles(); 
    

   updateField = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value })
};

handleClose = () => {
  this.setState({ open: false, signin: false });
};

handleSubmit = (event) => {
  event.preventDefault();
  const user = {
    email: this.state.email,
    password: this.state.password,
  };

  fetch("/auth/signin", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.hasOwnProperty("user")) {
        this.props.dispatch({
          type: "CREATE_SESSION",
          user: data.user,
          token: data.token,
        });
        this.setState({ flash: data.flash, signin: true });
      } else {
        this.setState({ flash: data.flash, signin: false });
        console.log(this.state.flash);
      }
    })
    .catch((err) => this.setState({ flash: err.flash }));
  this.setState({ open: true });

};

      render() {
        if (this.state.signin === true) {
          // return this.props.history.replace("/")
           return <Redirect to="/" />;
        }
        else {
      return (
        <div>
            {/* <h1>{JSON.stringify(signUP,1,1)}</h1> */}
                <form className='{classes.root}' noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                <TextField id="standard-basic"  label="Email" type="email" name="email" required value={this.state.email} onChange={this.updateField}/>
                <TextField id="standard-basic"  label="Password" type="password" name="password" required value={this.state.password} onChange={this.updateField}/>
                <Button variant="contained" color="primary" type="submit" name="submit">Submit</Button>
                </form>
                <Link className="" to="/signup">Sign Up</Link>
               
               <Snackbar
            open={this.state.open}
            onClose={this.handleClose}
            ContentProps={{
              "aria-describedby": "message-id",
            }}
            message={<span id="message-id">{this.state.flash}</span>}
          />
         
        </div>          
                   
    )}
}}

const mapStateToProps = (state) => {
  return {
    flash: state.auth.token,
  };
};
  export default connect(mapStateToProps)(SignIn);

