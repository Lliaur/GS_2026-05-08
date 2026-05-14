function setup() {
  let cnv = createCanvas(400, 400);

  cnv.position(
    (windowWidth - width) / 2,
    (windowHeight - height) / 2
}

function draw() {
  background(0);
  
  noStroke();

  // Update start and stop angles.
  let biteSize = PI / 16;
  let startAngle = biteSize * sin(frameCount * 0.1) + biteSize;
  let endAngle = TWO_PI - startAngle;  
  fill(255, 255, 0);
    arc(200, 200, 160, 160, startAngle, endAngle, PIE);
  
  fill (0,0,0);
  ellipse(215,160,20,20);
  rotate(300);
}
