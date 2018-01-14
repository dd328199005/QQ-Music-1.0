// let text = `[ti&#58;揭穿]&#10;[ar&#58;黄子韬]&#10;[al&#58;揭穿]&#10;[by&#58;]&#10;[offset&#58;0]&#10;[00&#58;00&#46;14]揭穿&#32;&#45;&#32;黄子韬&#10;[00&#58;00&#46;81]词：黄子韬&#10;[00&#58;00&#46;97]曲：黄子韬&#10;[00&#58;01&#46;14]编曲：Daryl&#32;K&#10;[00&#58;01&#46;30]制作人：Daryl&#32;K&#10;[00&#58;02&#46;30]&#10;[00&#58;15&#46;63]我原谅你的过错&#10;[00&#58;17&#46;71]&#10;[00&#58;19&#46;31]即使你已经沉默&#10;[00&#58;21&#46;36]&#10;[00&#58;23&#46;13]可我能感受得到&#10;[00&#58;25&#46;56]&#10;[00&#58;26&#46;77]你爱我却控制不了&#10;[00&#58;29&#46;10]&#10;[00&#58;30&#46;52]因为我对你来说&#10;[00&#58;32&#46;82]&#10;[00&#58;34&#46;63]是最美好的出现&#10;[00&#58;36&#46;75]&#10;[00&#58;37&#46;69]任何你爱的人&#10;[00&#58;39&#46;64]都会受到伤害&#10;[00&#58;41&#46;49]但是我却依然不会退缩&#10;[00&#58;45&#46;17]&#10;[00&#58;47&#46;11]不顾一切阻碍地去爱你&#10;[00&#58;50&#46;98]&#10;[00&#58;51&#46;76]因为我的爱可以化解一切&#10;[00&#58;55&#46;27]而我没有让你知道&#10;[00&#58;58&#46;19]&#10;[00&#58;59&#46;45]虽然我们时间不多&#10;[01&#58;01&#46;69]剩下的日子&#10;[01&#58;03&#46;08]我会珍惜不放弃&#10;[01&#58;05&#46;24]让你做回自己&#10;[01&#58;08&#46;24]其实我都懂&#10;[01&#58;10&#46;04]&#10;[01&#58;11&#46;99]是我不想去揭穿它而已&#10;[01&#58;16&#46;61]&#10;[01&#58;18&#46;94]我原谅你的过错&#10;[01&#58;21&#46;23]&#10;[01&#58;22&#46;55]即使你已经沉默&#10;[01&#58;24&#46;75]&#10;[01&#58;26&#46;50]可我能感受得到&#10;[01&#58;29&#46;03]&#10;[01&#58;30&#46;26]你爱我却控制不了&#10;[01&#58;32&#46;48]&#10;[01&#58;33&#46;87]因为我对你来说&#10;[01&#58;36&#46;42]&#10;[01&#58;37&#46;94]是最美好的出现&#10;[01&#58;39&#46;97]&#10;[01&#58;40&#46;94]任何你爱的人&#10;[01&#58;42&#46;91]都会受到伤害&#10;[01&#58;44&#46;77]但是我却依然不会退缩&#10;[01&#58;48&#46;70]&#10;[01&#58;50&#46;53]不顾一切阻碍地去爱你&#10;[01&#58;54&#46;13]&#10;[01&#58;55&#46;04]因为我的爱可以化解一切&#10;[01&#58;58&#46;55]而我没有让你知道&#10;[02&#58;01&#46;58]&#10;[02&#58;02&#46;69]虽然我们时间不多&#10;[02&#58;05&#46;02]剩下的日子&#10;[02&#58;06&#46;52]我会珍惜不放弃&#10;[02&#58;08&#46;65]让你做回自己&#10;[02&#58;11&#46;53]其实我都懂&#10;[02&#58;13&#46;84]&#10;[02&#58;15&#46;37]是我不想去揭穿它而已&#10;[02&#58;20&#46;40]手机里的照片&#10;[02&#58;22&#46;37]脑海不停的出现&#10;[02&#58;24&#46;37]视频里你的笑脸&#10;[02&#58;25&#46;85]&#10;[02&#58;26&#46;37]仿佛就在我面前&#10;[02&#58;28&#46;22]渐渐消失的她&#10;[02&#58;30&#46;09]越来越弱的魔法&#10;[02&#58;31&#46;93]这份爱还会在吧&#10;[02&#58;34&#46;00]可再也回不来了&#10;[02&#58;36&#46;55]不顾一切阻碍地去爱你&#10;[02&#58;40&#46;13]&#10;[02&#58;41&#46;06]因为我的爱可以化解一切&#10;[02&#58;44&#46;67]而我没有让你知道&#10;[02&#58;48&#46;17]&#10;[02&#58;48&#46;79]虽然我们时间不多&#10;[02&#58;50&#46;84]剩下的日子&#10;[02&#58;52&#46;53]我会珍惜不放弃&#10;[02&#58;54&#46;62]让你做回自己&#10;[02&#58;57&#46;63]其实我都懂&#10;[02&#58;59&#46;44]&#10;[03&#58;01&#46;33]是我不想去揭穿它`

export class lyricsPLayer {
    constructor(el) {
        this.$el = el;
        this.$el.innerHTML = '<div class="lyric-content"></div>';
        this.$lines = this.$el.querySelector('.lyric-content');
        this.text = '';
        this.index = 0;
        this.lyrics = [];
        this.initTime = 0;
        this.reset();
        // this.start();
        
        this.line_height = 42;

    }
    start() {
        this.interval = setInterval(this.update.bind(this),1000);
    }
    pause() {
        clearInterval(this.interval);
    }
    update() {
        this.initTime = Math.floor(document.querySelector('audio').currentTime);
        if(this.index === this.lyrics.length -1 ) return this.restart();
        for(let i = this.index + 1; i < this.lyrics.length ;i++ ){
            let seconds = this.getSenconds(this.lyrics[i]);
            if(
                this.initTime === seconds &&
                (!this.lyrics[i+1] || this.initTime < this.getSenconds(this.lyrics[i+1]))
            ){
                // console.log(2)
                this.$lines.children[this.index].classList.remove('onactive');
                this.$lines.children[i].classList.add('onactive')
                this.index = i;
                break;
            }
        }
        // this.$lines.style.transform = `translateY(-${50 * this.index}px)`
        if(this.index > 2){
            let y = -(this.index -2) * this.line_height;
            this.$lines.style.transform = `translateY(${y}px)`
            // console.log(this.$lines.style.transform)
        }
    }
    restart() {
        this.reset();
        this.start();
    }
    getSenconds(line){
        return +line.replace(/^\[(\d{2})\:(\d{2})\..*/,(match,p1,p2) => {
            return (+p1)*60 +(+p2)
        })
    }
    render() {
      let html =  this.lyrics.map((line,index) => {
            return `
                <p>${line.slice(10)}</p>
            `
        }).join('')
      this.$lines.innerHTML = html 
    }
    reset(text) {
        this.pause();
        this.index = 0;
        this.initTime = 0;
        if (text) {
            this.text = this.formaText(text) || '';
            this.lyrics = this.text.match(/^\[\d{2}\:\d{2}\.\d{2}\].+$/gm) || [];
            if(this.lyrics.length){
                this.render()
            }
        }
    }
    formaText(text) {
        let div = document.createElement('div');
        div.innerHTML = text;
        return div.innerText;//转化为可用格式
    }
}

