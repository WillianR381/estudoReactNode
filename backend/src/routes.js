const express = require('express');
const User = require('./model/User')

const routes = express.Router();

routes.post('/api/v1/user/create', async (req,res) => {
  const {email, password}  =  req.body;

  await User.create({
    email,
    password
  }).then( result  => {
    return res.status(200).json({message: 'User created with successfully !'})
  }).catch( error => {
    return res.status(500).json({message: error});
  })

})


routes.post('/api/v1/user/find', async (req,res) => {
  const {email, password} = req.body;

  await User.findOne({
    attributes: ['id','email', 'password'],
    where: { email: email, password: password }
  }).then(result => {
    
    if(result){
      const {id, email, password} = result; 
      const message = `Welcome, your email is ${email}, password is ${password}, id ${id}`
      return res.status(200).json({message})
    }
    return res.status(401).json({message: 'Not autorized'})
  }).catch( error => {
    return res.status(500).json({message: error});
  })



})

module.exports = routes;