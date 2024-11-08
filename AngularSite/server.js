const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const path = require("path")
const dbinfo = require('./dbinfo')

const app = express()
app.use(cors({origin: ["https://masonclark.us", "http://masonclark.us"]}))

const db = mysql.createConnection({
    host: dbinfo.getHost(),
    user: dbinfo.getUser(),
    password: dbinfo.getPw(),
    database: dbinfo.getDb()
})

app.use(express.static(`${__dirname}/dist/angular-site/browser`))

app.get('/projects', (req, res)=>{
    const sql = "SELECT * FROM projects"
    res.header('Access-Control-Allow-Origin', "*")
    db.query(sql, (err, data)=>{
        if(err){
            return res.json()
        }
        else{
            return res.json(data)
        }
    })
})


app.listen()
