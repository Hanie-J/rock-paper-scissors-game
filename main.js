// variables
const choices = ["rock", "paper", "scissors"];
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", rockSelected);
paper.addEventListener("click", paperSelected);
scissors.addEventListener("click", scissorsSelected);

let userChoice;
let win = 0;
let tie = 0;
let lose = 0;
let src = "";

// if user choose rock
function rockSelected() {
    //generating a random number to allow the computer to have a choice
    const randomNum = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomNum];

    userChoice = rock.id;
    src = rock.src;
    userSelected(src);

    if (computerChoice === "scissors") {
        win++;
        winCounter.innerText = `${win}`;
        computerSelected(scissors.src);
    }

    if (userChoice === computerChoice) {
        tie++;
        tieCounter.innerText = `${tie}`;
        computerSelected(rock.src);
    }

    if (computerChoice === "paper") {
        lose++;
        loseCounter.innerText = `${lose}`;
        computerSelected(paper.src);
    }
};

//if usr choose paper
function paperSelected() {
    //generating a random number to allow the computer to have a choice
    const randomNum = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomNum];

    userChoice = paper.id;
    src = paper.src;
    userSelected(src);

    if (computerChoice === "rock") {
        win++;
        winCounter.innerText = `${win}`;
        computerSelected(rock.src);
    }

    if (userChoice === computerChoice) {
        tie++;
        tieCounter.innerText = `${tie}`;
        computerSelected(paper.src);
    }

    if (computerChoice === "scissors") {
        lose++;
        loseCounter.innerText = `${lose}`;
        computerSelected(scissors.src);
    }
};

//if user choose scissors
function scissorsSelected() {
    //generating a random number to allow the computer to have a choice
    const randomNum = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomNum];

    userChoice = scissors.id;
    src = scissors.src;
    userSelected(src);

    if (computerChoice === "paper") {
        win++;
        winCounter.innerText = `${win}`;
        computerSelected(paper.src);
    }

    if (userChoice === computerChoice) {
        tie++;
        tieCounter.innerText = `${tie}`;
        computerSelected(scissors.src);
    }

    if (computerChoice === "rock") {
        lose++;
        loseCounter.innerText = `${lose}`;
        computerSelected(rock.src);
    }
};


//counting how many times both players chose the same thing and add it to the document
const tieCounter = document.createElement("p");
tieCounter.style.display = "inline";
const tieLi = document.getElementById("tie");
tieLi.appendChild(tieCounter);

//counting how many times user won the game and add it to the document
const winCounter = document.createElement("p");
winCounter.style.display = "inline";
const winLi = document.getElementById("win");
winLi.appendChild(winCounter);

// counting how many times user lost the game and add it to the document
const loseCounter = document.createElement("p");
loseCounter.style.display = "inline";
const loseLi = document.getElementById("lose");
loseLi.appendChild(loseCounter);


//showing what user selected
function userSelected(src) {
    const user = document.getElementById("user");
    user.style.display = "inline-block";
    user.src = `${src}`;
}

//showin what computer selected
function computerSelected(src) {
    const pc = document.getElementById("pc");
    pc.style.display = "inline-block";
    pc.src = `${src}`;
}