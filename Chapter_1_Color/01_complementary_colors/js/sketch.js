// Creative coding - Complemtary colors
function setup() {

  let canvas = createCanvas(500,500);
  colorMode(RGB, 300, 200, 0);
  rectMode(CENTER);

}

function draw() {
  background(200 - (mouseY / 4), 100, 220);
  translate(width / 2, height / 2);
  fill(mouseY / 4, 1, 1);
  noStroke();
  //use of a function to create the shape based on the mouseX mouseY
  // polygon (0, 0, mouseX, 5);
}


function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(canvas, gd.timestamp() + '_MouseX_' + mouseX + '_MouseY_' + mouseY, 'png');
}




















































// function polygon(x, y, radius, noOfPoints) {
//   let angle = TWO_PI / noOfPoints;
//   beginShape();
//   for (let a = 0; a < TWO_PI; a += angle) {
//     let sx = x + cos(a) * radius;
//     let sy = y + sin(a) * radius;
//     vertex(sx, sy);
//   }
//   endShape(CLOSE);
// }