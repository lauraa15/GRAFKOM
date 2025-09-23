function gambar_titik(imageData, x, y, r, g, b){
    var index;
    index = 4*(x+(y*cnv.width));

    imageData.data[index]   = r;
    imageData.data[index+1] = g;
    imageData.data[index+2] = b;
    imageData.data[index+3] = 255;
}

function gambar_lingkaran(imageData, xc, yc, radius, r,g,b){
    //mau jalan dr x or y
    //jalan dr x maka xc - radius sampai + radius
    //tentukan y
    //gambar di x,y
    for(var x = xc-radius; x<xc+radius;x++){
        //akar dari r2-(x-xc)2 kalo positif
        var y = yc + Math.sqrt(Math.pow(radius,2) - Math.pow((x-xc),2) );
        gambar_titik(imageData, Math.ceil(x),Math.ceil(y),r,g,b);

        //akar dari r2-(x-xc)2 kalo negatif
        var y = yc - Math.sqrt(Math.pow(radius,2) - Math.pow((x-xc),2) );
        gambar_titik(imageData, Math.ceil(x),Math.ceil(y),r,g,b);
    }
    // gambar di y
    for(var x = xc-radius; x<xc+radius;x++){
        //akar dari r2-(x-xc)2 kalo positif
        var y = yc + Math.sqrt(Math.pow(radius,2) - Math.pow((x-xc),2) );
        gambar_titik(imageData, Math.ceil(y),Math.ceil(x),r,g,b);

        //akar dari r2-(x-xc)2 kalo negatif
        var y = yc - Math.sqrt(Math.pow(radius,2) - Math.pow((x-xc),2) );
        gambar_titik(imageData, Math.ceil(y),Math.ceil(x),r,g,b);
    }

    //TIDAK EFISIEN
}

function gbr_lingkaran(imageData, xc, yc, radius, r,g,b){
    for (var teta = 0; teta < Math.PI*2; teta+=0.01) {
         x = xc+radius*Math.cos(teta);
         y = yc+radius*Math.sin(teta);

        gambar_titik(imageData, Math.ceil(x), Math.ceil(y), r,g,b);
    }
}

function gbr_elips(imageData, xc, yc, radiusX, radiusY, r,g,b){
    for (var teta = 0; teta < Math.PI*2; teta+=0.01) {
         x = xc+radiusX*Math.cos(teta);
         y = yc+radiusY*Math.sin(teta);

        gambar_titik(imageData, Math.ceil(x), Math.ceil(y), r,g,b);
    }
}