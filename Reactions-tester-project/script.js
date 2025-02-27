
let box = document.getElementById("box");

function makeGame(){
    let randomY = Math.random() * (window.innerHeight  -100);
    let randomX = Math.random() * (window.innerWidth  -100);
    let randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    box.style.left = randomX + "px";
    box.style.top = randomY + "px";
    box.style.backgroundColor = randomColor;
    box.style.display = "block";
    box.style.position = "absolute";
    box.innerHTML = "Hello can you touch me!";
    box.style.borderRadius = "10px";
    box.style.display = "flex";
    box.style.justifyContent = "center";
    box.style.alignItems = "center";
    
}
function startGame(){
    setTimeout(makeGame, Math.random()*3000+1000);
}
box.addEventListener("click",function(){
    box.style.display = "none";
    startGame();
})
startGame();