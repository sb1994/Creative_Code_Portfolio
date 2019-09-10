function setup() {

  let canvas = createCanvas(windowWidth,windowHeight);
  colorMode(HSB, 600, 350, 650);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(0,0,20);
  let numberOfSteps = 20;
  let angleSize = 360 / numberOfSteps;
  let radius = width / 5;


  beginShape(TRIANGLE_FAN);

  vertex(width / 2, height / 2);

  for (let angle = 0; angle <= 370; angle += angleSize) {
    let VX = radius * cos(radians(angle)) + width / 2;
    let VY = radius * sin(radians(angle)) + height / 2;
    vertex(VX, VY);
    fill(angle, width, height);
  }
  endShape();

}



function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(canvas, gd.timestamp() + '_MouseX_' + mouseX + '_MouseY_' + mouseY, 'png');
}
