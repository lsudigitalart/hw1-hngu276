function setup() {
  createCanvas(500,500);
}

function draw() {
  background(100);
  fill(255)
  noStroke();
  ellipse(0,200,600,600);
  ellipse(500,150,600,600);

  fill(0)
  ellipse(350,0,500,500);
  ellipse(150,500,500,500);

  fill(255)
  noStroke();
  ellipse(0,0,500,500);
  ellipse(500,500,500,500);

  fill(0)
  ellipse(0,0,350,350);
  ellipse(500,500,350,350);
  ellipse(0,500,500,500);
  ellipse(500,0,500,500);

  fill(255)
  noStroke();
  ellipse(500,0,350,350);
  ellipse(0,500,350,350);
  ellipse(0,0,175,175);
  ellipse(500,500,175,175);

  fill(0)
  ellipse(500,0,175,175);
  ellipse(0,500,175,175);

  fill(0)
  ellipse(0,500,1000,100);
  ellipse(500,0,1000,100);
  ellipse(0,0,100,1000);
  ellipse(500,500,100,1000);

  fill(255)
  ellipse(300,150,50,50);
  ellipse(200,350,50,50);

  fill(0)
  ellipse(300,150,20,20);
  ellipse(200,350,20,20);
  
}