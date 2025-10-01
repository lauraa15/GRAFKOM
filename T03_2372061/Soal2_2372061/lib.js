function titik(imageData, x, y, r,g,b){
    var index = 4*(Math.ceil(x)+(Math.ceil(y)*cnv.width));
    imageData.data[index]   = r;
    imageData.data[index+1] = g;
    imageData.data[index+2] = b;
    imageData.data[index+3] = 255;
}

function bunga(imageData, xc, yc, rad, n, r,g,b){
    for(var theta=0; theta<=Math.PI*2; theta+=0.001){
        var x = xc + (rad * Math.cos(theta)*Math.cos(n*theta));
        var y = yc + (rad*Math.cos(n*theta) * Math.sin(theta));
        titik(imageData, x,y,r,g,b);
    }   
}