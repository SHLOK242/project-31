class Ground{

    constructor(){

    this.body=Bodies.rectangle(400,650,1500,50,{isStatic:true})
    World.add(world,this.body)
    }

    display(){

    push()
    rect(this.body.position.x,this.body.position.y,1900,20)
    rectMode(CENTER)
    fill("black")
    pop()
    }
}