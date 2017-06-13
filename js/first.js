var logoElm = document.querySelector(".logo_official");
var navElm = document.querySelector("nav");
function init() { 
	window.addEventListener("scroll", function(e) {
		var distanceY =  window.pageYOffset || document.documentElement.scrollTop;
		if (distanceY > 0) {
			navElm.classList.add("smaller");
		} else {
			if (navElm.classList.contains("smaller")) {
				navElm.classList.remove("smaller");
			}
		} 
	})
}

window.onload = init()