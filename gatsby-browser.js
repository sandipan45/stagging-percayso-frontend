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
		
		$('#team-slider').owlCarousel({
		loop: true,
		margin: 0,
		autoplay : false,
		dots: false,
		nav : true,
		responsive:{
			  0:{
				  items:1
        },
        359:{
				  items:2
			  },
        550:{
				  items:3
			  },
			  989:{
				  items:5
			  }
		  }
		});
		
		$('.news-slider').owlCarousel({
		  loop: true,
		  margin: 50,
		  autoplay : true,
		  dots: false,
		  nav : false,
		  responsive:{
			  0:{
				items:1,
				margin: 20
			  },
			  470:{
				items:2,
				margin: 20
			  },
			  767:{
				items:2,
				margin: 60
			  },
			  989:{
				items:3,
				margin: 20,
				autoplay : false,
				touchDrag: false
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
		   
		$(".close-btn").click(function() {
		  $(".tab_content").hide();
		  $("ul.tabs li").removeClass("active"); 
		  $(".tab_container").removeClass("tab_container_active");  
		});
		
		$(".talk-modal-open").click(function () {       
		  $('html').addClass('talk-modal-active');  
		  setTimeout(function(){      
			$('#first-text').trigger('touchstart');   
			$('#first-text').attr('autofocus');        
		  },1000);      
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
	
	$(window).scroll(function(){
		if ($(window).scrollTop() >= 1) {
			$('.site-header').addClass('fixed-header');
		}
		else {
			$('.site-header').removeClass('fixed-header');
		}
	});
}