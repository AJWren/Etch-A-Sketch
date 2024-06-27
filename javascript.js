
const board = document.getElementById("board")
const container = document.getElementById("container")
const button = document.createElement("button")

button.textContent = "Change board size"
container.appendChild(button)
button.onclick = bttnInput


function bttnInput(){
    let userInput = prompt("Please choose a new grid size (0-100)")
    if ((userInput > 100)||
        (userInput < 1))
        {
        alert("Grid size must be between 1-100")
    } 
    else {
        board.innerHTML=""
        createBoard(userInput)
    }
}


function createBoard(gridSize){
    for (i = 0; i < gridSize * gridSize; i++){
        const grid = document.createElement("div")
        grid.classList.add("gridSquares")
        board.appendChild(grid)
        grid.style.height = 500 / gridSize + "px";
        grid.style.width = 500 / gridSize + "px";

        let opacity = 0
        grid.addEventListener("mouseover", () =>{
            let r = Math.floor(Math.random() * 255)
            let g = Math.floor(Math.random() * 255)
            let b = Math.floor(Math.random() * 255)
            opacity += 0.1;
            grid.style.background = "rgba(" + r + ", " + g + ", " + b + ", " + opacity + ")";
        });
    }   
}


createBoard(16)


 