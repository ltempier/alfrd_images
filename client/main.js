'use strict';

var size = {
    width: 400,
    height: 400
};
var sourceImg = "http://lorempixel.com/" + size.width + "/" + size.height;
function loadSource() {
    var canvas = document.getElementById('source');
    canvas.width = size.width;
    canvas.height = size.height;
    var context = canvas.getContext('2d');
    var img = new Image();
    //img.setAttribute('crossOrigin', 'anonymous');
    img.onload = function () {
        context.drawImage(img, 0, 0);
    };
    img.src = sourceImg + "?time=" + Date.now();
}


function send() {
    var canvas = document.getElementById('source');
    var dataURL = canvas.toDataURL();
    $.ajax({
        type: "POST",
        url: "yo",
        data: {image: dataURL}
    }).done(function () {
        console.log('saved');
    });
}


loadSource();
