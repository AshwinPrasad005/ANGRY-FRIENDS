class Bird{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restituition:0.8,
            density:1.0,
            friction:1.0
        }
        this.image = loadImage("character.png");
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
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}