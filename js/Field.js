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
    this.cells = [];
    this.width = 20;
    this.height = 12;
    this.side = 20;

    for(var i = 0; i < this.width; i++)
    {
        this.cells[i] = [];
        for(var j = 0; j < this.height; j++)
        {
            var newCell = new Cell([
                new Point(0, 0),
                new Point(this.side, 0),
                new Point(this.side, this.side),
                new Point(0, this.side)
            ],
                this.context,
                {
                    fill: 0
                }
            );
            this.cells[i][j] = newCell;
            //this.cells[i][j].moveToCenter();
            this.cells[i][j].move({x: 0 + this.side * i, y: 0 + this.side * j});
            //this.cells[i][j].rotate(Math.PI/4);
            //this.cells[i][j].scale();
            //this.cells[i][j].move({x: 0, y: 350});
        }
    }

    this.cells[5][2].setFill(1);
    this.cells[5][3].setFill(1);
    this.cells[5][4].setFill(1);
    this.cells[5][5].setFill(1);
    this.cells[5][6].setFill(1);
    this.cells[5][7].setFill(1);
    this.cells[5][8].setFill(1);
    this.cells[5][9].setFill(1);
    this.cells[5][10].setFill(1);

    this.cells[4][3].setFill(1);
    this.cells[3][3].setFill(1);
    this.cells[2][3].setFill(1);
    this.cells[1][3].setFill(1);

    //this.path.add(this.cells[0][0].getCenter());
    //this.path.add(this.cells[1][0].getCenter());
    //this.path.add(this.cells[2][0].getCenter());
    //this.path.add(this.cells[2][1].getCenter());

    this.path = new Path();
    this.pathFind = new PathFind({x: 2, y: 8}, {x: 8, y: 2}, this);
};

Field.prototype.draw = function()
{
    for(var i = 0; i < this.width; i++) {

        for (var j = 0; j < this.height; j++) {
            this.cells[i][j].draw();
        }
    }

    this.path.draw(this.context)
        //console.log(that)


}

Field.prototype.setFill = function(x,y, type)
{
    this.cells[x][y].setFill(type);
}

Field.prototype.getAllNeighbor = function(x, y)
{
    var neighbors = [];
    console.log(this);
    console.log(x,y);
    if(((x - 1) >= 0) && !this.cells[x - 1][y].isFill())
    {
        neighbors.push({x: x - 1, y: y});
    }
    if(((x + 1) < this.width) && !this.cells[x + 1][y].isFill())
    {
        neighbors.push({x: x + 1, y: y});
    }
    if(((y - 1) >= 0) && !this.cells[x][y - 1].isFill())
    {
        neighbors.push({x: x, y: y - 1});
    }
    if(((y + 1) < this.height) && !this.cells[x][y + 1].isFill())
    {
        neighbors.push({x: x, y: y + 1});
    }

    return neighbors;
}
