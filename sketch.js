// Modern Constellations - by BenC


var xmap = 6000 ; // total pixels in map
var ymap = 3000 ;

var edge = 50;  // the width (and height) of the window "edge" and steering zone

var acc = 0.01; // acceleration rate per frame
var vmax = 3.5; // maximum velocity

// viewing window coordinates and velocity
var xpos ;
var ypos ;
var xvel ;
var yvel ; 

// thrust button brightness
var ton = 70; // on
var toff = 10; // off

// thrust buttons off by default
var lt = toff; 
var rt = toff; 
var ut = toff; 
var dt = toff; 

// positions and attributes of stars
let starArray = []; 

// space station coordinates and velocity
var iss_xpos ;
var iss_xpos ;
var iss_xvel ;
var iss_xvel ; 


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  colorMode(HSB, 100);
  textStyle(ITALIC);
  textSize(30);

  // initialise position coordinates to centre of map and velocity to slight drift
  xpos = xmap/2 - width/2; 
  ypos = ymap/2 - height/2;
  xvel = 0.2;  
  yvel = 0.1;  

  // initialise space station coordinates
  iss_xpos = 3*xmap/4 ; 
  iss_ypos = 1*ymap/8 ;
  iss_xvel = -1.75;  
  iss_yvel = 0.34;  

  // assign coordinates and properties for for star objects
  defineStars(  0, 60,100, 2.0, 80); // red stars
  defineStars( 60, 50,100, 2.4, 60); // blue-white stars
  defineStars(  0,  0,100, 1.2, 900); // small white stars
  defineStars(  0,  0,100, 2.6, 120); // medium white stars
  defineStars( 20, 80,100, 2.0, 40); //  yellow stars
  //defineStars(  0,  0,100, 32.0, 1); // 1 large white sun
}

function defineStars (h,s,b,size,n) {
  /// Add n randomly located stars of hue h, saturation s, brightness b and size sz to the array
  for (let i = 0; i < n; i++) {
    let tempStar = {
      x: random(xmap),
      y: random(ymap),
      c: color(h,s,b),
      sz: size,
      draw: function() {
        fill(this.c);
        ellipse(this.x,this.y,this.sz,this.sz);
      },
      // draw a second copy for use in x-axis wraparound 
      drawXAlias: function() {
        fill(this.c);
        ellipse(xmap+this.x,this.y,this.sz,this.sz);
      }
    }
    starArray.push(tempStar);
  }
}

function draw() {
  
  push();
    
    // show star field at position (xpos,ypos) by moving canvas
    translate(-xpos,-ypos); 

    // pan slowly across the sky - wrap around x but bump at edges for y
    xpos += xvel; 
    if (xpos < 0) xpos += xmap;
    if (xpos > xmap) xpos -= xmap;

    ypos += yvel; 
    if (ypos < 0) {ypos = 0;  yvel = 0.2;}
    if (ypos > ymap-height) {ypos = ymap-height; yvel = -0.2;}

    // steering - increase velocity if mouse is in border area, and turn on border light
    if ((mouseX > 0) && (mouseX < edge) && (xvel > -vmax)) {
      xvel -= acc; lt = ton; } else lt = toff;

    if ((mouseY > 0) && (mouseY < edge) && (yvel > -vmax)) {
      yvel -= acc; ut = ton; } else ut = toff;

    if ((mouseX > (width-edge)) && (xvel < vmax))  {
      xvel += acc; rt = ton; } else rt = toff;
    
    if ((mouseY > (height-edge)) && (yvel < vmax))  {
      yvel += acc; dt = ton; } else dt = toff;
    
    // print(mouseX,mouseY,xvel,yvel,edge);

    // draw black space 

    background(0,0,2);
    
    // draw earth on lower horizon

    push();
      noFill();
      strokeWeight(2);
      for (ye = ymap; ye > (ymap - edge*2.5); ye--) {
        stroke(56,40,98-(ymap-ye)/(edge*2.5)*96);
        line(0,ye,2*xmap,ye);
      }
    pop();

    // draw star background

    for (let i =0; i< starArray.length; i++) {
      starArray[i].draw();
      starArray[i].drawXAlias();
    }

    // draw constellations, and draw alias if within a screen of x = 0

    avocadeia(0.58*xmap,0.57*ymap);
    renewabalis(0.69*xmap,0.64*ymap);
    teleworax(0.89*xmap,0.78*ymap);

    bungens(0.78*xmap,0.39*ymap);
    fenderStrata(0.65*xmap,0.31*ymap);

    porcinaFrius(0.39*xmap,0.31*ymap);
    assemblans(0.41*xmap,0.15*ymap);

    speculens(0.21*xmap,0.14*ymap); speculens(1.21*xmap,0.14*ymap);
    tendulka(0.15*xmap,0.33*ymap); tendulka(1.15*xmap,0.33*ymap);

    martinax(0.24*xmap,0.68*ymap); martinax(1.24*xmap,0.68*ymap);
    capitalis(0.33*xmap,0.77*ymap);
    wheeliDisposum(0.42*xmap,0.89*ymap);

    // draw the moon

    moon(0.9*xmap,0.22*ymap);

    // move and draw the ISS

    iss_xpos += iss_xvel; 
    if (iss_xpos < 0) iss_xpos += xmap;
    if (iss_xpos > xmap) iss_xpos -= xmap;

    iss_ypos += iss_yvel; 
    if (iss_ypos < -width/2) iss_yvel = -iss_yvel;
    if (iss_ypos > (ymap+width/2)) iss_yvel = -iss_yvel;

    intSpaceStation(iss_xpos,iss_ypos);
    intSpaceStation(iss_xpos+xmap,iss_ypos);
    

  pop();

  drawWindow();
}

function drawWindow() {

  push();

  fill(0,0,10);
  noStroke();
  
  // draw the background "walls"
  fill(60,30,lt);
  rect(0, 0, edge, height);
  fill(60,30,ut);
  rect(0, 0, width, edge);
  fill(60,30,dt);
  rect(0, height-edge, width, edge);
  fill(60,30,rt);
  rect(width-edge, 0, edge, height);

  // draw arrows on the walls
  fill(60,30,ton);
  triangle(0,height/2,edge,(height-edge)/2,edge,(height+edge)/2);
  triangle(width,height/2,width-edge,(height-edge)/2,width-edge,(height+edge)/2);
  triangle(width/2,0,(width-edge)/2,edge,(width+edge)/2,edge);
  triangle(width/2,height,(width-edge)/2,height-edge,(width+edge)/2,height-edge);
  
  // draw the corners separate
  fill(60,30,(lt+ut)/2);
  rect(0, 0, edge, edge);
  fill(60,30,(ut+rt)/2);
  rect(width-edge, 0, width, edge);
  fill(60,30,(rt+dt)/2);
  rect(width-edge, height-edge, width, height);
  fill(60,30,(dt+lt)/2);
  rect(0, height-edge, edge, height);

  // draw the blue glow on the edge of the viewing area 
  stroke(70,90,50);
  noFill();
  strokeWeight(10);
  rect(edge, edge, width-edge*2, height-edge*2);

  pop();
}


function intSpaceStation(x,y) {
  
  // draw the international space station
  push();

    translate(x,y);
    rotate(PI/11);

    // Draw main body
    fill(0,0,80);
    noStroke();

    rect(-50,-2,100,4);
    rect(-8,-20,16,4);

    fill(0,0,60);
    rect(-3,-16,6,14);
    rect(-4, 2,8,16);
    rect(-10,18,30,8);

    // Draw solar panels
    rect(30,5,10,50);
    rect(45,5,10,50);

    rect(-40,5,10,50);
    rect(-55,5,10,50);

    rect(30,-55,10,50);
    rect(45,-55,10,50);

    rect(-40,-55,10,50);
    rect(-55,-55,10,50);

  pop();
}