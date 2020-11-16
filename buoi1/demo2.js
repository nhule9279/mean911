function RandomString(dai){
    var mang = ['A','B','C',2,3,4,5,6,7,8,9]
    var ketqua=''
    for (var index = 0; index < mang.length; index++) {
        ketqua = ketqua + mang[Math.floor(Math.random()*mang.length)]

        
    }
    return ketqua
}

for (let index = 0; index < 10; index++) {
    console.log(RandomString(10))
    
}