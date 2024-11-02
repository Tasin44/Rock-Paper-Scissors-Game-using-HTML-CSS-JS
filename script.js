let userWincnt=1;
let compWincnt=1;

//To access all choices 
const choices= document.querySelectorAll(".choice");

//To show the result on the board like you win ,lost,draw
const result= document.querySelector("#msg");

const count = document.querySelector("#user-score")

const countcomp = document.querySelector("#comp-score");

let reset=document.querySelector("#reset-btn");

const resetGame = () =>{
    userWincnt=1;
    compWincnt=1;
    let userWin=1;
    result.innerText="Play your move";
    result.style.color="white";
    count.innerText="0"
    countcomp.innerText="0";

}

const getComputerChoice = () =>{

    const options = ["Rock","Paper","Scissors"];

    const randomId = Math.floor(Math.random()*3);//it'll generate 0 to 3(0,1,2) number randomly each time

    return options[randomId];//choosing index by generated randomId
}



const showWinner = (userWin,userchosenId,computerChoice) =>
{
    
    if(userWin==1)
    {
        console.log("You Win");
        result.innerText=`Congratulations, You Win!Your ${userchosenId} beat ${computerChoice}`;
        result.style.color="green";
        count.innerHTML=userWincnt++;
    }
    else if(userWin==0) 
    {
        console.log("You lost");
        result.innerText=`Sorry,You Lost! Your  ${userchosenId} beaten by ${computerChoice}`;
        result.style.color="red";
        countcomp.innerHTML=compWincnt++;
    }
    
    else
    {
        console.log("Draw");
        result.innerText=`Game Draw.Both chose ${userchosenId}`;
        result.style.color="white";
    } 
    
    
};

//random generated id by computer 
const playGame = (userchosenId) =>{

    console.log("user choice =",userchosenId);

    //computer generated value will be returned to playGame() function
    const computerChoice = getComputerChoice();
    console.log("computer choice =",computerChoice);
    let userWin=1;

    if(userchosenId === computerChoice)userWin=-1;
    else
    {
        if(userchosenId==="Rock")
        {
            userWin = computerChoice === "Paper"?0:1;
        }
        else if(userchosenId==="Paper")
        {
            userWin = computerChoice ==="Scissors"?0:1;
        }
        else if(userchosenId==="Scissors")
        {
            userWin = computerChoice ==="Rock"?0:1;
        }
    } 
    showWinner(userWin,userchosenId,computerChoice);
};


//applying event listener on div
choices.forEach((choice) =>{

    console.log(choice);

    choice.addEventListener("click",() =>{
        const userchosenId=choice.getAttribute("id");
        // console.log("choice was clicked",userchosenId);
        playGame(userchosenId);//the id what is chosen by user is giving the computer so that we can compare
    });
});

reset.addEventListener("click",resetGame);