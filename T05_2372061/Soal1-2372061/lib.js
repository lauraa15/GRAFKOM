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

function bola_random(imageData, n, rad, red,green,blue){
    var array_bola = [];
    for (var i=0; i<n; i++){
        var xr = rad + Math.random() * (cnv.width - 2*rad);
        var yr = rad + Math.random() * (cnv.height - 2*rad);

        lingkaran_polar(imageData, xr, yr,rad,red,green,blue);
        floodfillStack(imageData, cnv, xr, yr, {r:0, g:0, b:0},{r:red, g:green, b:blue})

        var kx = Math.round(Math.random()*10);
        var ky = Math.round(Math.random()*10);
        
        array_bola.push({x:xr, y:yr, kec_x: kx, kec_y:ky, warna: {r:red, g:green, b:blue}});
    }
    return array_bola;
}

function bola_gerak(array_bola, rad){
    
    function frame(){
        ctx.clearRect(0, 0, cnv.width, cnv.height);
        
        imageData = ctx.getImageData(0, 0, cnv.width, cnv.height);
        
        for (var i=0; i<array_bola.length; i++){

            var bola = array_bola[i];
        
            var bergerak = translasi(bola, {x: bola.kec_x, y:bola.kec_y});
        
            bola.x = bergerak.x;
            bola.y = bergerak.y;
        
            // buat pantulan
            if(bola.x + rad > cnv.width || bola.x - rad < 0){
                bola.kec_x *= -1;
            }
            if(bola.y + rad > cnv.height || bola.y - rad < 0){
                bola.kec_y *= -1;
            }
        
            lingkaran_polar(imageData, bola.x, bola.y, rad, bola.warna.r, bola.warna.g, bola.warna.b);
            floodfillStack(imageData, cnv, Math.floor(bola.x), Math.floor(bola.y), {r:0, g:0, b:0}, bola.warna)
        }
        ctx.putImageData(imageData,0,0);
        requestAnimationFrame(frame);
    }
    frame();
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