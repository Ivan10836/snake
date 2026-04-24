// Gib deinen Code hier ein
class Snake {
    points: Vector2Int[];
    direction: number;

    constructor(){
        this.points = [new Vector2Int(1, 3), new Vector2Int(2, 3), new Vector2Int(3, 3)]
        this.direction	= 1;
    }
    	
    Tackt(apple: Apple){
        let nextPointDir: Vector2Int
        let nextPoint: Vector2Int
        nextPointDir = this.GetDir()
    }

    GetDir(): Vector2Int
    {
        let nextPointDir: Vector2Int

        if (this.direction == 0) {
            nextPointDir = new Vector2Int(0, 1)
        } else if (this.direction == 1) {
            nextPointDir = new Vector2Int(1, 0)
        } else if (this.direction == 2) {
            nextPointDir = new Vector2Int(0, -1)
        } else if (this.direction == 3) {
            nextPointDir = new Vector2Int(-1, 0)
        } else {
            nextPointDir = new Vector2Int(0, 1)
        }
        return nextPointDir;
    }
}