
var player;
function setup() {
  createCanvas(400, 400);
  player = new Player();
}

function draw() {
  background(0)
  fill(255);
  player.update();
}
