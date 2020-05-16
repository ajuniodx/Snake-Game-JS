let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
};
let direction = "right";

function createBg() {
    context.fillStyle = "#673AB7";
    context.fillRect(0, 0, 16 * box, 16 * box);
};

function createSnake(){
    for (i = 0;  i < snake.length; i++){
        context.fillStyle = "#00dde1";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    };
};

function startGame() {
    createBg();
    createSnake();

    let positionX = snake[0].x ;
    let positionY = snake[0].y ;

    if(direction == "right") positionX += box;
    if (direction == "left") positionX -= box;
    if (direction == "up") positionY -= box;
    if (direction == "down") positionY += box;

    snake.pop();

    let snakeHead = {
        x: positionX,
        y: positionY,
    };
    snake.unshift(snakeHead);
};

let game = setInterval(startGame, 100);

