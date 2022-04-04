let my_arr = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
let count = 0


let toe_board = document.querySelector(".gameboard")
//console.log(toe_board)

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