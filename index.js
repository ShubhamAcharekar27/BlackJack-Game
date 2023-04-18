

let cards = []
let sum =0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-El")
let cardEl=document.getElementById("card-El")

let player = {
    name: "Per",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards=[firstCard, secondCard]
    renderGame()
}

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber == 1){
        return 11
    }
    else{
        return randomNumber
    }
    
}

function renderGame(){
    
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = " You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
    messageEl.textContent=message
    sumEl.textContent="Sum: "+ sum
    cardEl.textContent= "Cards: " 

    for (let count = 0;count<cards.length;count++){
        cardEl.textContent+=cards[count] + " "
    }
}

function newCard(){
    if (isAlive === true && hasBlackJack === false){
        console.log("Drawing a new card from the deck!")
        let card = getRandomCard()
        sum+=card
        cards.push(card)
        renderGame()
    }
}




/*
let age = 100
if (age<100){
    console.log("Not Eligible")
} else if (age===100) {
    console.log("Here is your Birthday Card from the King")
} else {
    console.log("You have already received your Birthday Card")
}
*/