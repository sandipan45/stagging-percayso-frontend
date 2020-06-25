/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const $ = require("jquery")

export const onInitialClientRender = () => {
	$(document).ready(function () {
		$("body").on('click',".nav-icon", function(){
			$(".menu-wrapper").toggleClass("show-menu");
			$("html").toggleClass("nav-active");
		});

		$(".menu-wrapper li a").click(function () { 
			$('html').removeClass('nav-active'); 
			$(".menu-wrapper").removeClass("show-menu");
		});
		
		$(".notification-close").click(function() {
			$(".notification-bar").hide();
        });
	});
	
	$(window).scroll(function(){
		if ($(window).scrollTop() >= 1) {
			$('.site-header').addClass('fixed-header');
		}
		else {
			$('.site-header').removeClass('fixed-header');
		}
	});
}