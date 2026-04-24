class Vector2Int {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    //Add and return new copy
    add(other: Vector2Int): Vector2Int {
        return new Vector2Int(this.x + other.x, this.y + other.y);
    }
    
    isSame(other: Vector2Int) : boolean
    {
        if(this.x == other.x && this.y == other.y)
        {
            return true
        }
        return false
    }
}