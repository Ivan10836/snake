// Gib deinen Code hier ein
class Snake {
    points: Vector2Int[];
    direction: number;

    constructor(){
        this.points = [new Vector2Int(2, 2), new Vector2Int(1, 2), new Vector2Int(0, 2)]
        this.direction	= 1;
        SchowVectorArr(this.points)
    }
    	
    Tackt(apple: Apple){
        let nextPointDir: Vector2Int
        let nextPoint: Vector2Int
        nextPointDir = this.GetDir()
        nextPoint = this.points[0].add(nextPointDir)
        this.points.unshift(nextPoint)
        SchowVector(nextPoint);
        let isWithAppleColosion = apple.Collision(this.points[0], this)
        if(!isWithAppleColosion){
            HideVector(this.points[this.points.length - 1])
            this.points.pop();
        }
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

    Collision(v: Vector2Int): boolean
    {
        let ret = false;
        for (let i = 0; i < this.points.length; i++){
            if(this.points[i].isSame(v)){
                ret = true;
            }
        }
        return ret;
    }
}