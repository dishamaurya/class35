class Player{
    constructor(){

    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        })

    }

    updateCount(count){
        database.ref('/').update({
            playerCount:count
        });

    }

    update(name){
        //playerIndex = order of the player logging in
        var playerIndex = "player"+ playerCount;
                //Eg. if playerIndex = 3, => player3 (3= playerCount);

      //refer to the database and set the name for the player using .set
      database.ref(playerIndex).set({
          name: name 
      })

    }
}

