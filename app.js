let userScore=0
let compScore=0
const msg=document.querySelector("#msg")
const userScoreBoard=document.querySelector("#user-score");
const compScoreBoard=document.querySelector("#comp-score");


const genCompChoice=()=>{
       // rock,paper,scissors
       const options=["rock","paper","scissors"];
       const randIndex=Math.floor(Math.random()*3)//multiply randomNo with anyNumber to get new number range from 0 to anyNumber-1.
       return options[randIndex];
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        msg.innerHTML=`you win! ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green"
        userScoreBoard.innerHTML=userScore;
    }else{
        compScore++;
        msg.innerHTML=`you lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="darkred"
        compScoreBoard.innerHTML=compScore;
    }
   
}

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();

    if(userChoice===compChoice){
        msg.innerHTML="Game was Draw. Try again"
        msg.style.backgroundColor="#081b31"

    }else{
        let userWin=true //to check user win or loose status

        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else  if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice); //function used to print winner or looser
    }
}


const choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice)
    })
})
