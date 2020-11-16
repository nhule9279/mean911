//express: xai thu vien nao thi comment thu vien do
var express = require('express');
var app = express();
app.listen(3000);// mo canh cua 3000 cua server, mo port 3000

app.get('/mean',(req,res)=>{
res.send('Ban dang hoc buoi 2');
console.log(req);
});//req : chua thong tin khach hang gui len (dia chi ip, trinh duyet), res: la nhung gi tra ve khach hang

//axio: thu vien dung tu node gui request sang server khac va lay du lieu ve

app.get('/hoten',function(req,res){
    res.send('Day la server cua Nhu');
});

app.get('/tong/:so1/:so2',function(req,res){
    var a = parseInt(req.params.so1);
    var b = parseInt(req.params.so2);
    var tong = a+b;
    res.send(tong+'');
});


app.post('/mean',(req,res)=>{
    res.send('POST/MEAN');
    })