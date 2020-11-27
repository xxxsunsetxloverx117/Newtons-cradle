class Chain{
    constructor(bodyA, bodyB){

        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.07,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        
    }

    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.bodyB.position;

            push()
            strokeWeight(8);
            stroke(51,24,7)
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y);
            pop()
        }
    
}