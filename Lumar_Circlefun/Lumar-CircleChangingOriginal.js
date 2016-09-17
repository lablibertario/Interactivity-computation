var allDigits=[10];

var t=0;
var vertices = 0;
var verticestwo = 0;
var verticeEnd;
var verticeEndtwo;
var lerpNum = 0;
var numPath;
var numPathtwo;
//minutestuff
var mvertices = 0;
var mverticestwo = 0;
var mverticesEnd;
var mverticeEndtwo;
var mlerpNum = 0;
var mlerpNumtwo=0;
var mnumPath;
var mnumPathtwo;
//var hour();
var hr;
var minutes;
var tenMin;
var singleMin;
var mincircle;
var mintwo;
var hourcircle;
var hourtwo;
var light;

var extra;
var extratwo;
function setup() {
  createCanvas(700,700);
  //background(0);
  background(215,240,255);
  extra = new Decor;
  extratwo = new Decor;
  hourcircle = new HourCircle;
  hourtwo = new HourCircle;
  mincircle = new MinCircle(60);
  mintwo = new MinCircle(45);
  allDigits[0] = [ createVector(315, 0, 0), createVector(210, 33, 0), createVector(140, 133, 0), createVector(105, 300, 0), createVector(105, 400, 0), createVector(140, 567, 0), createVector(210, 667, 0), createVector(315, 700, 0), createVector(385, 700, 0), createVector(490, 667, 0), createVector(560, 567, 0), createVector(595, 400, 0), createVector(595, 300, 0), createVector(560, 133, 0), createVector(490, 33, 0), createVector(385, 0, 0), createVector(315, 0, 0)];
  allDigits[1] = [ createVector(210, 133, 0), createVector(280, 100, 0), createVector(385, 0, 0), createVector(385, 700, 0)];
  allDigits[2] = [ createVector(140, 167, 0), createVector(140, 133, 0), createVector(175, 67, 0), createVector(210, 33, 0), createVector(280, 0, 0), createVector(420, 0, 0), createVector(490, 33, 0), createVector(525, 67, 0), createVector(560, 133, 0), createVector(560, 200, 0), createVector(525, 267, 0), createVector(455, 367, 0), createVector(105, 700, 0), createVector(595, 700, 0)];
  allDigits[3] = [ createVector(175, 0, 0), createVector(560, 0, 0), createVector(350, 267, 0), createVector(455, 267, 0), createVector(525, 300, 0), createVector(560, 333, 0), createVector(595, 433, 0), createVector(595, 500, 0), createVector(560, 600, 0), createVector(490, 667, 0), createVector(385, 700, 0), createVector(280, 700, 0), createVector(175, 667, 0), createVector(140, 633, 0), createVector(105, 567, 0)];
  allDigits[4] = [ createVector(455, 0, 0), createVector(105, 467, 0), createVector(630, 467, 0), createVector(0, 0, 0), createVector(455, 0, 0), createVector(455, 700, 0)];
  allDigits[5] = [ createVector(525, 0, 0), createVector(175, 0, 0), createVector(140, 300, 0), createVector(175, 267, 0), createVector(280, 233, 0), createVector(385, 233, 0), createVector(490, 267, 0), createVector(560, 333, 0), createVector(595, 433, 0), createVector(595, 500, 0), createVector(560, 600, 0), createVector(490, 667, 0), createVector(385, 700, 0), createVector(280, 700, 0), createVector(175, 667, 0), createVector(140, 633, 0), createVector(105, 567, 0)];
  allDigits[6] = [ createVector(560, 100, 0), createVector(525, 33, 0), createVector(420, 0, 0), createVector(350, 0, 0), createVector(245, 33, 0), createVector(175, 133, 0), createVector(140, 300, 0), createVector(140, 467, 0), createVector(175, 600, 0), createVector(245, 667, 0), createVector(350, 700, 0), createVector(385, 700, 0), createVector(490, 667, 0), createVector(560, 600, 0), createVector(595, 500, 0), createVector(595, 467, 0), createVector(560, 367, 0), createVector(490, 300, 0), createVector(385, 267, 0), createVector(350, 267, 0), createVector(245, 300, 0), createVector(175, 367, 0), createVector(140, 467, 0)];
  allDigits[7] = [ createVector(595, 0, 0), createVector(245, 700, 0), createVector(0, 0, 0), createVector(105, 0, 0), createVector(595, 0, 0)];
  allDigits[8] = [ createVector(280, 0, 0), createVector(175, 33, 0), createVector(140, 100, 0), createVector(140, 167, 0), createVector(175, 233, 0), createVector(245, 267, 0), createVector(385, 300, 0), createVector(490, 333, 0), createVector(560, 400, 0), createVector(595, 467, 0), createVector(595, 567, 0), createVector(560, 633, 0), createVector(525, 667, 0), createVector(420, 700, 0), createVector(280, 700, 0), createVector(175, 667, 0), createVector(140, 633, 0), createVector(105, 567, 0), createVector(105, 467, 0), createVector(140, 400, 0), createVector(210, 333, 0), createVector(315, 300, 0), createVector(455, 267, 0), createVector(525, 233, 0), createVector(560, 167, 0), createVector(560, 100, 0), createVector(525, 33, 0), createVector(420, 0, 0), createVector(280, 0, 0)];
  allDigits[9] = [ createVector(560, 233, 0), createVector(525, 333, 0), createVector(455, 400, 0), createVector(350, 433, 0), createVector(315, 433, 0), createVector(210, 400, 0), createVector(140, 333, 0), createVector(105, 233, 0), createVector(105, 200, 0), createVector(140, 100, 0), createVector(210, 33, 0), createVector(315, 0, 0), createVector(350, 0, 0), createVector(455, 33, 0), createVector(525, 100, 0), createVector(560, 233, 0), createVector(560, 400, 0), createVector(525, 567, 0), createVector(455, 667, 0), createVector(350, 700, 0), createVector(280, 700, 0), createVector(175, 667, 0), createVector(140, 600, 0)];

  //allDigits = [zero,one,two,three,four,five,six,seven,eight,nine];

  shadow = [/*12*/createVector(0,0,0), /*1*/createVector(0,0,0), /*2*/createVector(0,0,0), /*3*/createVector(60,56,32), /*4*/createVector(83,82,62), /*5*/createVector(119,122,106),/*6am*/createVector(160,166,142), /*7am*/createVector(138,165,140),/*8am*/createVector(121,150,135), /*9am*/createVector(110,136,144),  /*10am*/createVector(96,103,132), /*11am*/createVector(138,165,140),  /*12pm*/createVector(95,81,140), /*1pm*/createVector(79,77,154),/*2pm*/createVector(79,104,176), /*3pm*/createVector(66,113,172), /*4pm*/createVector(59,142,166), /*5pm*/createVector(41,135,136), /*6pm*/createVector(32,121,103),/*7pm*/createVector(15,76,32), /*8pm*/createVector(45,49,7), /*9pm*/createVector(47,31,5), /*10*/createVector(0,0,0), /*11*/createVector(0,0,0) ]; 
  light = [/*12*/createVector(120,117,174), /*1*/createVector(131,138,160), /*2*/createVector(116,121,133), /*3*/createVector(94,96,100), /*4*/createVector(132,136,142), /*5*/createVector(178,157,177),/*6am*/createVector(216,187,201), /*7am*/createVector(230,195,201),/*8am*/createVector(238,210,199), /*9am*/createVector(241,219,200),  /*10am*/createVector(250,231,204), /*11am*/createVector(255,245,206),  /*12pm*/createVector(255,252,216), /*1pm*/createVector(255,247,205),/*2pm*/createVector(255,238,188), /*3pm*/createVector(255,220,164), /*4pm*/createVector(255,210,157), /*5pm*/createVector(255,203,157), /*6pm*/createVector(255,133,73),/*7pm*/createVector(255,99,73), /*8pm*/createVector(224,79,130), /*9pm*/createVector(171,89,145), /*10*/createVector(145,89,171), /*11*/createVector(108,89,171)]; 
}

function draw() {
  // Fetch the current time
  //hour() = hour();
  background(210,230,255,3);
  //background(220,230,255,4);
  minutes = minute();
  hr = hour();
  var lightnowr= light[hr].x;
  var lightnowg= light[hr].y;
  var lightnowb= light[hr].z;
  var darknowr= shadow[hr].x;
  var darknowg= shadow[hr].y;
  var darknowb= shadow[hr].z;
  tenMin = floor((minutes/10));
  singleMin = minutes%10;
  hourcircle.draw(t, lightnowr, lightnowg, lightnowb, darknowr, darknowg, darknowb);
  hourtwo.draw(t, lightnowr, lightnowg, lightnowb, darknowr, darknowg, darknowb);
  mincircle.draw(t, lightnowr, lightnowg, lightnowb, darknowr, darknowg, darknowb);
  mintwo.draw(t, lightnowr, lightnowg, lightnowb, darknowr, darknowg, darknowb);
  mnumPathtwo = allDigits[singleMin];
    var amountOfvert = mnumPathtwo.length;
    mverticestwo=mverticestwo%(amountOfvert-1);
    mverticeEndtwo=(mverticestwo+1)%(amountOfvert);//vertice = which vertice to go through
    var testingxtwo = mnumPathtwo[mverticeEndtwo].x;
    var testingytwo = mnumPathtwo[mverticeEndtwo].y;
    var sumtwo = testingxtwo+testingytwo;
    if (sumtwo <= 0){
      mverticestwo+=2;//this is to lift up the circle gradient when necesary if there's a break in path
    }
    mintwo.move(mnumPathtwo[mverticestwo],mnumPathtwo[mverticeEndtwo],mlerpNumtwo);
    mlerpNumtwo+=1/60;
    if(mlerpNumtwo > 1){
      mlerpNumtwo=0;
      mverticestwo++;
  }
  if (tenMin >0){
    mnumPath = allDigits[tenMin];
    var amountOfvertice = mnumPath.length;
    mvertices=mvertices%(amountOfvertice-1);
    mverticeEnd=(mvertices+1)%(amountOfvertice);//vertice = which vertice to go through
    var testingx = mnumPath[mverticeEnd].x;
    var testingy = mnumPath[mverticeEnd].y;
    var sum = testingx+testingy;
    if (sum <= 0){
      mvertices+=2;//this is to lift up the circle gradient when necesary if there's a break in path
    }
    mincircle.move(mnumPath[mvertices],mnumPath[mverticeEnd],mlerpNum);
    mlerpNum+=1/50;
    if(mlerpNum > 1){
      mlerpNum=0;
      mvertices++;
    }
  }
  if((!(hr > 9))||(hr>12)){
    numPath = allDigits[(hr%12)];
    var amountOfvertice = numPath.length;
    vertices=vertices%(amountOfvertice-1);
    verticeEnd=(vertices+1)%(amountOfvertice);//vertice = which vertice to go through
    var testingx = numPath[verticeEnd].x;
    var testingy = numPath[verticeEnd].y;
    var sum = testingx+testingy;
    if (sum <= 0){
      vertices+=2;//this is to lift up the circle gradient when necesary if there's a break in path
    }
    hourcircle.move(numPath[vertices],numPath[verticeEnd],lerpNum);
    lerpNum+=1/100;
    if(lerpNum > 1){
      lerpNum=0;
      vertices++;
    }
  }
  else if((hr = 11) || (hr = 23)){
    numPath = allDigits[1];
    var amountOfvertice = numPath.length;
    vertices=vertices%(amountOfvertice-1);
    verticestwo = (amountOfvertice-1)-vertices;
    verticeEnd=(vertices+1)%(amountOfvertice);//vertice = which vertice to go through
    verticeEndtwo = (amountOfvertice) - verticeEnd;
    var testingx = numPath[verticeEnd].x;
    var testingy = numPath[verticeEnd].y;
    var sum = testingx+testingy;
    if (sum <= 0){
      vertices+=2;//this is to lift up the circle gradient when necesary if there's a break in path
    }
    hourcircle.move(numPath[vertices],numPath[verticeEnd],lerpNum);
    hourtwo.move(numPath[vertices],numPath[verticeEnd],lerpNum);
    lerpNum+=1/100;
    if(lerpNum > 1){
      lerpNum=0;
      vertices++;
    }
  }
  else if((hr=12)||(hr=0)){
    numPath = allDigits[1];
    numPathtwo = allDigits[2];
    var amountOfvertice = numPath.length;
    var amountOfverticetwo = numPathtwo.length;
    vertices=vertices%(amountOfvertice-1);
    verticestwo=verticestwo%(amountOfverticetwo-1);
    verticeEnd=(vertices+1)%(amountOfvertice);//vertice = which vertice to go through
    verticeEndtwo=(vertices+1)%(amountOfverticetwo);
    var testingx = numPath[verticeEnd].x;
    var testingy = numPath[verticeEnd].y;
    var sum = testingx+testingy;
    if (sum <= 0){
      vertices+=2;//this is to lift up the circle gradient when necesary if there's a break in path
    }
    hourcircle.move(numPath[vertices],numPath[verticeEnd],lerpNum);
    hourtwo.move(numPathtwo[verticestwo],numPathtwo[verticeEndtwo],lerpNum);
    lerpNum+=1/100;
    if(lerpNum > 1){
      lerpNum=0;
      vertices++;
    }
  }
  t+=Math.PI*1/9000;
  push();
    translate(width/2, -30);
    rotate(t);
    extratwo.draw();
  pop();
  extra.draw();
}
function HourCircle(){
  this.radius = 90;
  this.diameter = this.radius*2; 
  this.x = 0.1 * width;
  this.y = 10 * height;
  this.draw = function(t,lightr,lightg,lightb, shadowr,shadowg, shadowb){
    for (var i = 1; i <= this.diameter; i++){
      this.incrementr = (shadowr-lightr)/180;
      this.incrementg = (shadowg-lightg)/180;
      this.incrementb = (shadowb-lightb)/180;
    //fullcircle
      this.lengthOfLine = Math.abs(this.radius*(Math.sin(Math.acos((90-i)/this.radius))));
    //halfcircle
    //this.lengthOfLine = Math.abs(this.radius*(Math.sin(Math.acos(i/this.radius))));
    //diamond
    //this.angle = (i/180)*Math.PI;
    //this.lengthOfLine = Math.abs(this.radius*(Math.sin(this.angle)));
      this.angle=(hour()+18)*-1*Math.PI/24;
      push();
        translate(this.x,this.y);
        rotate(this.angle);
        stroke(lightr+this.incrementr*i, lightg+this.incrementg*i,lightb+this.incrementb*i);
        line(-this.radius+i,-this.lengthOfLine,-this.radius+i,this.lengthOfLine);   
      pop();
    }
  }
  this.move = function(startv, endv, lerpNum){
    //println(endv);
    this.x = lerp(startv.x, endv.x, lerpNum);
    this.y = lerp(startv.y, endv.y, lerpNum);
  }

}

function MinCircle(rad){
  this.radius = rad;
  this.diameter = this.radius*2; 
  this.x = -100;
  this.y = -100;
  this.draw = function(t,lightr,lightg,lightb, shadowr,shadowg, shadowb){
    for (var i = 1; i <= this.diameter; i++){
      this.incrementr = (shadowr-lightr)/this.diameter;
      this.incrementg = (shadowg-lightg)/this.diameter;
      this.incrementb = (shadowb-lightb)/this.diameter;
    //diamond
    this.mappedi = map(i,0,this.diameter,0,180);
    this.angle = (this.mappedi/180)*Math.PI;
    this.lengthOfLine = Math.abs(this.radius*(Math.sin(this.angle)));
      this.rotation=(hour()+18)*-1*Math.PI/24;//REFLECTS POSITION OF SUN IN SKY
      push();
        translate(this.x, this.y);
        stroke(lightr+this.incrementr*i, lightg+this.incrementg*i,lightb+this.incrementb*i);
        line(-this.radius+i,-this.lengthOfLine,-this.radius+i,this.lengthOfLine);   
      pop();
    }
  }
  this.move = function(startv, endv, lerpNum){
    //println(endv);
    this.x = lerp(startv.x, endv.x, lerpNum);
    this.y = lerp(startv.y, endv.y, lerpNum);
  }
}
function Decor(){
  this.radius = 40;
  this.diameter = this.radius*2;
//var strokew = round(diameter/180);
  this.startr = 245;
  this.startg = 230;
  this.startb = 170;
  this.r = 235;
  this.g = 100;
  this.b = 120;

  this.draw=function(){
    this.startr = 75*noise(t+6)+200;
    this.startg = 55*noise(t+20)+200;
    this.startb = 55*noise(t+1)+200;
    this.r = this.startr-200*noise(t);
    this.g = this.startg-200*noise(t+9);
    this.b = this.startb-40*noise(t+4);
    for (var i = 1; i <= this.diameter; i++){
      this.incrementr = (this.r-this.startr)/this.diameter;
      this.incrementg = (this.g-this.startg)/this.diameter;
      this.incrementb = (this.b-this.startb)/this.diameter;
      this.mappedi = map(i,0,this.diameter,0,180);
      this.angle = (i/180)*Math.PI;
    //fullcircle
      this.lengthOfLine = Math.abs(this.radius*(Math.sin(Math.acos((90-this.mappedi)/this.radius))));
    //halfcircle
    //var lengthOfLine = Math.abs(radius*(Math.sin(Math.acos(i/radius))));
    //diamond
    //var lengthOfLine = Math.abs(radius*(Math.sin(angle)));
        stroke(this.startr+this.incrementr*i, this.startg+this.incrementg*i,this.startb+this.incrementb*i);
        line(mouseX-this.radius+i,mouseY-this.lengthOfLine,mouseX-this.radius+i,mouseY+this.lengthOfLine);
    }
    t+=1/1000;
  }
}
