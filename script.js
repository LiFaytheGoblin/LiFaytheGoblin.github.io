//Twitter
!function(d,s,id){
	var js, fjs=d.getElementsByTagName(s)[0], p=/^http:/.test(d.location)?'http':'https';
	if(!d.getElementById(id)){
		js=d.createElement(s);
		js.id=id;
		js.src=p+'://platform.twitter.com/widgets.js';
		fjs.parentNode.insertBefore(js,fjs);
	}
}
(document, 'script', 'twitter-wjs');

//jQuery Styling
$(document).ready(function(){
	$(".postcont").hide();
	$(".postlisting").hover(
		function(){
			if(($("body").width()) > 499) {
			var $thispostcont = $(this).find(".postcont");
			$thispostcont.css({"height":($(this).find(".postexerpt").css("height"))});
			$thispostcont.fadeIn("fast");
			$(this).find(".plhead, .postexcerpt, hr").slideUp("fast");
			}
		},
		function(){
			if(($("body").width()) > 499) {
			$(this).removeClass("postcontwithborder");
			$(this).find(".plhead, .postexcerpt, hr").slideDown("fast");
			$(this).find(".postcont").fadeOut("fast");
			}
		}
	);
	$(".license").hover(
		function(){
			if(($("body").width()) > 499) {
			$(".licensetext").fadeIn("slow");
			}
		},
		function() {
			if(($("body").width()) > 499) {
			$(".licensetext").fadeOut("fast");
			}
		}
	);
});