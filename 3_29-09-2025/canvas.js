function gambar_titik(imageData, x, y, r, g, b){
    var index = 4*(Math.ceil(x)+(Math.ceil(y)*cnv.width));
    imageData.data[index]   = r;
    imageData.data[index+1] = g;
    imageData.data[index+2] = b;
    imageData.data[index+3] = 255;
}

function dda_line(imageData, x1, y1, x2, y2, r,g,b){

}

function gambar_lingkaran(imageData, xc,yc,rad,r,g,b){
    // x= akar(r**2 - (y-yc)**2) + xc
    //(x-xc)**2 + (y-yc)**2 = r**2
    for (var x=xc-rad;x<xc+rad;x++){
        var y = yc + Math.sqrt(Math.pow(rad,2)-Math.pow((x-xc),2))
        gambar_titik(imageData, x,y,r,g,b)
        var y = yc - Math.sqrt(Math.pow(rad,2)-Math.pow((x-xc),2))
        gambar_titik(imageData, x,y,r,g,b)
    }
    for(var x=xc-rad;x<xc+rad;x++){        
        var y = yc + Math.sqrt(Math.pow(rad,2)-Math.pow((x-xc),2))
        gambar_titik(imageData, y,x,r,g,b)
        var y = yc - Math.sqrt(Math.pow(rad,2)-Math.pow((x-xc),2))
        gambar_titik(imageData, y,x,r,g,b)
    }
}

function lingkaran_polar(imageData, xc, yc, rad, r,g,b){
    for(var theta=0; theta<Math.PI*2; theta+=0.0001){
        var x = xc + (rad * Math.cos(theta));
        var y = yc + (rad * Math.sin(theta));
        gambar_titik(imageData, x,y,r,g,b);
    }
}

function oval(imageData, xc, yc, radiusY, radiusX, r,g,b){
    for(var theta=0; theta<Math.PI*2; theta+=0.0001){
        var x = xc + (radiusX * Math.cos(theta));
        var y = yc + (radiusY * Math.sin(theta));
        gambar_titik(imageData, x,y,r,g,b);
    }
}

function naruto(imageData, xc, yc, rad, r,g,b){
    for(var theta=0; theta<=Math.PI*6; theta+=0.0001){
        rad=5*theta
        var x = xc + (rad * Math.cos(theta));
        var y = yc + (rad * Math.sin(theta));
        gambar_titik(imageData, x,y,r,g,b);
    }   
}


function bunga(imageData, xc, yc, rad, n, r,g,b){
    for(var theta=0; theta<=Math.PI*2; theta+=0.001){
        var x = xc + (rad * Math.cos(theta)*Math.cos(n*theta));
        var y = yc + (rad*Math.cos(n*theta) * Math.sin(theta));
        gambar_titik(imageData, x,y,r,g,b);
    }   
}