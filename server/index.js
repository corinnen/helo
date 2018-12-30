const bodyParser = require ('body-parser');
const express = require ('express');
const session = require('express-session');
const app = express();
const massive = require ('massive');
const controller = require ('./controller')
require ('dotenv').config();

const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env
app.use(bodyParser.json())

massive(CONNECTION_STRING).then( db => {
    app.set('db', db) 
    console.log('db connected woo')
})

app.use(session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: false
}))

app.post('/auth/register', controller.createUser)
app.post('/auth/login', controller.login)



app.listen(SERVER_PORT, ()=> {
    console.log('listening on port', SERVER_PORT)
});