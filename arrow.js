class Arrows {
    constructor (x,y,angle) {
        var option = {
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.w=100;
        this.h=10
        this.angle=angle;
        this.arrow = Bodies.rectangle(x,y,this.w,this.h,option);
        this.image = loadImage("arrow.png");
        World.add(world,this.arrow);
    }
    display(){
        var pos=this.arrow.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.w,this.h);
        pop();
    }
    shoot(){
    var newAngle = aim.angle - 28;
    newAngle = newAngle *(3.14/119)
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(-0.5);
    Matter.Body.setStatic(this.arrow, false);
    Matter.Body.setVelocity(this.arrow, {x: velocity.x *(119/3.14), y:velocity.y*(119/3.14)});
  }

}