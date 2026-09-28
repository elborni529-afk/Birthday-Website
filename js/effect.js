$(window).load(function () {
    $('.loading').fadeOut('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach fancy-bg');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		// ✨ Show fancy stars, hearts and sparkles
    	$('#fancy-decor').fadeIn(1200);

		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');

		// Show the album photos
		$('.album-photo').fadeIn('slow');

		$('.can-zoom').fadeIn('slow');

		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}
	function loopEight() {
	    var randleft = 1000*Math.random();
	    var randtop = 500*Math.random();
	
	    $('#b7').animate(
	        { left: randleft, bottom: randtop },
	        10000,
	        function () {
	            loopSeven();
	        }
	    );
	}
	
	
	/* =========================================
	   🎈 BALLOONS BUTTON
	   ========================================= */
	
	$('#balloons_flying').click(function () {
	
	    // Old balloon loops stay disabled.
	    // The new physics system controls movement.
	
	    // loopOne();
	    // loopTwo();
	    // loopThree();
	    // loopFour();
	    // loopFive();
	    // loopSix();
	    // loopSeven();
	    // loopEight();
	
	    startBalloonPhysics();
	
	    $(this)
	        .fadeOut('slow')
	        .delay(5000)
	        .promise()
	        .done(function () {
	
	            $('#cake_fade').fadeIn('slow');
	
	        });
	
	});
	$('#cake_fade').click(function () {
	
	    const cakeCover = document.querySelector('.cake-cover');
	
	    if (!cakeCover) return;
	
	    // Reveal the cake
	    cakeCover.classList.add('cake-visible');
	
	    // Make absolutely sure the section is visible
	    cakeCover.style.setProperty('display', 'block', 'important');
	
	    
	
	    // Hide this button
	    $(this).fadeOut('slow', function () {
	
	        // Show candle button
	        $('#light_candle').fadeIn('slow');
	
	    });
	
	});
		
	$('#wish_message').click(function(){
		balloonPhysicsStarted = false;
		vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b11').animate({top:240, left: vw-350},500);
		$('#b22').animate({top:240, left: vw-250},500);
		$('#b33').animate({top:240, left: vw-150},500);
		$('#b44').animate({top:240, left: vw-50},500);
		$('#b55').animate({top:240, left: vw+50},500);
		$('#b66').animate({top:240, left: vw+150},500);
		$('#b77').animate({top:240, left: vw+250},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	// =========================================================
	// 💌 STORY → SECRET LOVE LETTER
	// =========================================================
	
	$('#story').click(function () {
	
	    $(this).fadeOut('slow');
	
	    // Hide the old story/cake
	    $('.cake').fadeOut('slow');
	    $('.message').fadeOut('slow');
	    $('.balloons').fadeOut('slow');
	
	    // Show the letter
	    setTimeout(function () {
	
	        $('#letter-scene')
	            .css('display', 'block')
	            .hide()
	            .fadeIn(1500);
	
	        // Smoothly move to the letter
	        $('html, body').animate({
	            scrollTop: $('#letter-scene').offset().top
	        }, 1200);
	
	    }, 700);
	
	});

});

// Zoom (lightbox) feature
$('.album-photo').click(function() {
    var src = $(this).attr('src');
    $('#lightbox img').attr('src', src);

    // Force flex only when showing
    $('#lightbox').css('display', 'flex').hide().fadeIn('fast');
});

// Close when clicking outside image
$('#lightbox').click(function(e) {
    if (e.target !== this) return; // only close if background clicked
    $('#lightbox').fadeOut('fast');
});

//alert('hello');
// =========================================================
// CANDLE BLOWOUT
// =========================================================

// =========================================================
// CANDLE BLOWOUT
// =========================================================

document.addEventListener('DOMContentLoaded', function () {

    const flame = document.getElementById('flame');
    const wishText = document.getElementById('wishText');

    if (!flame) return;

    flame.addEventListener('click', function () {

        // 🔥 Turn off the flame
        this.classList.add('extinguished');

        // ✨ Change the wish message
        if (wishText) {

            wishText.textContent =
                "✨ Wish made! May all your dreams come true! 💖";

            wishText.style.color = "#7209b7";
        }

        // 🔘 Hide "Don't forget to Light the Candle"
        $('#light_candle').fadeOut('slow', function () {

            // ➡️ Show the next button
            $('#wish_message').fadeIn('slow');

        });

    });

});


    // =========================================================
	// 💌 CINEMATIC LOVE LETTER
	// =========================================================
	
	$(document).ready(function () {
	
	    $('#envelope').on('click keypress', function (e) {
	
	        // Allow mouse click
	        // or Enter / Space on keyboard
	        if (
	            e.type === 'keypress' &&
	            e.key !== 'Enter' &&
	            e.key !== ' '
	        ) {
	            return;
	        }
	
	        const envelope = $(this);
	
	        // Don't allow opening twice
	        if (envelope.hasClass('open')) {
	            return;
	        }
	
	        // ✉️ Open envelope
	        envelope.addClass('open');
			// 🌙 Fade away the introduction
			$('#letter-scene').addClass('letter-opened');
	
	        // Hide instruction
	        $('.open-hint').fadeOut(500);
	
	
	        // =========================================
	        // 📜 REVEAL THE LETTER
	        // =========================================
	
	        setTimeout(function () {
	
	            const paragraphs =
	                $('#letter-text p');
	
	            paragraphs.each(function (index) {
	
	                $(this)
	                    .delay(index * 300)
	                    .queue(function (next) {
	
	                        $(this).css({
	                            animation:
	                                'letterParagraph 0.9s ease forwards'
	                        });
	
	                        next();
	
	                    });
	
	            });
	
	        }, 1200);
	
	    });
	
	});
/* =========================================
   🎈 ADVANCED FREE BALLOON PHYSICS
   ========================================= */

let balloonPhysicsStarted = false;

function startBalloonPhysics() {

    if (balloonPhysicsStarted) return;
    balloonPhysicsStarted = true;

    const balloons = Array.from(
        document.querySelectorAll('.balloons')
    );

    const physics = [];

    balloons.forEach(function(balloon) {

        const rect = balloon.getBoundingClientRect();

        physics.push({
            el: balloon,

            x: rect.left,
            y: rect.top,

            // Starting drift
            vx: (Math.random() - 0.5) * 1.2,
            vy: (Math.random() - 0.5) * 1.2,

            // Every balloon gets a slightly different
            // wandering pattern
            phase: Math.random() * Math.PI * 2,
            driftSpeed: 0.004 + Math.random() * 0.004
        });

        balloon.style.left = rect.left + 'px';
        balloon.style.top = rect.top + 'px';
        balloon.style.bottom = 'auto';
    });


    /* =====================================
       🖱️ MOUSE
       ===================================== */

    let mouseX = -1000;
    let mouseY = -1000;

    let previousMouseX = -1000;
    let previousMouseY = -1000;

    let mouseVX = 0;
    let mouseVY = 0;


    document.addEventListener('mousemove', function(e) {

        if (previousMouseX > -500) {

            mouseVX = e.clientX - previousMouseX;
            mouseVY = e.clientY - previousMouseY;

        }

        previousMouseX = e.clientX;
        previousMouseY = e.clientY;

        mouseX = e.clientX;
        mouseY = e.clientY;
    });


    /* =====================================
       🎈 PHYSICS
       ===================================== */

    function update(time) {

        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;


        /* =================================
           🎈 BALLOON COLLISIONS
           ================================= */

        for (let i = 0; i < physics.length; i++) {

            for (let j = i + 1; j < physics.length; j++) {

                const a = physics[i];
                const b = physics[j];

                const aw = a.el.offsetWidth;
                const ah = a.el.offsetHeight;

                const bw = b.el.offsetWidth;
                const bh = b.el.offsetHeight;

                const ax = a.x + aw / 2;
                const ay = a.y + ah / 2;

                const bx = b.x + bw / 2;
                const by = b.y + bh / 2;

                const dx = bx - ax;
                const dy = by - ay;

                const distance = Math.sqrt(
                    dx * dx + dy * dy
                );


                /*
                 * Balloons don't need perfect
                 * circle collisions.
                 *
                 * This distance simply keeps them
                 * visually separated.
                 */

                const minimumDistance =
                    (aw + bw) * 0.32;


                if (
                    distance < minimumDistance &&
                    distance > 0
                ) {

                    const overlap =
                        minimumDistance - distance;

                    const nx = dx / distance;
                    const ny = dy / distance;


                    /*
                     * Physically separate them
                     */

                    a.x -= nx * overlap * 0.5;
                    a.y -= ny * overlap * 0.5;

                    b.x += nx * overlap * 0.5;
                    b.y += ny * overlap * 0.5;


                    /*
                     * Give them a gentle bounce
                     */

                    const bounce = 0.15;

                    a.vx -= nx * bounce;
                    a.vy -= ny * bounce;

                    b.vx += nx * bounce;
                    b.vy += ny * bounce;
                }
            }
        }


        /* =================================
           MOVE EACH BALLOON
           ================================= */

        physics.forEach(function(balloon) {

            const width = balloon.el.offsetWidth;
            const height = balloon.el.offsetHeight;

            const centerX =
                balloon.x + width / 2;

            const centerY =
                balloon.y + height / 2;


            /* =================================
               🖱️ MOUSE REPULSION
               ================================= */

            const dx = centerX - mouseX;
            const dy = centerY - mouseY;

            const distance = Math.sqrt(
                dx * dx + dy * dy
            );

            const reactionDistance = 160;


            if (
                distance < reactionDistance &&
                distance > 0
            ) {

                const force =
                    1 - distance / reactionDistance;


                /*
                 * Push away from cursor
                 */

                balloon.vx +=
                    (dx / distance) *
                    force *
                    1.6;

                balloon.vy +=
                    (dy / distance) *
                    force *
                    1.6;


                /*
                 * Transfer mouse momentum
                 */

                balloon.vx +=
                    mouseVX * 0.035 * force;

                balloon.vy +=
                    mouseVY * 0.035 * force;
            }


            /* =================================
               🌬️ NATURAL FLOATING
               ================================= */

            /*
             * Slowly changing direction.
             *
             * There is NO destination.
             * Therefore balloons never return
             * to an old position.
             */

            balloon.phase += balloon.driftSpeed;

            balloon.vx +=
                Math.sin(balloon.phase) * 0.008;

            balloon.vy +=
                Math.cos(balloon.phase * 0.8) * 0.006;


            /*
             * Tiny random air currents
             */

            balloon.vx +=
                (Math.random() - 0.5) * 0.008;

            balloon.vy +=
                (Math.random() - 0.5) * 0.008;


            /*
             * Slight upward tendency because
             * they're balloons 🎈
             */

            balloon.vy -= 0.002;


            /* =================================
               AIR RESISTANCE
               ================================= */

            balloon.vx *= 0.998;
            balloon.vy *= 0.998;


            /* =================================
               DON'T LET THEM BECOME STATIC
               ================================= */

            const speed = Math.sqrt(
                balloon.vx * balloon.vx +
                balloon.vy * balloon.vy
            );

            if (speed < 0.18) {

                balloon.vx +=
                    Math.sin(balloon.phase) * 0.04;

                balloon.vy +=
                    Math.cos(balloon.phase) * 0.04;
            }


            /* =================================
               MAX SPEED
               ================================= */

            const maxSpeed = 6;

            balloon.vx = Math.max(
                -maxSpeed,
                Math.min(maxSpeed, balloon.vx)
            );

            balloon.vy = Math.max(
                -maxSpeed,
                Math.min(maxSpeed, balloon.vy)
            );


            /* =================================
               APPLY MOVEMENT
               ================================= */

            balloon.x += balloon.vx;
            balloon.y += balloon.vy;


            /* =================================
               SCREEN EDGES
               ================================= */

            if (balloon.x < 0) {

                balloon.x = 0;
                balloon.vx =
                    Math.abs(balloon.vx) * 0.8;
            }

            if (
                balloon.x + width >
                screenWidth
            ) {

                balloon.x =
                    screenWidth - width;

                balloon.vx =
                    -Math.abs(balloon.vx) * 0.8;
            }

            if (balloon.y < 0) {

                balloon.y = 0;
                balloon.vy =
                    Math.abs(balloon.vy) * 0.8;
            }

            if (
                balloon.y + height >
                screenHeight
            ) {

                balloon.y =
                    screenHeight - height;

                balloon.vy =
                    -Math.abs(balloon.vy) * 0.8;
            }


            /* =================================
               DRAW
               ================================= */

            balloon.el.style.left =
                balloon.x + 'px';

            balloon.el.style.top =
                balloon.y + 'px';
        });


        /*
         * Mouse momentum fades quickly
         */

        mouseVX *= 0.72;
        mouseVY *= 0.72;


        requestAnimationFrame(update);
    }


    if (balloonPhysicsStarted) {
	    requestAnimationFrame(update);
	}
}
/* =========================================
   🎈 ALIGN BALLOONS → H B D B A B Y
   ========================================= */

function alignBirthdayBalloons() {

    // Stop our free physics system
    balloonPhysicsStarted = false;

    const order = [
        '#b1', // H
        '#b2', // B
        '#b3', // D
        '#b4', // B
        '#b5', // A
        '#b6', // B
        '#b7'  // Y
    ];

    const spacing = 105;

    const totalWidth =
        (order.length - 1) * spacing;

    const startX =
        (window.innerWidth - totalWidth) / 2;

    const targetY = 110;

    order.forEach(function(id, index) {

        const balloon = document.querySelector(id);

        if (!balloon) return;

        // Stop anything else controlling it
        $(balloon).stop(true, false);

        balloon.style.bottom = 'auto';

        $(balloon).animate(
            {
                left: startX + index * spacing,
                top: targetY
            },
            1800
        );

    });
}
/* =========================================
   🎈 ALIGN WHEN "A MESSAGE FOR YOU" IS CLICKED
   ========================================= */

document.addEventListener('DOMContentLoaded', function () {

    const messageButton =
        document.getElementById('wish_message');

    if (!messageButton) return;

    messageButton.addEventListener('click', function () {

        alignBirthdayBalloons();

    });

});
