
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


function writeToBoard(row, col) {
  const elem = document.getElementById(row + ',' + col)
  
  if (switchTurn === false) {
    currPlayer = p1
  } else {
    currPlayer = p2
  }
  elem.style.background = colors[currPlayer]
  
  if (switchTurn === false) {
    switchTurn = true
  } else {
    switchTurn = false
  }
}


function checkBottomLayer(elemId) {
  const [row, col] = elemId.split(',')
  for (let i = 5; i >= 0; i--) {
    // from the last row and moving upwards
    let step = board[i][col] // current step in that col
    // if step is null, change null to the player's position
    if (step === null) {
      
      if (switchTurn === false) {
        board[i][col] = p1
      } else {
        board[i][col] = p2
      }
      // console.log('current postion', i, col)
      writeToBoard(i, col)
      break
    }
  }
  // console.log(board)
}

function checkVertical(row, col) {
  let vCounter = -1

  
  for(let i = row; i >= 0; i--) {
    console.log(vCounter)
    if(board[i][col] === currPlayer) vCounter++
    else break
  }
  
  for(let i = row; i <= 5; i++) {
    console.log(vCounter)
    if(board[i][col] === currPlayer) vCounter++
    else break
  }
  if (vCounter >= 4) {
    console.log('connect 4 vertically', currPlayer)
  }

  vCounter = 0
  
}

function checkHorizontal(row, col) {
  let hCounter = -1

  for(let i = col; i >= 0; i--) {
    console.log(hCounter)
    if(board[row][i] === currPlayer) hCounter++
    else break
   
  }

  for(let i = col; i <= 6; i++) {
    console.log(hCounter)
    if(board[row][i] === currPlayer) hCounter++
    else break

    if (hCounter >= 4) {
      console.log('connect 4 horizontally', currPlayer)

    }
  }

  hCounter = 0
}

// testing negative slope
function checkNegSlope(row, col) {
  let negSlopeCounter = 0
  let tempRow = row
  let tempCol = col
  
  // Top Left
  while (tempRow >= 0 && tempCol >= 0) {
    if (board[tempRow][tempCol] === currPlayer) {
      negSlopeCounter++
    }
    tempCol--
    tempRow--
  }
  // Bottom Right
  tempRow = row
  tempCol = col
  while (tempRow <= 5 && tempCol <= 6) {
    if (board[tempRow][tempCol] === currPlayer) {
      negSlopeCounter++
    }
    tempCol++
    tempRow++
  }
  if (negSlopeCounter >= 4) {
    console.log('connect 4 negSlopeCounter', currPlayer, negSlopeCounter)
   
  }


}


function checkPosSlope(row, col) {
 

 
}
