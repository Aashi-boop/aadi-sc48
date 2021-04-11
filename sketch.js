var ground1,theif,aadi,keyy;
var story1=1;
var story2=2; 
var story3=3;
var story4=4; 
var story5=5;
var story6=6; 
var play= "start";
var end="over";
var out="gameover"
var gamestate=story1;
var counter 

function preload() {


escapekeyimg = loadImage("imagesofprisonergame/escapekey.png")
escaperoomimg = loadImage("imagesofprisonergame/escaperoomimg.jpg")
jailcell = loadImage("imagesofprisonergame/jailcell.jpg")
policestationimg = loadImage("imagesofprisonergame/policestation.jpg")
mainimg = loadAnimation("imagesofprisonergame/runningmain.png","imagesofprisonergame/standingmain.png")
policemanimg = loadAnimation("imagesofprisonergame/standingpoliceman.png","imagesofprisonergame/walkingpoliceman.png")
theifimg = loadAnimation("imagesofprisonergame/standingtheif.png","imagesofprisonergame/walkingtheif.png")
theifstaticimg=loadAnimation("imagesofprisonergame/standingtheif.png")
mainstaticimg=loadAnimation("imagesofprisonergame/standingmain.png")
mainshockimg=loadAnimation("imagesofprisonergame/aadishock.png")
messyroom=loadImage("imagesofprisonergame/messyroom.jpg")
escaped= loadImage("imagesofprisonergame/escaped.jpg")
caught=loadImage("imagesofprisonergame/caught.jpg")
ticktok=loadSound("ticktok.mp3")
siren=loadSound("siren.mp3")
}

function setup (){
createCanvas(2040,940)
ground1 = createSprite(width/2,800,width,20)
ground1.visible=false;

theif = createSprite(800,700,40,140)
theif.addAnimation("clueman",theifstaticimg)
theif.scale=2
aadi = createSprite(1800,700,40,140)
aadi.addAnimation("shockmain",mainshockimg)
aadi.addAnimation("staticmain",mainstaticimg)
aadi.addAnimation("runningmain",mainimg)
aadi.scale=1.2
aadi.setCollider("rectangle",0,0,50,140)
//aadi.debug=true;
aadi.mirrorX(-1)
counter=40



setInterval(function(){
    counter=counter-1;
   
},1000)

keyy=createSprite(random(50,1750),random(300,750))
    keyy.addImage(escapekeyimg)
    keyy.scale=0.3
    keyy.visible=false
    //keyy.debug=true;
//setInterval(function(){
       
//},2000)
textStyle(BOLD)
strokeWeight(3)
stroke("black")
   
}


function draw()
{
background(jailcell)

if(gamestate===play)
{

    
   background(escaperoomimg)
     
   
}
//background("white")
//theif.collide(ground1)
 drawSprites()
 
textSize(30)
fill("black")
//text(gamestate,width/2,500)
//text(mouseX, width/2,300)
//text(mouseY,width/2,320)
//console.log(gamestate)
    if(counter%2===0 && gamestate===play)
        {
            keyy.visible=true
             //ticktok.play();
        }
        else
        {
            keyy.visible=false
            
        }

    if (gamestate===story1)
    {
    textSize(50)
    fill("black")
    text("Press Space key to know the story",50,880)  
    
    //console.log(gamestate)
        if (keyDown("space")) 
        {
        
            gamestate=story2 
        }
                     
    }

    if (gamestate===story2)
    {
    textSize(40)
    fill("red")
    text("I can help you escape prison", 700,550)
 
    textSize(50)
    fill("black")
    text("Press *z* to continue", 50, 880)

        if (keyDown("z"))
        {
        gamestate= story3;
        }
 
    }

    if(gamestate===story3)
    {
        
    textSize(40)
    fill("red")
    text(" What do I have to do?",1300,550)
    
    aadi.changeAnimation("staticmain",mainstaticimg)
    textSize(50)
    fill("black")
    text("Press *x* to continue", 50, 880)
        if (keyDown("x"))
            {
            gamestate= story4;
            }
   
    }

    if(gamestate===story4)
    {
        
    textSize(40)
    fill("red")
    
    text(" You need to search for the keys without",700,450)
    text(" being caught by the policeman. Make sure", 700, 500)
    text("  you find it before the buzzer rings.",700,550)
   
    textSize(50)
    fill("black")
    text("Press *K* to Search for the keys", 50, 880)
        if (keyDown("k"))
            {
            gamestate= story5;
            }
   
    }
    

    if(gamestate===story5)
    {
       
            background("black")
    textSize(40)
    strokeWeight(3)
    stroke("black")
    fill("white")
    
    text(" CONTROLS A(left)-S(down)-W(up)-D(right)",500,250)
 text("Collect the Keys Before buzzer rings", 500,350)

 textSize(70)
  stroke("red")
    fill("black")
 text("WATCH THE TIMER!!", 600, 500)    

 textSize(30)
    stroke("black")
    fill("white")
text("Press enter to Enter the game",1700,850)
        
   if(keyDown("enter"))
   {
       gamestate=play;
   }
   
    }
if (gamestate===play)
{
   // console.log("search the keys")
   //background(escaperoomimg)
  
    textSize(60)
    fill("red")
   //text(mouseX, 300, 300)
   //text(mouseY, 300, 320)
    text("Counter"+ counter,1000,100)
   
    
    if (counter===0){
        //ticktok.stop();
        //counter=20
        gamestate=out
        
    }

    theif.visible=false
    //keyy.visible=true
   // setInterval(keyy.visible=true,2000)
    if (keyWentDown("a"))
    {
         aadi.velocityX=-3
        aadi.changeAnimation("runningmain", mainimg)
        aadi.mirrorX(-1)
    }
    if (keyWentUp("a"))
    {
        //aadi.x=aadi.x-2
         aadi.velocityX=0
        aadi.changeAnimation("shockmain", mainshockimg)
        aadi.mirrorX(-1)
    }
    if (keyWentDown("d"))
    {
        aadi.velocityX=3
        aadi.changeAnimation("runningmain", mainimg)
        aadi.mirrorX(1)
    }

    if (keyWentUp("d"))
    {
        //aadi.x=aadi.x-2
         aadi.velocityX=0
        aadi.changeAnimation("shockmain", mainshockimg)
        aadi.mirrorX(1)
    }
    if (keyWentDown("w") && aadi.y>=630)
    {
         aadi.velocityY=-3
        aadi.changeAnimation("runningmain", mainimg)
    }

    if (keyWentUp("w"))
    {
        //aadi.x=aadi.x-2
         aadi.velocityY=0
        aadi.changeAnimation("shockmain", mainshockimg)
    }
    if (keyWentDown("s")&& aadi.y>=630)
    {
         aadi.velocityY=3
        aadi.changeAnimation("runningmain", mainimg)
    }
    if (keyWentUp("s"))
    {
        //aadi.x=aadi.x-2
         aadi.velocityY=0
        aadi.changeAnimation("shockmain", mainshockimg)
    }

    if(aadi.isTouching(keyy)){
        gamestate=end
    }
}
 if (gamestate===out){
     background("black")
     //siren.play();
     textSize(50)
     fill("white")
     text("Mission Failed",300,500)
      aadi.velocityX=0;
      aadi.velocityY=0
     keyy.destroy()
     background(caught);
 }
   if (gamestate===end){
       
       aadi.velocityX=0;
       aadi.velocityY=0
         keyy.destroy()
         background(escaped)
   }
}