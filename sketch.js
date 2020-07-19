// Making subclasses (filipino flag taking properties from flag )
// Be able to make my flags move
// How else can I simplify this? Pride flag colors? 

let backgroundColor;
let filFlag; 
let usFlag; 
let prideFlag;

function setup () {
  createCanvas(500, 500);
  backgroundColor = color(220, 220, 220); 
  filFlag = new Flag(width/3, height/6, 84);
  usFlag = new Flag(width/2 + 20, height/5 - 10, 84);
  prideFlag = new Flag(width/6 - 20, height/5 - 10, 84);
  
  // Step 4: Create your own Avatar
}

function draw () {
  background(backgroundColor);
  // Filipino Flag
  stroke(1);
  filFlag.show();
  fill('blue');
  filFlag.stripe(width/3, height/6, 85, 25);
  fill('red');
  filFlag.stripe(width/3, height/6 + 25, 85, 25);
  fill('white');
  filFlag.triangleDivider(width/3, height/6, width/3 + 50, height/6 + 25, width/3, height/6 + 50);
  fill('yellow');
  filFlag.star(width/3 + 8, height/6 + 10, 2, 4, 5);
  filFlag.star(width/3 + 25, height/6 + 23, 2, 4, 5);
  filFlag.star(width/3 + 8, height/6 + 36, 2, 4, 5);
  filFlag.circle(width/3 + 12, height/6 + 23, 8, 8);

  // US Flag
  fill('white');
  usFlag.show();
  noStroke();
  for(let redStripe = - 10; redStripe <= 30; redStripe += 10) {
    fill('red');
    usFlag.stripe(width/2 + 20, height/5 + redStripe, 84, 10);
  }
  for(let whiteStripe = 0; whiteStripe <= 20; whiteStripe += 20) {
    fill('white');
    usFlag.stripe(width/2 + 20, height/5 + whiteStripe, 84, 10);
  }
  fill('blue');
  usFlag.stripe(width/2 + 20, height/5 - 10, 40, 30);
  fill('white');
  for(let starX = 25; starX <= 55; starX += 10) {
    for(let starY = -5; starY <= 15; starY += 10) {
      usFlag.star(width/2 + starX, height/5 + starY, 2, 4, 5);
    }
  }
  
  // Pride flag
  stroke(1);
  prideFlag.show();
  noStroke();
  fill('red');
  prideFlag.stripe(width/6 - 20, height/5 - 10, 85, 10);
  fill('orange');
  prideFlag.stripe(width/6 - 20, height/5, 85, 10);
  fill('yellow');
  prideFlag.stripe(width/6 - 20, height/5 + 10, 85, 10);
  fill('green');
  prideFlag.stripe(width/6 - 20, height/5 + 20, 85, 10);
  fill('blue');
  prideFlag.stripe(width/6 - 20, height/5 + 30, 85, 10);

  // Step 6b: Update avatar location
  
  // Step 5b: Show your avatar
}

class Flag {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  show() {
    rect(this.x, this.y, this.size, this.size - 35);
  }

  star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }

  circle(x, y, radiusX, radiusY) {
    ellipse(x, y, radiusX, radiusY);
  }

  stripe(x, y, w, h) {
    rect(x, y, w, h);
  }

  triangleDivider(x1, y1, x2, y2, x3, y3) {
    triangle(x1, y1, x2, y2, x3, y3);
  }
}

// class Avatar {
//   constructor() {
//     // Step 3: add the missing parameters and properties
//     this.x = width/2;
//     this.y = height/2;
//   }
  
//   // Step 5a: Add the show() function
  
//   // Step 6a: Add the updateLocation() function
// }
