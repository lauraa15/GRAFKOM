function titik(imageData, x, y, r,g,b){
    var index = 4*(Math.ceil(x)+(Math.ceil(y)*cnv.width));
    imageData.data[index]   = r;
    imageData.data[index+1] = g;
    imageData.data[index+2] = b;
    imageData.data[index+3] = 255;
}

function obatNyamuk(imageData, xc, yc, rad, r,g,b){
    for(var theta=0; theta<=(Math.PI*10-1.5); theta+=0.001){
        rad=5*theta
        var x = xc + (rad * Math.cos(theta));
        var y = yc + (rad * Math.sin(theta));
        titik(imageData, x,y,r,g,b);
    }   
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
function polygon(imgData, array){
    for (var i=0; i<array.length;i++){
        if(i != array.length-1){
            console.log(array[i][0],
            array[i][1],
            array[i+1][0],
            array[i+1][1],
            )
            garis_dda(imgData,
            array[i][0],
            array[i][1],
            array[i+1][0],
            array[i+1][1],
            0,255,0);
        } else {

            console.log("keluar if")
            garis_dda(imgData,
            array[i][0],
            array[i][1],
            array[0][0],
            array[0][1],
            0,255,0);
        }
    }
}

function polyline(imgData, array){
    for (var i=0; i<array.length;i++){
        if(i != array.length-1){
            console.log(array[i][0],
            array[i][1],
            array[i+1][0],
            array[i+1][1],
            )
            garis_dda(imgData,
            array[i][0],
            array[i][1],
            array[i+1][0],
            array[i+1][1],
            255,0,0);
        } else {

            console.log("keluar if")
        }
    }
}


function gambar_lingkaran(imageData, xc,yc,rad,r,g,b){
    // x= akar(r**2 - (y-yc)**2) + xc
    //(x-xc)**2 + (y-yc)**2 = r**2
    for (var x=xc-rad;x<xc+rad;x++){
        var y = yc + Math.sqrt(Math.pow(rad,2)-Math.pow((x-xc),2))
        titik(imageData, x,y,r,g,b)
        var y = yc - Math.sqrt(Math.pow(rad,2)-Math.pow((x-xc),2))
        titik(imageData, x,y,r,g,b)
    }
    for(var x=xc-rad;x<xc+rad;x++){        
        var y = yc + Math.sqrt(Math.pow(rad,2)-Math.pow((x-xc),2))
        titik(imageData, y,x,r,g,b)
        var y = yc - Math.sqrt(Math.pow(rad,2)-Math.pow((x-xc),2))
        titik(imageData, y,x,r,g,b)
    }
}

function lingkaran_polar(imageData, xc, yc, rad, r,g,b){
    for(var theta=0; theta<Math.PI*2; theta+=0.0001){
        var x = xc + (rad * Math.cos(theta));
        var y = yc + (rad * Math.sin(theta));
        titik(imageData, x,y,r,g,b);
    }
}

function oval(imageData, xc, yc, radiusY, radiusX, r,g,b){
    for(var theta=0; theta<Math.PI*2; theta+=0.0001){
        var x = xc + (radiusX * Math.cos(theta));
        var y = yc + (radiusY * Math.sin(theta));
        titik(imageData, x,y,r,g,b);
    }
}

function naruto(imageData, xc, yc, rad, r,g,b){
    for(var theta=0; theta<=Math.PI*6; theta+=0.0001){
        rad=5*theta
        var x = xc + (rad * Math.cos(theta));
        var y = yc + (rad * Math.sin(theta));
        titik(imageData, x,y,r,g,b);
    }   
}


function bunga(imageData, xc, yc, rad, n, r,g,b){
    for(var theta=0; theta<=Math.PI*2; theta+=0.001){
        var x = xc + (rad * Math.cos(theta)*Math.cos(n*theta));
        var y = yc + (rad*Math.cos(n*theta) * Math.sin(theta));
        titik(imageData, x,y,r,g,b);
    }   
}

function floodfill(imageData,cnv, x, y,  toFlood, color){
    var index = 4*(Math.ceil(x)+(Math.ceil(y)*cnv.width));
    var r1 = imageData.data[index];
    var g1 = imageData.data[index+1];
    var b1 = imageData.data[index+2];

    if((toFlood.r == r1) && (toFlood.g == g1) && (toFlood.b == b1)){
        imageData.data[index]   = color.r;
        imageData.data[index+1] = color.g;
        imageData.data[index+2] = color.b;
        imageData.data[index+3] = 255;

        floodfill(imageData,cnv, x+1, y,  toFlood, color);
        floodfill(imageData,cnv, x, y+1,  toFlood, color);
        
        floodfill(imageData,cnv, x-1, y,  toFlood, color);
        floodfill(imageData,cnv, x, y-1,  toFlood, color);
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
