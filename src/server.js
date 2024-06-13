import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRouter from "./route/web";
import Connection from "./config/connectDB";
var cors = require('cors')

require('dotenv').config();
const app =express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

viewEngine(app);
initWebRouter(app);
Connection();
const port = process.env.PORT;

app.listen(port ,()=>{
  console.log('dsdsds')
})