var prevSec;
var millisRolloverTime;
// A wind direction vector
var wind;
// Circle position
var position;
//--------------------------
function setup() {
  createCanvas(300, 300);
  millisRolloverTime = 0;
  var url = 'https://api.apixu.com/v1/current.json?key=513d8003c8b348f1a2461629162106&q=NYC';
  loadJSON(url, gotWeather);
  // Circle starts in the middle
  position = createVector(width/2, height/2);
  // wind starts as (0,0)
  wind = createVector();
}

//--------------------------
function draw() {
  background(255,200,200); // My favorite pink

  // Fetch the current time
  var H = hour();
  var M = minute();
  var S = second();

  // Reckon the current millisecond, 
  // particularly if the second has rolled over.
  // Note that this is more correct than using millis()%1000;
  if (prevSec != S) {
    millisRolloverTime = millis();
  }
  prevSec = S;
  var mils = floor(millis() - millisRolloverTime);

  fill(128,100,100);
  text("Hour: "   + H, 10, 22);
  text("Minute: " + M, 10, 42);
  text("Second: " + S, 10, 62);
  text("Millis: " + mils, 10, 82);

  var hourBarWidth   = map(H, 0, 23, 0, width);
  var minuteBarWidth = map(M, 0, 59, 0, width);
  var secondBarWidth = map(S, 0, 59, 0, width);

  // Make a bar which *smoothly* interpolates across 1 minute.
  // We calculate a version that goes from 0...60, 
  // but with a fractional remainder:
  var secondsWithFraction   = S + (mils / 1000.0);
  var secondsWithNoFraction = S;
  var secondBarWidthChunky  = map(secondsWithNoFraction, 0, 60, 0, width);
  var secondBarWidthSmooth  = map(secondsWithFraction,   0, 60, 0, width);

  noStroke();
  fill(40);
  rect(0, 100, hourBarWidth, 50);
  fill(80);
  rect(0, 150, minuteBarWidth, 50);
  fill(120)
  rect(0, 200, secondBarWidthChunky, 50);
  fill(160)
  rect(0, 250, secondBarWidthSmooth, 50);

    // This section draws an arrow pointing in the direction of wind
  push();
  translate(32, height - 32);
  // Rotate by the wind's angle
  rotate(wind.heading() + PI/2);
  noStroke();
  fill(255);
  ellipse(0, 0, 48, 48);

  stroke(45, 123, 182);
  strokeWeight(3);
  line(0, -16, 0, 16);

  noStroke();
  fill(45, 123, 182);
  triangle(0, -18, -6, -10, 6, -10);
  pop();
  
  // Move in the wind's direction
  position.add(wind);
  
  stroke(0);
  fill(51);
  ellipse(position.x, position.y, 16, 16);

  if (position.x > width)  position.x = 0;
  if (position.x < 0)      position.x = width;
  if (position.y > height) position.y = 0;
  if (position.y < 0)      position.y = height;
}
function gotWeather(weather) {
  
  // Get the angle (convert to radians)
  var angle = radians(Number(weather.current.wind_degree));
  // Get the wind speed
  var windmag = Number(weather.current.wind_mph);
  
  // Display as HTML elements
  var temperatureDiv = createDiv(floor(weather.current.temp_f) + '&deg;');
  var windDiv = createDiv("WIND " + windmag + " <small>MPH</small>");
  
  // Make a vector
  wind = p5.Vector.fromAngle(angle);
}