
/*const mongoose = require('mongoose')
const mongoURI = "mongodb://127.0.0.1:27017/rajat"
const connectToMongo = () => {
   connect("mongodb://127.0.0.1:27017/rajat", {
      useNewUrlParser: true, useUnifiedTopology: true
   },).then(() => console.log('connected successfully')).catch((err) => { console.error(err); });
}
export default connectToMongo;*/
import { connect } from "mongoose"
const mongoURI = 'mongodb://127.0.0.1:27017/rajat';


async function connectToMongo() {


  await connect(mongoURI);
  console.log('Connected to MongoDB Successfully');
}
export default connectToMongo;