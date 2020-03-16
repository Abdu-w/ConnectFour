
const cells = document.querySelectorAll('.grid')

cells.forEach(cell => {
  cell.addEventListener('click', elem => {
    checkBottomLayer(elem.target.id) 
  })
})

const p1 = 'player1' // red
const p2 = 'player2' // blue
const colors = {
  player1: 'orangered',
  player2: 'skyblue'
}

let switchTurn = false
let currPlayer = p1

const board = [
  /* 
    0      1      2     3     4     5      6    (cols) */
  [null, null, null, null, null, null, null], // row 0
  [null, null, null, null, null, null, null], // row 1
  [null, null, null, null, null, null, null], // row 2
  [null, null, null, null, null, null, null], // row 3
  [null, null, null, null, null, null, null], // row 4
  [null, null, null, null, null, null, null]  // row 5
  ]