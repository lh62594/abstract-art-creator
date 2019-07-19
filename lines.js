const canvas = document.querySelector("#canvas")
const c = canvas.getContext("2d")

let canvasWidth = 1200
let canvasHeight = 700
let min = -100

let randomColor = function(a = 1) {
  return `rgba(${Math.floor((Math.random() * 225))}, ${Math.floor((Math.random() * 225))}, ${Math.floor((Math.random() * 225))}, ${a})`
}

let x = function() {
  return (Math.floor((Math.random() * canvasWidth + min)) - min)
}

let y = function() {
  return (Math.floor((Math.random() * canvasHeight + min)) - min)
}

let w = function() {
  return (Math.floor((Math.random() * 200)) + 100)
}

let h = function() {
  return (Math.floor((Math.random() * 200)) + 100)
}

function largeCirclesAndLines() {
  for(i = 0; i < 4; i++) {
    c.beginPath()
    c.arc(x(), y(), Math.floor(Math.random() * 250) + 200, 0, Math.PI * 2, false)
    c.fillStyle = randomColor(0.7)
    c.fill()
  }

  for(i = 0; i < 3; i++) {
    c.fillStyle = randomColor(0.3)
    c.fillRect(x(),y(),w(),h())
  }

  for(i = 0; i < 3; i++) {
    c.strokeStyle = randomColor(0.5)
    c.beginPath();
    c.lineTo(x(), y())

    for(j = 0; j < 10; j++) {
    c.lineTo(x(), y())
      c.stroke();
    }
  }

  for(i = 0; i < 40; i++) {
    c.beginPath()
    c.arc(x(), y(), Math.floor(Math.random() * 10) + 5, 0, Math.PI * 2, false)
    c.fillStyle = randomColor()
    c.fill()
  }
}

function paintSplatter() {


  for(i = 0; i < 300; i++) {
    c.beginPath()
    c.arc(x(), y(), Math.floor(Math.random() * 5) + 2, 0, Math.PI * 2, false)
    c.fillStyle = randomColor()
    c.fill()
  }

}

paintSplatter()
