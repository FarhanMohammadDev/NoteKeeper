const mongoose = require("mongoose")
const env = require("dotenv")
env.config()

const connexion = mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
  console.log('Connected to MongoDB');
})
.catch((err)=>{
  console.log(`Could not connect to MongoDB: ${err}`);
})
module.exports =connexion;