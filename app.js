const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');


const api = process.env.API_URl;
//Routers
const lockerRouter = require('./Routers/Lockers');
const AdminRouter = require('./Routers/Admin');
const UserRouter = require('./Routers/User');
const OfficeRouter = require('./Routers/Offices');
//Middleware
app.use(express.json());
app.use(morgan('tiny'));
require('dotenv/config');
//Fuck PSU

//Routers
app.use(`${api}/lockers`,lockerRouter);
app.use(`${api}/Admin`,AdminRouter);
app.use(`${api}/User`,UserRouter);
app.use(`${api}/Office`,OfficeRouter);

mongoose.connect(process.env.ConnectionDB)
.then(()=>{
    console.log('database is connected');
})
.catch((err)=>{
    console.log(err);
})

app.listen(3000, ()=>{
    console.log('server is running http://localhost:3000');
    console.log
})

