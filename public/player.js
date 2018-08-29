
function Player() {
   this.pos = createVector(width/2, height/2);
   this.r = 20;
   this.direction = 0;

   this.radians = 0;
   this.velocity = createVector(0,0);
   this.acceleration = createVector(0,0);

   this.isUp = false;
   this.isDown = false;
   this.isLeft = false;
   this.isRight = false;
   this.speed = 2;

   this.update = function() {


     if (this.isUp == true) {
       this.pos.y = this.pos.y - this.speed;
     }

     if (this.isLeft == true) {
       this.pos.x = this.pos.x - this.speed;
     }
     push();
     stroke(255);
     noFill();
     translate(this.pos.x, this.pos.y);
     this.radians = atan2(mouseY-this.pos.y, mouseX-this.pos.x);
     rotate(this.radians + HALF_PI);
     triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
     pop();
   }

   this.up = function() {
     this.isUp = true;
   }

   this.left = function() {
     this.isLeft = true;
   }

   this.releaseLeft = function () {
     this.isLeft = false;
   }

   this.releaseUp = function () {
     this.isUp = false;
   }

   this.resetMovement = function () {
     this.isUp = false;
     this.isLeft = false;
   }
}
