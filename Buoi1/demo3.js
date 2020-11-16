var docdac ='659803'

var tong=0
var veso=''

while (veso!=docdac) {
    tong=tong+1

    var veso=''
    for (let index = 0; index <=6; index++) {
        
        
        veso=veso+ Math.floor(Math.random() *10)+''
        
    }
    console.log(veso)
}

console.log('tong '+ tong)