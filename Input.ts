// Gib deinen Code hier ein

class Input {
    dir: int16
    constructor(){
        this.dir = 1
    }    

    ButtA(){
        if (isDirWasChange){
            return
        }

        this.dir++
        if (this.dir == 4) {
            this.dir = 0
        }
        radio.sendNumber(this.dir)

        isDirWasChange = true
    }
    
    ButtB(){
        if (isDirWasChange) {
            return
        }
        
        this.dir--
        if(this.dir == -1){
            this.dir = 3
        }
        
        radio.sendNumber(this.dir)

        isDirWasChange = true
    }

    TakeInputPacket(dir: number){
        if (snake.IsSnakeAtThisZone()){
            this.dir = dir
            isDirWasChange = true
        }
    }
}