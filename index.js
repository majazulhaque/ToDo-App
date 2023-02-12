const express = require('express');

const app = express();
const path = require('path');
const port = 8000;

app.get('/',require('./routes'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('assets'));

app.listen(port,function(err){
    if(err){
        console.log(`Error: ${err}`);
    }
    console.log(`Server is set up at port: ${port}`);
})