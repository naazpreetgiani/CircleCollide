//Title

//Setup canvas and context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

// Global Variables
let arcx = 300;
let arcy = 350;
let arcSize = 20;

let arc2x = 300;
let arc2y = 350;
let arc2Size = 15;

// Draw 2 circles
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(arcx, arcy, arcSize, arcSize, 2 * Math.PI); // Half Circle (0 to PI)  with center (250, 500) and radius 20
ctx.fill();

ctx.fillStyle = "orange";
ctx.beginPath();
ctx.arc(250, 300, 30, 0, 2 * Math.PI); // Circle (0 to 2*PI) with center (250, 500) and radius 30
ctx.fill();
