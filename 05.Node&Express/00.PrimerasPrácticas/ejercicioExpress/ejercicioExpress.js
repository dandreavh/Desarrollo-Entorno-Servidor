let express = require('express');
let app = express();
app.get('/', function(req, res) {
    res.send("Hello world :)!");
});
app.get('/:name', function(req, res) {
    res.send("Hello "+req.params.name +" :)!");
});
app.listen(3000,function(){
    console.log('listening on port 3000');
});