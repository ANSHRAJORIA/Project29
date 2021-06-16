class Box2 {
    constructor(x, y, width, height) {
      var options = {
        isStatic:false,
        'restitition':1,
        'friction':3,
        'density':2
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle =this.body.angle;
      push();
      translate(pos.x,pos.y)
      rotate(angle)
      rectMode(CENTER);
      strokeWeight(3);
      stroke(50)
      fill(0,500,500);
      rect(0,0, this.width, this.height);
      pop();
    }
  }
  