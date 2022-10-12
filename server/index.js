const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const port = 3001
//add app get section here
app.get("/", (req,res) => {
    res.status(200).json({message: "Node Server is responding."})
})
app.listen(port)