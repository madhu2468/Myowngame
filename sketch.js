const Engine = Matter.Engine ;
const World = Matter.World ;
const Bodies = Matter.Bodies;

var engine;
var world;
var game;
var form;
var player;
var gameState = 0;
var playerCount;
var allPlayers;
var guardians;
var guardian1;
var guardian2;
var guardian3;
var guardian4;
var alien;
var ground;
var Bg;
var GameOver;
var TryAgain;

function preload(){
  Bg = loadImage("debg.jpg");
  GameOver = loadImage("gameover.jpg");
  TryAgain = loadImage("tryagain.png");
}

function setup() {
  createCanvas(displayWidth - 20,displayHeight - 30);
  engine = Engine.create();
  world = engine.world;
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

}

function draw() {
 if(playerCount === 4){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.level1();
  }
  if(gameState === 2){
   game.end();
 }
}
