import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { Link,  useHistory }  from 'react-router-dom'; 

class Profile extends Component {
  state = {
      email: "",
      name: "",
      lastname: "",
    }
  
  componentDidMount() {
    if (this.props.token) {
      fetch("/profile", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + this.props.token,
        },
      })
      .then((res) => res.json())
      . then (res => this.setState( res));
    }
  }



  render() {
        return (
         
      <List className='{classes.root}'>
      <ListItem>
          <ListItemText primary="Email" secondary={this.state.email}/>
          <ListItemText primary="Name" secondary={this.state.name}/>
          <ListItemText primary="LastName" secondary={this.state.lastname}/>
      </ListItem>
      <Button variant="contained" color="primary" type="submit" name="submit">
      <Link className="" to="/signin">Deconnexion</Link>
      </Button>
  </List>
    );
  }
}
const mapStateToProps = (state) => {
  return { token: state.auth.token };
};

export default connect(mapStateToProps)(Profile);