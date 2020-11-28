class Form{
    constructor(){

    }
 
    display(){
        //Element
   var title = createElement('h2');
   title.html("Car Racing Game");
   title.position(130,0);
    
   //creating Input
   var input = createInput("name");
   input.position(130,160);

  //creating button 
    var button = createButton('Play');    
    button.position(250,200);
  
    button.mousePressed(function(){
    //hide the input & button using the hide()
    input.hide();
    button.hide();

    //store the name that was input by the player inside a variable called name using input.val();
     var name = input.value();

    //increase the playerCount
    playerCount +=1;

    //update the name of the player
    player.update(name);

    //update the increase in playerCount in the database
    player.updateCount(playerCount);

    //greet the player with "hello" + name
    var greet = createElement('h2');
    greet.html("Hello " + name);
    greet.position(130,160);

    


    });

  }
}

