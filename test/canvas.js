var cnv;

function gambar_titik(imageData,x,y,r,g,b){
    var index;
    index = 4*(Math.ceil(x) + Math.ceil(y * cnv.width));

    imageData.data[index] = r; // Red
    imageData.data[index+1] = g; // Green
    imageData.data[index+2] = b; // Blue
    imageData.data[index+3] = 255; // Alfa
}

cnv = document.querySelector("#canva1");
// console.log(cnv)
var context1;
context1 = cnv.getContext("2d");
// context1.fillRect(100,100,200,200);
var imageData = context1.getImageData(0,0,cnv.width,cnv.height);

// gambar_titik(imageData,100,100,255,0,0)

// for(var i=0;i<100;i++){
//    gambar_titik(imageData,100+i,100,255,0,0)
//    gambar_titik(imageData,100+i,101,255,0,0)
// }

// for(var i=0;i<100;i++){
//     gambar_titik(imageData,100+i,100, 0, 0, 255*i/100)
// }
// for(var i=0;i<100;i++){
//     gambar_titik(imageData,100,100+i, 0, 0, 255*i/100)
// }


function dda_line(imageData,x1,y1,x2,y2,r,g,b){
    var dx = x2-x1;
    var dy = y2-y1;

    if(Math.abs(dx) > Math.abs(dy)){
        if(x2>x1){
            var y = y1;
            for(var x=x1;x<x2;x++){
                y = y + dy/Math.abs(dx);
                gambar_titik(imageData,x,y,r,g,b)
            }
        }
        else{
            var y = y1;
            for(var x=x1;x>x2;x--){
                y = y + dy/Math.abs(dx);
                gambar_titik(imageData,x,y,r,g,b)
            }
        }
    }
    else{
        if(y2>y1){
            var x = x1;
            for(var y=y1;y<y2;y++){
                x = x + dx/Math.abs(dy);
                gambar_titik(imageData,x,y,r,g,b)
            }
        }
        else{
            var x = x1;
            for(var y=y1;y>y2;y--){
                x = x + dx/Math.abs(dy);
                gambar_titik(imageData,x,y,r,g,b)
            }
        }
    }
}

dda_line(imageData,100,100,300,300,0,0,255)
dda_line(imageData,100,200,300,300,0,0,255)
dda_line(imageData,100,200,500,600,0,0,255)
dda_line(imageData,300,255,220,300,0,0,255)

context1.putImageData(imageData,0,0);