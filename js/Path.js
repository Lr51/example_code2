/**
 * Created on 25.10.2015.
 */


var Path = function () {
    this.points = [];
};

Path.prototype.add = function(point)
{
    this.points.push(point);
}

Path.prototype.draw = function (context) {
    if(this.points.length >= 2)
    {
        context.moveTo(this.points[0].x, this.points[0].y);
        for(var i = 1; i < this.points.length; i++)
        {
            context.lineTo(this.points[i].x, this.points[i].y);
        }
        context.strokeStyle  = "blue";
        context.stroke();
    }
};