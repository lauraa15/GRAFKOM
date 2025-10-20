function titik(imageData, x, y, r,g,b){
    var index = 4*(Math.ceil(x)+(Math.ceil(y)*cnv.width));
    imageData.data[index]   = r;
    imageData.data[index+1] = g;
    imageData.data[index+2] = b;
    imageData.data[index+3] = 255;
}

function lingkaran_polar(imageData, xc, yc, rad, r,g,b){
    for(var theta=0; theta<Math.PI*2; theta+=0.0001){
        var x = xc + (rad * Math.cos(theta));
        var y = yc + (rad * Math.sin(theta));
        titik(imageData, x,y,r,g,b);
    }
}
function polar_circle2(imageData){
    var array_bola = [];
    for(var a=0; a<20; a++){
        var xr = 10+Math.ceil(Math.random()*480);
        var yr = 10+Math.ceil(Math.random()*480);
        lingkaran_polar(imageData, xr, yr,10,255,150,0);
        floodfillStack(imageData, cnv, xr, yr, {r:0, g:0, b:0},{r:255,g:150,b:0})

        for(var a=0; (xr+a < 500 && yr+a < 500);a++){
            move=translasi({x:xr,y:yr},{x:a,y:a});
            lingkaran_polar(imageData, move.x, move.y,10,255,150,0);
            floodfillStack(imageData, cnv, move.x, move.y, {r:0, g:0, b:0},{r:255,g:150,b:0})
        }


        // point_array2 = [];
        // point_array2.push(translasi(point_array[0], { x: 150, y: 0 }));
        // point_array2.push(translasi(point_array[1], { x: 150, y: 0 }));
        // point_array2.push(translasi(point_array[2], { x: 150, y: 0 }));
        // polygon(imageData, point_array2, 25, 15, 200); //BIRU

        // gerak({xr,yr})
    }
    // }
    // for(var a=0; a<20; a++){
    //     var xr = 10+Math.ceil(Math.random()*480);
    //     var yr = 10+Math.ceil(Math.random()*480);
    //     lingkaran_polar(imageData, xr, yr,10,10,255,0);
    //     floodfillStack(imageData, cnv, xr, yr, {r:0, g:0, b:0},{r:10,g:255,b:0})
    // }for(var a=0; a<20; a++){
    //     var xr = 10+Math.ceil(Math.random()*480);
    //     var yr = 10+Math.ceil(Math.random()*480);
    //     lingkaran_polar(imageData, xr, yr,10,10,150,255);
    //     floodfillStack(imageData, cnv, xr, yr, {r:0, g:0, b:0},{r:10,g:150,b:255})
    // }
    return array_bola;
}

function translasi(titik_lama, jarak){
    var x_baru = titik_lama.x + jarak.x;
    var y_baru = titik_lama.y + jarak.y;

    return{x:x_baru, y:y_baru};
}

function skalar(titik_lama, sk){
    var x_baru = titik_lama.x*sk.x;
    var y_baru = titik_lama.y*sk.y;

    return{x:x_baru, y:y_baru};
}

// function gerak(titik_lama){
//     for(var a=0; (titik_lama.x+a < 500 && titik_lama.y+a < 500);a++){
//         titik_baru=translasi(titik_lama,{x:a,y:a});
//     }
// }


function floodfillStack(imageData,cnv, x0, y0,  toFlood, color){
    var index = 4*(x0+(y0*cnv.width));
    var r1 = imageData.data[index];
    var g1 = imageData.data[index+1];
    var b1 = imageData.data[index+2];

    var tumpukan =[];
    tumpukan.push({x:x0, y:y0});
    // inisialisasi awal

    while(tumpukan.length>0){
        var titikS = tumpukan.pop();
        var indexS = 4*(Math.ceil(titikS.x)+(Math.ceil(titikS.y)*cnv.width));
        var r1 = imageData.data[indexS];
        var g1 = imageData.data[indexS+1];
        var b1 = imageData.data[indexS+2];

        
        if((toFlood.r == r1) && (toFlood.g == g1) && (toFlood.b == b1)){
            imageData.data[indexS]   = color.r;
            imageData.data[indexS+1] = color.g;
            imageData.data[indexS+2] = color.b;
            imageData.data[indexS+3] = 255;
            tumpukan.push({x:titikS.x+1, y: titikS.y});
            tumpukan.push({x:titikS.x-1, y: titikS.y});
            tumpukan.push({x:titikS.x, y: titikS.y+1});
            tumpukan.push({x:titikS.x, y: titikS.y-1});
        }
    }
}