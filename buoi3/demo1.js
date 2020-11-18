//express
var express = require('express');
var app = express();

//body parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));


app.listen(3000);
app.post('/xuly',function (req,res) {
    var username = req.body.username;

    res.json({
        username: username
    });
})

function sinhVien(params) {
    
}

app.get('demo',function(req,res){
    // res.end(); //ket thuc route
    res.redirect('http://google.com');
});


app.post('/account',function(req,res){
    var user = req.body.user;
    var pass = req.body.password;
    var name = req.body.name;
    var age = req.body.age;

    console.log('Chao ban '+name+', '+ age+ ' tuoi, tai khoan duoc tao cua ban la : username: '+user +', password: '+pass);
    res.json({
        user: user,
        password: pass,
        name:name,
        age:age
    });
})