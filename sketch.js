let x = 250;
let y = 250;

function setup() {
  createCanvas(500, 500);
  noStroke();

  rectMode(CENTER);
}



function draw() {
background(0);
rect(x, y, 50, 50)
fill('red')

  if(keyIsDown(LEFT_ARROW)){
    x -= 3
  } 
  
  if(keyIsDown(UP_ARROW))
    y -= 3
}

 if(keyIsDown(RIGHT_ARROW)){
     y += 3
 }

 

  





