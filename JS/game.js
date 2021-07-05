class Game {

    constructor(){

    }

    getState(){
        var stateref = database.ref("gamestate");
        stateref.on("value",function(data){
            gameState = data.val();
        })
    }

    updateState(state){
        database.ref('/').update({
            gamestate: state
        })
    }

    async start(){
        if(gameState===0){
            player = new Player();
            var playercountref = await database.ref("playercount").once("value");
            if (playercountref.exists()){
                pcount = playercountref.val();
                player.getpcount();
            }
            form = new Form();
            form.display();
        }
    }

    play(){
        form.hide();
        textSize(30);
        text("Game Start",120,30);
        Player.getplayerinfo();
        if (allplayers!=undefined){
           var display_position = 50;
            for (var plr in allplayers){
                if(plr==="player"+player.index){
                    fill("red");
                }
                else {
                        fill("black");
                }
                display_position=display_position+20;
                text(allplayers[plr].name + ":" + allplayers[plr].distance,120,display_position);
            }

            if (keyDown(UP_ARROW)&&player.index!=null){
                    player.distance+=50;
                    player.updatename();
                   console.log("kanishka")
            }
        }
    }
}

