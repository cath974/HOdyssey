import React, { useState } from 'react';

const SignUp = () => {
   
    const [ signUP, setSignUp ] = useState({
    email: '',
    password:'',
    passwordbis: '',
    name:'',
    lastname: ''
    }); 

 const  updateField = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setSignUp({...signUP, [name]: value })
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      console.log (signUP)
  }


      return (
        <div>
            <h1>{JSON.stringify(signUP,1,1)}</h1>
                <form onSubmit={handleSubmit}>
                <input type="email" name="email" value={signUP.email} onChange={updateField}/>
                <input type="password" name="password" value={signUP.password} onChange={updateField}/>
                <input type="password" name="passwordbis" value={signUP.passwordbis} onChange={updateField}/>
                <input type="text" name="name" value={signUP.name} onChange={updateField}/>
                <input type="text" name="lastname" value={signUP.lastname} onChange={updateField}/>
                <input type="submit" name="submit"/>
                </form>
                       
        </div>          
                   
    )
}

export default SignUp;