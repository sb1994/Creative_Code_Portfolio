/* Creative Coding
   Edel Prior
   October 2018 (week 3)
   Notes
*/

let img;
let colors = [];
let sortMode = null;

function preload() {
  img = loadImage('data/image.jpg');
}

function setup(){

createCanvas(windowWidth,windowHeight);
noCursor();
noStroke();
}


function draw() {

let tileCount = floor(width / max(mouseX, 20));
let rectSize = width/tileCount;

img.loadPixels();
colors = [];

//image(img,85,10);


for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      var px = int(gridX * rectSize);
      var py = int(gridY * rectSize);
      var i = (py * img.width + px) * 4;
      var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
      colors.push(c);
    }
  }


  var i = 0;
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      fill(colors[i]);
      rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
      i++;
    }
  }
}


// Will have to run on  a server (download live-server package in Atom)
// access by going to command pallette [cmd + shift + P] and typing live-server
// access through folder directory
