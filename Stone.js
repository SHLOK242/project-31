class Stone{

    constructor(){

    var options={
        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2
    }

    this.body=Bodies.rectangle(150,560,20,20,options)
    this.image=loadImage("Plucking mangoes/stone.png")
    World.add(world,this.body)
    }

    display(){

    imageMode(CENTER)
    image (this.image,this.body.position.x,this.body.position.y,40,40)
    }
}