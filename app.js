
const reset = document.querySelector(".reset")

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
  [null, null, null, null, null, null, null] // row 5
]

function writeToBoard(row, col) {
  const elem = document.getElementById(row + ',' + col)
  
  if (switchTurn === false) {
    currPlayer = p1
  } else {
    currPlayer = p2
  }
  elem.style.background = colors[currPlayer]
  isWinner(currPlayer, row, col)
  
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

function isWinner(currPlayer, row, col) {
  checkVertical(row, col)
  checkHorizontal(row, col)
  checkNegSlope(row, col)
  checkPosSlope(row, col)
  draw(row, col)
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
    endGame(currPlayer)
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
  }

  if (hCounter >= 4) {
    console.log('connect 4 horizontally', currPlayer)
    endGame(currPlayer)
  }

  hCounter = 0
}

function checkPosSlope(row, col) {
  let posSlopeCounter = -1
  let tempRow = row
  let tempCol = col

  // TR
  while (tempRow >= 0 && tempCol <= 6) {
    if (board[tempRow][tempCol] === currPlayer) {
      posSlopeCounter++
    }
    tempCol++
    tempRow--
  }

  tempRow = row
  tempCol = col
  // BL
  while (tempRow <= 5 && tempCol >= 0) {
    if (board[tempRow][tempCol] === currPlayer) {
      posSlopeCounter++
    }
    tempCol--
    tempRow++
  }

  if (posSlopeCounter >= 4) {
    console.log('connect 4 posSlopeCounter', currPlayer, posSlopeCounter)
    endGame(currPlayer)
  }
}

function checkNegSlope(row, col) {
  let negSlopeCounter = -1
  let tempRow = row
  let tempCol = col

  // TL
  while (tempRow >= 0 && tempCol >= 0) {
    if (board[tempRow][tempCol] === currPlayer) {
      negSlopeCounter++
    }
    tempCol--
    tempRow--
  }

  tempRow = row
  tempCol = col
  // BR
  while (tempRow <= 5 && tempCol <= 6) {
    if (board[tempRow][tempCol] === currPlayer) {
      negSlopeCounter++
    }
    tempCol++
    tempRow++
  }

  if (negSlopeCounter >= 4) {
    console.log('connect 4 negSlopeCounter', currPlayer, negSlopeCounter)
    endGame(currPlayer)
  }
}


function endGame(currPlayer) {
  console.log('Game ends!')
  // show who won: currPlayer
  let winner = document.querySelector('h2')
  winner.style.color = colors[currPlayer]
  winner.innerText += `\nWinner is Player ${currPlayer}`

  document.querySelector(".nav").style.background = colors[currPlayer]
  /////

   cell.removeEventListener('click', e => {
      
  })

  // reset the board
  // for (let i = 0; i < board.length; i++) {
  //   for (let j = 0; j < board[i].length; j++) {
  //     board[i][j] = null
  //   }
  // }

   
  // reset the winner`
}

const full = "Draw"

function draw(row,col){
  dCount = 1
  for(let i = 0; i<= 6; i++){
    if(board[0][i] != null){
      dCount++
    }
  }
  if(dCount >= 6){
    endGame(draw)
  }
}

document.querySelector('.quit').addEventListener('click', currPlayer => {

  if(currPlayer === p1){
    endGame(p2)
  }
  else{
    endGame(p1)
  }
  
})
 



function resetGame(){
  window.location.reload();
} 

