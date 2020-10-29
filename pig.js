class Pig{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restituition:0.8,
            density:1.0,
            friction:1.0
        }
        this.image = loadImage("enemy.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        World.add(world,this.body);
    }
    display(){
        if(this.body.speed < 3){
            var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        }
        else{
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
        }
        pop();
    }
}