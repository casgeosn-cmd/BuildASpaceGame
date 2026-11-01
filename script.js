// variable setup 
var w = (canvas.width = window.innerWidth),
h = (canvas.height = window.innerHeight);
const canvas = document.getElementById("displayCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.lineWidth = 2;
ctx.stroke();

