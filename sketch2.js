let eyeballs = [];

function setup() {
  let canvas = createCanvas(800, 800); 

  for (let i = 0; i < 6; i++) {
    eyeballs.push({
      x: random(50, width - 50),
      y: random(50, height - 50),
      size: random(90, 120)
    });
  }
}

  // This is the code for multiple eyeballs that shows up on the secret page. It uses a for loop and object class to have mulitple appear at once.

function draw() {
  background(0);

  for (let eye of eyeballs) {
    drawEyeball(eye.x, eye.y, eye.size);
  }
}

function drawEyeball(x, y, size) {

  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(x, y, size, size*0.75);

 
  let dx = mouseX - x;
  let dy = mouseY - y;
  let angle = atan2(dy, dx);
  let pupilOffset = size * 0.2;
  let pupilX = x + cos(angle) * pupilOffset;
  let pupilY = y + sin(angle) * pupilOffset;

  fill(0);
  noStroke();
  ellipse(pupilX, pupilY, size * 0.3, size * 0.3);
}
