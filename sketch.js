let x = 100;
let y = 100;
let xspeed = 2.5;
let yspeed = 2;

let circleD = 48

function setup() {
  createCanvas(640, 240);
}

function draw() {
  background(0);

  x = x + xspeed;
  y = y + yspeed;
  if (x > width - (circleD / 2) || x < 0 + (circleD / 2)){
    xspeed = xspeed * -1
  }
  if (y > height - (circleD / 2) || y < 0 + (circleD / 2)){
    yspeed = yspeed * -1
  }

  stroke(0)
  fill(127)
  circle(x, y, circleD)
}
