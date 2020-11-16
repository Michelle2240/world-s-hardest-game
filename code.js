var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["465594f3-6666-4da9-8ed2-54ab92ac1d5b","45034d1c-c9a8-4a9e-8303-46dd5416f6fd","b8b4a475-446a-43b7-affa-4ea4b72343e9","a6e6a67f-e22b-4c02-ad9f-40c721638167","92833973-413f-4cca-a4c4-28caf7bb1a0f","b0553411-b60a-4010-b834-f26d0c4be238","6857a771-a9af-42ed-84cc-82f7c4f97dc8"],"propsByKey":{"465594f3-6666-4da9-8ed2-54ab92ac1d5b":{"name":"alienPink_walk_1","sourceUrl":"assets/api/v1/animation-library/gamelab/RNV_AFndfpZCAO2WgYfTcGwk3K2SP_kb/category_characters/alienPink_walk.png","frameSize":{"x":72,"y":98},"frameCount":2,"looping":true,"frameDelay":2,"version":"RNV_AFndfpZCAO2WgYfTcGwk3K2SP_kb","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":98},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RNV_AFndfpZCAO2WgYfTcGwk3K2SP_kb/category_characters/alienPink_walk.png"},"45034d1c-c9a8-4a9e-8303-46dd5416f6fd":{"name":"wide_screen_monitor_1","sourceUrl":"assets/api/v1/animation-library/gamelab/s9HNqnKGwfgWDfTzxGNmByktqOO4Ky.T/category_generic_items/wide_screen_monitor.png","frameSize":{"x":163,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"s9HNqnKGwfgWDfTzxGNmByktqOO4Ky.T","categories":["generic_items"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":163,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/s9HNqnKGwfgWDfTzxGNmByktqOO4Ky.T/category_generic_items/wide_screen_monitor.png"},"b8b4a475-446a-43b7-affa-4ea4b72343e9":{"name":"carrot_gold_1","sourceUrl":"assets/api/v1/animation-library/gamelab/LAW.Xj.ys6BFIpkx7tRDDUCTXl9sLAn7/category_food/carrot_gold.png","frameSize":{"x":78,"y":70},"frameCount":1,"looping":true,"frameDelay":2,"version":"LAW.Xj.ys6BFIpkx7tRDDUCTXl9sLAn7","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":78,"y":70},"rootRelativePath":"assets/api/v1/animation-library/gamelab/LAW.Xj.ys6BFIpkx7tRDDUCTXl9sLAn7/category_food/carrot_gold.png"},"a6e6a67f-e22b-4c02-ad9f-40c721638167":{"name":"purse_1","sourceUrl":"assets/api/v1/animation-library/gamelab/u7ohN2eZItOXQwWPVle.gdy6QVJpsz6v/category_generic_items/purse.png","frameSize":{"x":89,"y":137},"frameCount":1,"looping":true,"frameDelay":2,"version":"u7ohN2eZItOXQwWPVle.gdy6QVJpsz6v","categories":["generic_items"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":89,"y":137},"rootRelativePath":"assets/api/v1/animation-library/gamelab/u7ohN2eZItOXQwWPVle.gdy6QVJpsz6v/category_generic_items/purse.png"},"92833973-413f-4cca-a4c4-28caf7bb1a0f":{"name":"door.jpg_1","sourceUrl":null,"frameSize":{"x":450,"y":470},"frameCount":1,"looping":true,"frameDelay":12,"version":"BkWKc9mI5bXQwxBmRqiqi7.wnzRoBpg3","loadedFromSource":true,"saved":true,"sourceSize":{"x":450,"y":470},"rootRelativePath":"assets/92833973-413f-4cca-a4c4-28caf7bb1a0f.png"},"b0553411-b60a-4010-b834-f26d0c4be238":{"name":"door.jpg_1_copy_1","sourceUrl":"assets/v3/animations/Id2Am3lNOL4_afq0ax0skDfpC9t3pO0d_psfAa15UUQ/92833973-413f-4cca-a4c4-28caf7bb1a0f.png","frameSize":{"x":450,"y":470},"frameCount":1,"looping":true,"frameDelay":5,"version":"ijM47AX8Wcz7fMTb0lpDqblaiTq6XLa_","loadedFromSource":true,"saved":true,"sourceSize":{"x":450,"y":470},"rootRelativePath":"assets/v3/animations/Id2Am3lNOL4_afq0ax0skDfpC9t3pO0d_psfAa15UUQ/92833973-413f-4cca-a4c4-28caf7bb1a0f.png"},"6857a771-a9af-42ed-84cc-82f7c4f97dc8":{"name":"box_1","sourceUrl":"assets/api/v1/animation-library/gamelab/c4byhbiAgbRU6PbYG1UFzOh0kkYlH17j/category_characters/box.png","frameSize":{"x":66,"y":118},"frameCount":3,"looping":true,"frameDelay":2,"version":"c4byhbiAgbRU6PbYG1UFzOh0kkYlH17j","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":198,"y":118},"rootRelativePath":"assets/api/v1/animation-library/gamelab/c4byhbiAgbRU6PbYG1UFzOh0kkYlH17j/category_characters/box.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var thief = createSprite(20,38,20,40);
thief.setAnimation("alienPink_walk_1");
thief.scale = 0.5;

var floor1 = createSprite(-25,85,675,10);
floor1.shapeColor = "black";

var floor2 = createSprite(80,190,675,10);
floor2.shapeColor = "black";

var floor3 = createSprite(-25,290,675,10);
floor3.shapeColor = "black";

var box = createSprite(206,165,40,40);
box.setAnimation("box_1");
box.scale = 0.3;

var door1 = createSprite(370,85,110,10);
door1.shapeColor = "brown";


var door2 = createSprite(5,150,10,70);
door2.shapeColor = "brown";


var door3 = createSprite(370,290,110,10);
door3.shapeColor = "brown";


var computer = createSprite(45,240,10,10);
computer.setAnimation("wide_screen_monitor_1");
computer.scale = 0.4;

var box2 = createSprite(42,272,35,25);
box2.setAnimation("box_1");
box2.scale = 0.4;

var laser1 = createSprite(0,110,10,45);
laser1.shapeColor = "red";
laser1.velocityX = 10;

var laser2 = createSprite(300,325,10,10);
laser2.shapeColor = "red";
laser2.velocityY = 10;

var laser3 = createSprite(225,364,10,10);
laser3.shapeColor = "red";
laser3.velocityY = 10;

var laser4 = createSprite(150,325,10,10);
laser4.shapeColor = "red";
laser4.velocityY = 10;

var laser5 = createSprite(75,364,10,10);
laser5.shapeColor = "red";
laser5.velocityY = 10;

var money1 = createSprite(268,55,10,10);
money1.setAnimation("carrot_gold_1");
money1.scale = 0.35;

var money2 = createSprite(200,122,10,10);
money2.setAnimation("carrot_gold_1");
money2.scale = 0.35;

var money3 = createSprite(280,255,10,10);
money3.setAnimation("carrot_gold_1");
money3.scale = 0.35;

var money4 = createSprite(170,355,10,10);
money4.setAnimation("carrot_gold_1");
money4.scale = 0.35;

var suitcase = createSprite(30,380,10,10);
suitcase.setAnimation("purse_1");
suitcase.scale = 0.4;

var defender ;

var score = 0;

var Death = 0;
var gameState = "level1";
var ball1;
var ball2;
ball1 = createSprite(100,325,10,10);
    ball1.velocityY = 3;
    ball1.shapeColor = "red";
    
     ball2 = createSprite(200,364,10,10);
     ball2.velocityY = 3;
     ball2.shapeColor = "red";
     
     defender = createSprite(0,110,10,45);
    defender.velocityX = 2;
    defender.shapeColor = "red";
    
function draw() {
  //background("blue");
  
  if(gameState == "level1")
  {
    laser1.visible = false;
    background("blue");
    
    if (thief.isTouching(door1)) {
   textSize(15);
   fill("white");
   text("Press X to Open Door",240,115);
  }
  
  if (thief.isTouching(door1) && keyDown("x")) {
   door1.width = 10;
   door1.height = 80;
   door1.x = 312;
   door1.y = 50;
  }
  
  if (thief.isTouching(door2)) {
   textSize(15);
   fill("white");
   text("Press X to Open Door",57,140);
  }
  
  if (thief.isTouching(door2) && keyDown("x")) {
   door2.width = 10;
   door2.height = 80;
   door2.x = 312;
   door2.y = 50;
   thief.x = 100;
   thief.y = 276;
  }
  
  if (keyDown("left")) {
  thief.x = thief.x-10;
  thief.setAnimation("alienPink_walk_1");
  }

  if (keyDown("right")) {
  thief.x = thief.x+6;
  thief.setAnimation("alienPink_walk_1");
  }
  
  if (keyWentUp("left")) {
  thief.setAnimation("alienPink_walk_1");
  }

  if (keyWentUp("right")) {
  thief.setAnimation("alienPink_walk_1");
  }

  if (keyDown("space") || keyDown("up")) {
  thief.velocityY = -10;
  }

  thief.velocityY= thief.velocityY+0.5;
  
  createEdgeSprites() ;
  thief.collide(box2);
  thief.collide(edges) ;
  thief.collide(door3);
  thief.collide(floor3);
  thief.collide(floor1); 
  thief.collide(door1);
  thief.collide(floor2);
  thief.collide(box);
  defender.bounceOff(edges);
  ball1.bounceOff(edges);
  ball2.bounceOff(edges);
  ball2.bounceOff(floor3); 
  ball1.bounceOff(floor3); 

  if (thief.isTouching(money1)) {
  playSound("assets/category_alerts/vibrant_game_shutter_alert_1_short_quick.mp3");
  money1.y = 1000;
  score = +100; 
  }

  if (thief.isTouching(money2)) {
  playSound("assets/category_alerts/vibrant_game_shutter_alert_1_short_quick.mp3");
  money2.y = 1000;
  score = +200; 
  }

  if (thief.isTouching(money3)) {
  playSound("assets/category_alerts/vibrant_game_shutter_alert_1_short_quick.mp3");
  money3.y = 1000;
  score = +300;
  }

  if (thief.isTouching(money4)) {
  playSound("assets/category_alerts/vibrant_game_shutter_alert_1_short_quick.mp3");
  money4.y = 1000;
  score = +400; 
  }
 
  if (thief.isTouching(defender) || thief.isTouching(ball2) ) {
  reset();
  Death = Death+1;
  playSound("assets/category_explosion/melodic_loss_1.mp3");
  }

  if (thief.isTouching(computer)) {
  fill("white");
  textSize(15);
  text("Press H to Hack",97,217);
  }

  if (thief.isTouching(computer) && keyDown("h")) {
  door3.width = 10;
  door3.height = 80;
  door3.x = 390;
  door3.y = 283;
  door3.shapeColor = "green";
  playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3");
  computer.setAnimation("wide_screen_monitor_1"); 
  }    
 
  if (thief.isTouching(suitcase)) {
  textFont(15);
  fill("white");
  text("Press D to Deposit Money",10,310);
  }

  if (thief.isTouching(suitcase) && keyDown("d")) {
  textSize(25);
  fill("white");
  text("All Money Collected",115,16);
  text("Press R for level2",108,40);
  gameState = "level 1 completed";
  Death = 0;
  }
  if(keyDown ("r") && gameState == "level 1 completed")
  {
    gameState = "level2";
  }
  textSize(20);
  fill("white");
  text("Deaths : "+Death, 300, 20);
  
  textSize(20);
  fill("white");
  text("score : "+score, 15, 20);
 
  drawSprites();

  }
  
  
if(gameState == "level2")
{
  background("white");
  defender.destroy();
  ball1.destroy();
  ball2.destroy();
  
  if (thief.isTouching(door1)) {
   textSize(15);
   fill("white");
   text("Press X to Open Door",240,115);
  }
  
  if (thief.isTouching(door1) && keyDown("x")) {
   door1.width = 10;
   door1.height = 80;
   door1.x = 312;
   door1.y = 50;
  }
  
  if (thief.isTouching(door2)) {
   textSize(15);
   fill("white");
   text("Press X to Open Door",57,140);
  }
  
  if (thief.isTouching(door2) && keyDown("x")) {
   door2.width = 10;
   door2.height = 80;
   door2.x = 312;
   door2.y = 50;
   thief.x = 100;
   thief.y = 276;
  }
  
  if (keyDown("left")) {
  thief.x = thief.x-10;
  thief.setAnimation("alienPink_walk_1");
  }

  if (keyDown("right")) {
  thief.x = thief.x+6;
  thief.setAnimation("alienPink_walk_1");
  }
  
  if (keyWentUp("left")) {
  thief.setAnimation("alienPink_walk_1");
  }

  if (keyWentUp("right")) {
  thief.setAnimation("alienPink_walk_1");
  }

  if (keyDown("space") || keyDown("up")) {
  thief.velocityY = -10;
  }

  thief.velocityY= thief.velocityY+0.5;
  
  createEdgeSprites() ;
  thief.collide(box2);
  thief.collide(edges) ;
  thief.collide(door3);
  thief.collide(floor3);
  thief.collide(floor1); 
  thief.collide(door1);
  thief.collide(floor2);
  thief.collide(box);
  laser1.bounceOff(edges);
  laser2.bounceOff(edges);
  laser3.bounceOff(edges);
  laser4.bounceOff(edges);
  laser5.bounceOff(edges); 
  laser2.bounceOff(floor3); 
  laser3.bounceOff(floor3); 
  laser4.bounceOff(floor3);  
  laser5.bounceOff(floor3);
 
  if (thief.isTouching(money1)) {
  playSound("assets/category_alerts/vibrant_game_shutter_alert_1_short_quick.mp3");
  money1.y = 1000;
  score = +100; 
  }

  if (thief.isTouching(money2)) {
  playSound("assets/category_alerts/vibrant_game_shutter_alert_1_short_quick.mp3");
  money2.y = 1000;
  score = +200; 
  }

  if (thief.isTouching(money3)) {
  playSound("assets/category_alerts/vibrant_game_shutter_alert_1_short_quick.mp3");
  money3.y = 1000;
  score = +300;
  }

  if (thief.isTouching(money4)) {
  playSound("assets/category_alerts/vibrant_game_shutter_alert_1_short_quick.mp3");
  money4.y = 1000;
  score = +400; 
  }
 
  if (thief.isTouching(laser1) || thief.isTouching(laser2) || thief.isTouching(laser3) || thief.isTouching(laser4) || thief.isTouching(laser5)) {
  reset();
  Death = Death+1;
  playSound("assets/category_explosion/melodic_loss_1.mp3");
  }

  if (thief.isTouching(computer)) {
  fill("white");
  textSize(15);
  text("Press H to Hack",97,217);
  }

  if (thief.isTouching(computer) && keyDown("h")) {
  door3.width = 10;
  door3.height = 80;
  door3.x = 390;
  door3.y = 283;
  door3.shapeColor = "green";
  playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3");
  computer.setAnimation("wide_screen_monitor_1"); 
  }    
 
  if (thief.isTouching(suitcase)) {
  textFont(15);
  fill("white");
  text("Press D to Deposit Money",10,310);
  }

  if (thief.isTouching(suitcase) && keyDown("d")) {
  textSize(25);
  fill("white");
  text("All Money Collected",115,16);
  text("Press R to Reset",108,40);
  Death = 0;
  }

 
  
  textSize(20);
  fill("white");
  text("Deaths : "+Death, 300, 20);
  
  textSize(20);
  fill("white");
  text("score : "+score, 15, 20);
 
  drawSprites();
}
}

function reset (){
score = 0;
thief.x = 50;
thief.y = 60;
door1.width = 110;
door1.height = 10;
door1.x = 370;
door1.y = 85;
money1.y = 55;
money2.y = 122;
money3.y = 255;
money4.y = 355;
door3.x = 370;
door3.y = 290;
door3.width = 110;
door3.height = 10;
door3.shapeColor = "brown";
computer.setAnimation("wide_screen_monitor_1");
laser1.x = 0;
door2.x = 5;
door2.y = 150;
box.y = 165;
box2.y = 272;
floor1.y = 85;
floor2.y = 190;
floor3.y = 290;
computer.y = 240;
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
