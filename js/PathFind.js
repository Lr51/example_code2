/**
 * Created on 26.10.2015.
 */

var PathFind = function(start, target, field)
{
    this.start = start;
    this.target = target;
    this.field = field;

    this.xMarker;
    this.yMarker;

    //console.log(this.start.y);
    this.field.setFill(this.start.x, this.start.y, 2);
    this.field.setFill(this.target.x, this.target.y, 3);

    this.viewedVertex = [];
    this.waitVertex = [];
    this.waitVertex.push(new PathNode(
        this.start.x,
        this.start.y,
        0,
        Math.abs(this.target.x - this.start.x) + Math.abs(this.target.y - this.start.y),
        false
    ));

    var count = 0;
    while(this.waitVertex.length > 0) {
        var indexMinFullPath = this.getMinFullPathIndex();
        this.xMarker = this.waitVertex[indexMinFullPath];
        if ((this.target.x == this.waitVertex[indexMinFullPath].x) && (this.target.y == this.waitVertex[indexMinFullPath].y)) {
            console.log("--------------------------Path find!!!-------------------------");
            this.pathNodes(this.xMarker);
            break;
        }
        else {
            //5
            var point = this.waitVertex.splice(indexMinFullPath, 1);
            this.viewedVertex.push(point[0]);
                var neighbors = this.field.getAllNeighbor(point[0].x, point[0].y);
                for (var i = 0; i < neighbors.length; i++) {
                    //7
                    if (!this.isViewedPoint(neighbors[i].x, neighbors[i].y)){// && !this.isWaitPoint(neighbors[i].x, neighbors[i].y)) {
                        if(!this.isWaitPoint(neighbors[i].x, neighbors[i].y))
                        {
                            this.yMarker = new PathNode(
                                neighbors[i].x,
                                neighbors[i].y,
                                this.xMarker.distStartToPoint + (Math.abs(neighbors[i].x - this.xMarker.x) + Math.abs(neighbors[i].y - this.xMarker.y)),
                                (Math.abs(neighbors[i].x - this.target.x) + Math.abs(neighbors[i].y - this.target.y)),
                                this.xMarker
                            );
                            this.waitVertex.push(this.yMarker);

                            if ((this.xMarker.distStartToPoint + (Math.abs(this.xMarker.x - this.yMarker.x) + Math.abs(this.xMarker.y - this.yMarker.y))) < this.yMarker.distStartToPoint) {
                                console.log("");
                            }
                        }


                    }
                }
            //}
        }
    }
};

PathFind.prototype.calcFullPAth = function()
{

}

PathFind.prototype.isViewedPoint = function(x, y)
{
    for(var i = 0; i < this.viewedVertex.length; i++)
    {
        if((this.viewedVertex[i].x == x) && (this.viewedVertex[i].y == y))
        {
            return true;
        }
    }

    return false;
}

PathFind.prototype.pathNodes = function (node) {
    var currNode = node.pointFrom;
    while(currNode)
    {
        this.field.setFill(currNode.x, currNode.y, -2);
        currNode = currNode.pointFrom;
    }
}

PathFind.prototype.isWaitPoint = function (x, y) {
    for(var i = 0; i < this.waitVertex.length; i++)
    {
        if((this.waitVertex[i].x == x) && (this.waitVertex[i].y == y))
        {
            return true;
        }
    }

    return false;
}



PathFind.prototype.getMinFullPathIndex = function()
{
    var minFullPath = this.waitVertex[0].getFullPath();
    var index = 0;
    for(var i = 1; i < this.waitVertex.length; i++)
    {
        if(this.waitVertex[i].getFullPath() < minFullPath)
        {
            minFullPath = this.waitVertex[i].getFullPath();
            index = i;
        }
    }
    return index;
}


var PathNode = function(x, y, g, h, fromPoint)  // g - startToPoint, h - pointToTarget
{
    this.x = x;
    this.y = y;

    this.distStartToPoint = g;
    this.distPointToTarget = h;

    this.pointFrom = fromPoint;

    this.fullPath = this.distStartToPoint + this.distPointToTarget;
}

PathNode.prototype.getFullPath = function()
{
    return this.fullPath;
}