class Mover {
  constructor(){
    this.position = createVector(random(width), random(height))
    this.velocity = createVector(random(-2,2), random(-2,2))
    this.diameter = random(24, 60)
    this.fill = color(random(0,255), random(0,255), random(0, 255))
    this.topSpeed = 10
    // this.acceleration1 = createVector(0,0.1)    
  }

  

  update(){
    // this.velocity.add(this.acceleration1)

    // Note that random2D is a static method, meaning it's associated with the Class Vector as a whole, not an instance of the class
    // this.acceleration2 = p5.Vector.random2D()
    // this.acceleration2.mult(random(2))

    
    let mouse = createVector(mouseX, mouseY)
    let direction = p5.Vector.sub(mouse, this.position)
    
    direction.normalize()
    direction.mult(0.2)
    this.acceleration = direction
    
    this.velocity.add(this.acceleration)
    this.velocity.limit(this.topSpeed)
    this.position.add(this.velocity)
  }

  show(){
    stroke(0)
    fill(this.fill)
    circle(this.position.x, this.position.y, this.diameter)
  }

  checkEdges(){
    if (this.position.x > width - (this.diameter / 2) || this.position.x < 0 + (this.diameter / 2)){
      this.velocity.x = this.velocity.x * -1
    }

    if (this.position.y > height - (this.diameter / 2) || this.position.y < 0 + (this.diameter / 2)){
    this.velocity.y = this.velocity.y * -1
    }
  }


}

let mover

function setup() {
  createCanvas(windowWidth, windowHeight);
  mover = new Mover()
}

function draw() {
  background(0);
  mover.show()
  mover.update()
  mover.checkEdges()
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}
