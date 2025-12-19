// drapstart dragend drapover drop

let box = document.getElementById("item")
let dropzone = document.getElementById("dropzone")

// Dragging start
box.addEventListener('dragstart', () => {
  console.log("dragging...")
})

// Dragging ends
box.addEventListener('dragend', () => {
  console.log("dragend")
})

// Allow Drop
dropzone.addEventListener('dragover', (event) => {
  console.log('dragover')
  event.preventDefault() // mandatory
})

// Drop logic
dropzone.addEventListener('drop', () => {
  dropzone.appendChild(box)
})