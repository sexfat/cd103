console.log("ok");

function animaion_01() {
    TweenMax.to(".box01", 4, {
        x: 200,
        y: 100,
        ease: Elastic.easeOut,
        delay: 2,
        // width: 100,
        // scale: 1.9,
        // alpha: 0,
        // repeat: 2,
        // repeatDelay : 1,
        // rotation: 360,
        // borderRadius: "100px"
    });


    TweenMax.from(".box02", .8, {
        y: 200,
        // ease: SlowMo.ease.config(0.7, 0.7, false),
        delay: 4,
        alpha: 0,

    });

    TweenMax.set(".box03", {
        y: 200,
        x: 10
    });


    TweenMax.fromTo(".box04", 2, {
        y: -10
    }, {
        y: 150,
        delay: 2,
        repeatDelay: 1,
        // ease: Elastic.easeOut,
        repeat: -1,
        yoyo: false

    });

    TweenMax.fromTo(".box06", .8, {
        y: 150,
        boxShadow: "0px 0px 20px black" //陰影
    }, {
        y: 160,
        // delay: 2,
        // rotationX: 720,
        scale: .8,
        // transformOrigin : 'right top'
        // repeatDelay : 1,
        // ease: Elastic.easeOut,
        backgroundColor: '#c603e0',
        boxShadow: "0px 10px 10px black", //陰影
        repeat: -1,
        yoyo: true

    });

    //增加classname
    TweenMax.to(".box05", 4, {
        className: "+=addclass"
    });


    // bezier
    TweenMax.to(".box07", 2, {
        bezier: {
            values: [{
                x: 0,
                y: 0
            }, {
                x: 250,
                y: 400
            }, {
                x: 170,
                y: 200
            }, {
                x: 0,
                y: 0
            }],
            autoRotate: false
        },
        ease: Power1.easeOut
    });
    TweenMax.staggerFromTo('.box08 , .box07 , .box06', 1, {
        y: 0
    }, {
        y: 100
    }, .8);
};

// animaion_01();

// var _btn = $('.btn');


// _btn.on('click' , function(){
//     TweenMax.staggerFromTo(".box09", 1, {
//         scale: 1.2,
//         alpha: 0
//     }, {
//         scale: 1,
//         alpha: 1,
//         ease: Elastic.easeOut
//     }, 0.2);
// });



function ani_01() {

    TweenMax.staggerFromTo(".box09", 1, {
        scale: 1.2,
        alpha: 0
    }, {
        scale: 1,
        alpha: 1,
        ease: Elastic.easeOut
    }, 0.2);
}

var tl = new TimelineMax({
    repeat: 2,
    repeatDelay: 1,
    yoyo: true,
    onComplete: ok
});



// tl.add(
//     //a
//     TweenMax.to(".box10", 1, {
//         x: 200,
//         y: 100,
//         ease: Elastic.easeOut,

//     }));
// tl.add(
//     //b
//     TweenMax.to(".box11", 2, {
//         x: 300,
//         y: 200,
//         rotation: 180,
//         ease: Elastic.easeOut,
//         scale: 1.9
//     }));


// tl.to(".box10", 1, {
//     x: 200,
//     y: 100,
//     ease: Elastic.easeOut,

// }).to(".box11", 2, {
//     x: 300,
//     y: 200,
//     rotation: 180,
//     ease: Elastic.easeOut,
//     scale: 1.9
// });


//



var tw01 = TweenMax.to(".box10", 1, {
    x: 200,
    y: 100,
    ease: Elastic.easeOut,

});



var tw02 = TweenMax.to(".box11", 2, {
    x: 300,
    y: 200,
    rotation: 180,
    ease: Elastic.easeOut,
    scale: 1.9
});


tl.add([tw01, tw02]);

tl.stop();
// tl.timeScale(3);

// tl.reverse();


document.getElementById('btn_play').onclick = function () {

    tl.play(0);
}


document.getElementById('btn_stop').onclick = function () {

    tl.stop();
}

function ok() {
    ani_01();
    //   console.log("callback");
}


var tlp = new TimelineMax({
    onComplete: parallaxs
});

tlp.set('.section02 .box_01', {
    x: 300,
    y: 300,
}).staggerFromTo('.section02 .box_01', 1, {
    x: 0
}, {
    x: 100,
    ease: Power1.easeOut
});


function parallaxs() {
    var scene = document.getElementById('parallax_box');
    var parallax = new Parallax(scene);
};


document.getElementById('btn_scrollto').onclick = function () {
    TweenMax.to(window, 1, {
        scrollTo: {
            y: "#archor",
            offsetY: 100
        }
    })
}


TweenMax.to('.textbox', 1, {

    text: "鼎泰豐驚爆漲價 餐飲業：一例一休壓頂 勢在必漲 增加文字",
    ease: Linear.easeNone
})





// scrollmagic 初始化

var controller = new ScrollMagic.Controller();


var tw01 = TweenMax.to('.section03 .box_01', 1, {
    x: 400
});


var scene_01 = new ScrollMagic.Scene({
        triggerElement: '#trigger01',
        // offset: 100,
        // duration: 600,
        triggerHook: 0.5,
        reverse: false
    }).setTween(tw01)
    .addIndicators({
        name: 'section_01',
        colorStart: '#f20',
        colorEnd: '#000'
    })
    .addTo(controller);


function scrollmagics() {
    console.log('scrollmagic ok');
    alert('message ok');
}

var section_02 = new TimelineMax({
    repeat: 2
});

section_02.to('.parallax_01', 1 , {
    width: '100%'
}).to('.parallax_02', 1 ,{
    width: '80%',
    x: '20%'
}).to('.parallax_03', 1 ,{
    width: '60%',
    x: '40%'
});





var scene_02 = new ScrollMagic.Scene({
        triggerElement: '#trigger02',
        // offset: 100,
        duration: 600,
        triggerHook: 0.5,
        reverse: false
    }).setTween(section_02)
    .addIndicators({
        name: 'section_02',
        colorStart: '#f20',
        colorEnd: '#000'
    })
    .addTo(controller);

















console.log('end ok');