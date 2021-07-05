var database;
var game;
var gameState = 0;
var form,player;
var pcount;
var allplayers;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    if (pcount===4){
        game.updateState(1);
    }
    if (gameState===1){
        clear();
        game.play();
    }
}



