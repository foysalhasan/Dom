window.onload = function () {
  main()
}

function main() {
  const root = document.getElementById('root')
  const el = document.getElementById('el')
  const btn = document.getElementById('btn')

  btn.addEventListener('click', function () {
    const bgColor = generateHexColor()
    root.style.backgroundColor = bgColor
    el.value = bgColor
  })
}

function generateHexColor() {
  const red = Math.floor(Math.random() * 255)
  const green = Math.floor(Math.random() * 255)
  const blue = Math.floor(Math.random() * 255)
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}
