// Gib deinen Code hier ein
class Apple{
    apple: Vector2Int;

    constructor(){
        this.apple = new Vector2Int(4, 2)
        SchowVector(this.apple)
    }

    Collision(V: Vector2Int, snake: Snake): boolean {
        if (this.apple.isSame(V)){
            this.NewRamdomApple(snake)
            SchowVector(this.apple)
            return true;
        }
        return false
    }

    NewRamdomApple(snake: Snake)
    {
        let noCompleat = true;
        let oldApple = this.apple;
        while(noCompleat)
        {
            this.apple = new Vector2Int(randint(0, 4), randint(0, 4))
            if(!snake.Collision(this.apple) && !this.apple.isSame(oldApple)){
                noCompleat = false;
            }
        }
    }
}