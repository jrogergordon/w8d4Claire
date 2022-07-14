class Clock {
    constructor() {
        const dateNow = new Date();
        this.hours = dateNow.getHours();
        this.minutes = dateNow.getMinutes();
        this.seconds = dateNow.getSeconds();
        const boundTick = this._tick.bind(this)
        setInterval(boundTick, 1000);
    }

    printTime() {
        console.log("" + this.hours + ":" + this.minutes + ":" + this.seconds);
    }
    
    _tick() {
        this.seconds++;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes++;
        } 
        if (this.seconds <= 9) {
            this.seconds = "0" + this.seconds
        }
        if (this.minutes === 60) {
            this.minutes = 0;
            this.hours++;
        }
        if (this.minutes <= 9) {
            this.minutes = "0" + this.minutes
        }
        if (this.hours === 24) {
            this.hours = 0;
        }
        if (this.hours < 9) {
            this.hours = "0" + this.hours
        }
        this.printTime();
    }
}

const the_time = new Clock();

