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
	
	
	// home page video resize start

	$(window).on('load', function () {
		
	  var min_w = 300; // minimum video width allowed
	  var vid_w_orig;  // original video dimensions
	  var vid_h_orig;
	  
	  $(function() { // runs after DOM has loaded
		  
		  vid_w_orig = parseInt($('video').attr('width'));
		  vid_h_orig = parseInt($('video').attr('height'));
		  $('#debug').append("<p>DOM loaded</p>");
		  
		  $(window).resize(function () { resizeToCover(); });
		  $(window).trigger('resize');
	  });
	  
		  function resizeToCover() {
			  
			  // set the video viewport to the window size
			  $('#video-viewport').width($(window).width());
			  $('#video-viewport').height($(window).height());
		  
			  // use largest scale factor of horizontal/vertical
			  var scale_h = $(window).width() / vid_w_orig;
			  var scale_v = $(window).height() / vid_h_orig;
			  var scale = scale_h > scale_v ? scale_h : scale_v;
		  
			  // don't allow scaled width < minimum video width
			  if (scale * vid_w_orig < min_w) {scale = min_w / vid_w_orig;};
		  
			  // now scale the video
			  $('video').width(scale * vid_w_orig);
			  $('video').height(scale * vid_h_orig);
			  // and center it by scrolling the video viewport
			  $('#video-viewport').scrollLeft(($('video').width() - $(window).width()) / 2);
			  $('#video-viewport').scrollTop(($('video').height() - $(window).height()) / 2);
			  $('#video-viewport').addClass('video-load');
		  };
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