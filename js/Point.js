/**
 * Created on 07.10.2015.
 */

var Point = function(x, y)
{
    this.x = x;
    this.y = y;
}

Point.prototype.rotate = function(angle)
{
    var x = (Math.cos(angle) * this.x + Math.sin(angle) * this.y).toFixed(10);
    var y = (((-Math.sin(angle)) * this.x + Math.cos(angle) * this.y)).toFixed(10);
    this.x = x;
    this.y = y;
}

Point.prototype.move = function(offset)
{
    var x = 1 * this.x + 0 * this.y + offset.x * 1;
    var y = 0 * this.x + 1 * this.y + offset.y * 1;
    this.x = x;
    this.y = y;
}

Point.prototype.scale = function(a, b)
{
    var x = a * this.x + 0 * this.y;
    var y = 0 * this.x + b * this.y;
    this.x = x;
    this.y = y;
}