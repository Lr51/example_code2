/**
 * Created on 05.10.2015.
 */

var Field = function(context)
{
    this.context = context;

    this.patternCell = [
        {x:0, y: 0},
        {x:100, y: 0},
        {x:100, y: 100},
        {x:0, y: 100}
    ];

    this.cell = new Cell(this.patternCell, this.context);
    this.cells = [];
    this.width = 20;
    this.height = 12;
    this.side = 50;

    for(var i = 0; i < this.width; i++)
    {
        this.cells[i] = [];
        for(var j = 0; j < this.height; j++)
        {
            var newCell = new Cell(this.patternCell.concat(), this.context);
            this.cells[i][j] = newCell;
            //this.cells[i][j].moveToCenter();
            this.cells[i][j].move({x: 0 + this.side * i, y: 0 + this.side * j});
            //this.cells[i][j].rotate();
            //this.cells[i][j].scale();
            //this.cells[i][j].move({x: 0, y: 350});
        }
    }

    console.log(this.cells);
};

Field.prototype.draw = function()
{
    for(var i = 0; i < this.width; i++) {

        for (var j = 0; j < this.height; j++) {
            this.cells[i][j].draw();
        }
    }

        //console.log(that)


    //this.cell.draw();
}

