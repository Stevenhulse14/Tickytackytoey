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

function Remove(form_id) {
  let myform = document.getElementById(form_id);
  myform.parentNode.removeChild(myform);
}

const transpose = (m) => {
    let newMatrix = [[],[],[]]
  
    for(let i = 0 ; i < m.length ; i++){
      m[i].forEach((item,index) => newMatrix[index].push(item) )
    }
    return newMatrix
  }

function findwinner() {
  let b = my_arr
    .map((item) => item.join(""))
    .filter((item) => (item === "XXX" ? "XXX" : item === "OOO" ? "OOO" : null));
  console.log(b);

  if (b[0] === "XXX") {
    console.log("X is the Winner", b[0]);
  }
  if (b[0] === "OOO") {
    console.log("O is the winner", b[0]);
  }
}
