
class Tree
{
    treeObject:any;

    constructor(x:integer, y:integer)
    {
        this.treeObject = aod.playground.add.image(x, y, 'tree');
        this.treeObject.setScale(0.6);
    }
}