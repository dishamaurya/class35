/* 1. The game object should be able to read the gameState and update the gameState
2. It should be able to start itself and display the game on the screen depending upon the gameState*/

//create a class game
class Game{

constructor(){
    
}

getState(){
var gameStateRef = database.ref('gameState');           //reference
gameStateRef.on("value",function(data){                  //listener
gameState = data.val();
}) ;                                 
}

update(state){
    database.ref('/').update({
        gameState:state
    });
}

start(){
    if(gameState === 0){
        //a new player object from the Player class is created
        player = new Player();

        //the count of the player is read/get
        player.getCount();

        //a new form object from the Form class is created
        form = new Form();

        //display the form
        form.display();
    }
}


}