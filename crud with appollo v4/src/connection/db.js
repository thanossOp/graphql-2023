const mongoose = require('mongoose')
require('dotenv').config()
const db = process.env.DATABASE
mongoose.connect(db).then(()=>{
    console.log('database connected')
})