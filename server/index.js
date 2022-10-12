const express = require('express')
const cors = require('cors')

//for database purpose
const mysql = require('mysql2/promise')
const config = require('./config')


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const port = 3001
//add app get section here
app.get("/", async function (req,res){

    try{
        const connection = await mysql.createConnection(config.db)
        const [result,] = await connection.execute('select * from demo')
        if(!result) result = [] //if there is no data return empty array
        res.status(200).json(result)
    }catch(err){
        res.status(500).Json({error: err.message})
    }

    
})
app.listen(port)