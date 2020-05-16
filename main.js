document.addEventListener('keypress', function (e) {
    function starSnake() {

        if (e.which == 13) {
            document.getElementById('pressStart').style.display = "none";
            document.getElementById('title').style.display = "block";
            document.getElementById('snake').style.display = "block";
            startGame();
        };
    };
    starSnake();

}, false);

let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
};

let direction = "right";
let drop = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box,
};

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

function dropFood() {
    context.fillStyle = "#ff5722";
    context.fillRect(drop.x, drop.y, box, box);
};

document.addEventListener("keydown", update);

function update(event) {
    if(event.keyCode == 37 && direction != "rigth") direction = "left";
    if (event.keyCode == 38 && direction != "down") direction = "up";
    if (event.keyCode == 39 && direction != "left") direction = "right";
    if (event.keyCode == 40 && direction != "up") direction = "down";
};

function startGame() {

    createBg();
    createSnake();
    dropFood();
    
    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    let positionX = snake[0].x;
    let positionY = snake[0].y;

    if (direction == "right") positionX += box;
    if (direction == "left") positionX -= box;
    if (direction == "up") positionY -= box;
    if (direction == "down") positionY += box;

    if (positionX != drop.x || positionY != drop.y) {
        snake.pop()
    } else {
        drop.x = Math.floor(Math.random() * 15 + 1) * box
        drop.y = Math.floor(Math.random() * 15 + 1) * box
    };

    let snakeHead = {
        x: positionX,
        y: positionY,
    };
    snake.unshift(snakeHead);
   
    for (i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(game);
            document.getElementById('gameOver').style.display = "block";
            document.getElementById('reloadGame').style.display = "block";
            document.getElementById("reloadGame").addEventListener("click", gameReload);
            function gameReload() {
                window.location.reload();
          };
        };
    };   
};
let game = setInterval(startGame, 100);
