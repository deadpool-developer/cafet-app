const express = require("express");
const mysql=require("mysql");

const app = express();
app.use(express.json());

const db=mysql.createConnection({
    users : "root",
    host :"localhost",
    password:"password",
    database:"LoginSystem",
});

app.listen(3001,()=>
{
    console.log("running server");
})