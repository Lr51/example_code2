/**
 * Created on 05.10.2015.
 */

var Cell = function(points, context)
{
    this.context = context;
    this.origin = points;

    //this.scale(this.origin[2]);
    //this.moveToCenter();
    this.rotate();
    this.scale();
    //this.move();
}

Cell.prototype.draw = function()
{
    this.context.beginPath();
    this.context.moveTo(this.origin[0].x, this.origin[0].y);
    for(var i = 1; i < this.origin.length; i++)
    {
        //console.log(this.origin[i]);
        this.context.lineTo(this.origin[i].x, this.origin[i].y);
    }

    this.context.closePath();
    this.context.fillStyle = "red";
    this.context.stroke();
}

Cell.prototype.scale = function()
{
    var a = 1;
    var b = 0.5;
    this.origin.forEach(function(item, i, that){
        var point = {};
        point.x = a * item.x + 0 * item.y;
        point.y = 0 * item.x + b * item.y;
        console.log(point, "scale");
        that[i] = point;
        //console.log(item, "item");
    });


}

Cell.prototype.rotate = function()
{
    this.origin.forEach(function(item, i, that){
        var a = Math.PI/4;
        (function(){
            var point = {};
            point.x = (Math.cos(a) * item.x + Math.sin(a) * item.y).toFixed(10);
            point.y = (((-Math.sin(a)) * item.x + Math.cos(a) * item.y)).toFixed(10);
            //console.log(point);
            that[i] = point;
        })();
    });
}

Cell.prototype.move = function(point)
{
    this.origin.forEach(function(item, i, that){
        var a = 70;
        var b = 70;
        (function() {
            var point = {};
            point.x = 1 * item.x + 0 * item.y + a * 1;
            point.y = 0 * item.x + 1 * item.y + b * 1;
            that[i] = point;
        })();
    });
}

Cell.prototype.moveToCenter = function()
{
    //(function(){
        this.origin.forEach(function(item, i, that){

            var a = -100/2;
            var b = -100/2;
            //(function(){
                var point = {};
                point.x = 1 * item.x + 0 * item.y + a * 1;
                point.y = 0 * item.x + 1 * item.y + b * 1;
                that[i] = Object.assign({}, item, point);
                //item = point;
            //})();

            //console.log(item, "center");
            //console.log(x1, y1);
        });
    //}).call(this);

}
