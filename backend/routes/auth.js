const express=require("express");
const User = require("../models/User");
const router=express.Router();
const { body, validationResult } = require('express-validator');

//Create user using POST:"/api/auth" and This endpoint dosen't required authentication
router.post("/",[
    body('name',"Name must be greater than 3 chars").isLength({ min: 3 }),
    body('email',"Enter Valid Email").isEmail(),
    body('password',"Password is too short").isLength({ min: 5 })
],
(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        password: req.body.password,
        email:req.body.email,
      }).then(user => res.json(user))
      .catch(err=>{res.json({error:"Email already exists"})});
})

module.exports=router;