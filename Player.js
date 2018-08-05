function Player(x, y, size) {

  this.pos = createVector(x, y);
  this.size = size;

  this.targetX = x;
  this.targetY = y;
  this.bullets = [];

  this.show = function() {
    fill(255);
    rect(this.pos.x, this.pos.y, this.size, this.size);

    for (var i = 0; i < this.bullets.length; i++) {
      this.bullets[i].update();
    }
  }


  this.updatePosition = function() {
    var vel = createVector(mouseX-width/2, mouseY-height/2);
    vel.setMag(3);
    this.pos.add(vel);
  }

  this.constrain = function(width, height) {
    if (this.pos.x < -width) {
      this.pos.x = -width;
    } else if (this.pos.x > width) {
      this.pos.x = width;
    }

    if (this.pos.y < -height) {
      this.pos.y = -height;
    } else if (this.pos.y > height) {
      this.pos.y = height;
    }
  }

  this.shoot = function() {
    var velocityOfBullet = createVector(mouseX-width/2, mouseY-height/2);
    this.bullets.push(new Bullet(velocityOfBullet));
  }

}
