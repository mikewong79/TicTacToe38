console.log("main.js loaded")

var cells = document.getElementsByClassName('cell');
console.log(cells);

for(var i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', function() {
    alert("you clicked on a cell");
    console.log(this);
  });
}
