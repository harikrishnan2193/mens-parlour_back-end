const mongoose = require('mongoose')

const connectString = process.env.CONNECTION_STRING

mongoose.connect(connectString).then(()=>{
    console.log('MongoDB connected successfully');
    
}).catch((err)=>{
    console.log(`MongoDB connection failed dew to : ${err}`);
    
})