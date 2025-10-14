function titik(imageData, x, y, r,g,b){
    var index = 4*(Math.ceil(x)+(Math.ceil(y)*cnv.width));
    imageData.data[index]   = r;
    imageData.data[index+1] = g;
    imageData.data[index+2] = b;
    imageData.data[index+3] = 255;
}
function garis_dda(imageData, x1,y1, x2,y2, r,g,b){
    var dx=x2-x1;
    var dy=y2-y1;

    if(Math.abs(dx)>Math.abs(dy)){
        //bikin garis di sumbu x
        if(x2 > x1){
            // jalan ke kanan
            var y=y1;
            for(var x=x1; x<x2;x++){
                y = y + dy/Math.abs(dx)   // 1/m
                titik(imageData, x, y, r,g,b)
            }
        } else { 
            // jalan ke kiri
            var y=y1;
            for(var x=x1; x>x2;x--){
                y = y + dy/Math.abs(dx)   // 1/m
                titik(imageData, x, y, r,g,b)
            }
        }

    } else { // bikin garis di sb y
        if(y2 > y1){
            // jalan ke kanan
            var x=x1;
            for(var y=y1; y<y2;y++){
                x = x + dx/Math.abs(dy)   // m
                titik(imageData, x, y, r,g,b)
            }
        } else { 
            // jalan ke kiri
            var x=x1;
            for(var y=y1; y>y2;y--){
                x = x + dx/Math.abs(dy)   // m
                titik(imageData, x, y, r,g,b)
            }
        }

    }
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

function randomRGB(){
    var ra = Math.ceil(Math.random() * 255);
    var ga = Math.ceil(Math.random() * 255);
    var ba = Math.ceil(Math.random() * 255);
    return {r:ra, g:ga, b:ba};
}

function polygon(imgData, array){
    for (var i=0; i<array.length;i++){
        if(i != array.length-1){
            garis_dda(imgData,
            array[i][0],
            array[i][1],
            array[i+1][0],
            array[i+1][1],
            255,0,0);
        } else {
            console.log("keluar if")
            garis_dda(imgData,
            array[i][0],
            array[i][1],
            array[0][0],
            array[0][1],
            255,0,0);
        }
    }
}

function tengah_segi3(titiks) {
    var tx=0;
    var ty=0;

    // tengah x = (x1+x2+x3)/3
    // tengah y = (y1+y2+y3)/3

    for(var i=0; i<3; i++){
        tx += titiks[i][0];
        ty += titiks[i][1];
    }
    return [tx/3, ty/3]

}