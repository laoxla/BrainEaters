//let canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
//let context = canvas.getContext("2d");
//let img = new Image();
//img.onload = function () {
//    context.drawImage(img, 0, 0);
//}
//img.src = "http://i.imgur.com/ZR9uuFY.png";
//function render() { 
//    context.drawImage(img, 352, 28, 28, 28, 100, 100, 32, 32);
//}
//render();
//let canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
//let ctx = canvas.getContext("2d");
//ctx.fillStyle = "#ff000";
//ctx.fillReact(0, 0, 150, 75);
var canvas;
var ctx;
var dx = 5;
var dy = 5;
var x = 200;
var y = 5;
var WIDTH = 482;
var HEIGHT = 482;
var img = new Image();
var collision = 0;
function rect(x, y, w, h) {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.closePath();
    ctx.fill();
}
function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.drawImage(img, 0, 0);
}
function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    img.src = "../images/maze.gif";
    return setInterval(draw, 10);
}
function doKeyDown(evt) {
    switch (evt.keyCode) {
        case 38:
            if (y - dy > 0) {
                y -= dy;
                clear();
                checkcollision();
                if (collision == 1) {
                    y += dy;
                    collision = 0;
                }
            }
            break;
        case 40:
            if (y + dy < HEIGHT) {
                y += dy;
                clear();
                checkcollision();
                if (collision == 1) {
                    y -= dy;
                    collision = 0;
                }
            }
            break;
        case 37:
            if (x - dx > 0) {
                x -= dx;
                clear();
                checkcollision();
                if (collision == 1) {
                    x += dx;
                    collision = 0;
                }
            }
            break;
        case 39:
            if ((x + dx < WIDTH)) {
                x += dx;
                clear();
                checkcollision();
                if (collision == 1) {
                    x -= dx;
                    collision = 0;
                }
            }
            break;
    }
}
function checkcollision() {
    var imgd = ctx.getImageData(x, y, 15, 15);
    var pix = imgd.data;
    var n = pix.length;
    for (var i = 0; i < n; i += 4) {
        if (pix[i] == 0) {
            collision = 1;
        }
    }
}
function draw() {
    clear();
    ctx.fillStyle = "purple";
    rect(x, y, 15, 15);
}
//function (num1:number, num2:number) {
//    num1 = x;
//    num2 = y;
//}
init();
window.addEventListener('keydown', doKeyDown, true);
//# sourceMappingURL=brainEaters.js.map