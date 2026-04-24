// Gib deinen Code hier ein

class Input {
    dir: int16
    constructor(){
        this.dir = 1
    }    

    ButtA(){
        this.dir++
        if (this.dir == 4) {
            this.dir = 0
        }
    }
    ButtB(){
        this.dir--
        if(this.dir == -1){
            this.dir = 3
        }
    }
}