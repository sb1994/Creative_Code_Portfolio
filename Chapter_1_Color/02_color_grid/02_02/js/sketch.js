let numberOfColumns = 10;
let numberOfRows = 10;
let angle = 45
let c
let numCounter
function setup() {

  let canvas = createCanvas(500, 500);
  colorMode(HSB, numberOfColumns,numberOfRows,100);
  //min max
  // colorMode(HSB, 360,100,100);
  rectMode(CENTER);
  c = color(2,10,10)
  // background(255)

}

function draw() {
  //VERSION 2 - PUSH POP Grid, color mode hsb,
  background(255)
  let stepX = width / numberOfColumns;
  let stepY = height / numberOfRows;

  for (let gridY = 0; gridY < numberOfRows; gridY ++) {
    for (let gridX = 0; gridX < numberOfColumns; gridX ++) {
      // fill(gridX, height - gridY, 100);
      // noFill()
      // fill(numberOfColumns-gridX,numberOfRows-gridY,4)
      //no interaction
      // fill(numberOfColumns/3,gridY,numberOfColumns-gridX)
      fill(numberOfColumns/3+mouseX,gridY,numberOfColumns-gridX)
      // fill(360,100,0)
      // stroke(numberOfColumns-gridX,numberOfRows- gridY,10);
      // strokeWeight(1);
      noStroke()
      push()
      translate(gridX*stepX+stepX/2, gridY*stepY+stepY/2)
      // rotate(radians(angle))
      ellipse(0,0, stepX, stepY);
      // rect(0,0, stepX, stepY);
      pop()
      numCounter++
    }
  }
  angle++
}



function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(canvas, gd.timestamp() + '_MouseX_' + mouseX + '_MouseY_' + mouseY, 'png');
}
