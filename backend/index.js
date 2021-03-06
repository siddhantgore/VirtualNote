const connectToMongo=require('./db');
require("dotenv").config(); // for deployment
connectToMongo();

const express = require('express')
var cors = require('cors')

const app = express()
const port = 5000

app.use(cors())

app.use(express.json()) //required to use req.body

//Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(process.env.PORT || 5000, () => {  //deploymet code
  console.log("VirtualNote app listening")
})