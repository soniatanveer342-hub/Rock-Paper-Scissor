let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user")
const comScorepara = document.querySelector("#computer")
const genComChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const indexId = Math.floor(Math.random() * 3)
    return options[indexId]


}
const draw = () => {
    console.log("The game was draw.")
    msg.innerText = "Game was draw play again!"
    msg.style.backgroundColor = "rgb(23, 17, 17)"
}
const showWinner = (userWin, userChoice, compChoice)=>{
if(userWin){
    console.log("You Win!")
    userScore++;
    userScorepara.innerText = userScore
    msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor = "green"

}else{
    console.log("You lose.")
    compScore++;
    comScorepara.innerText = compScore
    msg.innerText = `You lose!  ${compChoice} beats your ${userChoice}`
    msg.style.backgroundColor = "red"
}
}
const playGame = (userChoice) => {
    console.log("User Choice = ", userChoice);
    const compChoice = genComChoice();
    console.log("compter choice = ", compChoice)
    if (userChoice === compChoice) {
        draw()
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice=== "paper"? false: true;
        } 
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors"? false: true;
        }
        else{
            userWin = compChoice=== "rock"? false: true;
        }
        showWinner(userWin, userChoice, compChoice)
    }
}
choices.forEach((choice) => {
    // console.log(choice)
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
        // console.log("choice was clicked")
    })
})