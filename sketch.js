let position
let velocity 

let circleD = 48

function setup() {
  createCanvas(640, 240);
  position = createVector(100, 100)
  velocity = createVector(1, 3.3)
}

function draw() {
  background(0);
  position.add(velocity)

  if (position.x > width - (circleD / 2) || position.x < 0 + (circleD / 2)){
    velocity.x = velocity.x * -1
  }
  if (position.y > height - (circleD / 2) || position.y < 0 + (circleD / 2)){
    velocity.y = velocity.y * -1
  }

  stroke(0)
  fill(127)
  circle(position.x, position.y, circleD)
}
