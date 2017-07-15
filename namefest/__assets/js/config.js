;(function( $ ) {

	"use strict";

    /*-------------------------------
        COWNDOWN TIMER
    --------------------------------*/
    $('.clock-countdown').downCount({
        date: $('.site-config').attr('data-date'),
        offset: +10
    }, function () {
        //callback here if finished
        //alert('YES, done!');
    });

	/*
	-------------------------------------------------------------------------------
	PowerBlog jQuery Plugin
	-------------------------------------------------------------------------------
	*/
	$.fn.PowerBlog = function( options ) {

		if (this.length > 1){
			this.each(function() {
				$(this).PowerBlog(options);
			});
			return this;
		}

		// Defaults
		var settings = $.extend({
			// search_form_selector: '.pb-search-form',
			shortcut_menu: ['m', 'space'],
			shortcut_search: ['s', 'f'],
			shortcut_open_footer: 'mod+up',
			shortcut_close_footer: 'mod+down',
			shortcut_new_comment: 'c',
		}, options );

		// Cache current instance
		var plugin = this;

		//Plugin go!
		var init = function() {
			plugin.build();
		}

		// Build structure
		this.build = function() {

			var self    = false,
			siteOverlay = false;

			var PB = {

				/*
				-------------------------------------------------------------------------------
				Menu
				-------------------------------------------------------------------------------
				*/

				menuIsActive: function(){
					return $('.the-menu-button').hasClass('active-menu-button');
				},

				openMenu: function(){
					$('.main-menu').addClass('active');
					$('.the-menu-button').addClass('active-menu-button');
					$('.wrapper-left').addClass('left-wrapper-down');
					$('.wrapper-right').addClass('right-wrapper-down');
					self.manageMenuList( true );
					self.showCloseBtnOnMenu();
				},

				closeMenu: function(){
					$('.main-menu').addClass('do-inactive').removeClass('active');
					$('.the-menu-button').removeClass('active-menu-button');
					$('.wrapper-left').removeClass('left-wrapper-down');
					$('.wrapper-right').removeClass('right-wrapper-down');
					self.manageMenuList( false );
					self.hideCloseButton();

					self.oboRemoveClass( $('.main-menu'), 'do-inactive', 500 );
				},

				manageMenuList: function( _show_items ){
					var _list = $('.main-menu > li');
					if( _show_items ){
						self.oboAddClass( _list, 'show-menu-li', 70 );
					}
					else{
						self.oboRemoveClass( _list, 'show-menu-li', 70 );
					}
				},

				toggleMenu: function(){
					if( self.menuIsActive() ){
						self.closeMenu();
					}
					else{
						self.openMenu();

						if( self.footerIsActive() ){
							self.closeFooter();
						}
					}
				},

				menuHandle: function(){
					$('.the-menu-button').on( 'click', function(){
						self.toggleMenu();
					});
				},

				/*
				-------------------------------------------------------------------------------
				Footer
				-------------------------------------------------------------------------------
				*/

				footerIsActive: function(){
					return $('.theme-footer').hasClass('show-footer');
				},

				openFooter: function(){
					$('.theme-footer').addClass('show-footer');
					var pointer = $('.footer-pointer');
					self.oboAddClass( pointer, 'out-of-viewport', 1);
					self.oboAddClass( pointer, 'active', 300);
					self.oboRemoveClass( pointer, 'out-of-viewport', 400);
				},

				closeFooter: function(){
					$('.theme-footer').removeClass('show-footer');
					self.oboRemoveClass( $('.footer-pointer'), 'active', 300);
				},

				footerHandle: function(){
					$('.footer-pointer').on( 'click', function(){
						if( self.footerIsActive() ){
							self.closeFooter();
						}
						else{
							self.openFooter();
							if( self.menuIsActive() ){
								self.closeMenu();
							}
						}
					} );
				},

				/*
				-------------------------------------------------------------------------------
				Search form
				-------------------------------------------------------------------------------
				*/
				searchIsActive: function(){
					return $('.pb-search-wrapper').hasClass('activated');
				},

				searchFocusInput: function(){
					$('.pb-search-form input').on({
						focusin: function(){
							$(this).parent('.pb-search-form').addClass('active');
						},
						focusout: function(){
							$(this).parent('.pb-search-form').removeClass('active');
						}
					});
				},

				activateSearchOverflow: function(){
					$('.pb-search-overflow').addClass('active');
				},

				deactivateSearchOverflow: function(){
					self.oboRemoveClass($('.pb-search-overflow'), 'active', 300);
				},

				activateSearch: function(){
					self.oboAddClass( $('.pb-search-wrapper'), 'activated', 300);
				},

				deactivateSearch: function(){
					$('.pb-search-wrapper').removeClass('activated');
				},

				openSearch: function(){
					self.activateSearchOverflow();
					self.activateSearch();
					self.showCloseBtnOnSearch();
					$('.pb-search-wrapper').on('obo_add_complete', function(){
						$('#pb-search-input').focus();
						if( self.menuIsActive() ){
							self.closeMenu();
						}
					});
				},

				closeSearch: function(){
					self.deactivateSearchOverflow();
					self.deactivateSearch();
					self.hideCloseButton();
				},

				searchHandle: function(){
					$('.pb-search-button').on('click', function(){
						self.openSearch();
					});
					$('.pb-search-overflow').on('click', function(){
						self.closeSearch();
					});
				},

				/*
				-------------------------------------------------------------------------------
				Close actions
				-------------------------------------------------------------------------------
				*/

				showCloseBtnOnMenu: function(){
					self.oboAddClass( $('.pb-close'), 'active-on-menu', 300);
				},

				showCloseBtnOnSearch: function(){
					self.oboAddClass( $('.pb-close'), 'active-on-search', 600);
				},

				hideCloseButton: function(){
					$('.pb-close').removeClass('active-on-menu active-on-search');
				},

				closeHandle: function(){
					$('.pb-close').on('click', function(){
						self.closeSearch();
						self.closeMenu();
					});
				},

				/*
				-------------------------------------------------------------------------------
				Open sidebar from left(on mobile)
				-------------------------------------------------------------------------------
				*/
				mobileSidebarIsActive: function(){
					return $('.wrapper-left').hasClass('wrapper-left-slide-in');
				},

				openMobileSidebar: function(){
					$('.sidebar-expander').children('.the-icon').addClass( 'fa-close' ).removeClass( 'fa-ellipsis-v' );
					$('.wrapper-left').addClass('wrapper-left-slide-in');
					$('.wrapper-content-right').css({'overflow': 'hidden'});
				},

				closeMobileSidebar: function(){
					$('.sidebar-expander').children('.the-icon').removeClass( 'fa-close' ).addClass( 'fa-ellipsis-v' );
					$('.wrapper-left').removeClass('wrapper-left-slide-in');
					$('.wrapper-content-right').css({'overflow': ''});
				},

				mobileSidebar: function(){
					$('.sidebar-expander').on( 'click', function(){
						if( $('.wrapper-left').hasClass('wrapper-left-slide-in') ){
							self.closeMobileSidebar();
						}
						else{
							self.openMobileSidebar();
						}
					});
				},

				/*
				-------------------------------------------------------------------------------
				Utils
				-------------------------------------------------------------------------------
				*/
				/**
				 * One By One Add Class
				 *
				 * Add class to each item in a list one by one.
				 *
				 * @param object _list The object with items. For ex. in jquery: $('.menu li')
				 * @param string _the_class The class to be added.
				 * @param integer _interval The interval speed between each item, in miliseconds.
				 * @param bool _remove If false $.removeClass() will be used. Used by oboRemoveClass.
				 * @return void
				 */

				oboAddClass: function( _list, _the_class, _interval, _remove ){
					_interval = (_interval && _interval > -1 ) ? _interval : 100;
					_remove = (_remove) ? true : false;

					var _total_items = _list.length,
					_obo_complete = ( _remove ) ? 'obo_remove_complete' : 'obo_add_complete';

					if( _total_items > 0 ){
						var i = 0;
						var _the_setter = setInterval(function () {
							if( _remove ){
								_list.eq(i).removeClass( _the_class );
							}
							else{
								_list.eq(i).addClass( _the_class );
							}
							i++;
						}, _interval);

						setTimeout(function(){
							clearInterval(_the_setter);
							_list.trigger( _obo_complete );
						}, _interval*_total_items+100);
					}
				},

				//One By One Remove Class
				oboRemoveClass: function( _list, _the_class,  _interval ){
					self.oboAddClass( _list, _the_class, _interval, true );
				},

				addClassLimited: function( _element, _the_class, _time ){
					if( _element.hasClass( _the_class ) )
						return false;

					_element.addClass( _the_class );
					self.oboRemoveClass( _element, _the_class, _time ); //remove the class after `_time`(ms)
				},

				makeContentScrollable: function(){
					$('.wrapper-content-left').perfectScrollbar();
				},

				isEsc: function(evt){
					evt = evt || window.event;
					var isEscape = false;
					if ("key" in evt) {
						isEscape = (evt.key == "Escape" || evt.key == "Esc");
					} else {
						isEscape = (evt.keyCode == 27);
					}
					return isEscape;
				},

				jump: function( _from, _to, _speed ){
					_speed = parseInt(_speed, 10) === _speed ? _speed : 300;

					if( _from ){
						$('body').on('click', _from, function( event ){
							event.preventDefault();
							$('.wrapper-content-right').scrollTo( _to, _speed );
						});
					}
					else{
						$('.wrapper-content-right').scrollTo( _to, _speed );
					}
				},

				//Bool if ajax can be used.
				canAjax: function(){
					var proto = document.location.protocol;
					return ( proto == 'http:' || proto == 'https:' );
				},

				/*
				-------------------------------------------------------------------------------
				Mobile
				-------------------------------------------------------------------------------
				*/
				mobileHeader: function(){
					var lastScrollTop = 0;
					var _the_menu = $('.mobile-header');
					var _h = _the_menu.height();

					$('.wrapper-content-left, .wrapper-content-right').on('scroll', function() {
						var st = $(this).scrollTop();
						if(st > lastScrollTop && st > 50) {
							_the_menu.addClass( 'hide-up' );
						}
						else {
							_the_menu.removeClass( 'hide-up' );
						}
						lastScrollTop = st;
					});

					self.topSpaceBasedOnMobileHeader();
				},

				topSpaceBasedOnMobileHeader: function(){
					var _the_menu = $('.mobile-header');

					if( _the_menu.is(':visible') ){
						var _h = _the_menu.outerHeight();
						$('.wrapper-content-right').css('padding-top', _h);
					}
					else{
						$('.wrapper-content-right').css('padding-top','');
					}
				},

				/*
				-------------------------------------------------------------------------------
				Actions on window resize
				-------------------------------------------------------------------------------
				*/
				onResize: function(){
					$(window).on('resize', function(){
						self.topSpaceBasedOnMobileHeader();
					});
				},

				/*
				-------------------------------------------------------------------------------
				UX
				-------------------------------------------------------------------------------
				*/
				doNotFollowEmptyLinks: function(){
					$('a[href=""], a[href="#"]').on('click', function(event){
						event.preventDefault();
					});
				},

				scrollToIds: function(){
					self.jump( '.submit-comment-link', '#article-comment-form' );
				},

				/*
				-------------------------------------------------------------------------------
				Construct plugin
				-------------------------------------------------------------------------------
				*/
				__construct: function(){
					self = this;

					self.menuHandle();            //Activate menu on handle click
					self.footerHandle();          //Activate footer on handle click
					self.searchFocusInput();      //Add class to search input on focus
					self.searchHandle();          //Activate search form on handle click
					self.closeHandle();           //CLose the activate mod when the "close" button is pressed
					self.makeContentScrollable(); //Make a section scrollable

					// Mobile
					self.mobileHeader();
					self.mobileSidebar();

					// UX
					self.doNotFollowEmptyLinks();
					self.onResize();
					self.scrollToIds();

					return this;
				}

			};

			/*
			-------------------------------------------------------------------------------
			Rock it!
			-------------------------------------------------------------------------------
			*/
			PB.__construct();

		}

		//Plugin go!
		init();
		return this;

	};

})(jQuery);


$( document ).ready( function(){
	$( 'body' ).PowerBlog();
} );