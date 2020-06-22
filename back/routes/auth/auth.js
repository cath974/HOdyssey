const express = require('express');
const router = express.Router();
const connection = require('../../helpers/db');

router.post('/signup', function(req, res, next) {
        
        // let userData = req.body;
        const {passwordbis,flash, ...userData} = req.body;
        connection.query('INSERT INTO users SET ?', userData, (err, results) => {
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
    // let userData = req.body;
    // const {passwordbis,flash, ...userData} = req.body;
    // connection.query('INSERT INTO users SET ?', userData, (err, results) => {
    //     if (err) {
    //         return res.status(500).json({
    //           flash: err.message,
    //           sql: err.sql,
    //         });
    //       }
    //         return res
    //           .status(201)
    //           .json({ flash:  `User has been signed up !` });
    //       });
        });           
     
module.exports = router;