// simplified code using p5.js library https://p5js.org/

let space;
let rc;
let randomX;
let randomY;


function setup() {
    background(255);
    createCanvas(800, 600);
    // variables
    rc = random(1,255);
    space = 35;
    randomX = random(0, width);
    randomY = random(0, height);
}
 function draw() {
    frameRate(2);

    for (x=0;x<width+50;x+=space){  
      fill(random(180, 255),0, random(150,255));
    for (y=0;y<height+50;y+=space){
      circle(x+space, y + space,15)
 }
}
}


