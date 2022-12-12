var rounds;
var player;
var opponent;
var roundnum;
var randomNum;
var wins = 0;
var losses = 0;
var ties = 0;

const main = document.querySelector('main');

const h1 = document.querySelector("#head1");
h1.textContent = "Rock Paper Scissors Game";
const win = document.querySelector('#w');
const tie = document.querySelector('#t');
const loss = document.querySelector('#l');

win.textContent = `Wins: ${wins}`;
tie.textContent = `Ties: ${ties}`;
loss.textContent = `Losses: ${losses}`;

const options = document.querySelectorAll("button");
options.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    opponentF();
    winCheck();
    console.log(opponent + player);
    win.textContent = `Wins: ${wins}`;
    tie.textContent = `Ties: ${ties}`;
    loss.textContent = `Losses: ${losses}`;
    const text = document.createElement('p');
    const template = `You picked ${player}, computer picked ${opponent}.`;
    text.textContent = template;
    main.appendChild(text);
}))

function opponentF() {
    randomNum = Math.floor(Math.random() * 3);
    if (randomNum == 0) {
        opponent = "Rock";
    } else if (randomNum == 1) {
        opponent = "Paper";
    } else if (randomNum == 2) {
        opponent = "Scissors";
    }
}

function winCheck () {
    if (player == "Rock" && opponent == "Scissors") {
        wins = wins + 1;
    } else if (player == "Rock" && opponent == "Paper") {
        losses = losses + 1;
    } else if (player == "Paper" && opponent == "Rock") {
        wins = wins + 1;
    } else if (player == "Paper" && opponent == "Scissors") {
        losses = losses + 1;
    } else if (player == "Scissors" && opponent == "Paper") {
        wins = wins + 1;
    } else if (player == "Scissors" && opponent == "Rock") {
        losses = losses + 1;
    } else if (player == opponent) {
        ties = ties + 1;
    }
}