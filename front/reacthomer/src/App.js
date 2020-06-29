import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { MuiThemeProvider} from '@material-ui/core/styles';
import { Grid , Paper } from '@material-ui/core';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import Profile from './containers/Profile';
import {  Redirect } from "react-router-dom"
import requireAuth from './hoc/requireAuth';
import requireNotAuth from './hoc/requireNoAuth';


function App() {
  return (

    <div className="App">
              {/* <MuiThemeProvider  > */}
                <Grid  container alignItems='center' style={{ height:  '100%' }}>
                  <Grid  item  xs={12}>
                        <Paper elevation={4} style={{ margin:  32 }}>
                            <Grid  container alignItems='center' justify='center'>
                                <Grid  item  xs={12} sm={6} style={{ 'textAlign':  'center' }}>
                                    <img  src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" alt='homer' />
                                </Grid>  
                                
                                <Grid  item  xs={12} sm={6} >
                                      <Switch>
                                        <Redirect  exact  from='/'  to='/profile'  />
                                        <Route  exact  path="/profile"  component={requireAuth(Profile)}  />
                                        <Route  exact  path="/signin"  component={requireNotAuth(SignIn)}  />
                                        <Route  exact  path="/signup"  component={requireNotAuth(SignUp)}  />
                                      </Switch>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
        {/* </MuiThemeProvider> */}
    </div>
  );
}

export default App;