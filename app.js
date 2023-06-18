const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./utils/db');
const routes = require('./routes/routes');


const app = express();
app.use(bodyParser.json());
app.use(cors());


// Routes 
app.use('/', routes)


// Database Connection 
sequelize.sync()
.then(() => console.log('database Connected successfully'))
.catch(err => console.log(err));


// Server Starts 
app.listen(3000, ()=>{
    console.log('server start at http://localhost:3000');
})