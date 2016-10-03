console.log("main.js loaded")

var cells = document.getElementsByClassName('cell');
console.log(cells);

for(var i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', function() {
    console.log("you clicked on", this);
    this.innerHTML = "X";
  });
}
