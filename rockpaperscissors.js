var userChoice = prompt("Do you choose rock, paper or scissors?");

$("#output").html("You chose: " + userChoice);

var compare = function (choice1) {
    
    var choice2 = Math.random();
    if (choice2 < 0.34) {
       choice2 = "rock";
       $("#output").html("The computer chose: " + choice2);
    } else if(choice2 <= 0.67) {
        choice2 = "paper";
        $("#output").html("The computer chose: " + choice2);
    } else {
        choice2 = "scissors";
        $("#output").html("The computer chose: " + choice2);
    }
    
    if (choice1 === choice2) {
        return "The result is a tie!";
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "rock wins";
        } else {
            return "scissors win";
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        } else {
            return "scissors win";
        }
    }
};
compare(userChoice);