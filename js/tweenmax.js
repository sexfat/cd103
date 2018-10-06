console.log("ok");
TweenMax.to(".box01", 4, {
    x: 200,
    y: 100,
    ease: Elastic.easeOut,
    delay: 2,
    width: 100,
    scale: 1.9,
    // alpha: 0,
    // repeat: 2,
    // repeatDelay : 1,
    rotation: 360,
    borderRadius:"100px"
});


TweenMax.from(".box02", .8, {
    y: 200,
    // ease: SlowMo.ease.config(0.7, 0.7, false),
    delay: 4,
    alpha: 0,
   

});