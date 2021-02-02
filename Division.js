class Division {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.h=height;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        
        push ();
        translate (pos.x,pos.y);
        rectMode(CENTER);
        fill("white");
        rect(0,0, this.width, this.height);
        pop ();
    }
};