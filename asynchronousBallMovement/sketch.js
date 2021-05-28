var canvas,backgroundImage;
var gamestate=0;
var playerCount;

var database;

var form,player,game;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    game =new Game();
    game.getstate();
    game.start();
   
}

function draw(){
    if(playerCount===4){
        game.update(1);
    
    }
    if(gameState===1){
        clear();
        game.play();
    }
}