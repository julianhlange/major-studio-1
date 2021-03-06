// Example: *Many* Car objects (modified from sketch.js and use multi pong game as an example)
var myCar = [];   // from sketch.js to here, go from myCar1 and myCar2 to an array
var num = 100;   // to make 100 cars

function setup() {
  createCanvas(windowWidth,windowHeight);
  // Parameters go inside the parentheses when the object is constructed.
  for (var i=0; i<num; i++) {
    myCar[i] = new Car(color(random(255),100,100),0,random(height),random(2));
  }
}

function draw() {
  background(255);
  for (var i=0; i<num; i++) {
    myCar[i].drive();
    myCar[i].display();
  }
}

// Even though there are multiple objects, we still only need one class.
// No matter how many cookies we make, only one cookie cutter is needed.
function Car(color,xpos,ypos,xspeed) {
  //property
  this.color = color;
  this.xpos = xpos;
  this.ypos = ypos;
  this.xspeed = xspeed;

  //method
  this.display = function(){
    stroke(0);
    fill(this.color);
    rectMode(CENTER);
    rect(this.xpos,this.ypos,20,10);
  }
  this.drive = function(){
    this.xpos = this.xpos + this.xspeed;
    if(this.xpos > window.innerWidth){
      this.xpos = 0;
    }
  }
}