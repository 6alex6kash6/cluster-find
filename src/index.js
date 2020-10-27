import App from './App'

new App()
const reload = document.querySelector('.reload')
const canvas = document.getElementById('canvas-container')
reload.addEventListener('click', redrawCanvas)

function redrawCanvas() {
  clearCanvas()
  console.log(canvas)
  createApp()
}

function clearCanvas() {
  canvas.innerHTML = ''
}

function createApp() {
  new App()
}