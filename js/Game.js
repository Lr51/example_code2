/**
 * Created on 05.10.2015.
 */

var Game = function(idField)
{
    var field = document.getElementById(idField);
    this.context = field.getContext("2d");

    this.field = new Field(this.context);


}

Game.prototype.draw = function()
{
    this.field.draw();
}