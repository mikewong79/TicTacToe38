console.log("main.js loaded")

var currentTurn = "X";
var cells = document.getElementsByClassName('cell');
console.log(cells);

for(var i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', function() {
    if(this.innerHTML == "") {
      console.log("you clicked on", this);
      this.innerHTML = currentTurn;
      checkWin();
      switchTurn();
    } else {
      alert('Please select an empty cell');
    }
  });
}

function switchTurn() {
  if(currentTurn == "X") {
    currentTurn = "O";
  } else {
    currentTurn = "X";
  }
}

function checkWin() {
  if(cells[0].innerHTML !== "" && cells[0].innerHTML == cells[1].innerHTML && cells[0].innerHTML == cells[2].innerHTML) {
    addWinner(currentTurn);
  } else if(cells[3].innerHTML !== "" && cells[3].innerHTML == cells[4].innerHTML && cells[3].innerHTML == cells[5].innerHTML) {
    addWinner(currentTurn);
  } else if(cells[6].innerHTML !== "" && cells[6].innerHTML == cells[7].innerHTML && cells[6].innerHTML == cells[8].innerHTML) {
    addWinner(currentTurn);
  } else if(cells[0].innerHTML !== "" && cells[0].innerHTML == cells[3].innerHTML && cells[0].innerHTML == cells[6].innerHTML) {
    addWinner(currentTurn);
  } else if(cells[1].innerHTML !== "" && cells[1].innerHTML == cells[4].innerHTML && cells[1].innerHTML == cells[7].innerHTML) {
    addWinner(currentTurn);
  } else if(cells[2].innerHTML !== "" && cells[2].innerHTML == cells[5].innerHTML && cells[2].innerHTML == cells[8].innerHTML) {
    addWinner(currentTurn);
  } else if(cells[0].innerHTML !== "" && cells[0].innerHTML == cells[4].innerHTML && cells[0].innerHTML == cells[8].innerHTML) {
    addWinner(currentTurn);
  } else if(cells[2].innerHTML !== "" && cells[2].innerHTML == cells[4].innerHTML && cells[2].innerHTML == cells[6].innerHTML) {
    addWinner(currentTurn);
  }
}

function addWinner(winner) {
  document.getElementById('winner').innerHTML = winner + " has won!!!";
}
