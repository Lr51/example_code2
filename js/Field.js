/**
 * Created on 05.10.2015.
 */

var Field = function(context)
{
    this.context = context;

    this.patternCell = [
        new Point(0, 0),
        new Point(100, 0),
        new Point(100, 100),
        new Point(0, 100)
    ];

    this.cell = new Cell(this.patternCell.concat(), this.context);
    //this.cell.move({x: 100, y:100});
    this.cells = [];
    this.width = 20;
    this.height = 12;
    this.side = 50;

    for(var i = 0; i < this.width; i++)
    {
        this.cells[i] = [];
        for(var j = 0; j < this.height; j++)
        {
            var newCell = new Cell([
                new Point(0, 0),
                new Point(100, 0),
                new Point(100, 100),
                new Point(0, 100)
            ], this.context);
            this.cells[i][j] = newCell;
            //this.cells[i][j].moveToCenter();
            this.cells[i][j].move({x: 0 + this.side * i, y: 0 + this.side * j});
            this.cells[i][j].rotate(Math.PI/4);
            this.cells[i][j].scale();
            this.cells[i][j].move({x: 0, y: 350});
        }
    }

    //console.log(this.cells);
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

