function setup() {
  createCanvas(600, 600);
  background("white");
}

function draw() {
  stroke("rgb(255,0,215)D8B");
  fill("rgb(255,22,0)");

  // console.log(mouseIsPressed)

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}