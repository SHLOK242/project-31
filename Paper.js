class Paper{

    constructor(){
   
        var options={
        restitution:0.3,
        density:1.2,
        friction:0.5
        }
        this.body=Bodies.circle(50,400,20,options)
        World.add(world,this.body)
    }

    display(){
    push()
    translate(this.body.position.x,this.body.position.y)
     rotate(this.body.angle)
     fill ("pink")
    circle(0,0,50)
    pop()
    }
}