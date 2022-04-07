let my_arr = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
let count = 0


let toe_board = document.querySelector(".gameboard")
toe_board.addEventListener('click', (e)=>{
    let selection = e.target.innerHTML
    
    if(count === 0 && selection===''){
        e.target.innerHTML = 'X'
        count++
    }else if(count === 1 && selection===''){
        e.target.innerHTML = 'O'
        count--
    }
})

let resetButton = document.querySelector('.reset')
resetButton.addEventListener('click', (e)=>{
    console.log(e);
    [...document.querySelectorAll('td')].forEach( tdDomElement => tdDomElement.innerHTML = "" )
})

let sbutton = document.querySelector('#playerSubmit')
sbutton.addEventListener('submit', (e)=>{
    e.preventDefault()
    let p1 = document.getElementById('p1').value
    let p2 = document.getElementById('p2').value
    document.getElementById('displayp1').innerHTML = `X = ${p1}`
    document.getElementById('displayp2').innerHTML = `O = ${p2}`
    Remove('playerSubmit')
})

function Remove(form_id) {
        let myform = document.getElementById(form_id);
        myform.parentNode.removeChild(myform);
}
