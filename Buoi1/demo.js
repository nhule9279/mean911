// bien

var namsinh ='2000'
age = 2020-parseInt(namsinh)
console.log(age)

// ham : if, for, while 

if (age>=18) {
    console.log('Ban du tuoi roi')
} else {
    console.log('Ban chua du toui')
}

while (age>=18) {
    console.log(age)
    age--
}

// Mang

var mang =['a','b','c']
console.log(mang.length)
mang.forEach(function(caigicungdc){console.log(caigicungdc)})

//hanh dong gi do 
function HocSinh(hoten,namsinh) {
    this.HOTEN = hoten;
    this.NAMSINH=namsinh;

}
var danhsach=[
    new HocSinh("Trong",1993),
    new HocSinh("Tuan",1993),
    new HocSinh("Nam",1993),
    
]
danhsach.forEach(function(hocsinh){console.log(hocsinh.HOTEN)})
//Object 
var d = new Date()
console.log(d);


// Ham dac biet
