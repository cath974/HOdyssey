const express = require('express');
const router = express.Router();
const connection = require('../../helpers/db');
const bcrypt=require('bcrypt');
const passport = require('passport');
const jwt = require('jsonwebtoken');


router.post('/signup', function(req, res, next) {
        
  const hash = bcrypt.hashSync(req.body.password, 10);
  //const isSame = bcrypt.compareSync('somePassword', hash)

        // let userData = req.body;
        //const {passwordbis,flash, ...userData} = req.body;
        const { email, name, lastname } = req.body;
        const userValue= [email, hash, name, lastname ]
  
        // connection.query('INSERT INTO users SET ?', userData, (err, results) => {
        connection.query('INSERT INTO users (email, password, name, lastname) VALUES (?, ?, ?, ?)', userValue, (err, results) => {
            if (err) {
                return res.status(500).json({
                  flash: err.message,
                  sql: err.sql,
                });
              }
                return res
                  .status(201)
                  .json({ flash:  `User has been signed up !` });
              });
            });

 
    router.post('/signin', function(req, res, next) {
          passport.authenticate('local',(err, user, info) => { 
            if(err) return res.status(500).send(err) 
            if (!user) return res.status(400).json({message: info.message});  
            // return res.json({user}); 
            const token = jwt.sign(JSON.stringify(user), 'coucou');  
            return res.json({user, token}); 
        })(req, res);
      })
   
            
     
module.exports = router;