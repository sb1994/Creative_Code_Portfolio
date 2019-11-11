let colsLeft = []
let colRight = []

function setup() {

  let canvas = createCanvas(500, 500);
  colorMode(HSB, 300, 100, 100);
  rectMode(CENTER);

  shakeColors()

  console.log(colsLeft);

  
}

function draw() {
  fill(colsLeft[1])
  rect(0,10,100,100)
  fill(colRight[1])
  rect(width/2,0+10,100,100)
  fill(colRight[1])
  rect(width-25,0+10,100,100)
}

function shakeColors() {
  for (let i = 0; i < 4; i++) {
    colsLeft[i] = color(random(255),random(255),random(255))
    colRight[i] = color(random(255),random(255),random(255))
  }
}
function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(canvas, gd.timestamp() + '_MouseX_' + mouseX + '_MouseY_' + mouseY, 'png');
}
