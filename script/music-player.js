class MusicPLayer {
    constructor(el){
        this.$el = el;
        this.$el.addEventListener('click',this)
        this.creatAudio();
        this.progress = new progressBar(document.querySelector('.progress'), 5, true);
        this.lyrice = new lyricsPLayer(document.querySelector('.lyric-wrap'));
        document.querySelector('.down-qq').addEventListener('click',()=>this.show())
    }

    creatAudio(){
        this.$audio = document.createElement('audio');
        this.$audio.loop = true;
        document.body.appendChild(this.$audio)
    }

    handleEvent(event){
        let target = event.target;
        switch (true) {
            case target.matches('.play-icon'):
                this.onPlay(event)
                break;
            case target.matches('.pause-icon'):
                this.onPause(event)
                break;
            case target.matches('.left-icon a'):
                this.hide()
                break;
        }

    }

    onPlay(event){
        event.target.classList.remove('play-icon')
        event.target.classList.add('pause-icon')
    }
    
    onPause(event){
        event.target.classList.remove('pause-icon')
        event.target.classList.add('play-icon')
    }

    show(){
        this.$el.classList.add('onshow');
        document.body.style.height = '100vh';
        document.body.style.overflow = 'hidden';

    }
    hide(){
        this.$el.classList.remove('onshow');
        document.body.style.height = 'auto';
        document.body.style.overflow = 'auto';
    }
}