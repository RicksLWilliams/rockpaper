console.log('app.js load')


function play(playerChoice) {
  var computerChoise = chooseItemList()
  var result = "start here"

  if (playerChoice == computerChoise) {
    result = "tied"
  } else if (playerChoice == "rock") {
      result = ((computerChoise == "scissors") ? "win" : "lose"  ) 

  } else if (playerChoice == "paper"){
    result = ((computerChoise == "rock") ? "win" : "lose"  ) 

  } else if (playerChoice == "scissors"){
    result = ((computerChoise == "paper") ? "win" : "lose"  ) 
    
  } else {
    console.log("How did you get here?")
  }

  alert( "player: " + playerChoice + " computer: " + computerChoise + " You " + result)
  return result
}


function chooseItemIf() {
  let num = Math.floor(Math.random() * 3)

  if (num == 0){
    return "rock"
  } else if (num == 1) {
    return "paper"
  } else if (num ==2) {
    return "scissors"
  } else {
    return "you should never get here"
  }
  
}


let items = ["rock", "paper", "scissors"]

function chooseItemList() {
  return items[Math.floor(Math.random() * items.length)]  
}