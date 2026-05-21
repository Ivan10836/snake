// Gib deinen Code hier ein
class Apple{
    apple: Vector2Int;
    NewApplePosTranslateStage = 0;

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
        if(isMaster){
            let noCompleat = true;
            let oldApple = this.apple;
            while (noCompleat) {
                this.apple = new Vector2Int(randint(0, 4), randint(0, 4))
                if (!snake.Collision(this.apple) && !this.apple.isSame(oldApple)) {
                    noCompleat = false;
                }
            }
            

            radio.sendNumber(this.apple.x)
            radio.sendNumber(this.apple.y)

        }else{
            this.NewApplePosTranslateStage = 1;
            while (this.NewApplePosTranslateStage != 0){
                basic.pause(1)
            }
        }
    }

    TakeNewApplePosPackage(num: number){
        if (this.NewApplePosTranslateStage == 1){
            this.apple.x = num
            this.NewApplePosTranslateStage = 2
        } else if (this.NewApplePosTranslateStage == 2){
            this.apple.y = num
            this.NewApplePosTranslateStage = 0
        }
    }
}