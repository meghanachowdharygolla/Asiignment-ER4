const express = require('express');
const UserLog = require('../models/user');
const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const users = await UserLog.getAllUsers();
      res.send(users);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/login', async (req, res) => {
    try {
      let user = await UserLog.login(req.body);
      res.send({...user, password: undefined})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })


  
module.exports = router;

