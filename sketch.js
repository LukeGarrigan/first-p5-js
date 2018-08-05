
var player;

var blobs = [];

function setup() {
  player = new Player(width/2, height/2, 50);
  createCanvas(700, 500);

  for (var i = 0; i < 1000; i++) {
    blobs[i] = new Player(random(-width*2, width*2), random(-height*2, height*2), 10);
  }

}

function draw() {
  clear();
  background(90);
  translate(width/2-player.pos.x, height/2-player.pos.y);
  player.constrain(width*2, height*2);
  player.show();
  for (var i = 0; i < blobs.length; i++) {
    blobs[i].show();
  }
  player.updatePosition();
}

function mousePressed() {
  player.shoot();
}
