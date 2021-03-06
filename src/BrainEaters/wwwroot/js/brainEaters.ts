﻿
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


let canvas;
let ctx;
let dx = 5;
let dy = 5;
let x = 200;
let y = 5;
let WIDTH = 482;
let HEIGHT = 482;
let img = new Image();
let collision = 0;

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
        case 38:  /* Up arrow was pressed */
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
        case 40:  /* Down arrow was pressed */
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
        case 37:  /* Left arrow was pressed */
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
        case 39:  /* Right arrow was pressed */
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
    let imgd = ctx.getImageData(x, y, 15, 15);
    let pix = imgd.data;
    let n = pix.length
    for (let i = 0; i < n; i += 4) {
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

