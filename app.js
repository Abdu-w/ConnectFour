
const cells = document.querySelectorAll('.grid')

cells.forEach(cell => {
  cell.addEventListener('click', elem => {
    checkBottomLayer(elem.target.id) 
  })
})
