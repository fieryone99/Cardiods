let r;             //initializing variables
let totalPoints;
let factor;
function setup() {
   createCanvas(windowWidth, windowHeight);
  colorMode(HSB)//creating screen
r = min(height, width)/2 - 10;          //setting r value

}


totalPoints = 200;        //setting total points around hte circle
factor = 0;               //setting  no. its being multiplied by
function draw() {
  
  background(0);                //all of this is set up
  translate(width/2, height/2);
  noFill();
  stroke(255);
  strokeWeight(1);
  circle(0, 0, 2 * r); 
  
  for (i=0; i < totalPoints; i++){
    let angle = i * TWO_PI / totalPoints;
    let x = r * cos(angle);
    let y = r * sin(angle);
   //this part of hte loop spaces the points around circle

    let nx = r * cos((angle * factor) % totalPoints);
    let ny = r * sin((angle * factor) % totalPoints);
      //this part finds where the point would be if its multiplied by  factor
    let col = map(i, 0, totalPoints, 0, 360);
    stroke(col, 255, 255); //makes rainbow

    line(x, y, nx, ny); //draws line between th epoints and where they end up after multiplied by factor
  }
    factor += 0.003; //increases factor by small amount
}
