let buttons = document.querySelectorAll(".choice"); 
let choices = ["rock", "paper", "scissors"];

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        let playerChoice = event.target.id;  
        let computerChoice = choices[Math.floor(Math.random() * 3)]; 

        // **Pehle Image Update Karni Hai**
        document.querySelector("#player-section img").src = `images/${playerChoice}.png`;
        document.querySelector(".computer-section img").src = `images/${computerChoice}.png`;

        // **Winner Logic**  
        let result = "";
        if (playerChoice === computerChoice) {
            result = "It's a Draw!";
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") || 
            (playerChoice === "paper" && computerChoice === "rock") || 
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            result = "Player Wins!";
            document.querySelector("#player-score").textContent++; 
        } else {
            result = "Computer Wins!";
            document.querySelector("#computer-score").textContent++;
        }

        // **Result Turant Dikhao (Without Delay)**
        setTimeout(() => {
            alert(result);
        }, 100); // Thoda 100ms ka delay taaki UX smooth lage
    });
});
