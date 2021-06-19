const Engine  = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    
    Engine.update(engine);
    // add condition to check if any background image is there to add

    if(backgroundImg)
    background(backgroundImg);

    // write code to display time in correct format here
    textSize(27);
    fill("violet");
    text("score:"+ hour,width-300,50);

}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var responseJSON = await response.json();
    
    var dateTime = responseJSON.datetime;
    var hour = dateTime.slice(11, 13);


    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06 ){
        bg = "sunrise1.png";
    }else if(hour>=06 && hour<=08){
        bg = "sunrise2.png";
    }else if(hour>=08 && hour<=10){
        bg = "sunrise3.png";
    }else if(hour>=10 && hour<=12){
        bg = "sunrise4.png";
    }else if(hour>=12 && hour<=14){
        bg = "sunrise5.png";
    }else if(hour>=14 && hour<=16){
        bg = "sunrise6.png";
    }else if(hour>=16 && hour<=18){
        bg = "sunrise7.png";
    }else if(hour>=18 && hour<=20){
        bg = "sunrise8.png";
    }else if(hour>=20 && hour<=23){
        bg = "sunrise2.png";
    } else if(hour>=23 && hour==00){
        bg = "sunset10.png";;
    }else if(hour==0 && hour<=03){
        bg = "sunset11.png";
    }else{
        bg ="sunset12.png";
    }
    

    //load the image in backgroundImg variable here
backgroundImg = loadImage(bg);
}
