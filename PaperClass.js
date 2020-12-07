class Paper {
   constructor(x,y,radius){
    var options={
        'restitution':0.3,
        'friction': 1.0,
         'density': 1
    }
    //var paperImage;
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    this.image =loadImage("paper.png");
    World.add(world,this.body);
   // this.image=paperImage;
   }
   display(){
     var pos = this.body.position;
     push();
     translate(pos.x,pos.y); 
     fill("white");
     stroke("green");
     //rect(0,0, this.width, this.height);
     // ellipseMode(RADIUS);
     // ellipse(0,0,this.radius,this.radius);
     imageMode(CENTER);
     image(this.image,0,0,this.radius,this.radius);
     pop();
    
   }
}