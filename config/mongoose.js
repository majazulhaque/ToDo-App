// Require a mongoose library
const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/todo_app_db');

// acquire the connection
const db = mongoose.connection;

// if error
db.on('error',console.error.bind(console,'error connecting to db'));

db.once('open', function(){
    console.log('Successfully connected to the database');
});
