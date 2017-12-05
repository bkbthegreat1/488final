var myClick = false;
var r;
var b;
var g;
var overCircle;
var overCircle1;

var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img10;
var img11;
var img12;
totalImages = 12;

counter = 1;

function preload() {
    img1 = loadImage("democrats/Clinton.jpg");
    img2 = loadImage("democrats/Obama.jpg");
    img3 = loadImage("democrats/Biden.jpg")
    img4 = loadImage("democrats/Bernie.jpg")
    img5 = loadImage("democrats/Hilary.jpg")
    img6 = loadImage("democrats/final.jpg")
    img7 = loadImage("republicans/Bush.jpeg")
    img8 = loadImage("republicans/Romney.jpg")
    img9 = loadImage("republicans/Cruz.jpg")
    img10 = loadImage("republicans/Reagan.jpg")
    img11 = loadImage("republicans/Trump.jpg")
    img12 = loadImage("republicans/final.jpg")
}

function setup(){
createCanvas(400,400);
ellipseMode(CENTER);
    noFill();
    r = random(255);
    g = random(255);
    b= random(255);
}

function draw(){
    console.log(counter);

    background(r,g,b);
    if (counter == 1) {     
        image(img1, 0, 0);
    }
    else if (counter == 2){
       image(img2, 0, 0);  
    }
     else if (counter == 3){
       image(img3, 0, 0);  
    }
     else if (counter == 4){
       image(img4, 0, 0);  
    }
     else if (counter == 5){
       image(img5, 0, 0);  
    }
     else if (counter == 6){
       image(img6, 0, 0);  
    }
    else if (counter == 7){
       image(img7, 0, 0);  
    }
     else if (counter == 8){
       image(img8, 0, 0);  
    }
     else if (counter == 9){
       image(img9, 0, 0);  
    }
     else if (counter == 10){
       image(img10, 0, 0);  
    }
     else if (counter == 11){
       image(img11, 0, 0);  
    }
     else if (counter == 12){
       image(img12, 0, 0);  
    }










   noStroke();
    text(mouseX + ":" + mouseY,300,50);
    
// var distance is a local variable inside of draw because mouseX and mouseY only update in the draw function, when using the dist function the first 2 values are the mouseX and mouse Y cordinates, the second set of values is the location of the shape - in this case its x and y location 
    
     var distance = dist(mouseX, mouseY, 330, 350);

// the code below checks if the distance between the mouse and the circle's position is less than or equal to the circle's radius (which is half of the circle's diameter). 

 if(distance < 50){
    overCircle1 = true;
 } 
 else {
     overCircle1 = false;
}
  
if (overCircle1){
    fill(255,0,0);
    cursor(HAND);
}
else {
    fill(0,255,0); 
    cursor();
}
stroke(0);
strokeWeight(5);
ellipse(330, 350, 50, 50);
     
   var distance = dist(mouseX, mouseY, 70, 350);

// the code below checks if the distance between the mouse and the circle's position is less than or equal to the circle's radius (which is half of the circle's diameter). 

 if(distance < 50){
    overCircle = true;
 } 
 else {
     overCircle = false;
}
  
if (overCircle){
    fill(255,0,0);
    cursor(HAND);
}
else {
    fill(0,255,0); 
    cursor();
}
stroke(0);
strokeWeight(5);
ellipse(70, 350, 50, 50);
}



function mousePressed(){
//the code below uses the overCircle shape as the button area and instead of if/else statements using a logical operator NOT - so if state is false and it is equal to NOT FALSE - then the state is TRUE ie false is not false, or if TRUE = NOT TRUE then the state must be FALSE
if (overCircle == true){
    myClick = !myClick;

 }
 if (overCircle1 == true){
    myClick = !myClick;

 }

if (counter >= totalImages) {
    counter = 1;
}
else {
    counter = counter + 1;
}
}