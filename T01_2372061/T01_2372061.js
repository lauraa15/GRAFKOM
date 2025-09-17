// KODE DARI TEORI

// 1. create canvas
var cnv;
cnv = document.querySelector("#main-canvas");

var atas,bawah,kanan,kiri,clear;
atas=document.getElementById("atas");
bawah=document.getElementById("bawah");
kanan=document.getElementById("kanan");
kiri=document.getElementById("kiri");
clear=document.getElementById("clear");

// 1.5. Bikin function buat gambar titik
function gambar_titik(imageData,x,y,r,g,b){
    // rumus::: index = 4 * (x +(y * image_width)) 
    var index;
    index = 4 * (x +(y * cnv.width)) ;

    imageData.data[index]  =r;//Red
    imageData.data[index+1]=g;// Green
    imageData.data[index+2]=b;// Blue
    imageData.data[index+3]=255;// Alpha / transparency
}


// 2. create context
var context1;
context1 = cnv.getContext("2d");

// 3. image datanya
var imageData = context1.getImageData(0,0,cnv.width,cnv.height);

function functionAtas(){
    gambar_titik(imageData,50,50,255,0,0);
}
function functionBawah(){
    gambar_titik(imageData,400,400,255,0,0);
}
function functionKanan(){
    gambar_titik(imageData,400,50,255,0,0);
}
function functionKiri(){
    gambar_titik(imageData,50,400,255,0,0);
}
function clearing(){
    cnv.width = cnv.width;;
}

atas.addEventListener("click",functionAtas())
bawah.addEventListener("click",functionBawah())
kanan.addEventListener("click",functionKanan())
kiri.addEventListener("click",functionKiri())
clear.addEventListener("click",clearing())
// naro grafis ke context ke canvas
context1.putImageData(imageData,0,0);