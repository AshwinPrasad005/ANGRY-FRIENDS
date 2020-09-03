class Pig{
    construtor(x,y,radius){
        var options={
            isStatic:false
        }
        this.image = loadImage("pig.png");
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius);
        pop();
    }
}