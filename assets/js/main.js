


document.addEventListener('DOMContentLoaded', () => {

	const menuBtns = document.querySelectorAll('.button_menu');
	const drops = document.querySelectorAll('.button-group');

	menuBtns.forEach(el => {
		el.addEventListener('click', (e) => {
			let currentBtn = e.currentTarget;
			let drop = currentBtn.closest('.button_menu_header').querySelector('.button-group');

			menuBtns.forEach(el => {
				if (el !== currentBtn) {
					el.classList.remove('button_menu--active');
				}
			});

			drops.forEach(el => {
				if (el !== drop) {
					el.classList.remove('button-group--active');
				}
			});

			drop.classList.toggle('button-group--active');
			currentBtn.classList.toggle('button_menu--active');
		});
	});

	document.addEventListener('click', (e) => {
		if (!e.target.closest('.myacount_container')) {
			menuBtns.forEach(el => {
				el.classList.remove('button_menu--active');
			});

			drops.forEach(el => {
				el.classList.remove('button-group--active');
			});
		}
	});

});
document.addEventListener('DOMContentLoaded', () => {


	const menuBtns = document.querySelectorAll('.categories');
	const drops = document.querySelectorAll('.categories_menu');

	menuBtns.forEach(el => {

		el.addEventListener('click', (e) => {
			let currentBtn = e.currentTarget;
			let drop = currentBtn.closest('.categories').querySelector('.categories_menu');

			menuBtns.forEach(el => {
				if (el !== currentBtn) {
					el.classList.remove('categories--active');
				}
			});

			drops.forEach(el => {
				if (el !== drop) {
					el.classList.remove('categories_menu--active');
				}
			});

			drop.classList.toggle('categories_menu--active');
			currentBtn.classList.toggle('categories--active');
		});
	});

});
document.addEventListener('DOMContentLoaded', () => {


	const menuBtns = document.querySelectorAll('.hamburger_button');
	const drops = document.querySelectorAll('.nav_bar_menu');

	menuBtns.forEach(el => {

		el.addEventListener('click', (e) => {
			let currentBtn = e.currentTarget;
			let drop = currentBtn.closest('.two_header').querySelector('.nav_bar_menu');

			menuBtns.forEach(el => {
				if (el !== currentBtn) {
					el.classList.remove('hamburger_button--active');
				}
			});

			drops.forEach(el => {
				if (el !== drop) {
					el.classList.remove('nav_bar_menu--active');
				}
			});

			drop.classList.toggle('nav_bar_menu--active');
			currentBtn.classList.toggle('nav_bar_menu--active');
		});
	});

});



document.addEventListener('DOMContentLoaded', () => {


	const menuBtns = document.querySelectorAll('.pages_nav_button');
	const drops = document.querySelectorAll('.pages_nav');

	menuBtns.forEach(el => {

		el.addEventListener('click', (e) => {
			let currentBtn = e.currentTarget;
			let drop = currentBtn.closest('.pages_nav_bar').querySelector('.pages_nav');

			menuBtns.forEach(el => {
				if (el !== currentBtn) {
					el.classList.remove('pages_nav--actives');
				}
			});

			drops.forEach(el => {
				if (el !== drop) {
					el.classList.remove('pages_nav--active');
				}
			});

			drop.classList.toggle('pages_nav--active');
			currentBtn.classList.toggle('pages_nav--active');
		});
	});

});
/*reverse*/






/*shoping_cart counter*/






/*shoping_cart counter*/

/*fashion slider*/
// var indexvalue = 0;

// function SlideShow(){
//     setTimeout(SlideShow, 3000);
//     var x; 
//     const img = document.querySelectorAll(".men_fashion");
//     for(x = 0; x < img.length; x++){
//         img[x].style.display = "none";
//     }
//     indexvalue++;
//     if(indexvalue > img.length){indexvalue = 1}

//     img[indexvalue -1].style.display = "flex"
// }
// SlideShow()


/*fashion slide*/


/*revies*/

const desc = document.getElementById('description');
const info = document.getElementById('information')
const rev = document.getElementById('reviewis')
const desctab = document.getElementById('desc-tab');
const itab = document.getElementById('info-tab');
const revtab = document.getElementById('review-tab');


info.addEventListener("click", () => {
	info.classList.toggle('active');
	desc.classList.remove('active');
	rev.classList.remove('active');
	desctab.style.display = 'none';
	itab.style.display = 'block';
	revtab.style.display = 'none'
});

desc.addEventListener("click", () => {
	info.classList.remove('active');
	desc.classList.add('active');
	rev.classList.remove('active');
	desctab.style.display = 'block';
	itab.style.display = 'none';
	revtab.style.display = 'none';
});

rev.addEventListener("click", () => {
	info.classList.remove('active');
	desc.classList.remove('active');
	rev.classList.add('active');
	desctab.style.display = 'none';
	itab.style.display = 'none';
	revtab.style.display = 'flex';
});


/*scroll*/


$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		$('.back-to-top').fadeIn('slow');
	} else {
		$('.back-to-top').fadeOut('slow');
	}
});
$('.back-to-top').click(function () {
	$('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
	return false;
});


/*counter*/




/*hamburger*/

const hamburger = document.getElementById('hamburger');

function increaseHeight() {
    var div = document.getElementById("multishop");
    var ddmenu2 = document.getElementById("dd-menu");
    if (div.style.height === "217px") {
      div.style.height = "70px";
      ddmenu2.style.display = 'none';
    } else {
      div.style.height = "217px";
    }
  }











