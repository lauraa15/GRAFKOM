function titik(imageData, x, y, r,g,b){
    var index = 4*(Math.ceil(x)+(Math.ceil(y)*cnv.width));
    imageData.data[index]   = r;
    imageData.data[index+1] = g;
    imageData.data[index+2] = b;
    imageData.data[index+3] = 255;
}

function lingkaran_polar(imageData, xc, yc, rad, r,g,b){
    for(var theta=0; theta<Math.PI*2; theta+=0.001){
        var x = xc + (rad * Math.cos(theta));
        var y = yc + (rad * Math.sin(theta));
        titik(imageData, x,y,r,g,b);
    }
}

function mistletoe(imageData, xc, yc, rad, r,g,b){
    var beta = 0;
    for(var theta=0; theta<=Math.PI*2;theta+=1/rad){
        var x = Math.round(xc + (rad*Math.cos(2*theta) +10*Math.sin(beta)*Math.cos(theta)));
        var y = Math.round(yc + (rad*Math.cos(2*theta) +10*Math.sin(beta)*Math.sin(theta)));
        titik(imageData, x,y,r,g,b);
        beta+=30/rad;
    }
    lingkaran_polar(imageData, xc, yc, 20, 255,0,0);

}