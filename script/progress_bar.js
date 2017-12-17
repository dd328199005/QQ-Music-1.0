
class progressBar {
    constructor(el,totalTime,start){
        this.$el = el;
        this.initTime = 0;
        this.totalTime = totalTime || 0;
        this.allTime = totalTime;
        this.progress = 0;
        this.render()
        this.startTime = this.$el.querySelector('.start-time');
        this.endTime = this.$el.querySelector('.end-time');
        this.startTime.innerText = this.handleTime(this.initTime);
        this.endTime.innerText = this.handleTime(this.totalTime);
        if (start) this.start()
    }
    start(){
        this.intervalid = setInterval(this.updata.bind(this),1000)
    }
    pause() {
        clearInterval(this.intervalid)
    }
    reset(newTime) {
        this.pause();
        this.initTime = 0;
        this.progress = 0;
        if(newTime){
            this.totalTime = newTime
            this.endTime.innerText = this.handleTime(this.totalTime);
        }
    }
    updata(totalTime){
        if(this.totalTime === 0 ) return this.reset();
        this.initTime += 1;
        this.totalTime -= 1;
        this.startTime.innerText = this.handleTime(this.initTime);
        this.endTime.innerText = this.handleTime(this.totalTime);
        this.progress = this.initTime/this.allTime * 100;
        this.$el.querySelector('.progress_load').style.transform = `translateX(${this.progress - 100}%)`;
    }
    render() {
        this.$el.innerHTML = `
            <span class="start-time play-time"></span>
            <div class="progress_bar">
                <div class="progress_load"></div>
                <div class="progress_bg"></div>
            </div>
            <span class="end-time play-time"></span>
        `
    }
    handleTime(seconds) {
        let min = Math.floor(seconds / 60);
        let second = seconds % 60;
        if (min<10) min = '0' + min;
        if (second<10) second = '0' + second;
        return `${min}:${second}`
    }

}