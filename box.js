class Box{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restituition:0.8,
            density:1.0,
            friction:1.0
        }
        this.image = loadImage("Box.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height = height;
        this.width = width;
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