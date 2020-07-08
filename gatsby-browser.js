/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import jQuery from 'jquery'
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
		
		$(".talk-modal-open").click(function (e) { 
			e.preventDefault();
		});
		
		$(".notification-close").click(function() {
			$(".notification-bar").hide();
        });
		
		$('[Link*=\\#]:not([Link=\\#])').click(function() {
			if (window.location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && window.location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {        
			$('html,body').animate({
			scrollTop: target.offset().top-114
			}, 1000);
			return false;
			}
			}
		});
		
		
		

		
		$(".tab_content").hide();

		/* if in tab mode */
		$("ul.tabs li").click(function() {
		  $(".tab_content").hide();
		  var activeTab = $(this).attr("rel"); 
		  $("#"+activeTab).fadeIn();    
		  $("ul.tabs li").removeClass("active");
		  $(".tab_container").addClass("tab_container_active");
		  $(this).addClass("active");
		});
		   
		$(".close-btn").click(function(e) {
		  e.preventDefault();
		  $(".tab_content").hide();
		  $("ul.tabs li").removeClass("active"); 
		  $(".tab_container").removeClass("tab_container_active");  
		});
			
		
		$('input:text').on('touchstart',function(){
		   $(this).focus();
		});
		
		$(".modal-close , .modal-overlay").click(function () { 
			$('.wpcf7-validation-errors').css('display','none');
			$('.wpcf7-mail-sent-ok').css('display','none');
			$('.wpcf7-form-control').each(function(){
				$(this).removeClass('wpcf7-not-valid');
			});
			$('html').removeClass('talk-modal-active'); 
			$('html').removeClass('see-modal-active'); 
        });
		
		
	});
	
	
	
	
	
	
}