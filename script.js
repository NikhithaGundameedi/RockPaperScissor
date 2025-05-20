let rock = $('#rock');
let paper = $('#paper');
let scissor = $('#scissor');
let button = $('button');
let userScore = 0;
let compScore = 0;
let userGeneratedChoice;
let compGeneratedChoics;
let choices = document.querySelectorAll('img');
let userScoreValue = $('#user-score');
let compScoreValue = $('#comp-score');

//Get Data
function getData(string) {
    return localStorage.getItem(string);
}


// SET Data
function setData(string, value) {
    localStorage.setItem(string, value)
}


// Computer Generated Choice
function compGeneratedChoice() {
    let choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * 3)];
}


// USER CHOICE
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        let userChoice = choice.getAttribute("id");
        compChoice = compGeneratedChoice();
        // console.log("userChoice", userChoice);
        // console.log("compChoice", compChoice);
        setScore(userChoice, compChoice)
    })
})


//CALCULATING SCORE
function setScore(userChoice, compChoice) {
    userWin = true;
    compWin= false;
    if (userChoice === compChoice){
        button.innerHTML = "Draw";
        button.style.backgroundColor="black";
    }
    else {
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
            }
        if (userChoice === "scissor"){
            userWin = compChoice === "paper" ? true : false;
            }
        if (userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false;
            }
        if(userWin ===true){
            compWin=false;
            }
        if (userWin === true) {
            button.innerHTML = "You Won";
            button.style.backgroundColor="green";
            button.style.border="none";
            userScore++;
            }
        else {
            button.innerHTML = "You Lost";
            button.style.backgroundColor="red";
            button.style.border="none";
            compScore++;
              }
    }
    setData("compScore", compScore);
    setData("userScore", userScore);
    userScoreValue.innerHTML = userScore;
    compScoreValue.innerHTML = compScore;
}


// Retreiving Data From LocalStorage
function init() {
    let userScoreValue = $('#user-score');
    let compScoreValue = $('#comp-score');
    userScoreValue.innerHTML = getData("userScore");
    compScoreValue.innerHTML = getData("compScore");
}


window.addEventListener('load', init);


function $(id) {
    return document.querySelector(id);
}