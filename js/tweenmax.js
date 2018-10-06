console.log("ok");
TweenMax.to(".box01", .8, {
    x: 200,
    y: 100,
    ease: Elastic.easeOut,
    delay: 2
});


TweenMax.from(".box02", .8, {
    y: 200,
    ease: SlowMo.ease.config(0.7, 0.7, false),
    delay: 4
});