const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: './.env'});

const app = express();
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE
})

const publicDIrectory = path.join(__dirname, './public');
app.use(express.static(publicDIrectory));

app.set('view engine', 'hbs');

db.connect((err) => {
    if (err){
        console.log(err)
    }else{
        console.log('Connected!');
    }
})

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('Listening on port 3000!');
})