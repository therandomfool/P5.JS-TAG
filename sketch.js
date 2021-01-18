let charX = 180;
let charY = 180;

let charX1 = 50;
let charY1= 180;

let side1;
let front1;

let side2;
let front2;

function setup() {
  createCanvas(400, 400);
  side1=true;
  front1=true;
  
  side2=true;
  front2=true;

}

function draw() {
  background(135, 206, 235);
  // text(mouseX, 200, 30)
  // text(mouseY, 260, 30)

  //Ground
  noStroke()
  fill(0, 128, 0)
  rect(0, 200, width, height / 2)


  //character
  
  if(side1 == true){
  //side
  fill(240, 230, 140)
  ellipse(charX, charY, 30, 30)

  fill(0, 255, 255)
  rect(charX - 15, charY, 30, 30)

  //wheel
  fill(0)
  ellipse(charX, charY + 30, 15, 15)
  fill(255)
  ellipse(charX, charY + 30, 8, 8)

  }else if(front1 ==true){
  //front
  fill(240, 230, 140)
  ellipse(charX, charY, 30, 30)

  fill(0, 255, 255)
  rect(charX - 15, charY, 30, 30)

  //wheel
  fill(0)
  ellipse(charX-14, charY + 30, 8, 15)
  ellipse(charX+14, charY + 30, 8, 15)
 }
  
  //character2
   
  if(side2 == true){
  //side
  fill(140, 130, 140)
  ellipse(charX1, charY1, 30, 30)

  fill(255, 0, 255)
  rect(charX1 - 15, charY1, 30, 30)

  //wheel
  fill(0)
  ellipse(charX1, charY1 + 30, 15, 15)
  fill(255)
  ellipse(charX1, charY1 + 30, 8, 8)

  }else if(front2 ==true){
  //front
  fill(140, 130, 140)
  ellipse(charX1, charY1, 30, 30)

  fill(255, 0, 255)
  rect(charX1 - 15, charY1, 30, 30)

  //wheel
  fill(0)
  ellipse(charX1-14, charY1 + 30, 8, 15)
  ellipse(charX1+14, charY1+ 30, 8, 15)
 }
  
  
  if(dist(charX,charY,charX1,charY1)<30){
  
      textSize(20)
      text("TAG",130,100)
  }
  
  
}

function keyPressed() {

  if (keyCode == RIGHT_ARROW) {
    charX += 10;
    side1=true;

  }

  if (keyCode == LEFT_ARROW) {
    charX -= 10;
    side1=true;
  }

  if (keyCode == UP_ARROW) {
    charY -= 10;
    side1=false;
    front1=true;

  }

  if (keyCode == DOWN_ARROW) {
    charY += 10;
    side1=false;
    front1=true;

  }
  
  //character2
  //D
  if (keyCode == 68) {
    charX1 += 10;
    side2=true;

  }
//A
  if (keyCode == 65) {
    charX1 -= 10;
    side2=true;
  }
//w
  if (keyCode == 87) {
    charY1 -= 10;
    side2=false;
    front2=true;

  }
//s
  if (keyCode == 83) {
    charY1 += 10;
    side2=false;
    front2=true;

  }
}
