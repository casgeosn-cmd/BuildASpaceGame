// variable setup 
const canvas = document.getElementById("displayCanvas");
const ctx = canvas.getContext("2d");
rc = random(1, 255);
randomX = random(1, 600);
randomY = random(1, 600);


// draw circle
ctx.arc(randomX, randomY, 200, 0, Math.PI * 2);
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.lineWidth = 2;
ctx.stroke();

// draw a rectangle
ctx.fillStyle = "pink";
ctx.fillRect(10, 10, 150, 100);
