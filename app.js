
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