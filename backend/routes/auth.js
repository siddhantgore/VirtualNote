const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const { findOne } = require("../models/User");
const { response } = require("express");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRETE="this-is-secrete"
//Create user using POST:"/api/auth/createuser" and This endpoint dosen't required authentication
router.post(
  "/createuser",
  [
    //validation of data send by user
    body("name", "Name must be greater than 3 chars").isLength({ min: 3 }),
    body("email", "Enter Valid Email").isEmail(),
    body("password", "Password is too short").isLength({ min: 5 }),
  ],

  //this calback function inside router.post methode
  async (req, res) => {

    //generate error if data validation fails
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //try & catch block to handle any error during backend and database communication
    try {
      let user = await User.findOne({ email: req.body.email });

      //if email alredy exist then return the error & also return from the function
      if (user) {
        return res.status(400).json("Email already exists");
      }
      const salt=await bcrypt.genSalt(10);
      const secPass=await bcrypt.hash(req.body.password,salt);

      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });

      const data={
        user:{
          name:user.name,
          password:user.password
        }
      }
      const auth_token=jwt.sign(data,SECRETE)
      res.json({auth_token})
    } 
    catch (error) {
      console.log(error.message);
      res.status(500).send("Some Error Occured")
    }
  }
);

module.exports = router;
//code by siddhant gore