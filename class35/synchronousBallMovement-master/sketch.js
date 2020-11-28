var database;
var form,game,player;
var gameState = 0;
var playerCount = 0;

function setup(){
createCanvas(400,400);
 
//to create a database 
database = firebase.database();

//create the game object from the Game class
game = new Game();

//get/read the state of the game and start the game
game.getState();

game.start();

  }

  function draw(){
    
  }
