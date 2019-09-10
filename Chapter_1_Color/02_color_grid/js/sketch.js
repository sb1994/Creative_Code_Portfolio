function setup() {

  let canvas = createCanvas(windowWidth, windowHeight);
  colorMode(RGB, 800, 600, 400);
  rectMode(CENTER);


}

function draw() {

  // numberOfColumns = floor(map(constrain(mouseX, 0, width), 0, width, 2, 100));
  // numberOfRows = floor(map(constrain(mouseY, 0, height), 0, width, 2, 200));
  numberOfColumns = 80;
  numberOfRows = 75;
  let stepX = width / numberOfColumns;
  let stepY = height / numberOfRows;

  for (let gridY = 0; gridY < height; gridY += stepY) {
    for (let gridX = 0; gridX < width; gridX += stepX) {
      fill(gridX, height - gridY, 100);
      strokeWeight(.05);
      rect(gridX, gridY, stepX, stepY);

    }
  }
}



function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(canvas, gd.timestamp() + '_MouseX_' + mouseX + '_MouseY_' + mouseY, 'png');
}
