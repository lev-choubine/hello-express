const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Helo, SEI World!');
});
app.get('/about', function(req, res){
    res.send('This is the about page');
})

app.get('/blog', (req,res) => {
    res.send("Welcome to my Blog");
})
app.listen(5000);

