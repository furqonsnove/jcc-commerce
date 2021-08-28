( function ( $ ) {
	/* It will redirect if anyone clicked on link before ready */
	$( document ).on( 'click', 'a[href*="wcf-next-step"]', function ( e ) {
		e.preventDefault();

		if (
			'undefined' !== typeof cartflows.is_pb_preview &&
			'1' == cartflows.is_pb_preview
		) {
			e.stopPropagation();
			return;
		}

		window.location.href = cartflows.next_step;

		return false;
	} );

	/* Once the link is ready this will work to stop conditional propogation*/
	$( document ).on( 'click', '.wcf-next-step-link', function ( e ) {
		if (
			'undefined' !== typeof cartflows.is_pb_preview &&
			'1' == cartflows.is_pb_preview
		) {
			e.preventDefault();
			e.stopPropagation();
			return false;
		}
	} );

	// Remove css when oceanwp theme is enabled.
	var remove_oceanwp_custom_style = function () {
		if (
			'OceanWP' === cartflows.current_theme &&
			'default' !== cartflows.page_template
		) {
			var style = document.getElementById( 'oceanwp-style-css' );
			if ( null != style ) {
				style.remove();
			}
		}
	};

	var trigger_facebook_events = function () {
		if ( 'enable' === cartflows.fb_active[ 'facebook_pixel_tracking' ] ) {
			//Added offer purchase event script for backward compatibility.Remove this in 1.6.18 update.
			//Start.
			var purchase_event =
				cartflows.fb_active[ 'facebook_pixel_purchase_complete' ];
			if ( 'enable' === purchase_event ) {
				var order_details = $.cookie( 'wcf_order_details' );
				if (
					typeof order_details !== 'undefined' &&
					order_details != '[]'
				) {
					fbq( 'track', 'Purchase', JSON.parse( order_details ) );
					$.removeCookie( 'wcf_order_details', { path: '/' } );
				}
			}
			//End.

			if ( cartflows.fb_active[ 'facebook_pixel_id' ] != '' ) {
				var add_payment_info_event =
					cartflows.fb_active[ 'facebook_pixel_add_payment_info' ];
				if ( 'enable' === add_payment_info_event ) {
					jQuery( 'form.woocommerce-checkout' ).on(
						'submit',
						function () {
							fbq(
								'track',
								'AddPaymentInfo',
								JSON.parse( cartflows.fb_add_payment_info_data )
							);
						}
					);
				}
			}
		}
	};

	var trigger_google_events = function () {
		if (
			cartflows.wcf_ga_active[ 'enable_google_analytics' ] === 'enable'
		) {
			// Remove this offer purchase event script in 1.6.18.
			//Start.
			var ga_purchase_event =
				cartflows.wcf_ga_active[ 'enable_purchase_event' ];
			var ga_cookies = $.cookie( 'wcf_ga_trans_data' );

			if ( typeof ga_cookies !== 'undefined' && ga_cookies != '[]' ) {
				if ( 'enable' === ga_purchase_event ) {
					var ga_order_details = JSON.parse( ga_cookies );
					gtag( 'event', 'purchase', ga_order_details );
					$.removeCookie( 'wcf_ga_trans_data', { path: '/' } );
				}
			}
			//End.

			// Get all required Data
			var ga_add_payment_info =
				cartflows.wcf_ga_active[ 'enable_add_payment_info' ];
			var is_checkout_page = cartflows.is_checkout_page;

			if ( is_checkout_page ) {
				if ( 'enable' === ga_add_payment_info ) {
					jQuery( 'form.woocommerce-checkout' ).on(
						'submit',
						function () {
							gtag(
								'event',
								'add_payment_info',
								JSON.parse( cartflows.add_payment_info_data )
							);
						}
					);
				}
			}
		}
	};

	$( function ( $ ) {
		/* Assign the class & link to specific button */
		var next_links = $( 'a[href*="wcf-next-step"]' );

		if (
			next_links.length > 0 &&
			'undefined' !== typeof cartflows.next_step
		) {
			next_links.addClass( 'wcf-next-step-link' );
			next_links.attr( 'href', cartflows.next_step );
		}
		remove_oceanwp_custom_style();
		if ( '1' !== cartflows.is_pb_preview ) {
			trigger_facebook_events();
			trigger_google_events();
		}
	} );
} )( jQuery );
