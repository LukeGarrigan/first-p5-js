
function Food() {

  this.x = random(width);
  this.y = random(height);

  this.display = function() {

    noFill();
    stroke(255);
    ellipse(this.x, this.y, 10, 10);
  }

}
