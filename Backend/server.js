const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (re, res)=>{
    return res.json('From the backend')
})

const db = mysql.createConnection({
    host : 'localhost',
    password : '',
    user : 'root',
    database : 'dcit305'
})

app.get('/workers', (req, res) => {
    const sql = 'SELECT * FROM workers';
    db.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
} )

app.listen('8080', ()=>{
    console.log('Running');
})
