let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let messageContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

// console.log(boxes[0]);
// console.log(boxes[2]);

let turn0 = true; // if true then X if false then O

// to store winning patterns create a 2 array

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

// add event listener on boxes

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn0) {
            box.innerText = "X";
            turn0 = false;

        }
        else {
            box.innerText = "O";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner()

    });
});


// if one winner declare then disables all the boxes
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }

}

// showing the winner messge

const showWinner=(winner)=>{
msg.innerText=`Congratulation winner is ${winner}`;
messageContainer.classList.remove("hide");
disableBoxes();
}



// to check who is winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
       

        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }


    }

}


// to enables the boxes

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

}


// to reset the game

const resetGame=()=>{
    turn0=true;
    enableBoxes();

    messageContainer.classList.add("hide");

}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
