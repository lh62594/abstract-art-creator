const canvas = document.querySelector("#canvas")
const c = canvas.getContext("2d")

let objects = []
let max = 300
let min = 100

class Drawing {
  constructor(){
    this.x = Math.floor((Math.random() * 1200));
    this.y = Math.floor((Math.random() * 700));
    this.w = Math.floor((Math.random() * max) + min);
    this.h = Math.floor((Math.random() * max) + min);
    this.r = Math.floor((Math.random() * min) + min/2);

    this.c1 = Math.floor((Math.random() * 255));
    this.c2 = Math.floor((Math.random() * 255));
    this.c3 = Math.floor((Math.random() * 255));
  }

  drawFilled() {
    c.fillStyle = `rgba(${this.c1},${this.c2},${this.c3},0.5)`
    c.fillRect(this.x, this.y, this.w, this.h)
  }

  drawOutline() {
    c.strokeStyle = `rgba(${this.c1},${this.c2},${this.c3},1)`
    c.strokeRect(this.x, this.y, this.w, this.h)
  }

  drawOutlineCircle() {
    c.beginPath()
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false)
    c.strokeStyle = `rgba(${this.c1}, ${this.c2}, ${this.c3}, 1)`
    c.stroke()
  }

  drawFilledCircle() {
    c.beginPath()
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false)
    c.fillStyle = `rgba(${this.c1}, ${this.c2}, ${this.c3}, 0.5)`
    c.fill()
  }

}


for(i = 0; i < 30; i++) {
  objects.push(new Drawing)
}

objects.forEach( object => {
  // square.draw()
  // console.log(square);
  if(object.x%5 === 0) {
    object.drawFilled()
  } else if(object.x%3 === 0){
    object.drawFilledCircle()
  } else if(object.x%2 === 0) {
    object.drawOutlineCircle()
  } else {
    object.drawOutline()
  }

})
