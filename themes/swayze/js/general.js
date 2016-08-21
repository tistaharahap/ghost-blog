/**
 * Main JS file for Swayze behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

	$(document).ready(function(){

		if ( $( '.single-header' ).length ) {

			$( 'body' ).on( 'mousewheel', function() {
		        if ( $( document ).scrollTop() >= 300 )  {
		        	$( '.single-header' ).removeClass( 'show' );
		        	$( '.single-header' ).addClass( 'hide' );
		        } // End If Statement
		        if ( ( $( document ).scrollTop() < 300 ) && ( $( document ).scrollTop() > 0 ) && ( $( '.single-header' ).hasClass( 'hide' ) ) )  {
		        	$( '.single-header' ).removeClass( 'hide' );
		        	$( '.single-header' ).addClass( 'show' );
		        } // End If Statement
		    });

		} // End If Statement

		var $codes = $('pre code');
		if($codes.length > 0) {
			console.log('Got Codes!');
		}

		var $codes = $('pre code');
		if($codes.length > 0) {
			var url = 'https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js?skin=desert';
			$codes.addClass('prettyprint');
			$codes.parent().css({background: '#444'});

			var pp = document.createElement('script');
			pp.type = 'text/javascript';
			pp.async = true;
			pp.src = url;

			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(pp, s);
		}

	});

}(jQuery));
