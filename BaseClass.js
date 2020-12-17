class BaseClass{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,50,70,{isStatic:false});
        this.img = loadImage("mango.png");
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.img,0,0,60,70);

        pop();

    }
}