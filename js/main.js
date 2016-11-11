$(document).ready(function(){
    // uses pen body to cover contents above
	TweenMax.set('.part3', {y: - 572});

    //hide all headings
    // TweenMax.set(['.parts h2, .parts p'], {autoAlpha: 0});

    //create a tween that will move the pen body back to its original css position
    var bodyToStart = TweenMax.to('.part3', 1, {y: 0, ease: Linear.easeNone});

    // Init scrollmagic controller

    var controller = new ScrollMagic.Controller();

    // create a scene 1 - move pen body back to start
    var bodyToStartScene = new ScrollMagic.Scene({
        triggerElement: '.part1',
        triggerHook: 1, // bottom of the viewport
        offset: 287, //represents how much of the pen to reveal and number measured using a browser extension
        duration: 572 //use the duration of 572 the length of the pen
    })
    .setTween(bodyToStart)
    // .addIndicators()
    .addTo(controller);

    // Move 4 & 5 down, connect with part 6
    // TweenMax.set('.part5', {y: 120});
    // TweenMax.set('.part4', {y: 289});

    // move part 6 to connect with body
    TweenMax.set('.part6', {y: -846});

    // move 4 and 5 to connect with part 6 again
    TweenMax.set('.part5', {y: -726}); // 120 - 846
    TweenMax.set('.part4', {y: -557}); // 289 - 846

    // Create scene for part 6 - move part 6 back to start
    // Tweens animate the scene, scroll magic sets the controls for the user.
    var p6ToStart = new TweenMax.to('.part6', 1, {y:0, ease:Linear.easeNone});

    var p6ToStartScene = new ScrollMagic.Scene({
        triggerElement: '.part1',
        triggerHook: 1, // bottom of the viewport
        duration: 846, //the duration should be the + top offset which is +846
        offset: 1250
    })
    .setTween(p6ToStart)
    // .addIndicators()
    .addTo(controller);

    // Create scene for part 5 - move part 5 back to start
    var p5ToStart = new TweenMax.to('.part5', 1, {y:0, ease:Linear.easeNone});

    var p5ToStartScene = new ScrollMagic.Scene({
        triggerElement: '.part1',
        triggerHook: 1, // bottom of the viewport
        duration: 726, //the duration should be the + top offset which is +846
        offset: 1250
    })
    .setTween(p5ToStart)
    // .addIndicators()
    .addTo(controller);

    // Create scene for part 4 - move part 4 back to start
    var p4ToStart = new TweenMax.to('.part4', 1, {y:0, ease:Linear.easeNone});

    var p4ToStartScene = new ScrollMagic.Scene({
        triggerElement: '.part1',
        triggerHook: 1, // bottom of the viewport
        duration: 557, //the duration should be the + top offset which is +846
        offset: 1250
    })
    .setTween(p4ToStart)
    // .addIndicators()
    .addTo(controller);

    // Loop through all parts and add a class .fade-in
    $('.parts li').each(function(){

        //build a scene
        var scene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.55
        })
        .setClassToggle(this, 'fade-in')
        // .addIndicators()
        .addTo(controller);
    });
});
