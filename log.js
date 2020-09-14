class Log{
    constructor(x,y,width,height,angle){
        var options={
            isStatic:false
        }
        Matter.Body.setAngle(this.body, angle);
        this.image = loadImage("log.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill("brown");
        noStroke();
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}