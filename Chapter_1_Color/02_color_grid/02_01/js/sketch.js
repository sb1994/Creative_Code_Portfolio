function setup() {

  let canvas = createCanvas(500, 500);
  colorMode(RGB, 800, 600, 400);
  rectMode(CENTER);


}

function draw() {
  //VERSION 1 - static cols // no Color
  numberOfColumns = 5;
  numberOfRows = 5;
  let stepX = width / numberOfColumns;
  let stepY = height / numberOfRows;

  // console.log(stepX);
  
  for (let gridY = 0; gridY < height; gridY += stepY) {
    for (let gridX = 0; gridX < width; gridX += stepX) {
      // fill(gridX, height - gridY, 100);
      noFill()
      strokeWeight(1);
      ellipse(gridX, gridY, stepX, stepY);

    }
  }
}



function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(canvas, gd.timestamp() + '_MouseX_' + mouseX + '_MouseY_' + mouseY, 'png');
}
