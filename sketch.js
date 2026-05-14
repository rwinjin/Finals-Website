function setup() {
  createCanvas(400, 400);
  canvas = createCanvas(400, 400);
  canvas.parent('eyeball-container');
}

  // Hello! This is the code for the eyeball. It uses p5.js instead of usual javascript.

function draw() {
  background(0);

  let eyeX = width / 2;
  let eyeY = height / 2;
  let eyeRadius = 80;

  fill(255);
  stroke(0);
  strokeWeight(4);
  ellipse(eyeX, eyeY, eyeRadius * 2, eyeRadius * 1.5);

  let dx = mouseX - eyeX;
  let dy = mouseY - eyeY;

  let angle = atan2(dy, dx);
  let pupilDistance = min(dist(mouseX, mouseY, eyeX, eyeY), eyeRadius - 20);
  let pupilX = eyeX + cos(angle) * pupilDistance;
  let pupilY = eyeY + sin(angle) * pupilDistance;

  fill(0);
  noStroke();
  ellipse(pupilX, pupilY, 40, 40);


  if (mouseIsPressed) {
    fill(0);
    rect(0, 0, 400, 400);
  }
}
