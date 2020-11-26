/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = 20;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += this.speed;
  }

  this.moveDown = function() {
    this.top += this.speed;
  }

  this.moveLeft = function() {
    this.left -= this.speed;
  }

  this.moveUp = function() {
    this.top -= this.speed;
  }
}

function moveCharacter(event) {
  let keyCode = event.keyCode;
  console.log(keyCode);
  switch (keyCode) {
    case 39:
      hero.moveRight();
      break;
    case 37:
      hero.moveLeft();
      break;
    case 40:
      hero.moveDown();
      break;
    case 38:
      hero.moveUp();
      break;
  }

}
var hero = new Hero('pngegg.png', 20, 30, 200);

function start(){
  window.addEventListener("keydown",moveCharacter);
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 200)
}

start();