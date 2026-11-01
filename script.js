var w = (canvas.width = window.innerWidth),
h = (canvas.height = window.innerHeight), 
ctx = canvas.getContext("2d");

let space 
let rc 
let randomX
let randomY

// SETUP
function setup() {

  // canvas info
  createCanvas(500, 500);
  background(0);

  
  // variable values
  rc = random(1, 255);
  space = 35;
  randomX = random(1, width);
  randomY = random(1, height);
  }
 

// DRAW
function draw() {
  frameRate(12);
  
// vertical 
  
  // pattern circles and rectangles
 
    for (x=0;x<width+50;x+=space){  
      fill(random(180, 255),0, random(150,255));
    for (y=0;y<height+50;y+=space){
      circle(x+space, y + space, 5);
      rect(x, y+30, 4*1.4, 4);
      rect(x, y-30, 4*1.4, 4);
         }
    }

  // triangles
  for(x=2; x<width; x += space) {
    for (y=0; y <= height; y += space) {
      triangle(randomX+1, randomY-30, x-3, y-10, x+3, y-10);
      triangle(randomX+1, randomY+30, x-3, y+10, x+3, y+10);
    }
  }
  

  
  // horizontal pattern

  
  // rainbow stream
  for (x=space/2;x<width+50;x+=space){
    for (y=space/2;y<height+50;y+=space) {
      fill(random(1,255), random(1, 255), random(1,255), 50);
      noStroke();
      triangle(x,y-10,x-5,y-10,x+3,y-10);
      triangle(x,y+10,x-5,y+10,x+3,y+10);
      triangle(x-10,y,x-50,y-3,x-10,y+3);
      triangle(x+10,y,x+50,y-3,x+10,y+3);
    }
  }

  
  // cross pattern
  for (x=0;x<width+20; x+=space) {
    for (y=0;y<height+20; y+=space) {
      stroke(190);
      stroke(random(1, 255), random(1, 255), random(1,255), 100);
      line(x+10, y-30, x+20, y-40);
      line(x-10, y-30, x-20, y-40);
      line(x+10, y+30, x+20, y+40);
      line(x-10, y+30, x-20, y+40);
      }
  }
  
}
