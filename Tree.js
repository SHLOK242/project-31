class Tree{

    constructor(){

    this.body=Bodies.rectangle(1100,300,50,100,{isStatic:true})
    this.image=loadImage("Plucking mangoes/tree.png")
    World.add(world,this.body)
    }

    display(){
    
    imageMode(CENTER);
    image(this.image,this.body.position.x, this.body.position.y,500,720);
    }
}