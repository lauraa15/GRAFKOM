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

// FUNGSI UNTUK NOMOR 1
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

// FUNGSI UNTUK NOMOR 1
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

// FUNCTION UTK NOMOR 2

function kotak_tengah(imageData,x,y,r,g,b){
    for (let a = 0; a < 10; a++) {
        for (let b = 0; b < 10; b++) {
            titik(imageData,x+a,y+b,r,g,b);
            titik(imageData,x+a,y-b,r,g,b);
            titik(imageData,x-a,y-b,r,g,b);
            titik(imageData,x-a,y+b,r,g,b);
        }    
    }
}


// FUNCTION UTK NO 3
function titik_kotak(imageData,x,y,r,g,b){
    for (let a = 0; a < 2; a++) {
        for (let b = 0; b < 2; b++) {
            titik(imageData,x+a,y+b,r,g,b);
            titik(imageData,x+a,y-b,r,g,b);
            titik(imageData,x-a,y-b,r,g,b);
            titik(imageData,x-a,y+b,r,g,b);
        }    
    }
}

