
function Player() {
   this.pos = createVector(width/2, height/2);
   this.r = 20;
   this.direction = 0;

   this.radians = 0;
   this.update = function() {
     push();
     stroke(255);
     noFill();
     translate(this.pos.x, this.pos.y);
     this.radians = atan2(mouseY-this.pos.y, mouseX-this.pos.x);
     rotate(this.radians + HALF_PI);
     triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
     ellipse(0, 0, 20, 20);
     pop();
   }
}
