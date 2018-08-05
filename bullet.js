
function Bullet(vector) {
  this.pos = vector;

  this.update = function () {
    fill(0);
    ellipse(this.pos.x, this.pos.y, 20, 20);
  }


}
