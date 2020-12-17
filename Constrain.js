class Rubber{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.body = Constraint.create(options);
        World.add(world, this.body);
}
fly(){
    this.body.bodyA = null;
}

attach(body){
    
    this.body.bodyA = body;
}
}