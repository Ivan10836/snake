// Gib deinen Code hier ein
class Apple{
    apple: Vector2Int;

    constructor(){
        this.apple = new Vector2Int(4, 2)
    }

    Collision(V: Vector2Int): boolean {
        if (this.apple.x == V.x && this.apple.y == V.y){
            return true;
        }
        return false
    }
}