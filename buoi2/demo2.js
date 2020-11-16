var express =  require('express');

var app = express();

app.listen(2999);
var mang=[];
app.get('/dangky/:ten',function(req,res){
    mang.push(req.params.ten);
    console.log(mang);
    res.send('Cam on '+req.params.ten +'da dang ky');
});

app.get('/xuly',(req,res)=>{
 var a = mang[Math.floor(Math.random()*mang.length)];
 var b = mang[Math.floor(Math.random()*mang.length)];
 res.send(a+' mua tra sua cho '+b);
})