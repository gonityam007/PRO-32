class Chain{
    constructor(body1,body2){
        this.chain=Matter.Constraint.create({bodyA:body1,bodyB:body2,length:7,stiffness:0.07})
    World.add(world,this.chain);
    }
    display(){
        var point1=this.chain.bodyA.position
        var point2=this.chain.bodyB.position
        strokeWeight(3);
        line(point1.x,point1.y,point2.x,point2.y);
    }
}