console.log('app.js load')


function play(playerChoice) {
  var computerChoise = chooseItemList()
  var result = "Logic needed for this condition"

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

  //alert( "player: " + playerChoice + " computer: " + computerChoise + " You " + result)
  draw("Player( " + playerChoice + " )  Computer( " + computerChoise + " )  You " + result)
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


let items = ["rock", "paper", "scissors","next1"]

function chooseItemList() {
  return items[Math.floor(Math.random() * items.length)]  
}

function draw(result) {
  let resultElem = document.getElementById("result")

  resultElem.innerText = result
} 


function drawButtons(){
  let template = ``
 // <button class="btn btn-warning btn-lg p-5 m-2" onclick="play('scissors')">Scissors</button>`

//players.sort((p1, p2) => p2.topScore- p1.topScore)

  items.forEach(item => {
    template += `
    <button class="btn btn-warning btn-lg p-5 m-2" onclick="play('${item}')"> ${item}</button>`
  })

  document.getElementById("buttons").innerHTML = template

}

//

function nextDirecion(curDir, changeDir){

  if (changeDir == "R") {
    curDir ++
    if (curDir == 4) {
      curDir = 0
    }
  } else if (changeDir = "L") {
    curDir--
    if (curDir == -1) {
      curDir = 3
    } 
  }

}


function go (arr){
  let directions = ["N", "E", "S", "w"]
  let curDir = 0

  for (let index = 0; index < arr.length; index++) {
    curDir = nextDirecion(curDir, )
  }

}








