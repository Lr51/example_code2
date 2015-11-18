/**
 * Created on 05.10.2015.
 */

var Cell = function(points, context, params)
{
    this.context = context;
    this.origin = points;   //new Point

    this.center =  new Point(
        (this.origin[0].x + this.origin[2].x) / 2,
        (this.origin[0].y + this.origin[2].y) / 2)
    ;

    params = params || {};
    this.fill = (params.fill) ? 0 : params.fill;


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
    switch(this.fill)
    {
        case 0:
        this.context.fillStyle = "white";
            break;
        case 1:
            this.context.fillStyle = "black";
            break;
        case 2:
            this.context.fillStyle = "blue";    //start path find
            break;
        case 3:
            this.context.fillStyle = "red";     //target path find
            break;
        case -2:                                //path
            this.context.fillStyle = "#B8860B";
            break;
    }


    this.context.strokeStyle = "#D3D3D3";
    this.context.fill();
    this.context.stroke();


}

Cell.prototype.scale = function()
{
    var a = 1;
    var b = 0.5;
    this.origin.forEach(function(item, i, that){
        item.scale(a, b);

    });
    this.center.scale(a, b);

}

Cell.prototype.rotate = function(angle)
{
    this.origin.forEach(function(item, i, that){
        var a = Math.PI/4;
        (function(){

            item.rotate(angle);

        })();
    });
    this.center.rotate(angle);
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

        })();
    });
    this.center.move(offset);
}

Cell.prototype.moveToCenter = function()
{
        this.origin.forEach(function(item, i, that){

            var a = -100/2;
            var b = -100/2;

                var point = {};
                point.x = 1 * item.x + 0 * item.y + a * 1;
                point.y = 0 * item.x + 1 * item.y + b * 1;
                that[i] = Object.assign({}, item, point);

        });

}

Cell.prototype.getCenter = function () {
    return this.center;
}

//Cell.prototype.getFill = function (index) {
//    this.fill = index;
//}

Cell.prototype.setFill = function(type)
{
    this.fill = type;
}

Cell.prototype.isFill = function()
{
    if(this.fill == 1)
        return true;
    else
        return false;
}