keobuabao(50);


function keobuabao(luot) {
    var mang = ['keo', 'bua', 'bao'];

    var hoa =0,thang=0,thua=0;
    var keo=0,bua=0,bao=0;
    for (let index = 0; index <luot; index++) {
    
    var ban = mang[Math.floor(Math.random() * mang.length)];
    var may = mang[Math.floor(Math.random() * mang.length)];
    switch (ban) {
        case 'keo':
            keo++
            switch (may) {
                case 'keo':
                    hoa++

                    break;
                case 'bua':
                    thua++
                    break;
                case 'bao':
                    thang++
                    break;

                default:
                    break;
            }

            break;
        case 'bua':
            bua++
            switch (may) {
                case 'keo':
                    thang++

                    break;
                case 'bua':
                    hoa++
                    break;
                case 'bao':
                    thua++
                    break;

                default:
                    break;
            }

            break;
        case 'bao':
            bao++
            switch (may) {
                case 'keo':
                    thua++

                    break;
                case 'bua':
                    thang++
                    break;
                case 'bao':
                    hoa++
                    break;

                default:
                    break;
            }

            break;

        default:
            break;
    }
    }
   
    console.log('thang: '+thang +' ('+((thang/luot)*100).toFixed(2)+'%)' +' | thua: '+thua+' ('+((thua/luot)*100).toFixed(2)+'%)'+' | hoa: '+hoa+' ('+((hoa/luot)*100).toFixed(2)+'%)');
    console.log('keo: '+keo +' ('+((keo/luot)*100).toFixed(2)+'%)'+' | bua: '+bua+' ('+((bua/luot)*100).toFixed(2)+'%)'+' | bao: '+bao+' ('+((bao/luot)*100).toFixed(2)+'%)');

}