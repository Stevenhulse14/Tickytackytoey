import {Transpose, Remove, Checker, Dia} from '/utils.js'

let my_arr = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
let count = 0;

let toe_board = document.querySelector(".gameboard");
toe_board.addEventListener("click", (e) => {
  let selection = e.target.innerHTML;
  let position = e.target.id.split("");

  if (count === 0 && selection === "") {
    e.target.innerHTML = "X";
    my_arr[position[0]][position[1]] = "X";
    count++;
  } else if (count === 1 && selection === "") {
    e.target.innerHTML = "O";
    my_arr[position[0]][position[1]] = "O";
    count--;
  }

  findwinner();
});

let resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", (e) => {
  console.log(e);
  [...document.querySelectorAll("td")].forEach(
    (tdDomElement) => (tdDomElement.innerHTML = "")
  );
  my_arr = [[null,null,null],[null,null,null],[null,null,null]]
  count = 0
});

let sbutton = document.querySelector("#playerSubmit");
sbutton.addEventListener("submit", (e) => {
  e.preventDefault();
  let p1 = document.getElementById("p1").value;
  let p2 = document.getElementById("p2").value;
  document.getElementById("displayp1").innerHTML = `X = ${p1}`;
  document.getElementById("displayp2").innerHTML = `O = ${p2}`;
  Remove("playerSubmit");
});

function findwinner() {

  let row = Checker(my_arr)
  let columnArr = Checker(Transpose(my_arr))
  let diagnols = Checker(Dia(my_arr))

  console.log(diagnols)
  if (row[0] === "XXX" || columnArr[0]==='XXX' || diagnols[0]==='XXX') {
    console.log("X is the Winner");
  }
  if (row[0] === "OOO" || columnArr[0]==='XXX' || diagnols[0]==='XXX') {
    console.log("O is the winner");
  }
}
