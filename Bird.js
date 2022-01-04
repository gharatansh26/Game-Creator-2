class Bird{
    constructor(){
        this.body = createSprite(50,200);
        this.body.addImage(BirdImg)

    }
    gravity(){
        this.body.velocityY+=1
    }
    fly(){
        this.body.velocityY=-12
    }
}