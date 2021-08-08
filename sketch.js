var ball,db,position


function setup(){
    createCanvas(500,500);
    db=firebase.database()
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballPosition=db.ref("ball/position").on("value",readposition,showError)


}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
         writePosition(0,+1);
    }
    drawSprites();
}
    function readposition(data){
        position=data.val()
        ball.x=position.x
        ball.y=position.y
    }
function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;

}
function showError(){
    console.log("error connecting to database")
}
function writePosition(x1,y1){
    db.ref("ball/position")
    .set({
        x:position.x+x1,
        y:position.y+y1
    })
}