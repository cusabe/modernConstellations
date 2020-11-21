// Constellation draw functions

function lightDist(x,y) {
    // return transparency value to be used based on mouse proximity
    return max(0,100-dist(x-xpos,y-ypos,mouseX,mouseY)/2);
  }
  
function sineWave(s,e,t,yo,a) {
    // draw sine wave with start s, end e, period t, vertical offset yo and amplitude a
    beginShape();
    curveVertex(s,   yo-a*cos( s*PI/t));
    for (xi = s; xi < e; xi+=5) {
      curveVertex(xi,yo-a*cos(xi*PI/t));
    }
    curveVertex(e,   yo-a*cos( e*PI/t));
    endShape();
  }

  function moon(x,y) {
    // draw the moon

    push();
      translate(x,y);
      rotate(PI/16);
      fill(0,0,0);
      ellipse(0,0,60);
      
      for(i=60; i>0; i--) {
        noFill();
        stroke(0,0,i*1.5);
        arc(0,0,60,i,PI,2*PI);
      }
    pop();
  }
  
  function teleworax(x,y) {
    // draw teleworax disposum constellation at (x,y) and show symbol if mouse in proximity
    
    t = lightDist(x,y); //transparency to use based on mouse proximity
    //t=20;
    push();
      translate(x,y);
  
      rotate(PI/14);
      // stars
      fill(0,0,100); // white
      
      ellipse(20,38,5.2);
      ellipse(-40,0,3.8);
      ellipse(-51,-8,2.7);
      ellipse(45,16,3.6);
      ellipse(38,-40,2.6);
                          
      // symbol
      noFill();
      strokeWeight(5);
      stroke(0,0,100,t);
  
      arc(0,-12,90,100,1.05*PI,1.95*PI);
      ellipse(-45,0,12,32);
      arc(-53,0,16,16,PI/2,3*PI/2);
      ellipse(45,0,12,32);
      arc(53,0,16,16,3*PI/2,5*PI/2);
      
      arc(22,8,50,60,0.13*PI,0.5*PI);
      ellipse(10,38,20,9);
  
      rotate(-PI/14);
      // text
      noStroke();
      fill(0,0,100,t);
      text('teleworax', -60, +130);
  
    pop();
  
  }
  
  function wheeliDisposum(x,y) {
    // draw wheeli disposum constellation at (x,y) and show symbol if mouse in proximity
    
    t = lightDist(x,y); //transparency to use based on mouse proximity
    //t=20;
    push();
      translate(x,y);
  
      rotate(5*PI/6);
      // stars
      fill(0,0,100); // white
      
      ellipse(-10,30,5.2);
      ellipse(-30,-56,2.8);
      ellipse(4,-93,3.4);
      ellipse(30,40,3.2);
      ellipse(37,-51,3.1);
  
                          
      // symbol
      noFill();
      strokeWeight(5);
      stroke(0,0,100,t);
  
      ellipse(-10,30,25,25);
      line(0,40,30,40);
      line(30,40,37,-50);
      line(-15,16,-21,-50);
      line(-21,-50,-30,-56);
      line(-18,-50,34,-50);
      line(-15,-56,4,-93);
      
      
  
      rotate(-5*PI/6);
      // text
      noStroke();
      fill(0,0,100,t);
      text('wheeli disposum', -110, +130);
  
    pop();
  
  }
  
  function martinax(x,y) {
    // draw martinax constellation at (x,y) and show symbol if mouse in proximity
    
    t = lightDist(x,y); //transparency to use based on mouse proximity
    //t=20;
    push();
      translate(x,y);
  
      rotate(-PI/24);
      // stars
      fill(0,0,100); // white
      ellipse(-3,-25,5.1);
      ellipse(0,0,3.1);
      ellipse(-35,-55,2.7);
      ellipse(40,-50,2.9);
      ellipse(22,53,3.4);
      ellipse(-25,53,2.6);
                      
      // symbol
      noFill();
      strokeWeight(5);
      stroke(0,0,100,t);
  
      triangle(0,0,-40,-50,40,-50);
      line(0,0,0,50);
      line(-30,53,30,53);
      ellipse(-3,-25,12,12);
      line(-36,-58,5,-16);
   
      rotate(PI/24);
      // text
      noStroke();
      fill(0,0,100,t);
      text('martinax', -60, +100);
  
    pop();
  
  }
  
  function tendulka(x,y) {
    // draw tendulkar constellation at (x,y) and show symbol if mouse in proximity
    
    t = lightDist(x,y); //transparency to use based on mouse proximity
    //t=20;
    push();
      translate(x,y);
  
      rotate(PI/3);
      // stars
      fill(0,0,100); // white
      ellipse(0,+46,5.3);
      ellipse(-15,80,2.8);  
      ellipse(-1,-32,3.0);  
      ellipse(2,-92,2.6);  
                  
      // symbol
      noFill();
      strokeWeight(5);
      stroke(0,0,100,t);
  
      rect(-3,-93,6,60);
      rect(-4,-100,8,7);
      
  
      triangle(0,-8,-3,-29,3,-29);
      line(-15,-33,15,-33);
      line(15,-30,15,80);
      line(-15,-30,-15,80);
      arc(0, 83, 30, 10, 0, PI);
   
      rotate(-PI/3);
      // text
      noStroke();
      fill(0,0,100,t);
      text('tendulka', -60, +100);
  
    pop();
  
  }
  
  function speculens(x,y) {
    // draw speculens constellation at (x,y) and show symbol if mouse in proximity
    
    t = lightDist(x,y); //transparency to use based on mouse proximity
    //t=20;
    push();
      translate(x,y);
  
      rotate(PI/16);
      // stars
      fill(0,0,100); // white
      ellipse(-70 , +0,2.7);
      ellipse(70 , +6,2.4);
      ellipse(-20 , +20,4.7);
      ellipse(50 , +20,4.8);
      ellipse(-20 , -30,2.9);
      ellipse(23 , -29,2.6);
      
                  
      // symbol
      noFill();
      strokeWeight(5);
      stroke(0,0,100,t);
      
      line(-70,0,70,0);
      line(-70,3,-70,20);
      line(0,3,0,20);
      line(70,3,70,20);
      arc(-35, 23, 70, 30, 0, PI);
      arc(35, 23, 70, 30, 0, PI);
      line(-50,-20,-20,-30);
      line(50,-20,20,-30);
   
      rotate(-PI/16);
      // text
      noStroke();
      fill(0,0,100,t);
      text('speculens', -70, +100);
  
    pop();
  
  }
  
  function assemblans(x,y) {
    // draw assemblans constellation at (x,y) and show symbol if mouse in proximity
    
    t = lightDist(x,y); //transparency to use based on mouse proximity
    //t=20;
    push();
      translate(x,y);
  
      rotate(-PI/3.1);
      // stars
      fill(0,0,100); // white
      ellipse(30 , +0,4.7);
      ellipse(20 , 43,2.7);
      ellipse(-83 , -10,4.5);
              
      // symbol
      noFill();
      strokeWeight(5);
      stroke(0,0,100,t);
      line(-80,-10,20,-10);
      line(-83,-10,-83,0);
      line(-80,0,20,0);
      arc(20, 0, 20, 20, 3*PI/2, 4*PI/2);
      line(20,0,20,40);
      line(30,0,30,40);
      line(30,43,20,43);
   
      rotate(PI/3.1);
      // text
      noStroke();
      fill(0,0,100,t);
      text('assemblans', -80, +120);
  
    pop();
  
  }
  
  function bungens(x,y) {
    // draw bungens constellation at (x,y) and show symbol if mouse in proximity
    
    t = lightDist(x,y); //transparency to use based on mouse proximity
    //t = 20;
    push();
      translate(x,y);
  
      rotate(-PI/12);
  
      // stars
      fill(0,0,100); // white
      ellipse(13.5,62,4.9);
      ellipse(-10,55,2.8);
      ellipse(35,55,3.3);
      ellipse(10,20,2.8);
      ellipse(-22,-44,2.4);
      ellipse(-54,-51,3.8);
      
      // symbol
      noFill();
      strokeWeight(5);
      stroke(0,0,100,t);
      
      beginShape();
      curveVertex(-54,-51);
      curveVertex(-54,-51);
      curveVertex(-25,-79);
      curveVertex(-15,-79);
      curveVertex(-15,-65);
      curveVertex(-22,-44);
      curveVertex(-15,-38);
      curveVertex(0,-50);
      curveVertex(13.5,-40);
      curveVertex(13.5,16);
      curveVertex(13.5,16);
      endShape();
          
      line(10,20,10,50);
      line(17,20,17,50);
      line(-10,55,6,55);
      line(37,55,21,55);
      ellipse(13.5,62,5);
  
      rotate(PI/12);
      // text
      noStroke();
      fill(0,0,100,t);
      text('bungens', -70, +100);
  
    pop();
  
  }
  
  function renewabalis(x,y) {
    // draw renewabalis constellation at (x,y) and show symbol if mouse in proximity
    
    t = lightDist(x,y); //transparency to use based on mouse proximity
    //t = 20;
    push();
      translate(x,y);
  
      // stars
      fill(0,0,100); // white
      ellipse(0,0,4.9);
      ellipse(115,15,2.8);
      ellipse(-44,-108,3.1);
      ellipse(-62,82,2.4);
      ellipse(0,140,5.3);
                     
      // symbol
      noFill();
      strokeWeight(5);
      stroke(0,0,100,t);
      
      ellipse(0, 0, 15, 15);
      rotate(PI/24);
      for (i=0; i < 3; i++) {
        triangle(20,0,120,0,25,10);
        rotate(2*PI/3);
      }
      rotate(-PI/24);
      triangle(0,20,-10,150,10,150);
  
  
      // text
      noStroke();
      fill(0,0,100,t);
      text('renewabalis', -70, +190);
  
    pop();
  
  }
  
  function porcinaFrius(x,y) {
    // draw porcina frius constellation at (x,y) and show symbol if mouse in proximity
    
    t = lightDist(x,y); //transparency to use based on mouse proximity
    //t = 20;
    push();
      translate(x,y);
  
      rotate(PI/5);
      // stars
      fill(0,0,100); // white
      ellipse(-90 ,-28,3.7);
      ellipse(+80 ,-34,1.9);
      ellipse(+24 ,+2,4.7);
      ellipse(-50 ,+25,2.2);
      ellipse(-60 ,+32,2.9);
      ellipse(+86 ,+50,3.8);
             
      // symbol
      noFill();
      strokeWeight(5);
      stroke(0,0,100,t);
      
      sineWave(-90,90,35,-30,5);
      sineWave(-90,30,35,0,5);
      sineWave(-50,90,35,+25,5);
      sineWave(-60,90,35,+35,5);
      sineWave(-90,90,35,+50,5);
  
      rotate(-PI/5);
  
      // text
      noStroke();
      fill(0,0,100,t);
      text('porcina frius', -80, +130);
  
    pop();
  
  }
  
  function avocadeia(x,y) {
    // draw avocadeia constellation at (x,y) and show symbol if mouse in proximity
    
    t = lightDist(x,y); //transparency to use based on mouse proximity
  
    push();
      translate(x,y);
  
      rotate(-PI/6);
      // stars
      fill(0,0,100); // white
      ellipse(+0 , +0,4.7);
      ellipse(+35,-35,2.9);
      ellipse(+43,+32,3.3);
      ellipse(-84 , +2,4.3);
          
      // symbol
      noFill();
      strokeWeight(5);
      stroke(0,0,100,t);
      ellipse(0, 0, 48, 36);
      arc(    0, 0, 120, 90, 4.7*PI/4, 3.3*PI/4);
      arc(  -50, 0, 70, 55, 2.0*PI/4, 6.0*PI/4);
      
      rotate(PI/6);
      // text
      noStroke();
      fill(0,0,100,t);
      text('avocadeia', -70, +100);
  
    pop();
  
  }
  
  function capitalis(x,y) {
    // draw capitalis constellation at (x,y) and show symbol if mouse in proximity
  
    t = lightDist(x,y); //transparency to use based on mouse proximity
  
    push();
      translate(x,y);
  
      // stars
      fill(0,0,100); // white
      ellipse(-6 ,-30,3.0);
      ellipse(+40,-31,5.0);
      ellipse(+16,-54,5.2);
      ellipse(-38,-12,2.4);
      ellipse(+42,+11,3.9);
      ellipse(+8 ,+53,2.9);
      ellipse(-12,+61,4.6);
      ellipse(-45,+36,3.9);
      
      // symbol
      noFill();
      strokeWeight(5);
      stroke(0,0,100,t);
      beginShape();
      curveVertex(+40,-31);
      curveVertex(+40,-31);
      curveVertex(-38,-12);
      curveVertex(+42,+11);
      curveVertex(-45,+36);
      curveVertex(-45,+36);
      endShape();
      line(+16,-54,+8 ,+53);
      line(-4 ,-46,-12,+61);
      
      // text
      noStroke();
      fill(0,0,100,t);
      text('capitalis', -60, +100);
  
    pop();
  
  }
  
  function fenderStrata(x,y) {
    // draw fender strato constellation at (x,y) and show symbol if mouse in proximity
  
    t = lightDist(x,y); //transparency to use based on mouse proximity
  
    push();
      translate(x,y);
  
      // stars
      fill(0,0,100); // white
      ellipse(+160,-120,3.0);
      ellipse(+150,-115,2.6);
      ellipse(+138,-111,4.1);
      ellipse(+125,-105,2.2);
  
      ellipse(+22,-50,5.0);
      ellipse(-34,+50,3.3);
      ellipse(-29,+62,2.9);
      ellipse(-28,+77,4.2);
    
      // symbol
      noFill();
      strokeWeight(5);
      stroke(0,0,100,t);
      arc( +12,-45,9,9,3.1*PI/2,4.9*PI/2);
      line(+12,-39,+6,-36);
      arc( +10,-23,26,26,1.1*PI/2,2.7*PI/2);
      line(+10,-10,+122,-90);
      line(+124,-98,+122,-90);
      line(+124,-98,+163,-113);
      arc( +165,-105,16,16,3*PI/2,5.4*PI/2);
      line(+142,-83,+159,-97);
      line(+142,-83,+132,-83);
      line(+10,+8,+132,-83);
      arc( +24,+12,32,32,0.4*PI/2,2.1*PI/2);
      arc( +42,+23,9,9,2.5*PI/2,4.5*PI/2);
      
      beginShape();
      curveVertex(+58,+7);
      curveVertex(+46,+27);
      curveVertex(+32,+44);
      curveVertex(+12,+52);
      curveVertex(-2,+63);
      curveVertex(-25,+99);
      curveVertex(-60,+105);
      curveVertex(-95,+73);
      curveVertex(-110,+43);
      curveVertex(-107,+18);
      curveVertex(-85,+0);
      curveVertex(-50,-8);
      curveVertex(-30,-25);
      curveVertex(-12,-45);
      curveVertex(+10,-50);
      curveVertex(+50,-50);
      endShape();
  
      line(-14,+5,-4,+19);
      line(-29,+16,-19,+30);
      line(-44,+27,-37,+42);
      
      // text
      noStroke();
      fill(0,0,100,t);
      text('fender strata', -60, +150);
  
    pop();
  
  }