var Square = function(x, y, color) {
  this.x = x;
  this.y = y;
  this.color = color;
}

Square.prototype.draw = function (context) {
  context.fillStyle = this.color;
  context.fillRect(this.x, this.y,25,25);
};


var Rectangle = function(x, y, color) {
  this.x = x;
  this.y = y;
  this.color = color;
}

Rectangle.prototype.draw = function (context) {
  context.fillStyle = this.color;
  context.fillRect(this.x, this.y,25,75);
};
