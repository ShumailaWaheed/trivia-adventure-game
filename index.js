#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
function welcomeAnimation() {
    console.log(chalk.bold.yellow("[][][][][][][][][][][][][][][][][][][]"));
    console.log(chalk.bold.blue("[] Welcome to Trivia Adventure Game []"));
    console.log(chalk.bold.yellow("[][][][][][][][][][][][][][][][][][][]"));
}
welcomeAnimation();
// Define trivia questions with prizes
const triviaQuestions = [
    // Define trivia questions with prizes
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        answer: "Paris",
        prize: "bike"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        answer: "Leonardo da Vinci",
        prize: "5 lakh"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Mercury", "Venus", "Jupiter", "Saturn"],
        answer: "Jupiter",
        prize: "bike"
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
        answer: "Mitochondria",
        prize: "15 lakh"
    },
    {
        question: "Which year was the first iPhone released?",
        options: ["2005", "2007", "2010", "2012"],
        answer: "2007",
        prize: "bike"
    },
    {
        question: "Who is known as the 'Father of Computers'?",
        options: ["Alan Turing", "Charles Babbage", "Ada Lovelace", "Tim Berners-Lee"],
        answer: "Charles Babbage",
        prize: "10 lakh"
    },
    {
        question: "What is the capital of Italy?",
        options: ["Paris", "London", "Rome", "Berlin"],
        answer: "Rome",
        prize: "bike"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean",
        prize: "1 lakh"
    },
    {
        question: "Who wrote 'The Adventures of Tom Sawyer'?",
        options: ["Mark Twain", "J.K. Rowling", "Charles Dickens", "William Shakespeare"],
        answer: "Mark Twain",
        prize: "bike"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "India", "South Korea"],
        answer: "Japan",
        prize: "2 lakh"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "NaCl"],
        answer: "H2O",
        prize: "bike"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars",
        prize: "20 lakh"
    },
    {
        question: "Who discovered penicillin?",
        options: ["Alexander Fleming", "Isaac Newton", "Albert Einstein", "Marie Curie"],
        answer: "Alexander Fleming",
        prize: "bike"
    },
    {
        question: "Which bird is often associated with delivering babies?",
        options: ["Eagle", "Stork", "Pigeon", "Sparrow"],
        answer: "Stork",
        prize: "50 lakh"
    }
];
// Define player's progress
let playerScore = 0;
let wrongAnswers = 0;
let currentQuestionIndex = 0;
// Function to display trivia question
async function displayQuestion() {
    // Display the trivia question
    const currentQuestion = triviaQuestions[currentQuestionIndex];
    console.log(currentQuestion.question);
    // Proceed to answer the question
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'selectedOption',
            message: 'Select your answer:',
            choices: currentQuestion.options
        }
    ]);
    // Check the answer
    const selectedAnswer = answers.selectedOption;
    if (selectedAnswer === currentQuestion.answer) {
        console.log(chalk.bold.green("Correct Answer!"));
        playerScore++;
        // Ask the player to select a gift box
        const selectedBox = await inquirer.prompt([
            {
                type: 'list',
                name: 'selectedBox',
                message: 'Choose a gift box:',
                choices: ['Green', 'Blue', 'Red'] // Add more box colors if needed
            }
        ]);
        // Display the gift box opening animation
        animateGiftBox(selectedBox.selectedBox.toLowerCase(), currentQuestion.prize);
        console.log(chalk.bold(`\nCongratulations! You've won ${currentQuestion.prize}!\n`));
    }
    else {
        console.log(chalk.bold.red("\nWrong answer! 😞\n"));
        animateWrongAnswer();
        wrongAnswers++;
    }
    console.log(`Your current score: ${playerScore}`);
    currentQuestionIndex++;
    // Continue to the next question if available
    if (currentQuestionIndex < triviaQuestions.length && wrongAnswers < 3) {
        await displayQuestion();
    }
    else {
        if (wrongAnswers >= 3) {
            console.log(chalk.bold.red("Sorry! You've given three wrong answers. Game Over!"));
        }
        else {
            console.log(chalk.bold.green("Congratulations! You have completed all stages."));
        }
        console.log(`Your final score: ${playerScore}`);
    }
}
// Function to display gift box animation
function animateGiftBox(color, prize) {
    let boxColor;
    switch (color) {
        case 'red':
            boxColor = chalk.bold.red;
            break;
        case 'blue':
            boxColor = chalk.bold.blue;
            break;
        case 'green':
        default:
            boxColor = chalk.bold.green;
            break;
    }
    console.log(boxColor(`\nOpening the ${color} gift box...\n`));
    console.log(boxColor("[][][][][]"));
    console.log(boxColor("||      ||"));
    console.log(boxColor("||      ||"));
    console.log(boxColor("||      ||"));
    console.log(boxColor("[][][][][]"));
    // Display the prize animation based on the selected prize
    switch (prize) {
        case "bike":
            console.log(chalk.yellow("   __o\n _`\\<,_\n(*)/ (*)"));
            break;
        case "5 lakh":
            console.log(chalk.yellow("  ___________\n |   5 lakh  |\n |___________|"));
            break;
        case "bike":
            console.log(chalk.yellow("   _o\n _`\\<,_\n(*)/ (*)"));
            break;
        case "15 lakh":
            console.log(chalk.yellow("  ___________\n |   15 Lakh  |\n |___________|"));
            break;
        case "bike":
            console.log(chalk.yellow("   __o\n _`\\<,_\n(*)/ (*)"));
            break;
        case "10 lakh":
            console.log(chalk.yellow("  ___________\n |   10 Lakh  |\n |___________|"));
            break;
            break;
        case "bike":
            console.log(chalk.yellow("   _o\n _`\\<,_\n(*)/ (*)"));
        case "1 lakh":
            console.log(chalk.yellow("   ___________\n |   1 Lakh  |\n |___________|"));
            break;
        case "bike":
            console.log(chalk.yellow("   _o\n _`\\<,_\n(*)/ (*)"));
            break;
        case "2 lakh":
            console.log(chalk.yellow("   ___________\n |   2 Lakh  |\n |___________|"));
            break;
        case "bike":
            console.log(chalk.yellow("   _o\n _`\\<,_\n(*)/ (*)"));
            break;
        case "20 lakh":
            console.log(chalk.yellow("   ___________\n |   20 Lakh  |\n |___________|"));
            break;
        case "bike":
            console.log(chalk.yellow("   _o\n _`\\<,_\n(*)/ (*)"));
            break;
        default:
            console.log(chalk.yellow("You've won a mysterious prize!"));
            break;
    }
}
// Function to display wrong answer animation
function animateWrongAnswer() {
    console.log(chalk.bold.red("\nWrong answer! 😞\n"));
}
// Main game function
function startGame() {
    displayQuestion().then(() => {
        console.log(chalk.bold.blue("\nThanks for playing!"));
    });
}
startGame();
