window.onload = () => {
  main()
  setInterval(main, 3000)
}

const main = () => {
  const root = document.getElementById('root')
  root.style.backgroundColor = generateRGB()
}

const generateRGB = () => {
  const red = Math.floor(Math.random() * 255)
  const green = Math.floor(Math.random() * 255)
  const blue = Math.floor(Math.random() * 255)

  return `rgb(${red}, ${green}, ${blue})`
}
