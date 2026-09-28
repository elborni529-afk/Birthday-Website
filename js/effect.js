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
					const totalDelay =
					    paragraphs.length * 300 + 1000;
					
					setTimeout(function () {
					
					    $('#close-letter')
					        .fadeIn(800);
					
					}, totalDelay);
	
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


       if (balloonPhysicsStarted) {
		   requestAnimationFrame(update);
		}
    }


	requestAnimationFrame(update);
}
/* =========================================
   💌 FADE LETTER AWAY
   ========================================= */

$(document).on('click', '#close-letter', function () {

    $(this).fadeOut(300);

    $('#letter-scene').fadeOut(1400, function () {

        // Letter is now completely gone.
        $(this).css('display', 'none');

        startFakeEnding();

    });

});
/* =========================================
   🌙 FAKE ENDING → GAME REVEAL
   ========================================= */

function startFakeEnding() {

    const ending = $('#fake-ending');
    const theEnd = $('#the-end');
    const notOver = $('#not-over');

    ending.fadeIn(1800);


    /*
     * Let the ending breathe.
     * We WANT her to believe it's actually over.
     */

    setTimeout(function () {

        theEnd.addClass('show');

    }, 3500);


    /*
     * Hold "The End." for a moment...
     */

    setTimeout(function () {

        $('#ending-title').fadeOut(700);
        $('#ending-subtitle').fadeOut(700);
        $('.ending-heart').fadeOut(700);

    }, 6500);


    /*
     * Fade "The End" too.
     */

    setTimeout(function () {

        theEnd.fadeOut(900);

    }, 7600);


    /*
     * Silence...
     *
     * Then surprise 👀
     */

    setTimeout(function () {

        notOver.fadeIn(800);

    }, 9000);
}
/* =========================================
   🎮 START MEMORY GAME
   ========================================= */

$(document).on('click', '#start-game', function () {

    $('#not-over').fadeOut(500);

    $('#fake-ending').fadeOut(1200, function () {

        $(this).hide();

        $('#memory-game').fadeIn(1200, function () {

            startMemoryGame();

        });

    });

});
let memoryGameStarted = false;
let memoryScore = 0;


function startMemoryGame() {

    if (memoryGameStarted) return;

    memoryGameStarted = true;
    memoryScore = 0;

    const gameArea =
        document.getElementById('game-area');

    const score =
        document.getElementById('memory-score');

    if (!gameArea || !score) return;


    const memories = [
        '💗',
        '💖',
        '💕',
        '💓',
        '💞',
        '💝',
        '💘'
    ];


    document.getElementById(
        'memory-total'
    ).textContent = memories.length;


    memories.forEach(function(symbol, index) {

        const heart =
            document.createElement('div');

        heart.className =
            'memory-heart';

        heart.textContent = symbol;


        /*
         * Random positions
         */

        const x =
            8 + Math.random() * 84;

        const y =
            8 + Math.random() * 72;

        heart.style.left = x + '%';
        heart.style.top = y + '%';


        /*
         * Slightly different floating timing
         */

        heart.style.animationDelay =
            (index * 0.2) + 's';


        heart.addEventListener(
            'click',
            function () {

                collectMemory(
                    heart,
                    gameArea,
                    score
                );

            }
        );


        gameArea.appendChild(heart);

    });

}
function collectMemory(
    heart,
    gameArea,
    scoreElement
) {

    if (
        heart.classList.contains(
            'collected'
        )
    ) {
        return;
    }


    const rect =
        heart.getBoundingClientRect();

    const areaRect =
        gameArea.getBoundingClientRect();


    heart.classList.add(
        'collected'
    );


    memoryScore++;

    scoreElement.textContent =
        memoryScore;


    /* +1 MEMORY POPUP */

    const popup =
        document.createElement('div');

    popup.className =
        'memory-popup';

    popup.textContent =
        '+1 memory ✨';


    popup.style.left =
        (
            rect.left -
            areaRect.left +
            rect.width / 2
        ) + 'px';

    popup.style.top =
        (
            rect.top -
            areaRect.top
        ) + 'px';


    gameArea.appendChild(popup);


    setTimeout(function () {

        popup.remove();

    }, 1000);


    /*
     * Remove collected heart
     */

    setTimeout(function () {

        heart.remove();

    }, 450);


    /*
     * ALL MEMORIES FOUND
     */

    if (memoryScore === 7) {

        setTimeout(function () {

            finishMemoryGame();

        }, 1000);

    }

}
function finishMemoryGame() {

    const gameArea =
        document.getElementById('game-area');

    if (!gameArea) return;

    const complete =
        document.createElement('div');

    complete.className =
        'game-complete';

    complete.innerHTML = `
        <h2>Round 1 complete ✨</h2>

        <p>
            That was the easy part...
        </p>

        <button
            id="start-round-two"
            class="round-next-btn"
        >
            CONTINUE →
        </button>
    `;

    gameArea.appendChild(complete);

    $(complete)
        .hide()
        .fadeIn(1000);
}
/* =========================================
   ✨ ROUND 2 — MEMORY HUNT
   ========================================= */

$(document).on(
    'click',
    '#start-round-two',
    function () {

        $('.game-complete').fadeOut(
            700,
            function () {

                $(this).remove();

                startRoundTwo();

            }
        );

    }
);


function startRoundTwo() {

    const gameArea =
        document.getElementById(
            'game-area'
        );

    if (!gameArea) return;


    /*
     * Change header
     */

    $('.game-small-title')
        .fadeOut(300);

    $('.game-header h1')
        .fadeOut(
            300,
            function () {

                $(this)
                    .text('Memory Hunt ✨')
                    .fadeIn(700);

            }
        );


    $('.game-instructions')
        .fadeOut(
            300,
            function () {

                $(this)
                    .text(
                        'Find the 3 special memories hidden among the cards 💗'
                    )
                    .fadeIn(700);

            }
        );


    $('.game-counter')
        .fadeOut(400);


    /*
     * Create Round 2
     */

    const round =
        document.createElement('div');

    round.className =
        'memory-hunt';


    const cards = [

        {
            special: true,
            icon: '💗',
            message:
                'A memory worth keeping forever.'
        },

        {
            special: false,
            icon: '🌙'
        },

        {
            special: false,
            icon: '⭐'
        },

        {
            special: true,
            icon: '💖',
            message:
                'One of those moments that still makes me smile.'
        },

        {
            special: false,
            icon: '🌸'
        },

        {
            special: false,
            icon: '✨'
        },

        {
            special: true,
            icon: '💕',
            message:
                'Some memories are simply too special to forget.'
        },

        {
            special: false,
            icon: '🦋'
        },

        {
            special: false,
            icon: '🌷'
        }

    ];


    /*
     * Shuffle cards
     */

    cards.sort(
        function () {
            return Math.random() - 0.5;
        }
    );


    cards.forEach(
        function (card) {

            const element =
                document.createElement(
                    'button'
                );

            element.className =
                'hunt-card';

            element.innerHTML =
                '<span>?</span>';


            element.addEventListener(
                'click',
                function () {

                    revealHuntCard(
                        element,
                        card
                    );

                }
            );


            round.appendChild(
                element
            );

        }
    );


    gameArea.appendChild(round);


    $(round)
        .hide()
        .fadeIn(1000);
}
let huntFound = 0;


function revealHuntCard(
    element,
    card
) {

    if (
        element.classList.contains(
            'revealed'
        )
    ) {
        return;
    }


    element.classList.add(
        'revealed'
    );


    element.innerHTML =
        '<span>' +
        card.icon +
        '</span>';


    /*
     * CORRECT MEMORY
     */

    if (card.special) {

        element.classList.add(
            'special-memory'
        );

        huntFound++;


        showMemoryMessage(
            card.message
        );


        if (huntFound === 3) {

            setTimeout(
                finishRoundTwo,
                1500
            );

        }

    }

    /*
     * DECOY
     */

    else {

        element.classList.add(
            'decoy-memory'
        );


        setTimeout(
            function () {

                element.classList.remove(
                    'revealed',
                    'decoy-memory'
                );

                element.innerHTML =
                    '<span>?</span>';

            },
            900
        );

    }
}
function showMemoryMessage(message) {

    const old =
        document.querySelector(
            '.hunt-message'
        );

    if (old) {
        old.remove();
    }


    const messageBox =
        document.createElement(
            'div'
        );

    messageBox.className =
        'hunt-message';

    messageBox.textContent =
        message;


    document
        .getElementById(
            'game-area'
        )
        .appendChild(
            messageBox
        );


    $(messageBox)
        .hide()
        .fadeIn(500);


    setTimeout(
        function () {

            $(messageBox)
                .fadeOut(
                    500,
                    function () {

                        $(this)
                            .remove();

                    }
                );

        },
        1800
    );
}
function finishRoundTwo() {

    $('.memory-hunt')
        .fadeOut(
            800,
            function () {

                $(this).remove();

            }
        );


    $('.hunt-message')
        .fadeOut(400);


    const complete =
        document.createElement(
            'div'
        );

    complete.className =
        'game-complete';

    complete.innerHTML = `
        <h2>All 3 memories found 💗</h2>

        <p>
            Okay... you're pretty good at this.
        </p>

        <button
            id="start-round-three"
            class="round-next-btn"
        >
            FINAL ROUND →
        </button>
    `;


    document
        .getElementById(
            'game-area'
        )
        .appendChild(
            complete
        );


    $(complete)
        .hide()
        .fadeIn(1000);
}
/* =========================================
   💖 ROUND 3 — CATCH MY HEART
   ========================================= */

$(document).on('click', '#start-round-three', function () {

    $('.game-complete').fadeOut(700, function () {

        $(this).remove();

        startRoundThree();

    });

});


let finalHeart = null;
let heartX = 0;
let heartY = 0;

let heartVX = 0;
let heartVY = 0;

let heartEscapes = 0;
let lastHeartEscape = 0;
let roundThreeRunning = false;


function startRoundThree() {

    const gameArea =
        document.getElementById('game-area');

    if (!gameArea) return;


    /* Reset round */

    roundThreeRunning = true;
    heartEscapes = 0;


    /* Change title */

    $('.game-header h1')
        .fadeOut(300, function () {

            $(this)
                .text('Catch My Heart 💖')
                .fadeIn(700);

        });


    $('.game-instructions')
        .fadeOut(300, function () {

            $(this)
                .text(
                    'Think you can catch the final one? 👀'
                )
                .fadeIn(700);

        });


    /*
     * Create heart
     */

    finalHeart =
        document.createElement('div');

    finalHeart.id =
        'final-game-heart';

    finalHeart.className =
        'final-game-heart';

    finalHeart.innerHTML =
        '💖';


    gameArea.appendChild(
        finalHeart
    );


    /*
     * Start near center
     */

    heartX =
        gameArea.clientWidth / 2 - 45;

    heartY =
        gameArea.clientHeight / 2 - 45;


    heartVX = 0.7;
    heartVY = -0.5;


    updateFinalHeartPosition();


    /*
     * CLICK = WIN
     */

    finalHeart.addEventListener(
        'click',
        catchFinalHeart
    );


    /*
     * Mouse interaction
     */

    gameArea.addEventListener(
        'mousemove',
        scareFinalHeart
    );


    requestAnimationFrame(
        animateFinalHeart
    );
}
function animateFinalHeart() {

    if (
        !roundThreeRunning ||
        !finalHeart
    ) {
        return;
    }


    const gameArea =
        document.getElementById(
            'game-area'
        );

    if (!gameArea) return;


    const heartSize = 90;

    const maxX =
        gameArea.clientWidth -
        heartSize;

    const maxY =
        gameArea.clientHeight -
        heartSize;


    /*
     * Gentle drifting
     */

    heartX += heartVX;
    heartY += heartVY;


    /*
     * Bounce from edges
     */

    if (heartX <= 10) {

        heartX = 10;

        heartVX =
            Math.abs(heartVX);

    }


    if (heartX >= maxX - 10) {

        heartX =
            maxX - 10;

        heartVX =
            -Math.abs(heartVX);

    }


    if (heartY <= 10) {

        heartY = 10;

        heartVY =
            Math.abs(heartVY);

    }


    if (heartY >= maxY - 10) {

        heartY =
            maxY - 10;

        heartVY =
            -Math.abs(heartVY);

    }


    /*
     * Tiny natural variation
     */

    heartVX +=
        (Math.random() - 0.5) *
        0.015;

    heartVY +=
        (Math.random() - 0.5) *
        0.015;


    /*
     * Prevent endless acceleration
     */

    const maxSpeed = 1.25;

    heartVX =
        Math.max(
            -maxSpeed,
            Math.min(
                maxSpeed,
                heartVX
            )
        );

    heartVY =
        Math.max(
            -maxSpeed,
            Math.min(
                maxSpeed,
                heartVY
            )
        );


    updateFinalHeartPosition();


    requestAnimationFrame(
        animateFinalHeart
    );
}


function updateFinalHeartPosition() {

    if (!finalHeart) return;

    finalHeart.style.left =
        heartX + 'px';

    finalHeart.style.top =
        heartY + 'px';
}
function scareFinalHeart(event) {

    if (
        !roundThreeRunning ||
        !finalHeart
    ) {
        return;
    }


    const gameArea =
        document.getElementById(
            'game-area'
        );

    const areaRect =
        gameArea.getBoundingClientRect();


    /*
     * Mouse coordinates inside game
     */

    const mouseX =
        event.clientX -
        areaRect.left;

    const mouseY =
        event.clientY -
        areaRect.top;


    /*
     * Heart center
     */

    const centerX =
        heartX + 45;

    const centerY =
        heartY + 45;


    const dx =
        centerX - mouseX;

    const dy =
        centerY - mouseY;


    const distance =
        Math.sqrt(
            dx * dx +
            dy * dy
        );


    /*
     * It gets easier after escaping
     * several times.
     */

    const scareDistance =
        Math.max(
            75,
            165 -
            heartEscapes * 12
        );
	const now = Date.now();

	if (
	    now - lastHeartEscape <
	    280
	) {
	    return;
	}


    if (distance < scareDistance) {

	    lastHeartEscape = now;

        /*
         * Normalize direction
         */

        const safeDistance =
            Math.max(
                distance,
                1
            );


        const directionX =
            dx / safeDistance;

        const directionY =
            dy / safeDistance;


        /*
         * Escape strength decreases
         * over time.
         */

        const escapePower =
            Math.max(
                2.1,
                5.5 -
                heartEscapes * 0.35
            );


        heartVX +=
            directionX *
            escapePower;

        heartVY +=
            directionY *
            escapePower;


        heartEscapes++;


        /*
         * Little visual reaction
         */

        finalHeart.classList.add(
            'heart-scared'
        );


        setTimeout(function () {

            if (finalHeart) {

                finalHeart.classList.remove(
                    'heart-scared'
                );

            }

        }, 180);

    }
}
function catchFinalHeart() {

    if (
        !roundThreeRunning ||
        !finalHeart
    ) {
        return;
    }


    roundThreeRunning = false;


    const gameArea =
        document.getElementById(
            'game-area'
        );


    /*
     * Stop mouse interaction
     */

    gameArea.removeEventListener(
        'mousemove',
        scareFinalHeart
    );


    /*
     * Heart catch animation
     */

    finalHeart.classList.add(
        'heart-caught'
    );


    /*
     * Screen flash
     */

    const flash =
        document.createElement(
            'div'
        );

    flash.className =
        'heart-catch-flash';

    gameArea.appendChild(
        flash
    );


    setTimeout(function () {

        flash.remove();

    }, 900);


    setTimeout(function () {

        if (finalHeart) {

            finalHeart.remove();
            finalHeart = null;

        }

        finishRoundThree();

    }, 1000);
}
function finishRoundThree() {

    const gameArea =
        document.getElementById(
            'game-area'
        );

    if (!gameArea) return;


    const complete =
        document.createElement(
            'div'
        );

    complete.className =
        'game-complete final-round-complete';


    complete.innerHTML = `
        <div class="final-win-heart">
            💖
        </div>

        <h2>
            You caught it.
        </h2>

        <p>
            Okay... you win ✨
        </p>

        <button
            id="final-surprise"
            class="round-next-btn final-surprise-btn"
        >
            ONE LAST THING ✨
        </button>
    `;


    gameArea.appendChild(
        complete
    );


    $(complete)
        .hide()
        .fadeIn(1200);
}
