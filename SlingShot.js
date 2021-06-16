class SlingShot{
    constructor(a,b){
        var options = {
            bodyA:a,
            pointB:b,
            length: 10,
            stiffness: 0.03,
        }
        this.sling= Constraint.create(options);
        World.add(world, this.sling);

        this.pointB=b
    }

attach(body){
    this.sling.bodyA=body
}

    
    fly(){
        this.sling.bodyA=null
    }
      display(){
          if(this.sling.bodyA){
            strokeWeight(3);
            line(this.sling.bodyA.position.x,this.sling.bodyA.position.y, this.sling.pointB.x, this.sling.pointB.y);
          }
        }

    
}
