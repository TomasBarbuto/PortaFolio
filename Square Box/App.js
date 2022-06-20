'use strict'

window.onload = function (){
    var pos = 430;


var ContainerB = document.getElementById("Container-B");
var t = setInterval(display, 500);

function move(){
    if(pos >= 430){
        clearInterval(t);
    }else{
    pos+= 1;
    ContainerB.style.left = "800px";
    }
    console.log(move);
}
}
