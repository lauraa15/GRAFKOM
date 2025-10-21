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
function polygon(imageData, point_array, r,g,b){
    for (var i=0; i<point_array.length-1;i++){
        var x1=point_array[i].x;
        var y1=point_array[i].y;
        var x2=point_array[i+1].x;
        var y2=point_array[i+1].y;
        
        garis_dda(imageData, x1,y1,x2,y2,r,g,b);
    }

    var x1=point_array[point_array.length-1].x;
    var y1=point_array[point_array.length-1].y;
    var x2=point_array[0].x;
    var y2=point_array[0].y;

    garis_dda(imageData, x1,y1,x2,y2,r,g,b);

}
