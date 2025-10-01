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