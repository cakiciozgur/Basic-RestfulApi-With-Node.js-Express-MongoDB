const express= require('express');
const app =express();
const mongoose=require('mongoose');
const cors=require('cors');
const bodyParser=require('body-parser')
require('dotenv/config')

//middlewares
app.use(cors());
app.use(bodyParser.json());

// import route
const postsRoute=require('./routes/posts');
app.use('/posts',postsRoute);   

//route 
app.get('/',(req,res)=>{
    res.send('we are at home')
});

mongoose.connect(
process.env.DB_CONNECTION,
{ useNewUrlParser: true },
()=>{console.log('Connect to DB!');})

app.listen(3000);