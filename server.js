const express = require('express');
const app = express();
const path=require('path')


app.use(express.static(__dirname+'/node_modules'));

app.use("'/email_templates'",express.static(__dirname+'/email_templates'));
app.use('/font-awesome',express.static(__dirname+'/font-awesome'));
app.use('/fonts',express.static(__dirname+'/fonts'));

app.use('/js',express.static(__dirname+'/js'));

app.listen( 8080);

app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

console.log("Express server working")
