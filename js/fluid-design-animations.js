window.addEventListener('load', function() {
	
	var messageBubbles = document.getElementsByClassName('message-bubble');
	for(var i = 0; i < messageBubbles.length; i++) {
		(function (ii) {
			var m = messageBubbles[ii];

			var t = anime.timeline();
			t.autoplay = false;
			t.add({
				targets: m,
				easing: 'easeOutQuad',
				opacity: 0,
			    offset: -1000,
			    translateX: (m.className.includes('left-message') ? '-' : '') + '500px',
			    duration: 999,
			});
			t.add({
				targets: m,
				easing: 'easeOutQuad',
				opacity: 1,
			    offset: 0,
			    translateX: '0px',
			    duration: 1000,
			});

			$(window).scroll(function() {
		        var x = t.duration * ($(m).position().top - window.innerHeight/2 - $(window).scrollTop())/300;
				t.seek(t.duration-x);
		    });
		})(i)
	}

	var el = document.querySelector('#domNode .el');
	anime({
		targets: '#domNode .el',
		rotate: 15,
		duration: 0,
	});
	anime({
		targets: '#domNode .el2',
		rotate: 15,
		duration: 0,
	});

	document.getElementById('domNode').onmouseover = function () {
		anime({
			targets: '#domNode .el',
			rotate: 45,
			duration: 200,
		});
		anime({
			targets: '#domNode .el2',
			rotate: -15,
			duration: 200,
		});
	}
	document.getElementById('domNode').onmouseout = function () {
		anime({
			targets: '#domNode .el',
			rotate: 15,
			duration: 200,
		});
		anime({
			targets: '#domNode .el2',
			rotate: 15,
			duration: 200,
		});
	}

	var el = document.querySelector('#domNode .el');

	anime({
	  targets: '.header-wave-cover',
	  left: [
	    { value: "-150%" },
	  ],
	  easing: 'linear',
	  duration: 10000,
	  loop: true
	});

	$(window).scroll(function() {
		var top = $('.splash').position().top + $('.splash').height()/2;
		var height = $('.splash').height()/2;
		var bottom = top + height;
		var mid = top + height/2;

		var scrollTop = $(window).scrollTop();
		var scrollMid = $(window).scrollTop() + window.innerHeight/2;
		var scrollBottom = $(window).scrollTop() + window.innerHeight;

		//scrollBottom -= 300
		
		var x = (scrollBottom-top)/height
		basicTimeline.seek(x*basicTimeline.duration)

        //var x = basicTimeline.duration * (() - ($(window).scrollTop()-window.innerHeight))/window.innerHeight;
		//console.log(x)
		//basicTimeline.seek(basicTimeline.duration-x)
    });
	var basicTimeline = anime.timeline();
	basicTimeline.autoplay = false;
	basicTimeline
		  .add({
		    targets: '.wave .wave-rect',
		    d: "m 0,39517 c 0,0 233.40878,6.553 353.89628,5.247 120.4875,-1.306 241.99913,-1.077 362.99958,-1.247 132.01561,-0.185 266.67567,-1.077 396.04714,0.249 C 1222.6229,39522.373 1440,39517 1440,39517 l -2,-100 -1438,2 z",
		    easing: 'easeOutExpo',
		    offset: 0,
		    duration: 300,
		  })
		  .add({
		    targets: '.wave .wave-rect',
		    d: "m 0,39517 c 0,0 233.40878,16.553 353.89628,15.247 120.4875,-1.306 238.91916,-98.292 364.99958,-99.247 134.88325,-1.022 262.67567,98.923 392.04714,100.249 C 1220.6229,39534.373 1440,39517 1440,39517 l -2,-100 -1438,2 z",
		    easing: 'easeOutQuad',
		    offset: 900,
		    duration: 300,
		  })
		  .add({
		    targets: '.wave .wave-rect',
		    d: "m 0,39517 c 0,0 233.40878,6.553 353.89628,5.247 120.4875,-1.306 241.99913,-1.077 362.99958,-1.247 132.01561,-0.185 266.67567,-1.077 396.04714,0.249 C 1222.6229,39522.373 1440,39517 1440,39517 l -2,-100 -1438,2 z",
		    easing: 'easeInQuad',
		    offset: 1200,
		    duration: 300,
		  })

		  .add({
		    targets: '.splash .drop',
		    top: '700',
		    easing: 'linear',
		    offset: 0,
		    duration: 1500,
		  })
		  .add({
		    targets: '.splash .drop',
		    easing: 'easeInExpo',
		    offset: 0,
		    opacity: 1,
		    duration: 200,
		  })

		  .add({
		    targets: '.splash .drops-both',
		    easing: 'linear',
		    offset: 700,
		    opacity: 1,
		    duration: 500,
		  })
		  .add({
		    targets: '.splash .drops-both',
		    easing: 'linear',
		    offset: 1200,
		    opacity: 0,
		    duration: 500,
		  })

		  .add({
		    targets: '.splash .drops-right',
		    easing: 'linear',
		    top: '-50px',
		    left: '50px',
		    offset: 700,
		    duration: 1500,
		  })
		  .add({
		    targets: '.splash .drops-left',
		    easing: 'linear',
		    top: '-50px',
		    left: '-50px',
		    offset: 700,
		    duration: 1500,
		  })

		  .add({
		    targets: '.splash .mask',
		    easing: 'linear',
		    scaleX: 130,
		    scaleY: 130,
		    offset: 700,
		    duration: 1500,
		  })
		  .add({
		    targets: '.splash .mask2',
		    easing: 'linear',
		    scaleX: 130,
		    scaleY: 130,
		    offset: 900,
		    duration: 1500,
		  })

	/*var basicTimeline = anime.timeline();
	basicTimeline.autoplay = false;
		basicTimeline
		  .add({
		    targets: '.mask',
		    scaleX: 1,
		    scaleY: 1,
		    easing: 'easeOutExpo',
		    offset: 0,
		    duration: 200,
		  })
		  .add({
		    targets: '.mask',
		    scaleX: 50,
		    scaleY: 60,
		    easing: 'linear',
		    offset: 200,
		    duration: 500,
		  })
		  .add({
		    targets: '.mask2',
		    scaleX: 1,
		    scaleY: 1,
		    easing: 'linear',
		    offset: 0,
		    duration: 350,
		  })
		  .add({
		    targets: '.mask2',
		    scaleX: 50,
		    scaleY: 60,
		    easing: 'linear',
		    offset: 350,
		    duration: 500,
		  })
		  .add({
		    targets: '.drops-right',
		    translateX: 822,
		    translateY: 184,
		    easing: 'linear',
		    scaleX: 1.6,
		    scaleY: 1.6,
		    offset: 400,
		    duration: 1,
		  })
		  .add({
		    targets: '.drops-right',
		    translateX: 822+50,
		    translateY: 184-50,
		    easing: 'easeOutExpo',
		    scaleX: 1.6,
		    scaleY: 1.6,
		    offset: 401,
		    duration: 1000,
		  })
		  .add({
		    targets: '.drops-right',
		    easing: 'linear',
		    opacity: 1,
		    offset: 400,
		    duration: 200,
		  })
		  .add({
		    targets: '.drops-right',
		    easing: 'linear',
		    opacity: 0,
		    offset: 400+200,
		    duration: 200,
		  })
		  .add({
		    targets: '.drops-left',
		    translateX: 582,
		    translateY: 184,
		    easing: 'linear',
		    scaleX: -1.6,
		    scaleY: 1.6,
		    offset: 400,
		    duration: 1,
		  })
		  .add({
		    targets: '.drops-left',
		    translateX: 582-50,
		    translateY: 184-50,
		    easing: 'easeOutExpo',
		    scaleX: -1.6,
		    scaleY: 1.6,
		    offset: 401,
		    duration: 1000,
		  })
		  .add({
		    targets: '.drops-left',
		    easing: 'linear',
		    opacity: 1,
		    offset: 400,
		    duration: 200,
		  })
		  .add({
		    targets: '.drops-left',
		    easing: 'linear',
		    opacity: 0,
		    offset: 400+200,
		    duration: 200,
		  })
		  .add({
		    targets: '.drop',
		    easing: 'linear',
		    translateX: '-50%',
		    offset: 0,
		    duration: 1,
		  })
		  .add({
		    targets: '.drop',
		    easing: 'linear',
		    translateY: 400,
		    translateX: '-50%',
		    offset: 1,
		    duration: 700,
		  })
		  .add({
		    targets: '.wave .wave-rect',
		    d: "m 0,39517 c 0,0 233.40878,6.553 353.89628,5.247 120.4875,-1.306 241.99913,-1.077 362.99958,-1.247 132.01561,-0.185 266.67567,-1.077 396.04714,0.249 C 1222.6229,39522.373 1440,39517 1440,39517 l -2,-100 -1438,2 z",
		    easing: 'easeOutExpo',
		    offset: 0,
		    duration: 300,
		  })
		  .add({
		    targets: '.wave .wave-rect',
		    d: "m 0,39517 c 0,0 233.40878,16.553 353.89628,15.247 120.4875,-1.306 238.91916,-98.292 364.99958,-99.247 134.88325,-1.022 262.67567,98.923 392.04714,100.249 C 1220.6229,39534.373 1440,39517 1440,39517 l -2,-100 -1438,2 z",
		    easing: 'easeOutQuad',
		    offset: 300,
		    duration: 300,
		  })
		  .add({
		    targets: '.wave .wave-rect',
		    d: "m 0,39517 c 0,0 233.40878,6.553 353.89628,5.247 120.4875,-1.306 241.99913,-1.077 362.99958,-1.247 132.01561,-0.185 266.67567,-1.077 396.04714,0.249 C 1222.6229,39522.373 1440,39517 1440,39517 l -2,-100 -1438,2 z",
		    easing: 'easeInQuad',
		    offset: 600,
		    duration: 300,
		  })*/

});