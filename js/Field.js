/**
 * Created on 05.10.2015.
 */

var Field = function(context)
{
    this.context = context;

    this.cell = new Cell([
        {x:0, y: 0},
        {x:100, y: 0},
        {x:100, y: 100},
        {x:0, y: 100}
    ], this.context);
};

Field.prototype.draw = function()
{
    this.cell.draw();
}


