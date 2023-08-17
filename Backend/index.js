console.log("Server started")
import connectToMongo from './db.js';
import authrouter from './routes/auth.js';
connectToMongo();
import express from 'express';
import noterouter from './routes/notes.js';
const app = express()
const port  = 5000;
app.use(express.json())

app.use('/api/auth', authrouter);
app.use('/api/notes', noterouter);



app.listen(port,()=>{
    console.log(`i notebook backend server is running on ${port}`)
})



/*import express from "express";
import { connect } from "mongoose";
const app = express()
connect("mongodb://127.0.0.1:27017/rajat" ,{ useNewUrlParser: true, useUnifiedTopology: true
},).then (()=>console.log('connected successfully')).catch((err)=>{ console.error(err);});


app.get('/',(req, res)=>{
    
    res.send('hello world')
})
app.listen(3000,()=>{
    console.log("on port 3000!!!")
})*/

