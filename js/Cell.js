/**
 * Created on 05.10.2015.
 */

var Cell = function(points, context, params)
{
    this.context = context;
    this.origin = points;   //new Point

    this.center = {
        x:(this.origin[0].x + this.origin[2].x) / 2,
        y:(this.origin[0].y + this.origin[2].y) / 2
    };
    //console.log(this.origin, "origin");
    //this.color = params.color;
    //console.log(this.context);
    //this.scale(this.origin[2]);
    //this.moveToCenter();
    //this.rotate();
    //this.scale();
    //this.move();

    //this.move = function(offset)
    //{
    //    if(!offset)
    //    {
    //        var offset = {x: 70, y: 70};
    //    }
    //    this.origin.forEach(function(item, i, that){
    //
    //        (function() {
    //            var point = {};
    //            point.x = 1 * item.x + 0 * item.y + offset.x * 1;
    //            point.y = 0 * item.x + 1 * item.y + offset.y * 1;
    //            console.log(point);
    //            that[i] = point;
    //        })();
    //    });
    //}
}

Cell.prototype.draw = function()
{
    //console.log(this.context);
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

    //this.context.beginPath();
    //console.log(this.center);
    //this.context.moveTo(this.center.x, this.center.y);
    //this.context.lineTo(this.center.x + 1, this.center.y + 1);
    //this.context.closePath();
}

Cell.prototype.scale = function()
{
    var a = 1;
    var b = 0.5;
    this.origin.forEach(function(item, i, that){
        item.scale(1, 0.5);
        //var point = {};
        //point.x = a * item.x + 0 * item.y;
        //point.y = 0 * item.x + b * item.y;
        //console.log(point, "scale");
        //that[i] = point;
        //console.log(item, "item");
    });


}

Cell.prototype.rotate = function(angle)
{
    this.origin.forEach(function(item, i, that){
        var a = Math.PI/4;
        (function(){
            //console.log(angle);
            item.rotate(angle);
            //var point = {};
            //point.x = (Math.cos(a) * item.x + Math.sin(a) * item.y).toFixed(10);
            //point.y = (((-Math.sin(a)) * item.x + Math.cos(a) * item.y)).toFixed(10);
            //console.log(item);
            //that[i] = point;
        })();
    });
}

Cell.prototype.move = function(offset)
{
    if(!offset)
    {
        var offset = {x: 100, y: 100};
    }
    this.origin.forEach(function(item, i, that){

        (function() {


            item.move(offset);
            //var point = {};
            //point.x = 1 * item.x + 0 * item.y + offset.x * 1;
            //point.y = 0 * item.x + 1 * item.y + offset.y * 1;
            //that[i] = point;
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
