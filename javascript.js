const board = document.getElementById("board")
const container = document.getElementById("container")


function createBoard(){

    const button = document.createElement("button")

    button.textContent = "Change board size"

    container.appendChild(button)

    button.onclick = bttnInput

    function bttnInput(){
        let userInput = prompt("hello")
        return userInput
    }

    for (i = 0; i < 256; i++){
        const grid = document.createElement("div")
        grid.classList.add("gridSquares")
        board.appendChild(grid)
        grid.addEventListener("mouseover", () =>{
            grid.style.background = "red"
        });
    }   
}


createBoard()