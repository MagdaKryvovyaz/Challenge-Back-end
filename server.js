require('./Config/mongoose')
const express = require("express");

const app = express();
const router = require('./Config/router')
// app.use('/public', express.static('public'))

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true})); 
app.use(express.json());  
 
app.use(router) 
app.listen(7000) 