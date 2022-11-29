// constructor
const express = require('express');
const app = express();
// indicates where redirect
app.use(express.static(__dirname+'/public'));
// port redirect
app.listen(8080, ()=>{console.log('Server listening on port 8080')});