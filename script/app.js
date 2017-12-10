(function(){
    let slider = new Slider({
        el:document.querySelector('#slider'),
        sliders:[
            { link: '#1', img:'imgs/chunge.jpg'},
            { link: '#2', img:'imgs/leigui.jpg'},
            { link: '#3', img:'imgs/lihong.jpg'},
            { link: '#4', img:'imgs/chunge.jpg'},
            { link: '#5', img:'imgs/yuquan.jpg'},
        ]
    });
    let tabs = new Tabs({
        el:document.querySelector('.navbar')
    })
})()