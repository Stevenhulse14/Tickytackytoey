export const Remove = (form_id) => {
    let myform = document.getElementById(form_id);
    myform.parentNode.removeChild(myform);
}
  
export const Transpose = (m) => {
    let newMatrix = [[],[],[]]
    
      for(let i = 0 ; i < m.length ; i++){
        m[i].forEach((item,index) => newMatrix[index].push(item) )
      }
      return newMatrix
}
export const Dia = (m) => {
    return [[m[0][0],m[1][1],m[2][2]],[m[0][2],m[1][1],m[2][0]]]
}

export const Checker = (matrix) =>{

    return matrix.map((item) => item.join(""))
    .filter((item) => (item === "XXX" ? "XXX" : item === "OOO" ? "OOO" : null))

}
export const Winner = (type) => {
    document.getElementById('winner').innerHTML=` Congradulations ${type} Got the W`

}