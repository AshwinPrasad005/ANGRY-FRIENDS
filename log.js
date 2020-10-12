class Log{
    constructor(x,y,width,height,angle){
        var options={
            isStatic:false,
            restituition:0.8,
            density:1.0,
            friction:1.0
        }
        this.image = loadImage("log.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
        Matter.Body.setAngle(this.body, angle);
        this.angle = angle
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