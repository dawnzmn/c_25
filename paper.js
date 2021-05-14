class paper {
    constructor (x,y,r) {
        var options={
            setStatic: false,
            restitution: 0.3,
            density: 1.2,
            friction: 0
        }

    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(this.x,this.y,this.r,options);
    this.image = loadImage("paper.png");

    World.add(world,this.body);
    }

    display(){
        var paperPos = this.body.position;

        push()
        translate(paperPos.x,paperPos.y);
        rectMode(CENTER);
        strokeWeight(5);
        fill("blue")
        ellipse(0,0,this.r,this.r);
        pop()
    }

}