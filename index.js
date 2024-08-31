require('dotenv').config()

require('./Db/connection')

const express = require('express')

const cors = require('cors')

const router = require('./Routing/routing')

const parlourServer = express()

parlourServer.use(cors())

parlourServer.use(express.json())

parlourServer.use(router)

const PORT = 5000 || process.env

parlourServer.listen(PORT,()=>{
    console.log(`server runnig successfully at port number ${PORT}`);    
})

parlourServer.get('/',(req,res)=>{
    res.send(`<h1>Server running successfully and ready to accept client request</h1>`)
})