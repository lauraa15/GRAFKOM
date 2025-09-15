// 1. create canvas
var cnv;
cnv = document.querySelector("#canvas1");
// console.log(cnv);

// 1.5. Bikin function buat gambar garis
function gambar_titik(imageData,x,y,color){
    // rumus::: index = 4 * (x +(y * image_width)) 
    var index;
    index = 4 * (x +(y * cnv.width)) 

    imageData.data[index]  =color.r;//Red
    imageData.data[index+1]=color.g;// Green
    imageData.data[index+2]=color.b;// Blue
    imageData.data[index+3]=255;// Alpha / transparency
}

// 2. create context
var context1;
context1 = cnv.getContext("2d");

// 3. image datanya
var imageData = context1.getImageData(0,0,cnv.width,cnv.height);

for (let j = 0; j < 100; j++) {
    for (var i = 0; i < 100; i++) {
        let color = {r:255,g:0,b:100+j}
        gambar_titik(imageData,100+i,100+j, color);
    }    
}

for (var i = 0; i < 100; i++) {
    // gambar_titik(imageData,100+i,100,255,0,0);
    // gambar_titik(imageData,100,100+i,255,0,0);
    // gambar_titik(imageData,i,i,255,0,0);
    // gambar_titik(imageData,100+i,100,255,0,0);
    // gambar_titik(imageData,100,100+i,255,0,0);
    // gambar_titik(imageData,100+i,200,0,0,255);
    // gambar_titik(imageData,200,100+i,0,0,255);
    
}

// naro grafis ke context ke canvas
context1.putImageData(imageData,0,0);