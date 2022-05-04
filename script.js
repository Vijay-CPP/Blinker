function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let handler = document.querySelector("body");

let speed  = prompt("Increase Rerfesh Speed in miliseconds - ");

setInterval(() => {
    handler.style.backgroundColor = getRandomColor(); 
}, speed);