var headlineEle = document.getElementById('headline');
var startButtonEle = document.getElementById('startButton');
var subButtonEle = document.getElementById('subButton');
var resetButton = document.getElementById('resetButton');
var stopButton = document.getElementById('stopButton');
var scoreEle = document.getElementById('score');
var questionEle = document.getElementById('question');
var input = document.getElementById('userInput');

let message = document.getElementById('scoreMessage');

function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max+1));
}
const validOptions = ['rock','paper','scissors'];
const computerChoice = validOptions[getRandomInt(2)];

score = 0;

startButtonEle.onclick = function(){
  //assin ranumber value to num1 num2 and sign
  

  //get the correct answer


 //change the headline
  headlineEle.innerHTML = "Please answer the following question";

  //display the equation
  questionEle.innerHTML = "Choose one rock or scissors or paper";
  startButtonEle.style.display = 'none';
  subButton.style.display = 'block';
  stopButton.style.display = 'block';
  resetButton.style.display = 'block';
  input.style.display = 'block';
  
}

subButton.onclick = function(){
    const validOptions = ['rock','paper','scissors'];
    const computerChoice = validOptions[getRandomInt(2)];

if(input.value == "rock" || input.value == "paper" ||  input.value == "scissors"){
    doChange = true;
    
  }else if(input.value == ""){
    doChange = false;
    message.textContent = "Please choose one and enter above";
  }
  else{
    doChange = false;
    message.textContent = "Please enter correct one above in lowercase";
  }

  if(doChange == true){

  if(input.value === computerChoice){
        message.textContent = "There was a tie";
    }
    else if(
            (input.value === 'rock' && computerChoice ==='scissors') ||
            (input.value === 'scissors' && computerChoice ==='paper') ||
            (input.value === 'paper' && computerChoice ==='rock') 


        ){
        message.textContent = "You won";
        score = score + 5;
    }
    else{

        message.textContent = "The computer won";
        score = score - 1;
    }
    scoreEle.textContent = score;
   
  
}

   input.value = "";
   localStorage.setItem("score", score);
}

resetButton.onclick = function(){
  startButtonEle.style.display = 'block';
  subButton.style.display = 'none';
  stopButton.style.display = 'none';
  resetButton.style.display = 'none';
  input.style.display = 'none';
  headlineEle.innerHTML = "Are You Ready to Start Again? ";
  questionEle.innerHTML = "";
  scoreMessage.innerHTML = "";
  scoreEle.textContent = 0;
  score = 0;

  localStorage.removeItem("score");

}

stopButton.onclick = function(){
    
    const data = localStorage.getItem('score');
    startButtonEle.style.display = 'none';
  subButton.style.display = 'none';
  stopButton.style.display = 'none';
  resetButton.style.display = 'none';
  input.style.display = 'none';
  headlineEle.innerHTML = `Your total score was  ${data}`;
  questionEle.innerHTML = "";
  scoreMessage.innerHTML = "";
  
  scoreEle.textContent = data;
}