let colors;
let angle = 0;

function setup() {
  createCanvas(800, 600);
  
  colors = [
    color(200, 30, 30),   // Red
    color(30, 70, 150),   // Blue
    color(250, 200, 50),  // Yellow
    color(50, 100, 50),   // Green
    color(150, 100, 50),  // Brown
    color(0),             // Black
    color(255)            // White
  ];
}

function draw() {
  background(245, 235, 220); // Off-white background
  
  drawOccupationsChart();
  drawPropertyValuationChart();
  drawPopulationChart();
  drawTitle();
  
  angle += 0.02; // Increment angle for animations
}

function drawOccupationsChart() {
  push();
  translate(200, 200);
  
  // Animate circular segments
  let segments = 4;
  for (let i = 0; i < segments; i++) {
    fill(colors[i]);
    let startAngle = i * TWO_PI / segments + angle;
    let endAngle = (i + 1) * TWO_PI / segments + angle;
    arc(0, 0, 200, 200, startAngle, endAngle);
  }
  
  // Pulsating center circle
  let centerSize = 50 + sin(angle * 2) * 10;
  fill(colors[6]);
  ellipse(0, 0, centerSize, centerSize);
  
  pop();
}

function drawPropertyValuationChart() {
  push();
  translate(600, 200);
  
  // Rotating concentric circles
  noFill();
  stroke(colors[0]);
  strokeWeight(2);
  for (let i = 1; i <= 4; i++) {
    rotate(angle * i * 0.1);
    ellipse(0, 0, i * 50, i * 50);
  }
  
  // Animated colored segments
  noStroke();
  fill(colors[2]);
  arc(0, 0, 200, 200, angle, angle + PI * 1.5);
  fill(colors[1]);
  arc(0, 0, 150, 150, -angle, -angle + PI);
  fill(colors[5]);
  ellipse(0, 0, 100 + sin(angle * 3) * 20, 100 + sin(angle * 3) * 20);
  
  pop();
}

function drawPopulationChart() {
  push();
  translate(400, 450);
  
  // Animated spiral
  noFill();
  stroke(colors[0]);
  strokeWeight(3);
  beginShape();
  for (let a = 0; a < TWO_PI * 3; a += 0.1) {
    let r = map(a, 0, TWO_PI * 3, 5, 80);
    let x = r * cos(a + angle);
    let y = r * sin(a + angle);
    vertex(x, y);
  }
  endShape();
  
  // Rotating line
  stroke(colors[3]);
  rotate(angle);
  line(-100, -100, 0, 0);
  
  pop();
}

function drawTitle() {
  textSize(24);
  textAlign(CENTER);
  fill(colors[5]);
  let yOffset = sin(angle * 2) * 5; // Subtle vertical movement
  text("Inspired by W.E.B. Du Bois Infographics", width/2, 50 + yOffset);
}
