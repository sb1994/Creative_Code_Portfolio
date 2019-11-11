//Color Wheel with mouse interaction
//using triangle fan and vertices
let radius = 200
let numOfCircles = 12


function setup() {

  let canvas = createCanvas(500, 500);
  colorMode(HSB, 300, 100, 100);
  rectMode(CENTER);


}

function draw() {

  push()
  translate(width/2,height/2)
  beginShape(TRIANGLE_FAN)
  vertex(0,0)
  noStroke()
  for (let angle = 0; angle <= 360; angle+=10) {
    // let b = map(mouseX,0,0,width/100)
    // console.log(b);
    
    // let s = map(mouseY,0,0,height)
    let X = radius * cos(radians(angle));
    let Y = radius * sin(radians(angle));

    
    // fill(angle,100,100)
    fill(angle,mouseY,mouseX)
    vertex(X,Y)
  }
  endShape()
  pop()
  // numberOfColumns = 5;
  // numberOfRows = 5;
  // let stepX = width / numberOfColumns;
  // let stepY = height / numberOfRows;

  // console.log(stepX);
  
  // for (let gridY = 0; gridY < height; gridY += stepY) {
  //   for (let gridX = 0; gridX < width; gridX += stepX) {
  //     // fill(gridX, height - gridY, 100);
  //     noFill()
  //     strokeWeight(1);
  //     ellipse(gridX, gridY, stepX, stepY);

  //   }
  // }
}



function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(canvas, gd.timestamp() + '_MouseX_' + mouseX + '_MouseY_' + mouseY, 'png');
}
