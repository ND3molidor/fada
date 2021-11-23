var starImg,bgImg,bg;
var star, starBody;
var engine,world;
var fada,fadaimg;
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var posx,posy;

function preload(){
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    fadaimg = loadImage("images/fada.png ");
    //carregar animação de fada 
}

function setup() {
    createCanvas(800, 750);
 engine = Engine.create();
 world = engine.world;
    //escrever código para tocar o som vozFada

    //criar sprite de fada e adicionar animação para fada

    

    bg = createSprite(width/2,height/2);
	bg.addImage(bgImg);

    fada = createSprite(100,600);
    fada.addImage(fadaimg);
    fada.scale =0.2;

    star = createSprite(600,30);
	star.addImage(starImg);
	star.scale = 0.2;

    starBody = Bodies.circle(600,30,5,{isStatic:true});
    World.add(world,starBody);
	
	
  	
 Engine.run(engine);
    
    
}

function draw(){
background(0);



if(keyDown("left")){
    fada.x = fada.x -5;
   }
   
   if(keyDown("right")){
    fada.x = fada.x + 5;
   }

   if(keyDown("space")){
       star.x = starBody.position.x; 
       star.y = starBody.position.y;
       Matter.Body.setStatic(starBody,false);
   }
   
   
  

   if(starBody.position.y >570){
    Matter.Body.setStatic(starBody,true);
   }

 drawSprites()  
 
 posx = mouseX;
   posy = mouseY;
    text(posx + ","+ posy ,posx ,posy);
}
