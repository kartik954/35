var ball;
var database, position;

function setup(){
    database = firebase.database();
    position = database.ref("ball/position");
    position.on("value", readpos, myerror);
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(position !== undefined){
    if(keyDown(LEFT_ARROW)){
        setposition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        setposition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        setposition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        setposition(0,+1);
    }
  }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readpos(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}

function myerror(err){
    console.log(err);
}

function setposition(x, y){
    database.ref('ball/position').set({'x': position.x + x, 'y': position.y + y});
}
