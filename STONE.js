// class Stone extends BaseClass{
//     constructor(x,y){
//         var options = {
//     'isStatic':false,               
//     'restitution':0,
//     'friction':1.0,
//     'density':1.2
// }
//         super(x,y,25,25,options);
//         this.img = loadImage("stone.png");

//     }
//     display() {
//         // this.body.position.x = mouseX;
//         // this.body.position.y = mouseY;
//         super.display();
//         // var angle = this.body.angle;
//         // push();
//         // translate(this.body.position.x, this.body.position.y);
//         // rotate(angle);
//         // imageMode(CENTER);
        

//         pop();
//     }
// }

class Stone{
	constructor(x,y,r){
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("stone.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display(){
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(RADIUS)
			image(this.image, 0,0,this.r*2, this.r*2)
			pop()
			
	}

}

