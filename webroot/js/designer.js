// MD5 Digest: 9df2f05fa1df800480b240d25d1f25c6
// Cached: Mon, Feb 25 2019 01:00:57pm EST (Epoch: 1551117657)

// Copyright (c) 2019 LogoSportswear.com -  All Rights Reserved

var LSW = {
	config: {},
	date: '',
	sites: {
		logo: {
			d: 'logosoftwear',
			p: 'www.logosoftwear.com'
		},
		team: {
			d: 'teamsportswear',
			p: 'www.teamsportswear.com'
		},
		get: function(site, struct) {
			return (struct ? (window.location.protocol + '//') : '') + LSW.sites[site][window.location.host == LSW.sites[site].d ? 'd' : 'p'];
		}
	},
	_$: function(elem) {
		return document.getElementById(elem);
	},
	init: function(config) {
		if(config && typeof(config) == 'object') {
			this.config = config;
		}
		
		// jquery
		jQuery.noConflict();
		
		// do init stuff in this library
		jQuery(document).ready(function() {
			LSW.browser.init();
			//LSW.livechat.init();
			LSW.params.init();
			LSW.mobile.init();
			LSW.retina.init();
			LSW.minicart.init();
			LSW.ping.init();
			LSW.events.init();
		});
		
		// call modernizr
		try {
			window.Modernizr.load();
		} catch(e) {}
		
		// google analytics event tracking (in case of timeout)
		window._gaq = window._gaq || {
			push: function() {
				return;
			}
		};
		
		// fix console object if browser does not support it
		window.console = window.console || {
			dir: function(object) { return object; },
			log: function(message) { return message; }
		};
	},
	browser: {
		browser: "",
	
		init: function() {
			this.browser = this.quirks.init(window.navigator.userAgent);
			
			jQuery("body").addClass(LSW.browser.browser);
			
			var pixel_ratio = typeof(window.devicePixelRatio) == 'number' && window.devicePixelRatio > 0 ? window.devicePixelRatio : 1;
			var image_pixel_ratio = 1;
			
			// determine appropriate pixel ratio
			if(pixel_ratio <= 1.5) {
				image_pixel_ratio = 1;
			} else if(window.devicePixelRatio <= 2) {
				image_pixel_ratio = 2;
			} else if(window.devicePixelRatio >= 3) {
				image_pixel_ratio = 3;
			}
			
			if(!jQuery("body").hasClass(image_pixel_ratio + 'x')) {
				jQuery("body").removeClass('dpi-1x dpi-2x dpi-3x').addClass('dpi-' + image_pixel_ratio + 'x');
			}
			
			if(window.innerWidth < 375) {
				jQuery("body").addClass("narrow");
			} else {
				jQuery("body").removeClass("narrow");
			}
			
			jQuery(window).bind('resize', function() {
				if(window.innerWidth < 375) {
					jQuery("body").addClass("narrow");
				} else {
					jQuery("body").removeClass("narrow");
				}
			});
		},
		
		quirks: {
			browser: "",
			init: function(user_agent) {
				if(user_agent.indexOf("MSIE") > -1 || user_agent.indexOf("Trident") > -1) {
					this.ie();
				} else if(user_agent.indexOf("iPad") > -1) {
					this.ipad();
				} else if(user_agent.indexOf("iPhone") > -1) {
					this.iphone();
				} else if(user_agent.indexOf("Edge") > -1) {
					this.edge();
				} else if(user_agent.indexOf("Firefox") > -1) {
					this.firefox();
				} else if(user_agent.indexOf("Chrome") > -1) {
					this.chrome();
				} else if(user_agent.indexOf("Safari") > -1) {
					this.safari();
				} else if(user_agent.indexOf("Opera") > -1) {
					this.opera();
				} else if(user_agent.indexOf("Silk") > -1) {
					this.silk();
				} else {
					this.other(user_agent);
				}
				
				return this.browser;
			},
			edge: function() {
				this.browser = 'edge';
			},
			ie: function() {
				this.browser = 'ie';
				
				if(/MSIE (5|6|7|8|9)/.test(window.navigator.userAgent)) {
					jQuery("body").addClass("ie-legacy");
				}
			},
			firefox: function() {
				this.browser = 'firefox';
				
				// fixes quirks in firefox where frames incorrectly cache
				if(window.navigator.userAgent.match(/(Firefox\/)([0-1][0-3]?|[2-9])\./gi)) {
					setTimeout(function() {
						if(LSW._$("minicart_iframe")) {
							LSW._$("minicart_iframe").src = '/global_files/remote_scripts/minicart.php?ts=' + this.epoch() + '';
						}
						if(LSW._$("sotm_sel")) {
							LSW._$("sotm_sel").src = '/global_files/includes_misc/sale-of-the-month.php?frmd=1&sotm_type=logo&ts=' + this.epoch() + '';
						}
					}, 0);
				}
			},
			chrome: function() {
				this.browser = 'chrome';
			},
			safari: function() {
				this.browser = 'safari';
			},
			opera: function() {
				this.browser = 'opera';
			},
			ipad: function() {
				this.browser = 'ipad';
			},
			iphone: function() {
				this.browser = 'iphone';
			},
			silk: function() {
				this.browser = 'silk';
			},
			other: function(user_agent) {
				this.browser = 'other';
			}
		}
	},
	complete: function() {
		this.queue.run('page:load');
	},
	date: function() {
		return new Date();
	},
	debouncer: {
		events: {
			callbacks: {
				close: function() {},
				fire: function() {},
				hide: function() {},
				show: function() {}
			},
			clock: function() {},
			close: function() {
				LSW.debouncer.events.callbacks.close();
				
				jQuery(LSW.debouncer.settings.selector).hide();
				
				LSW.debouncer.visible = false;
				
				LSW.debouncer.events.callbacks.hide();
				LSW.debouncer.track('Close');
			},
			expiration: function() {
				return new Date(LSW.date().getTime() + (LSW.debouncer.settings.cookie.expiration * 24 * 60 * 60 * 1000));
			},
			fire: function() {				
				LSW.defer.image('debouncer');
				
				LSW.debouncer.type();
				
				LSW.debouncer.events.callbacks.fire();
				LSW.debouncer.track('Show');
				
				LSW.debouncer.visible = true;
				
				jQuery(LSW.debouncer.settings.selector).fadeIn(250);
				
				if(LSW.debouncer.settings.cookie.enforced) {
					LSW.cookie.set(LSW.debouncer.settings.cookie.name, 1, LSW.debouncer.events.expiration());
				}
				
				LSW.debouncer.events.callbacks.show();
			}
		},
		
		settings: {
			cookie: {
				enforced: true,
				expiration: 1,
				name: ''
			},
			debug: false,
			force: false,
			selector: '.debouncer',
			tracking: '',
			type: false
		},
		
		enabled: true,
		intent: false,
		visible: false,
		
		clock: {
			increment: 100,
			time: {
				current: 0,
				previous: 0,
				movement: 0
			}
		},
		
		quadrants: {
			patterns: {
				a: [0, 1, 0],
				b: [2, 1, 0],
				c: [0, 0, 0]
			},
			
			position: {
				left: 0,
				right: 0
			},
			
			regions: [0, 0, 0],
			
			screen: {
				height: 0, 
				width: 0
			},
			
			size: 0.33
		},
		
		tracking: {
			distances: [],
			
			footprints: [0, 0, 0],
			
			locations: {
				current: 0,
				previous: 0
			},
			
			mouse: {
				x: 0,
				y: 0
			},
			
			timings: [],
			
			velocity: {
				average: 0,
				floor: 500,
			}
		},
		
		// debug mode
		debug: function(bool) {
			this.settings.debug = bool;
		},
		
		// initiate the debouncer
		init: function(obj) {
			if(window.navigator.userAgent.match(/MSIE [678]/i)) {
				return;
			}
			
			// sets cookie name
			if(obj && obj.cookie !== 'undefined' && typeof(obj.cookie) == 'string') {
				this.settings.cookie.name = obj.cookie;
			}
			
			// sets cookie expiration
			if(obj && obj.expiration !== 'undefined' && typeof(obj.expiration) == 'number') {
				this.settings.cookie.expiration = Math.min(1, obj.expiration);
			}
			
			// forces the designer to show after init
			if(obj && obj.force !== 'undefined' && typeof(obj.force) == 'boolean') {
				this.settings.force = !!obj.force;
			}
			
			// sets the selector for the debouncer
			if(obj && obj.selector !== 'undefined' && typeof(obj.selector) == 'string') {
				this.settings.selector = obj.selector;
			}
			
			// sets utm tracking
			if(obj && obj.tracking !== 'undefined' && typeof(obj.tracking) == 'string') {
				this.settings.tracking = obj.tracking;
			}

			// defined pre-callbacks
			if(obj && obj.type !== 'undefined' && typeof(obj.type) == 'string') {
				this.settings.type = obj.type;
			}
			
			// handle callbacks
			if(obj && obj.close !== 'undefined' && typeof(obj.close) == 'function') {
				this.events.callbacks.close = obj.close;
			}
			
			if(obj && obj.fire !== 'undefined' && typeof(obj.fire) == 'function') {
				this.events.callbacks.fire = obj.fire;
			}
			
			if(obj && obj.hide !== 'undefined' && typeof(obj.hide) == 'function') {
				this.events.callbacks.hide = obj.hide;
			}
			
			if(obj && obj.show !== 'undefined' && typeof(obj.show) == 'function') {
				this.events.callbacks.show = obj.show;
			}
			
			// define boundaries
			this.quadrants.position.left = Math.ceil(window.innerWidth * this.quadrants.size);
			this.quadrants.position.right = Math.ceil(window.innerWidth - this.quadrants.position.left);
			
			// define height
			this.quadrants.screen.height = (
				document.body.scrollHeight || 
				document.body.clientHeight || 
				document.body.offsetHeight || 
				0
			);
			
			// attach events
			this.attach(window, 'mousemove', function(e) {
				LSW.debouncer.update(e, false);
			}, false);
			
			this.attach(window, 'mouseout', function(e) {
				LSW.debouncer.update(e, true);
			}, false);
			
			this.attach(window, 'keydown', function(e) {
				if(LSW.debouncer.visible && e.keyCode == 27) {
					LSW.debouncer.events.close();
				}
			}, false);
			
			// turn the clock on
			this.events.clock = setInterval(function() {
				LSW.debouncer.poll();
			}, LSW.debouncer.clock.increment);
			
			// build triptych
			this.quadrants.regions[0] = Math.round(this.quadrants.screen.height * 0.25);
			this.quadrants.regions[1] = this.quadrants.regions[0] * 2;
			this.quadrants.regions[2] = this.quadrants.screen.height;
			
			// is this forced?
			if(this.settings.force) {
				if(jQuery(window).width() > 640) {
					this.events.fire();
				}
			}
		},
		
		// event attachment
		attach: function(w, e, f, p) {
			if(w.addEventListener) {
				w.addEventListener(e, f, p);
			} else if(w.attachEvent) {
				w.attachEvent(e, f);
			}
			
			return false;
		},
		
		// close event
		close: function() {
			if(this.events.close && typeof(this.events.close) == 'function') {
				this.events.close();
				this.enabled = false;
			}
		},
		
		// array comparison
		compare: function(a, b) {
			var i = a.length;
			
			if(i != b.length) {
				return false;
			}
			
			while(i--) {
				if(a[i] !== b[i]) {
					return false;
				}
			}
			
			return true;
		},
		
		// fire your event
		fire: function() {
			if(!this.jailed()) {
				this.events.fire();
				this.enabled = false;
			}
		},
		
		// did they intend on leaving
		intention: function(e) {
			var node = e ? (e.relatedTarget || e.toTarget) : false;
			
			var directionality = (
				this.compare(this.tracking.footprints, this.quadrants.patterns.a) || 
				this.compare(this.tracking.footprints, this.quadrants.patterns.b) || 
				this.compare(this.tracking.footprints, this.quadrants.patterns.c)
			);
			
			var position = (
				this.tracking.mouse.x <= this.quadrants.position.left || 
				this.tracking.mouse.x >= this.quadrants.position.right
			);
			
			var velocity = this.tracking.velocity.average >= this.tracking.velocity.floor;
			
			var target = (
				(node && node.nodeName == "HTML") || 
				(e && e.clientY < 5)
			);
			
			return (
				target && 
				directionality && 
				position && 
				velocity
			);
		},
		
		// checks whether or not a user is a bounce candidate
		jailed: function(reason) {
			return (!this.enabled || (
				this.settings.cookie.enforced && LSW.cookie.get(this.settings.cookie.name)
			) || jQuery(window).width() <= 640 || this.settings.force) ? true : false;
		},
		
		// checks all the data points for a bounce
		poll: function() {
			this.tracking.locations.previous = this.tracking.locations.current;
			this.tracking.locations.current = this.tracking.mouse.y;
			
			this.clock.time.previous = this.clock.time.current;
			this.clock.time.current += this.clock.increment;
			
			if(this.tracking.locations.previous != this.tracking.mouse.y) {
				this.tracking.distances.push(Math.abs(this.tracking.locations.current - this.tracking.locations.previous));
				
				if(this.tracking.distances.length > 20) {
					this.tracking.distances.shift();
				}
				
				this.tracking.timings.push(Math.abs(this.clock.time.current - this.clock.time.previous));
				
				if(this.tracking.timings.length > 20) {
					this.tracking.timings.shift();
				}
				
				this.tracking.velocity.average = this.velocity();
				this.intent = this.intention(false);
			} else {
				this.tracking.timings = new Array();
				this.tracking.distances = new Array();
			}
			
			if(this.off == false && this.intention(false)) {
				this.fire();
			}
		},
		
		update: function(e, o) {
			if(!o) {
				this.tracking.mouse.x = e.pageX;
				this.tracking.mouse.y = e.pageY;
				
				var region = 0;
				
				if(this.tracking.mouse.y <= this.quadrants.regions[0]) {
					region = 0;
				} else if(this.tracking.mouse.y > this.quadrants.regions[1]) {
					region = 2;
				} else {
					region = 1;
				}
				
				if(this.tracking.footprints[2] != region) {
					this.tracking.footprints.shift();
					this.tracking.footprints.push(region);
				}
			}
			
			if(this.enabled == true && this.intention(o ? e : false)) {
				this.fire();
			}
		},
		
		velocity: function() {
			var distance = 0;
			var time = 0;
			
			for(i = 0; i < this.tracking.timings.length; i++) {
				distance += this.tracking.distances[i];
				time += this.tracking.timings[i];
			}
			
			this.clock.time.movement = time;
			
			return (distance / (time / 1000));
		},
		
		track: function(action) {
			if(_gaq) {
				_gaq.push(['_trackEvent', 'BouncePUB', LSW.debouncer.settings.tracking, action]);
			}
		},
		
		type: function() {
			if(typeof(this.types[this.settings.type]) == 'function') {
				this.types[this.settings.type]();
			}
		},
		
		// types
		types: {
			flags: {
				designer: false
			},
			designer: function() {
				if(!this.flags.designer) {
					try {
						var has_design = false;
						var online_designer_reference = false;
						var online_designer_type = false;
						
						// set up tracking
						LSW.debouncer.settings.tracking = 'KeepDesigning';
						
						// determine designer type
						if(typeof(jQuery('#od-frm')) !== 'undefined' && typeof(jQuery('#od-frm')[0]) !== 'undefined') {
							online_designer_type = 'old';
						}
						
						if(typeof(jQuery('#designer')) !== 'undefined' && typeof(OnlineDesigner) !== 'undefined') {
							online_designer_type = 'new';
						}
						
						// build a reference to the online designer
						if(online_designer_type !== false) {
							if(online_designer_type == 'old') {
								online_designer_reference = jQuery('#od-frm')[0].contentWindow;
							} else {
								online_designer_reference = OnlineDesigner;
							}
							
							// check for a design
							if(online_designer_type == 'old') {
								has_design = online_designer_reference.hasDesign();
							} else {
								has_design = online_designer_reference.has_design();
							}
							
							// in the designer and have a design? save it.
							if(has_design) {
								if(online_designer_type == 'old') {
									online_designer_reference.save_design(0, 2, false, false, null);
								} else {
									online_designer_reference.wait_for_save( function() {
										online_designer_reference.save_design({
											silent: true
										});
									},1);
								}
							}
						}
						
						window.setTimeout(function() {
							jQuery.ajax({
								type: 'GET',
								url: '/global_files/remote_scripts/module.keep_designing_ajax.php?debouncer=1',
								cache: false,
								success: function(r) {
									var results = r.split("|");
									
									// from result data
									var hash = results[0],
										placement = results[1],
										cpid = results[2],
										thumbnail = results[3];
									
									// handle url
									var url = '//' + ((window.location.host == "teamsportswear") ? 'logosoftwear' : 'www.logosoftwear.com');
									
									// got thumbnail data? show it.
									if(hash && placement && cpid && thumbnail) {
										jQuery("" + LSW.debouncer.settings.selector + ".designer .thumbnail img").attr('data-img', thumbnail);
										
										// rebind the url
										jQuery("" + LSW.debouncer.settings.selector + ".designer .button img, " + LSW.debouncer.settings.selector + ".designer .thumbnail img").unbind('click');
										jQuery("" + LSW.debouncer.settings.selector + ".designer .button img, " + LSW.debouncer.settings.selector + ".designer .thumbnail img").bind('click', function() {
											if(has_design) {
												LSW.debouncer.close();
											} else {
												window.location.href = url + '/design-studio-3.0?design_code=' + hash + '&save_as_new=1';
											}
										});
										
										// rebind to email
										jQuery("" + LSW.debouncer.settings.selector + ".designer .ego").html("No thanks &mdash; I'll finish working on this later");
										jQuery("" + LSW.debouncer.settings.selector + ".designer .ego").bind('click', function() {
											LSW.debouncer.track('Email');
											
											if(online_designer_type == 'old') {
												online_designer_reference.popupHandler('email_my_design', '/email_my_cart.php?source=designer&des='+hash);
											} else if(online_designer_type == 'new') {
												online_designer_reference.email_my_design();
											} else {
												LSW.debouncer.close();
											}
										});
										
										// we're in the designer
										if(online_designer_type !== false) {
											LSW.debouncer.settings.tracking = 'KeepDesigning-Designer';
										} else {
											LSW.debouncer.settings.tracking = 'KeepDesigning-Site';
										}
										
										// move it over before we actually show it
										jQuery("" + LSW.debouncer.settings.selector + ".designer").removeClass('default').addClass('design');
										
										// show the image
										LSW.defer.image('debouncer');
									}
								}
							});
						}, online_designer_reference && has_design ? 200 : 0);
					
						LSW.debouncer.types.flags.designer = true;
					} catch(e) {}
				}
			}
		}
	},
	defer: {
		image: function(name) {
			jQuery("img[data-defer-until='" + name + "']").each(function() {
				jQuery(this).data('defer-until', 'now').data('deferred-from', name).trigger('blur');
			});
		}
	},
	epoch: function() {
		return Math.floor(this.date().getTime() / 1000);
	},
	livechat: {
		element: 'live-chat-bubble',
		ticker: false,
		vars: {
			cart_url: false,
			customer_id: false,
			design_hash: false
		},
		init: function() {
			if(typeof(_SITECONFIG) == 'object' && _SITECONFIG.live_chat_open_until) {
				this.enable();
			}
		},
		chat: function() {
			var popup_location = {
				left: window.innerWidth - 640,
				top: window.innerHeight - 590
			};
			
			window.live_chat_popup = window.open('about:blank','lvcht','width=530,height=520,resizable=yes,scrollbars=no,top=' + popup_location.top + ',left=' + popup_location.left + '');
			
			window.LC_API = window.LC_API || {};
			
			if(typeof(window.__lc) != 'object') {
				window.__lc = window.__lc || {};
				window.__lc.license = 1048764;
				
				window.__lc.params = [
					{ name: 'cart_url', value: (LSW.livechat.vars.cart_url || "") },
					{ name: 'customer_id', value: (LSW.livechat.vars.customer_id || "") },
					{ name: 'design_hash', value: (LSW.livechat.vars.design_hash || "") },
					{ name: 'url', value: window.location.toString() }
				];
				
				(function() {
					var lc = document.createElement('script'); lc.type = 'text/javascript'; lc.async = true;
					lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';
					var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);
				})();
			}
			
			jQuery.ajax({
				url: '/global_files/remote_scripts/live_chat_customer_info.php',
				type: 'POST',
				data: 'uid=' + _SITECONFIG.uid + '',
				dataType: 'json',
				async: false,
				complete: function(r) {
					if(r && r.status && r.status == 'ok') {
						LSW.livechat.set(r);
					}
					
					window.poll_for_live_chat_itr = 0;
					window.poll_for_live_chat_api = setInterval(function() {
						window.poll_for_live_chat_itr++;
						
						if(typeof(window.LC_API.get_visitor_id) == 'function' || window.poll_for_live_chat_itr >= 8) {
							if(typeof(window.LC_API.get_visitor_id) == 'function') {
								window.live_chat_popup.location.href = 'https://secure.livechatinc.com/licence/1048764/open_chat.cgi?groups=0&session_id=' + window.LC_API.get_visitor_id() + '';
							} else {
								window.live_chat_popup.location.href = 'https://secure.livechatinc.com/licence/1048764/open_chat.cgi?groups=0';
							}
							
							clearInterval(window.poll_for_live_chat_api);
						}
					}, 250);	
				}
			});
		},
		disable: function() {
			if(jQuery("#" + this.element).length == 0) {
				jQuery("#" + this.element + "").remove();
			
				//this.timer(false);
			}
		},
		enable: function() {
			if(jQuery("#" + this.element).length == 0) {
				jQuery("body").append('<a href="javascript:;" onclick="javascript:void(LSW.livechat.chat());" id="' + this.element + '">&#xf27a;</a>');
				
				//this.timer(true);
			}
		},
		set: function(vars) {
			for(k in vars) {
				if(k != 'status' && this.vars[k]) {
					this.vars[k] = vars[k];
				}
			}
		},
		timer: function(a) {
			if(a) {
				this.ticker = setInterval(function() {
					if(LSW.epoch() >= _SITECONFIG.live_chat_open_until) {
						LSW.livechat.disable();
					}
				}, 1000);
			} else {
				clearInterval(LSW.livechat.ticker);
				
				this.ticker = false;
			}
		}
		
	},
	minicart: {
		init: function() {
			if(typeof(jQuery.browser) == 'object' && typeof(jQuery.browser.msie) == 'boolean' && !isNaN(jQuery.browser.version * 1) && (jQuery.browser.version * 1) <= 9) {
				jQuery("header .badge").hide();
			} else {
				try {
					var host = window.location.host;
					
					if(host.indexOf("logosoftwear") > -1 || host.indexOf('logosportswear') > -1 || host.indexOf("teamsportswear") > -1) {
						host = (host == 'logosoftwear' || host == 'teamsportswear') ? 'logosoftwear' : 'www.logosoftwear.com';
					}
					
					var mc = document.createElement('script');
						mc.type = 'text/javascript';
						mc.async = true;
						mc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + host + '/global_files/remote_scripts/minicart-2016.js';
					var s = document.getElementsByTagName('script')[0];
						s.parentNode.insertBefore(mc, s);
				} catch(e) {
					LSW.minicart.hide();
				}
			}
		},
		update: function(num) {
			var site = ((window.location.host == 'logosoftwear' || window.location.host == 'teamsportswear') ? 'logosoftwear' : 'www.logosoftwear.com');
			
			if( typeof num !== "undefined" && typeof num.updateType !== "undefined" ) {
				if( num.updateType === "username" ) {
					var content = ( num.content && "Hi " + num.content + "! " ) || "My Account";
					if( num.element && num.element[0] && typeof num.element[0] !== "undefined" ) {
						num.element[0].textContent = content;
						num.element.after('<small><a href="https://' + LSW.sites.get('logo') + '/account/logout">(Logout)</a></small>');
					}
				}
			} else {
				if( num === 0 ) {
					jQuery("header .badge").hide();
				} else {
					jQuery("header .badge").parent().addClass("badged");
					jQuery("header .badge").html(num).show();
					jQuery("header .triggers .cart").addClass("badged");
				}
				
				jQuery("nav#megamenu ul.mobile li a.cart span").html(num);
			}
		}
	},
	mobile: {
		detected: { 
			'mobile': false, 
			'tablet': false,
			'responsive': false,
			'device': false,
			'started': false
		},
		
		devices: [
			{ 'name': 'iPad', 'pattern': /ipad/gi, 'os': 'iOS', 'tablet': true, 'phone': false },
			{ 'name': 'iPhone', 'pattern': /iphone/gi, 'os': 'iOS', 'tablet': false, 'phone': true },
			{ 'name': 'iPod Touch', 'pattern': /ipod/gi, 'os': 'iOS', 'tablet': false, 'phone': false },
			{ 'name': 'Android', 'pattern': /android (1|2|4)/gi, 'os': 'Android', 'tablet': false, 'phone': 'maybe' },
			{ 'name': 'Android Tablet', 'pattern': /(android 3)|sch-i800|(gt-(p|n))|kindle fire|(nexus (7|10))|transformer/gi, 'os': 'Android', 'tablet': true, 'phone': false },
			{ 'name': 'BlackBerry', 'pattern': /blackberry|rim/gi, 'os': 'BlackBerry', 'tablet': false, 'phone': true },
			{ 'name': 'BlackBerry 10', 'pattern': /bb10/gi, 'os': 'BlackBerry', 'tablet': false, 'phone': true },
			{ 'name': 'BlackBerry Tablet', 'pattern': /rim tablet os/gi, 'os': 'BlackBerry', 'tablet': true, 'phone': false },
			{ 'name': 'Windows Phone', 'pattern': /iemobile|windows phone|zune/gi, 'os': 'Windows Phone', 'tablet': false, 'phone': true },
			{ 'name': 'Windows RT Tablet', 'pattern': /(MSIE 10)(.*)(Windows NT 6.2; ARM)/gi, 'os': 'Windows RT', 'tablet': true, 'phone': false },
			{ 'name': 'webOS', 'pattern': /webos|hpwOS/gi, 'os': 'webOS', 'tablet': false, 'phone': 'maybe' },
			{ 'name': 'Google Chrome Mobile', 'pattern': /Mobile Safari/gi, 'os': 'Unknown', 'tablet': false, 'phone': 'maybe' },
			{ 'name': 'Google Chrome Tablet', 'pattern': /(Android)((?!.*Mobile).*)(Safari)/gi, 'os': 'Unknown', 'tablet': true, 'phone': false },
			{ 'name': 'Bada', 'pattern': /bada/gi, 'os': 'Bada', 'tablet': false, 'phone': true }
		],
		
		init: function(obj) {
			this.detected.started = true;
			
			var defaults = { override: obj && typeof obj.override !== 'undefined' ? obj.override : false };
			var user_agent = defaults.override ? defaults.override : window.navigator.userAgent;
			
			for(k in this.devices) {
				if(user_agent.match(this.devices[k].pattern)) {
					if(!this.detected.mobile) this.detected.mobile = true;
					if(this.devices[k].tablet) this.detected.tablet = true;
					this.detected.device = this.devices[k];
					this.detected.device.ua = user_agent;
				}
				
				if(!this.detected && user_agent.match(/touch|phone/)) this.detected = true;
				if(!this.detected.tablet && user_agent.match(/tablet/gi)) this.detected.tablet = true;
				if(!this.detected.device && (!this.detected || !this.detected.tablet)) {
					this.detected.device = {
						'name': 'Unknown Device',
						'pattern': /.*/gi,
						'os': 'Unknown',
						'phone': (function(w) { return w.innerWidth < 640 })(window),
						'tablet': false,
						'ua': user_agent,
					}
				}
			}
			
			if(this.detected && this.detected.device && this.detected.device.name) {
				jQuery("body").addClass("" + this.detected.device.name.toLowerCase().replace(" ", "-") + "");
			}
			
			if(this.detected && this.detected.device && this.detected.device.phone) {
				jQuery("body").addClass("phone");
			}
			
			if(this.detected && this.detected.device && this.detected.device.tablet) {
				jQuery("body").addClass("tablet");
			}
			
			this.detected.responsive = window.innerWidth <= 640 ? true : false;
			
			jQuery("body").removeClass("responsive").removeClass("nonresponsive");
			
			if(this.detected && this.detected.device && (this.detected.device.phone || this.detected.responsive)) {
				jQuery("body").addClass("responsive");
			} else {
				jQuery("body").addClass("nonresponsive");
			}
			
			return this.detected || this.detected.tablet || this.detected.responsive ? this.detected : false;
		}
	},
	ping: {
		init: function() {
			if(typeof(_lswPingQ) == 'object') {
				jQuery.ajax({
					url: '/global_files/remote_scripts/ping.php',
					type: 'GET',
					data: LSW.params.construct(_lswPingQ),
					cache: false
				});
			}
		}
	},
	retina: {
		init: function() {	
			// fix the images
			jQuery(document).ready(function() {
				jQuery("img[data-img]").live('load', function() {
					var d = jQuery(this).parent().data('index');
					
					if(typeof(window.retina_image_already_tried_reload[d]) !== 'boolean') {
						if(jQuery(this).naturalHeight <= 0 && jQuery(this).naturalWidth <= 0) {
							jQuery(this).trigger('blur');
						}
					}
				});
				
				jQuery("img[data-img]").live('blur', function(obj) {
					LSW.mobile.init();
					
					var pixel_ratio = typeof(window.devicePixelRatio) == 'number' && window.devicePixelRatio > 0 ? window.devicePixelRatio : 1;
					var image_pixel_ratio = 1;
					
					// determine appropriate pixel ratio
					if(pixel_ratio <= 1.5) {
						image_pixel_ratio = 1;
					} else if(window.devicePixelRatio <= 2) {
						image_pixel_ratio = 2;
					} else if(window.devicePixelRatio >= 3) {
						image_pixel_ratio = 3;
					}
					
					var state_of_device = window.innerWidth <= 640 ? 'mobile' : 'desktop';
					
					if(!jQuery(this).data('defer-until') || jQuery(this).data('defer-until') == 'now' || (state_of_device == jQuery(this).data('defer-until'))) {
						var host = "";
						
						if(jQuery(this).attr('src').indexOf('blank.') > -1) {
							if(/(http\:)?(\/\/)?cdn(\d+)?\.lsw\.mx/.test(jQuery(this).attr('src'))) {
								host = jQuery(this).attr('src').match(/(http\:)?(\/\/)?cdn(\d+)?\.lsw\.mx/);
								host = host[0];
								
								if(!host.match(/(https?\:)?\/\//)) {
									if(window.location.protocol && window.location.protocol == 'https:') {
										host = "https://" + host;
									} else {
										host = "http://" + host;
									}
								}
							}
							
							if(window.location && window.location.protocol && window.location.protocol == 'https:') {
								jQuery(this).attr('src', jQuery(this).attr('data-img').replace("*", image_pixel_ratio));
							} else {
								jQuery(this).attr('src', host + '' + jQuery(this).attr('data-img').replace("*", image_pixel_ratio));
							}
						}
						
						jQuery(this).removeAttr('data-img').removeAttr('data-defer-until');
					}
				});
				
				jQuery("img[data-img]").each(function(obj) {
					//jQuery(this).attr('src', jQuery(this).attr('data-img').replace("*", image_pixel_ratio));
					jQuery(this).trigger('blur');
				});
				
				jQuery(window).bind('resize', function() {
					setTimeout(function() {
						LSW.mobile.init();
						jQuery("img[data-img]").trigger('blur');
					}, 500);
				});
			});
		}
	},
	queue: {
		queue: [],
		enqueue: function(queue, key, callback) {
			if(typeof(callback) == 'function') {
				this.queue[queue][key] = callback;
			}
		},
		dequeue: function(queue, key) {
			if(this.queue[queue][key]) {
				this.queue[queue][key] = false;
			}
		},
		run: function(queue) {
			for(k in this.queue[queue]) {
				this.queue[queue][k]();
			}
		}
	},
	cookie: {
		get: function(n) {
			var name = n + "=";
			var ca = document.cookie.split(";");
			
			for(var i = 0; i < ca.length; i++) {
				var c = ca[i];
				
				while(c.charAt(0) == " ") {
					c = c.substring(1);
				}
				
				if(c.indexOf(name) == 0) {
					return c.substring(name.length, c.length);
				}
			}
			
			return "";
		},
		
		set: function(n, c, d) {
			document.cookie = n + "=" + c + "; expires=" + d.toUTCString() + "; path=/";
		},
		
		expire: function(n) {
			return this.set(n, "", new Date(0));
		}
	},
	
	/* Stitch Effect */
	stitch: function(obj) {
		if(!obj) return;
		var temp_image = new Image();
		
		temp_image.onload = function() {
			var temp_canvas = document.createElement('canvas');
			
			temp_canvas.width = this.width;
			temp_canvas.height = this.height;
			temp_canvas.getContext('2d').drawImage(this,0,0);
			
			jQuery.ajax({
				url: 'https://iaev32mim5.execute-api.us-west-2.amazonaws.com/'+(obj.version || 'prod')+'/designer-embr-stitch', 
				type: 'POST', 
				method: 'POST', 
				crossDomain: true, 
				contentType: 'application/json',
				data: JSON.stringify({
					imageDataUrl: temp_canvas.toDataURL(),
					size: obj.width || 300,
					type: obj.type || 'image'
				}), 
				dataType: 'json', 
				success: function(data) {
					if(data && data.success && data.response && obj.success && typeof obj.success == 'function') {
						obj.success(data.response);
					}
				}, 
				error: function(err) {
					if(err && obj.error && typeof obj.error == 'function') {
						obj.error(err);
					}
				}
			});
		};
		
		if(obj.piece_id) {
			obj.url = '/personalize/functions_image/piece_image.php?id='+obj.piece_id;
		} else if(obj.dom_element) {
			obj.url = jQuery(obj.dom_element).attr('src');
		}
		
		temp_image.src = obj.url || '';
	},
	
	/* Parameters */
	params: {
		data: [],
		
		init: function() {
			if(window.location && window.location.search) {
				var str = window.location.search.substring(1);
				var splits = str.split("&");
				
				for(k in splits) {
					if(typeof(splits[k]) == 'string' || typeof(splits[k]) == 'number') {
						var a = splits[k].split("=");
						
						LSW.params.data['qs_' + a[0]] = a[1];
					}
				}
			}
		},
		
		exists: function(name) {
			return !!LSW.params.get(name);
		},
		
		get: function(name) {
			name = 'qs_' + name;
			
			if(LSW.params.data && LSW.params.data[name]) {
				return LSW.params.data[name];
			}
			
			return false;
		},
		
		construct: function(arr) {
			var r = arr || this.data;
			var o = [];
			
			for(k in r) {
				o.push(k + '=' + r[k])
			}
			
			return o.join("&");
		}
	},
	
	/* Event Tracking */
	events: {
		buffer: 0,
		
		debug: false,
		
		time: function() {
			return (new Date()).getTime();
		},
		
		init: function() {
			jQuery(document).ready(function() {
				jQuery("[data-gaq-category][data-gaq-action][data-gaq-label]").live('click', function(e) {
					if(typeof(e.clientX) == 'undefined' || typeof(e.clientY) == 'undefined') {
						return;
					}
					
					var category = jQuery(this).data('gaq-category'),
						action = jQuery(this).data('gaq-action'),
						label = jQuery(this).data('gaq-label');
						
					var nb = jQuery(this).data('data-gaq-no-buffer') ? true : false;
					
					LSW.events.fire(category, action, label, nb);
				});
			});
		},
		
		fire: function(c, a, l) {
			var nb = typeof(arguments[3]) == 'boolean' ? arguments[3] : false;
			
			if(nb || (LSW.events.time() - LSW.events.buffer) > 100) {
				if(this.debug) {
					if(typeof(console.log) == 'function') {
						console.log({
							category: c,
							action: a,
							label: l
						});
					}
				} else {
					_gaq.push(['_trackEvent', c, a, l]);
				}
				
				if(!nb) {
					LSW.events.buffer = LSW.events.time();
				}
			}
		}
	},
	
	/* Deprecated methods */
	search: {
		init: function() {}
	}
};
			
			
			
			
/*
 * Magic User Interface
 * --------------------
 * This file handles all UI behavior of input fields
 *
 * COPYRIGHT (c) 2015 LOGOSPORTSWEAR.COM
 *
 */

;(function() {
	window.magic_ui = {
		carousel: [],
		nodes: [],
		responsive: {
			capable: jQuery("#is-responsive").length > 0 ? true : false,
			element: jQuery("#is-responsive")
		}
	};

	var magic_onload_func = function() {
		jQuery(".magic.text").each(function(i, e) {
			jQuery(this).css('width', 'auto');
			jQuery(this).css('width', jQuery(this).outerWidth());
			jQuery(this).attr('data-node', i);

			if(jQuery(this).attr('type') == 'password') {
				jQuery(this).data('initial-value', jQuery(this).val());
			}
		});
	}

	jQuery(document).ready(function() {
		magic_onload_func();
		
		/* Text Box */
		jQuery(".magic.text label").each(function() {
			jQuery(this).parent(".magic.text").addClass("label");
		});

		
		jQuery(".magic.text input").each(function() {
			if(jQuery(this).is(":disabled")) {
				jQuery(this).parent().addClass('disabled');
			}
		});

		jQuery(".magic.text input[data-required]").each(function() {
			jQuery(this).parent().addClass('required');
		});
		
		jQuery(".magic.text").bind('click', function() {
			jQuery(this).find('input.text').trigger('focus');
		});
		
		jQuery(".magic.text input").bind('focus', function() {
			if(!jQuery(this).attr('disabled')) {
				jQuery(this).parent().addClass('active');
			}
		});

		jQuery(".magic.text input").bind('blur', function() {
			//if(jQuery(this).val() == '') {
				jQuery(this).parent().removeClass('active');
			//}
		});

		jQuery(".magic.text input[data-placeholder]").bind('blur focus', function(e) {
			if(jQuery(this).attr('type') != 'password') {
				if(jQuery(this).val() == '') {
					if(window.magic_ui && window.magic_ui.responsive && window.magic_ui.responsive.capable) {
						jQuery(this).addClass('placeholder');
					} else {
						jQuery(this).addClass('placeholder').val(jQuery(this).data('placeholder'));
					}
				} else if(window.magic_ui && window.magic_ui.responsive && !window.magic_ui.responsive.capable && jQuery(this).hasClass('placeholder')) {
					jQuery(this).removeClass('placeholder');
				} else if(jQuery(this).val() == jQuery(this).data('placeholder') && jQuery(this).hasClass('placeholder')) {
					jQuery(this).val('').removeClass('placeholder');
				}
			} else {
				if(console && typeof(console.warn) == 'function') {
					console.warn('Can\'t use data-placeholder with input type of password');
				}
			}
		});

		jQuery(".magic.text input[data-placeholder]").bind('keyup', function() {
			jQuery(this).removeClass('placeholder');
		});

		jQuery(".magic.text input[data-placeholder]").each(function() {
			if(jQuery(this).attr('type') != 'password') {
				if(!window.magic_ui || !window.magic_ui.responsive || !window.magic_ui.responsive.capable) {
					jQuery(this).val(jQuery(this).data('placeholder')).addClass('placeholder');
				}
			}
		});

		jQuery(".magic.text input[data-required]").bind('click', function() {
			jQuery(".magic.text input[data-required]").bind('blur', function() {
				if(!jQuery(this).parent().hasClass('validated')) {

				} else {

				}
			});
		});

		jQuery(".magic.text input[data-validate]").bind('blur keyup', function() {
			if(!jQuery(this).hasClass('placeholder')) {
				clearTimeout(window.magic_ui.nodes[jQuery(this).data('node')]);

				node = jQuery(this).parent().data('node');

				window.magic_ui.nodes[node] = setTimeout(function(node) {
					var regexp = "";

					switch(arguments[0].data('validate')) {
						case "email": regexp = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/; break;
						case "password": regexp = /^.{6,}$/; break;
						case "password2": regexp = /^.{6,}$/; break;
						case "number": regexp = /^\\-?\d+$/; break;
						case "order": regexp = /^\d+$/; break;
						case "alpha": regexp = /^[a-zA-Z]+$/; break;
						case "something": regexp = /^./; break;
						case "canada_postal": /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/; break;
						case "zip": regexp = /^[0-9]{5}(\-[0-9]{4})?$/; break;
					}

					if(regexp != "") {
						node.parent().addClass(arguments[0].data('validate'));
					}

					var regex = regexp != "" ? regexp : new RegExp(arguments[0].data('validate'), 'i');

					if(regex.test(node.val())) {
						if(node.data('validate-callback')) {
							get_error_message.call(node, arguments[0].attr('id'), true);
						}

						node.parent().removeClass("nonvalidated");
						node.parent().addClass("validated");
					} else {
						if(node.data('validate-callback')) {
							get_error_message.call(node, arguments[0].attr('id'), false);
						}

						node.parent().removeClass("validated");
						node.parent().addClass("nonvalidated");
					}
					
					if(node.data('must-match')) {
						if(node.val() !== jQuery("#" + node.data('must-match')).val()) {
							node.parent().removeClass("validated");
							node.parent().addClass("nonvalidated");
						}
					}
				}, 0, jQuery(this));
			}
		});
		
		/* Textareas */
		jQuery(".magic.textarea textarea").bind('focus', function() {
			if(!jQuery(this).attr('disabled')) {
				jQuery(this).parent().addClass('active').removeClass('notempty');
			}
		});
		
		jQuery(".magic.textarea textarea").bind('blur', function() {
			jQuery(this).parent().removeClass('active')
			
			if(jQuery(this).val() != '') {
				jQuery(this).parent().addClass('notempty');
			}
		});

		/* Dropdowns */
		jQuery(".magic.dropdown select").each(function() {
			if(jQuery(this).is(":disabled")) {
				jQuery(this).parent().addClass('disabled');
			}
		});
		
		jQuery(".magic.dropdown select[data-required]").each(function() {
			jQuery(this).parent().addClass('required');
		});

		jQuery(".magic.dropdown").each(function() {
			if(jQuery("body").hasClass("ie-legacy")) {
				jQuery(this).removeClass('magic').addClass("magic-legacy");
			}
		});
		
		jQuery(".magic.dropdown.label select").live('focus', function() {
			jQuery(this).parent().addClass('open');
		});
		
		jQuery(".magic.dropdown.label select").live('blur', function() {
			jQuery(this).parent().removeClass('open');
		});
		
		jQuery(".magic.dropdown.label select").live('change', function() {
			jQuery(this).parent().removeClass('open').find("select").eq(0).trigger('blur');
		});

		/* Radio Buttons */
		jQuery(".magic.radio.option").each(function() {
			if(jQuery(this).is(":checked")) {
				jQuery("label[for='" + jQuery(this).attr('id') + "']").addClass('selected');
			}

			if(jQuery(this).is(":disabled")) {
				jQuery("label[for='" + jQuery(this).attr('id') + "']").addClass('disabled');
			}
		});

		jQuery(".magic.radio.option").bind("change", function() {
			jQuery(this).parent('.magic.radio.container').find('.label').removeClass('selected');

			if(jQuery(this).is(":checked")) {
				jQuery("label[for='" + jQuery(this).attr('id') + "']").addClass('selected');
			}
		});

		/* Toggles */
		jQuery(".magic.toggle button").live('click', function() {
			var accordion = jQuery(this).parent('.magic.toggle').data('accordion');
		
			if(accordion) {
				jQuery(".magic.toggle[data-accordion='" + accordion + "']").removeClass('open');
			}
			
			jQuery(this).parent().toggleClass('open');
			magic_onload_func();
			jQuery(window).trigger('resize');
		});

		/* Checkboxes */
		jQuery(".magic.checkbox.option").each(function() {
			if(jQuery(this).is(":checked")) {
				jQuery("label[for='" + jQuery(this).attr('id') + "']").addClass('selected');
			}

			if(jQuery(this).is(":disabled")) {
				jQuery("label[for='" + jQuery(this).attr('id') + "']").addClass('disabled');
			}
		});

		jQuery(".magic.checkbox.option").bind("change", function() {
			if(!jQuery(this).is(":disabled")) {
				if(jQuery(this).is(":checked")) {
					jQuery("label[for='" + jQuery(this).attr('id') + "']").addClass('selected');
				} else {
					jQuery("label[for='" + jQuery(this).attr('id') + "']").removeClass('selected');
				}
			}
		});
		
		/* Selectable */
		jQuery(".magic.selectable li").live('click', function() {
			if(!jQuery(this).hasClass('disabled')) {
				jQuery(".magic.selectable li").removeClass('selected');
				jQuery(this).addClass('selected');
			}
		});

		/* Blackouts */
		jQuery(".magic.blackout").live('click', function() {
			jQuery(this).removeClass('active');
			jQuery(".magic.modal").removeClass('active');
		});

		/* Modals */
		jQuery(".magic.modal .close").live('click', function() {
			jQuery(".magic.blackout").trigger('click');
		});

		jQuery(".magic[data-modal]").live('click', function() {
			jQuery(".magic.blackout, .magic.modal").removeClass('active');

			if(jQuery(this).data('blackout').length > 0) {
				jQuery(jQuery(this).data('blackout')).addClass('active');
			}

			jQuery(jQuery(this).data('modal')).addClass('active');
		
			jQuery(this).css({
				marginLeft: Math.floor(jQuery(this).outerWidth() / 2)
			});
		});
		
		jQuery(".magic.modal").live('open', function() {
			jQuery(".magic.blackout, .magic.modal").removeClass('active');

			if(jQuery(this).data('blackout') && jQuery(this).data('blackout').length > 0) {
				jQuery(jQuery(this).data('blackout')).addClass('active');
			}

			jQuery(this).addClass('active').css({
				marginLeft: Math.floor(jQuery(this).outerWidth() / 2) * -1
			});
		});

		jQuery(window).bind('resize', function() {
			magic_onload_func();
		});
	});
})();

			
			
			
			
var fabric=fabric||{version:"1.6.2",minified:!0};"undefined"!=typeof exports&&(exports.fabric=fabric),"undefined"!=typeof document&&"undefined"!=typeof window?(fabric.document=document,fabric.window=window,window.fabric=fabric):(fabric.document=require("jsdom").jsdom("<!DOCTYPE html><html><head></head><body></body></html>"),fabric.document.createWindow?fabric.window=fabric.document.createWindow():fabric.window=fabric.document.parentWindow),fabric.isTouchSupported="ontouchstart"in fabric.document.documentElement,fabric.isLikelyNode="undefined"!=typeof Buffer&&"undefined"==typeof window,fabric.SHARED_ATTRIBUTES=["display","transform","fill","fill-opacity","fill-rule","opacity","stroke","stroke-dasharray","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","id"],fabric.DPI=96,fabric.reNum="(?:[-+]?(?:\\d+|\\d*\\.\\d+)(?:e[-+]?\\d+)?)",fabric.fontPaths={},fabric.devicePixelRatio=fabric.window.devicePixelRatio||fabric.window.webkitDevicePixelRatio||fabric.window.mozDevicePixelRatio||1,function(){function t(t,e){if(this.__eventListeners[t]){var i=this.__eventListeners[t];e?i[i.indexOf(e)]=!1:fabric.util.array.fill(i,!1)}}function e(t,e){if(this.__eventListeners||(this.__eventListeners={}),1===arguments.length)for(var i in t)this.on(i,t[i]);else this.__eventListeners[t]||(this.__eventListeners[t]=[]),this.__eventListeners[t].push(e);return this}function i(e,i){if(this.__eventListeners){if(0===arguments.length)for(e in this.__eventListeners)t.call(this,e);else if(1===arguments.length&&"object"==typeof arguments[0])for(var r in e)t.call(this,r,e[r]);else t.call(this,e,i);return this}}function r(t,e){if(this.__eventListeners){var i=this.__eventListeners[t];if(i){for(var r=0,s=i.length;r<s;r++)i[r]&&i[r].call(this,e||{});return this.__eventListeners[t]=i.filter(function(t){return!1!==t}),this}}}fabric.Observable={observe:e,stopObserving:i,fire:r,on:e,off:i,trigger:r}}(),fabric.Collection={add:function(){this._objects.push.apply(this._objects,arguments);for(var t=0,e=arguments.length;t<e;t++)this._onObjectAdded(arguments[t]);return this.renderOnAddRemove&&this.renderAll(),this},insertAt:function(t,e,i){var r=this.getObjects();return i?r[e]=t:r.splice(e,0,t),this._onObjectAdded(t),this.renderOnAddRemove&&this.renderAll(),this},remove:function(){for(var t,e=this.getObjects(),i=0,r=arguments.length;i<r;i++)-1!==(t=e.indexOf(arguments[i]))&&(e.splice(t,1),this._onObjectRemoved(arguments[i]));return this.renderOnAddRemove&&this.renderAll(),this},forEachObject:function(t,e){for(var i=this.getObjects(),r=i.length;r--;)t.call(e,i[r],r,i);return this},getObjects:function(t){return void 0===t?this._objects:this._objects.filter(function(e){return e.type===t})},item:function(t){return this.getObjects()[t]},isEmpty:function(){return 0===this.getObjects().length},size:function(){return this.getObjects().length},contains:function(t){return this.getObjects().indexOf(t)>-1},complexity:function(){return this.getObjects().reduce(function(t,e){return t+=e.complexity?e.complexity():0},0)}},function(t){var e=Math.sqrt,i=Math.atan2,r=Math.pow,s=Math.abs,n=Math.PI/180;fabric.util={removeFromArray:function(t,e){var i=t.indexOf(e);return-1!==i&&t.splice(i,1),t},getRandomInt:function(t,e){return Math.floor(Math.random()*(e-t+1))+t},degreesToRadians:function(t){return t*n},radiansToDegrees:function(t){return t/n},rotatePoint:function(t,e,i){t.subtractEquals(e);var r=fabric.util.rotateVector(t,i);return new fabric.Point(r.x,r.y).addEquals(e)},rotateVector:function(t,e){var i=Math.sin(e),r=Math.cos(e);return{x:t.x*r-t.y*i,y:t.x*i+t.y*r}},transformPoint:function(t,e,i){return i?new fabric.Point(e[0]*t.x+e[2]*t.y,e[1]*t.x+e[3]*t.y):new fabric.Point(e[0]*t.x+e[2]*t.y+e[4],e[1]*t.x+e[3]*t.y+e[5])},makeBoundingBoxFromPoints:function(t){var e=[t[0].x,t[1].x,t[2].x,t[3].x],i=fabric.util.array.min(e),r=fabric.util.array.max(e),s=Math.abs(i-r),n=[t[0].y,t[1].y,t[2].y,t[3].y],o=fabric.util.array.min(n),a=fabric.util.array.max(n);return{left:i,top:o,width:s,height:Math.abs(o-a)}},invertTransform:function(t){var e=1/(t[0]*t[3]-t[1]*t[2]),i=[e*t[3],-e*t[1],-e*t[2],e*t[0]],r=fabric.util.transformPoint({x:t[4],y:t[5]},i,!0);return i[4]=-r.x,i[5]=-r.y,i},toFixed:function(t,e){return parseFloat(Number(t).toFixed(e))},parseUnit:function(t,e){var i=/\D{0,2}$/.exec(t),r=parseFloat(t);switch(e||(e=fabric.Text.DEFAULT_SVG_FONT_SIZE),i[0]){case"mm":return r*fabric.DPI/25.4;case"cm":return r*fabric.DPI/2.54;case"in":return r*fabric.DPI;case"pt":return r*fabric.DPI/72;case"pc":return r*fabric.DPI/72*12;case"em":return r*e;default:return r}},falseFunction:function(){return!1},getKlass:function(t,e){return t=fabric.util.string.camelize(t.charAt(0).toUpperCase()+t.slice(1)),fabric.util.resolveNamespace(e)[t]},resolveNamespace:function(e){if(!e)return fabric;for(var i=e.split("."),r=i.length,s=t||fabric.window,n=0;n<r;++n)s=s[i[n]];return s},loadImage:function(t,e,i,r){if(t){var s=fabric.util.createImage();s.onload=function(){e&&e.call(i,s),s=s.onload=s.onerror=null},s.onerror=function(){fabric.log("Error loading "+s.src),e&&e.call(i,null,!0),s=s.onload=s.onerror=null},0!==t.indexOf("data")&&r&&(s.crossOrigin=r),s.src=t}else e&&e.call(i,t)},enlivenObjects:function(t,e,i,r){function s(){++o===a&&e&&e(n)}var n=[],o=0,a=(t=t||[]).length;a?t.forEach(function(t,e){if(t&&t.type){var o=fabric.util.getKlass(t.type,i);o.async?o.fromObject(t,function(i,o){o||(n[e]=i,r&&r(t,n[e])),s()}):(n[e]=o.fromObject(t),r&&r(t,n[e]),s())}else s()}):e&&e(n)},groupSVGElements:function(t,e,i){var r;return r=new fabric.PathGroup(t,e),void 0!==i&&r.setSourcePath(i),r},populateWithProperties:function(t,e,i){if(i&&"[object Array]"===Object.prototype.toString.call(i))for(var r=0,s=i.length;r<s;r++)i[r]in t&&(e[i[r]]=t[i[r]])},drawDashedLine:function(t,r,s,n,o,a){var h=n-r,c=o-s,l=e(h*h+c*c),u=i(c,h),f=a.length,d=0,g=!0;for(t.save(),t.translate(r,s),t.moveTo(0,0),t.rotate(u),r=0;l>r;)(r+=a[d++%f])>l&&(r=l),t[g?"lineTo":"moveTo"](r,0),g=!g;t.restore()},createCanvasElement:function(t){return t||(t=fabric.document.createElement("canvas")),t.getContext||"undefined"==typeof G_vmlCanvasManager||G_vmlCanvasManager.initElement(t),t},createImage:function(){return fabric.isLikelyNode?new(require("canvas").Image):fabric.document.createElement("img")},createAccessors:function(t){for(var e=t.prototype,i=e.stateProperties.length;i--;){var r=e.stateProperties[i],s=r.charAt(0).toUpperCase()+r.slice(1),n="set"+s,o="get"+s;e[o]||(e[o]=new Function('return this.get("'+r+'")')),e[n]||(e[n]=new Function("value",'return this.set("'+r+'", value)'))}},clipContext:function(t,e){e.save(),e.beginPath(),t.clipTo(e),e.clip()},multiplyTransformMatrices:function(t,e,i){return[t[0]*e[0]+t[2]*e[1],t[1]*e[0]+t[3]*e[1],t[0]*e[2]+t[2]*e[3],t[1]*e[2]+t[3]*e[3],i?0:t[0]*e[4]+t[2]*e[5]+t[4],i?0:t[1]*e[4]+t[3]*e[5]+t[5]]},qrDecompose:function(t){var s=i(t[1],t[0]),o=r(t[0],2)+r(t[1],2),a=e(o),h=(t[0]*t[3]-t[2]*t[1])/a,c=i(t[0]*t[2]+t[1]*t[3],o);return{angle:s/n,scaleX:a,scaleY:h,skewX:c/n,skewY:0,translateX:t[4],translateY:t[5]}},customTransformMatrix:function(t,e,i){var r=[1,0,s(Math.tan(i*n)),1],o=[s(t),0,0,s(e)];return fabric.util.multiplyTransformMatrices(o,r,!0)},resetObjectTransform:function(t){t.scaleX=1,t.scaleY=1,t.skewX=0,t.skewY=0,t.flipX=!1,t.flipY=!1,t.setAngle(0)},getFunctionBody:function(t){return(String(t).match(/function[^{]*\{([\s\S]*)\}/)||{})[1]},isTransparent:function(t,e,i,r){r>0&&(e>r?e-=r:e=0,i>r?i-=r:i=0);for(var s=!0,n=t.getImageData(e,i,2*r||1,2*r||1),o=3,a=n.data.length;o<a;o+=4){if(!1===(s=n.data[o]<=0))break}return n=null,s},parsePreserveAspectRatioAttribute:function(t){var e,i="meet",r=t.split(" ");return r&&r.length&&("meet"!==(i=r.pop())&&"slice"!==i?(e=i,i="meet"):r.length&&(e=r.pop())),{meetOrSlice:i,alignX:"none"!==e?e.slice(1,4):"none",alignY:"none"!==e?e.slice(5,8):"none"}}}}("undefined"!=typeof exports?exports:this),function(){var t={},e={},i={},r=Array.prototype.join;function s(e,i,s,a,h,c,l){var u=r.call(arguments);if(t[u])return t[u];var f=Math.PI,d=l*f/180,g=Math.sin(d),p=Math.cos(d),v=0,b=0,m=-p*e*.5-g*i*.5,y=-p*i*.5+g*e*.5,_=(s=Math.abs(s))*s,x=(a=Math.abs(a))*a,S=y*y,C=m*m,w=_*x-_*S-x*C,O=0;if(w<0){var T=Math.sqrt(1-w/(_*x));s*=T,a*=T}else O=(h===c?-1:1)*Math.sqrt(w/(_*S+x*C));var k=O*s*y/a,j=-O*a*m/s,A=p*k-g*j+.5*e,M=g*k+p*j+.5*i,P=o(1,0,(m-k)/s,(y-j)/a),L=o((m-k)/s,(y-j)/a,(-m-k)/s,(-y-j)/a);0===c&&L>0?L-=2*f:1===c&&L<0&&(L+=2*f);for(var D=Math.ceil(Math.abs(L/f*2)),E=[],I=L/D,R=8/3*Math.sin(I/4)*Math.sin(I/4)/Math.sin(I/2),B=P+I,F=0;F<D;F++)E[F]=n(P,B,p,g,s,a,A,M,R,v,b),v=E[F][4],b=E[F][5],P=B,B+=I;return t[u]=E,E}function n(t,i,s,n,o,a,h,c,l,u,f){var d=r.call(arguments);if(e[d])return e[d];var g=Math.cos(t),p=Math.sin(t),v=Math.cos(i),b=Math.sin(i),m=s*o*v-n*a*b+h,y=n*o*v+s*a*b+c,_=u+l*(-s*o*p-n*a*g),x=f+l*(-n*o*p+s*a*g),S=m+l*(s*o*b+n*a*v),C=y+l*(n*o*b-s*a*v);return e[d]=[_,x,S,C,m,y],e[d]}function o(t,e,i,r){var s=Math.atan2(e,t),n=Math.atan2(r,i);return n>=s?n-s:2*Math.PI-(s-n)}function a(t,e,s,n,o,a,h,c){var l=r.call(arguments);if(i[l])return i[l];var u,f,d,g,p,v,b,m,y=Math.sqrt,_=Math.min,x=Math.max,S=Math.abs,C=[],w=[[],[]];f=6*t-12*s+6*o,u=-3*t+9*s-9*o+3*h,d=3*s-3*t;for(var O=0;O<2;++O)if(O>0&&(f=6*e-12*n+6*a,u=-3*e+9*n-9*a+3*c,d=3*n-3*e),S(u)<1e-12){if(S(f)<1e-12)continue;0<(g=-d/f)&&g<1&&C.push(g)}else(b=f*f-4*d*u)<0||(0<(p=(-f+(m=y(b)))/(2*u))&&p<1&&C.push(p),0<(v=(-f-m)/(2*u))&&v<1&&C.push(v));for(var T,k,j,A=C.length,M=A;A--;)T=(j=1-(g=C[A]))*j*j*t+3*j*j*g*s+3*j*g*g*o+g*g*g*h,w[0][A]=T,k=j*j*j*e+3*j*j*g*n+3*j*g*g*a+g*g*g*c,w[1][A]=k;w[0][M]=t,w[1][M]=e,w[0][M+1]=h,w[1][M+1]=c;var P=[{x:_.apply(null,w[0]),y:_.apply(null,w[1])},{x:x.apply(null,w[0]),y:x.apply(null,w[1])}];return i[l]=P,P}fabric.util.drawArc=function(t,e,i,r){for(var n=r[0],o=r[1],a=r[2],h=r[3],c=r[4],l=[[],[],[],[]],u=s(r[5]-e,r[6]-i,n,o,h,c,a),f=0,d=u.length;f<d;f++)l[f][0]=u[f][0]+e,l[f][1]=u[f][1]+i,l[f][2]=u[f][2]+e,l[f][3]=u[f][3]+i,l[f][4]=u[f][4]+e,l[f][5]=u[f][5]+i,t.bezierCurveTo.apply(t,l[f])},fabric.util.getBoundsOfArc=function(t,e,i,r,n,o,h,c,l){for(var u=0,f=0,d=[],g=[],p=s(c-t,l-e,i,r,o,h,n),v=[[],[]],b=0,m=p.length;b<m;b++)d=a(u,f,p[b][0],p[b][1],p[b][2],p[b][3],p[b][4],p[b][5]),v[0].x=d[0].x+t,v[0].y=d[0].y+e,v[1].x=d[1].x+t,v[1].y=d[1].y+e,g.push(v[0]),g.push(v[1]),u=p[b][4],f=p[b][5];return g},fabric.util.getBoundsOfCurve=a}(),function(){var t=Array.prototype.slice;function e(t,e,i){if(t&&0!==t.length){var r=t.length-1,s=e?t[r][e]:t[r];if(e)for(;r--;)i(t[r][e],s)&&(s=t[r][e]);else for(;r--;)i(t[r],s)&&(s=t[r]);return s}}Array.prototype.indexOf||(Array.prototype.indexOf=function(t){if(void 0===this||null===this)throw new TypeError;var e=Object(this),i=e.length>>>0;if(0===i)return-1;var r=0;if(arguments.length>0&&((r=Number(arguments[1]))!=r?r=0:0!==r&&r!==Number.POSITIVE_INFINITY&&r!==Number.NEGATIVE_INFINITY&&(r=(r>0||-1)*Math.floor(Math.abs(r)))),r>=i)return-1;for(var s=r>=0?r:Math.max(i-Math.abs(r),0);s<i;s++)if(s in e&&e[s]===t)return s;return-1}),Array.prototype.forEach||(Array.prototype.forEach=function(t,e){for(var i=0,r=this.length>>>0;i<r;i++)i in this&&t.call(e,this[i],i,this)}),Array.prototype.map||(Array.prototype.map=function(t,e){for(var i=[],r=0,s=this.length>>>0;r<s;r++)r in this&&(i[r]=t.call(e,this[r],r,this));return i}),Array.prototype.every||(Array.prototype.every=function(t,e){for(var i=0,r=this.length>>>0;i<r;i++)if(i in this&&!t.call(e,this[i],i,this))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(t,e){for(var i=0,r=this.length>>>0;i<r;i++)if(i in this&&t.call(e,this[i],i,this))return!0;return!1}),Array.prototype.filter||(Array.prototype.filter=function(t,e){for(var i,r=[],s=0,n=this.length>>>0;s<n;s++)s in this&&(i=this[s],t.call(e,i,s,this)&&r.push(i));return r}),Array.prototype.reduce||(Array.prototype.reduce=function(t){var e,i=this.length>>>0,r=0;if(arguments.length>1)e=arguments[1];else for(;;){if(r in this){e=this[r++];break}if(++r>=i)throw new TypeError}for(;r<i;r++)r in this&&(e=t.call(null,e,this[r],r,this));return e}),fabric.util.array={fill:function(t,e){for(var i=t.length;i--;)t[i]=e;return t},invoke:function(e,i){for(var r=t.call(arguments,2),s=[],n=0,o=e.length;n<o;n++)s[n]=r.length?e[n][i].apply(e[n],r):e[n][i].call(e[n]);return s},min:function(t,i){return e(t,i,function(t,e){return t<e})},max:function(t,i){return e(t,i,function(t,e){return t>=e})}}}(),function(){function t(t,e){for(var i in e)t[i]=e[i];return t}fabric.util.object={extend:t,clone:function(e){return t({},e)}}}(),function(){String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\xA0]+/,"").replace(/[\s\xA0]+$/,"")}),fabric.util.string={camelize:function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},capitalize:function(t,e){return t.charAt(0).toUpperCase()+(e?t.slice(1):t.slice(1).toLowerCase())},escapeXml:function(t){return t.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}}}(),function(){var t=Array.prototype.slice,e=Function.prototype.apply,i=function(){};Function.prototype.bind||(Function.prototype.bind=function(r){var s,n=this,o=t.call(arguments,1);return s=o.length?function(){return e.call(n,this instanceof i?this:r,o.concat(t.call(arguments)))}:function(){return e.call(n,this instanceof i?this:r,arguments)},i.prototype=this.prototype,s.prototype=new i,s})}(),function(){var t=Array.prototype.slice,e=function(){},i=function(){for(var t in{toString:1})if("toString"===t)return!1;return!0}(),r=function(t,e,r){for(var s in e)s in t.prototype&&"function"==typeof t.prototype[s]&&(e[s]+"").indexOf("callSuper")>-1?t.prototype[s]=function(t){return function(){var i=this.constructor.superclass;this.constructor.superclass=r;var s=e[t].apply(this,arguments);if(this.constructor.superclass=i,"initialize"!==t)return s}}(s):t.prototype[s]=e[s],i&&(e.toString!==Object.prototype.toString&&(t.prototype.toString=e.toString),e.valueOf!==Object.prototype.valueOf&&(t.prototype.valueOf=e.valueOf))};function s(){}function n(e){var i=this.constructor.superclass.prototype[e];return arguments.length>1?i.apply(this,t.call(arguments,1)):i.call(this)}fabric.util.createClass=function(){var i=null,o=t.call(arguments,0);function a(){this.initialize.apply(this,arguments)}"function"==typeof o[0]&&(i=o.shift()),a.superclass=i,a.subclasses=[],i&&(s.prototype=i.prototype,a.prototype=new s,i.subclasses.push(a));for(var h=0,c=o.length;h<c;h++)r(a,o[h],i);return a.prototype.initialize||(a.prototype.initialize=e),a.prototype.constructor=a,a.prototype.callSuper=n,a}}(),function(){var t="unknown";function e(t){var e,i,r=Array.prototype.slice.call(arguments,1),s=r.length;for(i=0;i<s;i++)if(e=typeof t[r[i]],!/^(?:function|object|unknown)$/.test(e))return!1;return!0}var i,r,s,n,o=(s=0,function(t){return t.__uniqueID||(t.__uniqueID="uniqueID__"+s++)});function a(t,e){return{handler:e,wrappedHandler:(r=t,s=e,function(t){s.call(i(r),t||fabric.window.event)})};var r,s}n={},i=function(t){return n[t]},r=function(t,e){n[t]=e};var h,c,l=e(fabric.document.documentElement,"addEventListener","removeEventListener")&&e(fabric.window,"addEventListener","removeEventListener"),u=e(fabric.document.documentElement,"attachEvent","detachEvent")&&e(fabric.window,"attachEvent","detachEvent"),f={},d={};l?(h=function(t,e,i){t.addEventListener(e,i,!1)},c=function(t,e,i){t.removeEventListener(e,i,!1)}):u?(h=function(t,e,i){var s=o(t);r(s,t),f[s]||(f[s]={}),f[s][e]||(f[s][e]=[]);var n=a(s,i);f[s][e].push(n),t.attachEvent("on"+e,n.wrappedHandler)},c=function(t,e,i){var r,s=o(t);if(f[s]&&f[s][e])for(var n=0,a=f[s][e].length;n<a;n++)(r=f[s][e][n])&&r.handler===i&&(t.detachEvent("on"+e,r.wrappedHandler),f[s][e][n]=null)}):(h=function(t,e,i){var r,s,n=o(t);if(d[n]||(d[n]={}),!d[n][e]){d[n][e]=[];var a=t["on"+e];a&&d[n][e].push(a),t["on"+e]=(r=n,s=e,function(t){if(d[r]&&d[r][s])for(var e=d[r][s],i=0,n=e.length;i<n;i++)e[i].call(this,t||fabric.window.event)})}d[n][e].push(i)},c=function(t,e,i){var r=o(t);if(d[r]&&d[r][e])for(var s=d[r][e],n=0,a=s.length;n<a;n++)s[n]===i&&s.splice(n,1)}),fabric.util.addListener=h,fabric.util.removeListener=c;var g=function(e){return typeof e.clientX!==t?e.clientX:0},p=function(e){return typeof e.clientY!==t?e.clientY:0};function v(t,e,i){var r="touchend"===t.type?"changedTouches":"touches";return t[r]&&t[r][0]&&t[r][0][e]-(t[r][0][e]-t[r][0][i])||t[i]}fabric.isTouchSupported&&(g=function(t){return v(t,"pageX","clientX")},p=function(t){return v(t,"pageY","clientY")}),fabric.util.getPointer=function(e){e||(e=fabric.window.event);var i=e.target||(typeof e.srcElement!==t?e.srcElement:null),r=fabric.util.getScrollLeftTop(i);return{x:g(e)+r.left,y:p(e)+r.top}},fabric.util.object.extend(fabric.util,fabric.Observable)}(),function(){var t=fabric.document.createElement("div"),e="string"==typeof t.style.opacity,i="string"==typeof t.style.filter,r=/alpha\s*\(\s*opacity\s*=\s*([^\)]+)\)/,s=function(t){return t};e?s=function(t,e){return t.style.opacity=e,t}:i&&(s=function(t,e){var i=t.style;return t.currentStyle&&!t.currentStyle.hasLayout&&(i.zoom=1),r.test(i.filter)?(e=e>=.9999?"":"alpha(opacity="+100*e+")",i.filter=i.filter.replace(r,e)):i.filter+=" alpha(opacity="+100*e+")",t}),fabric.util.setStyle=function(t,e){var i=t.style;if(!i)return t;if("string"==typeof e)return t.style.cssText+=";"+e,e.indexOf("opacity")>-1?s(t,e.match(/opacity:\s*(\d?\.?\d*)/)[1]):t;for(var r in e)"opacity"===r?s(t,e[r]):i["float"===r||"cssFloat"===r?void 0===i.styleFloat?"cssFloat":"styleFloat":r]=e[r];return t}}(),function(){var t=Array.prototype.slice;var e,i,r=function(e){return t.call(e,0)};try{e=r(fabric.document.childNodes)instanceof Array}catch(t){}function s(t,e){var i=fabric.document.createElement(t);for(var r in e)"class"===r?i.className=e[r]:"for"===r?i.htmlFor=e[r]:i.setAttribute(r,e[r]);return i}function n(t){for(var e=0,i=0,r=fabric.document.documentElement,s=fabric.document.body||{scrollLeft:0,scrollTop:0};t&&(t.parentNode||t.host)&&((t=t.parentNode||t.host)===fabric.document?(e=s.scrollLeft||r.scrollLeft||0,i=s.scrollTop||r.scrollTop||0):(e+=t.scrollLeft||0,i+=t.scrollTop||0),1!==t.nodeType||"fixed"!==fabric.util.getElementStyle(t,"position")););return{left:e,top:i}}e||(r=function(t){for(var e=new Array(t.length),i=t.length;i--;)e[i]=t[i];return e}),i=fabric.document.defaultView&&fabric.document.defaultView.getComputedStyle?function(t,e){var i=fabric.document.defaultView.getComputedStyle(t,null);return i?i[e]:void 0}:function(t,e){var i=t.style[e];return!i&&t.currentStyle&&(i=t.currentStyle[e]),i},function(){var t=fabric.document.documentElement.style,e="userSelect"in t?"userSelect":"MozUserSelect"in t?"MozUserSelect":"WebkitUserSelect"in t?"WebkitUserSelect":"KhtmlUserSelect"in t?"KhtmlUserSelect":"";fabric.util.makeElementUnselectable=function(t){return void 0!==t.onselectstart&&(t.onselectstart=fabric.util.falseFunction),e?t.style[e]="none":"string"==typeof t.unselectable&&(t.unselectable="on"),t},fabric.util.makeElementSelectable=function(t){return void 0!==t.onselectstart&&(t.onselectstart=null),e?t.style[e]="":"string"==typeof t.unselectable&&(t.unselectable=""),t}}(),function(){fabric.util.getScript=function(t,e){var i=fabric.document.getElementsByTagName("head")[0],r=fabric.document.createElement("script"),s=!0;r.onload=r.onreadystatechange=function(t){if(s){if("string"==typeof this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState)return;s=!1,e(t||fabric.window.event),r=r.onload=r.onreadystatechange=null}},r.src=t,i.appendChild(r)}}(),fabric.util.getById=function(t){return"string"==typeof t?fabric.document.getElementById(t):t},fabric.util.toArray=r,fabric.util.makeElement=s,fabric.util.addClass=function(t,e){t&&-1===(" "+t.className+" ").indexOf(" "+e+" ")&&(t.className+=(t.className?" ":"")+e)},fabric.util.wrapElement=function(t,e,i){return"string"==typeof e&&(e=s(e,i)),t.parentNode&&t.parentNode.replaceChild(e,t),e.appendChild(t),e},fabric.util.getScrollLeftTop=n,fabric.util.getElementOffset=function(t){var e,r,s=t&&t.ownerDocument,o={left:0,top:0},a={left:0,top:0},h={borderLeftWidth:"left",borderTopWidth:"top",paddingLeft:"left",paddingTop:"top"};if(!s)return a;for(var c in h)a[h[c]]+=parseInt(i(t,c),10)||0;return e=s.documentElement,void 0!==t.getBoundingClientRect&&(o=t.getBoundingClientRect()),r=n(t),{left:o.left+r.left-(e.clientLeft||0)+a.left,top:o.top+r.top-(e.clientTop||0)+a.top}},fabric.util.getElementStyle=i}(),function(){var t=function(){for(var t=[function(){return new ActiveXObject("Microsoft.XMLHTTP")},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml2.XMLHTTP.3.0")},function(){return new XMLHttpRequest}],e=t.length;e--;)try{if(t[e]())return t[e]}catch(t){}}();function e(){}fabric.util.request=function(i,r){r||(r={});var s,n,o,a=r.method?r.method.toUpperCase():"GET",h=r.onComplete||function(){},c=t();return c.onreadystatechange=function(){4===c.readyState&&(h(c),c.onreadystatechange=e)},"GET"===a&&(s=null,"string"==typeof r.parameters&&(n=i,o=r.parameters,i=n+(/\?/.test(n)?"&":"?")+o)),c.open(a,i,!0),"POST"!==a&&"PUT"!==a||c.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),c.send(s),c}}(),fabric.log=function(){},fabric.warn=function(){},"undefined"!=typeof console&&["log","warn"].forEach(function(t){void 0!==console[t]&&"function"==typeof console[t].apply&&(fabric[t]=function(){return console[t].apply(console,arguments)})}),function(){var t=fabric.window.requestAnimationFrame||fabric.window.webkitRequestAnimationFrame||fabric.window.mozRequestAnimationFrame||fabric.window.oRequestAnimationFrame||fabric.window.msRequestAnimationFrame||function(t){fabric.window.setTimeout(t,1e3/60)};function e(){return t.apply(fabric.window,arguments)}fabric.util.animate=function(t){e(function(i){t||(t={});var r,s=i||+new Date,n=t.duration||500,o=s+n,a=t.onChange||function(){},h=t.abort||function(){return!1},c=t.easing||function(t,e,i,r){return-i*Math.cos(t/r*(Math.PI/2))+i+e},l="startValue"in t?t.startValue:0,u="endValue"in t?t.endValue:100,f=t.byValue||u-l;t.onStart&&t.onStart(),function i(u){var d=(r=u||+new Date)>o?n:r-s;h()?t.onComplete&&t.onComplete():(a(c(d,l,f,n)),r>o?t.onComplete&&t.onComplete():e(i))}(s)})},fabric.util.requestAnimFrame=e}(),function(){function t(t,e,i,r){return t<Math.abs(e)?(t=e,r=i/4):r=0===e&&0===t?i/(2*Math.PI)*Math.asin(1):i/(2*Math.PI)*Math.asin(e/t),{a:t,c:e,p:i,s:r}}function e(t,e,i){return t.a*Math.pow(2,10*(e-=1))*Math.sin((e*i-t.s)*(2*Math.PI)/t.p)}function i(t,e,i,s){return i-r(s-t,0,i,s)+e}function r(t,e,i,r){return(t/=r)<1/2.75?i*(7.5625*t*t)+e:t<2/2.75?i*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?i*(7.5625*(t-=2.25/2.75)*t+.9375)+e:i*(7.5625*(t-=2.625/2.75)*t+.984375)+e}fabric.util.ease={easeInQuad:function(t,e,i,r){return i*(t/=r)*t+e},easeOutQuad:function(t,e,i,r){return-i*(t/=r)*(t-2)+e},easeInOutQuad:function(t,e,i,r){return(t/=r/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e},easeInCubic:function(t,e,i,r){return i*(t/=r)*t*t+e},easeOutCubic:function(t,e,i,r){return i*((t=t/r-1)*t*t+1)+e},easeInOutCubic:function(t,e,i,r){return(t/=r/2)<1?i/2*t*t*t+e:i/2*((t-=2)*t*t+2)+e},easeInQuart:function(t,e,i,r){return i*(t/=r)*t*t*t+e},easeOutQuart:function(t,e,i,r){return-i*((t=t/r-1)*t*t*t-1)+e},easeInOutQuart:function(t,e,i,r){return(t/=r/2)<1?i/2*t*t*t*t+e:-i/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(t,e,i,r){return i*(t/=r)*t*t*t*t+e},easeOutQuint:function(t,e,i,r){return i*((t=t/r-1)*t*t*t*t+1)+e},easeInOutQuint:function(t,e,i,r){return(t/=r/2)<1?i/2*t*t*t*t*t+e:i/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(t,e,i,r){return-i*Math.cos(t/r*(Math.PI/2))+i+e},easeOutSine:function(t,e,i,r){return i*Math.sin(t/r*(Math.PI/2))+e},easeInOutSine:function(t,e,i,r){return-i/2*(Math.cos(Math.PI*t/r)-1)+e},easeInExpo:function(t,e,i,r){return 0===t?e:i*Math.pow(2,10*(t/r-1))+e},easeOutExpo:function(t,e,i,r){return t===r?e+i:i*(1-Math.pow(2,-10*t/r))+e},easeInOutExpo:function(t,e,i,r){return 0===t?e:t===r?e+i:(t/=r/2)<1?i/2*Math.pow(2,10*(t-1))+e:i/2*(2-Math.pow(2,-10*--t))+e},easeInCirc:function(t,e,i,r){return-i*(Math.sqrt(1-(t/=r)*t)-1)+e},easeOutCirc:function(t,e,i,r){return i*Math.sqrt(1-(t=t/r-1)*t)+e},easeInOutCirc:function(t,e,i,r){return(t/=r/2)<1?-i/2*(Math.sqrt(1-t*t)-1)+e:i/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(i,r,s,n){var o=0;return 0===i?r:1==(i/=n)?r+s:(o||(o=.3*n),-e(t(s,s,o,1.70158),i,n)+r)},easeOutElastic:function(e,i,r,s){var n=0,o=r;if(0===e)return i;if(1==(e/=s))return i+r;n||(n=.3*s);var a=t(o,r,n,1.70158);return a.a*Math.pow(2,-10*e)*Math.sin((e*s-a.s)*(2*Math.PI)/a.p)+a.c+i},easeInOutElastic:function(i,r,s,n){var o=0,a=s;if(0===i)return r;if(2==(i/=n/2))return r+s;o||(o=n*(.3*1.5));var h=t(a,s,o,1.70158);return i<1?-.5*e(h,i,n)+r:h.a*Math.pow(2,-10*(i-=1))*Math.sin((i*n-h.s)*(2*Math.PI)/h.p)*.5+h.c+r},easeInBack:function(t,e,i,r,s){return void 0===s&&(s=1.70158),i*(t/=r)*t*((s+1)*t-s)+e},easeOutBack:function(t,e,i,r,s){return void 0===s&&(s=1.70158),i*((t=t/r-1)*t*((s+1)*t+s)+1)+e},easeInOutBack:function(t,e,i,r,s){return void 0===s&&(s=1.70158),(t/=r/2)<1?i/2*(t*t*((1+(s*=1.525))*t-s))+e:i/2*((t-=2)*t*((1+(s*=1.525))*t+s)+2)+e},easeInBounce:i,easeOutBounce:r,easeInOutBounce:function(t,e,s,n){return t<n/2?.5*i(2*t,0,s,n)+e:.5*r(2*t-n,0,s,n)+.5*s+e}}}(),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.util.string.capitalize,s=e.util.object.clone,n=e.util.toFixed,o=e.util.parseUnit,a=e.util.multiplyTransformMatrices,h=/^(path|circle|polygon|polyline|ellipse|rect|line|image|text)$/i,c=/^(symbol|image|marker|pattern|view|svg)$/i,l=/^(?:pattern|defs|symbol|metadata)$/i,u=/^(symbol|g|a|svg)$/i,f={cx:"left",x:"left",r:"radius",cy:"top",y:"top",display:"visible",visibility:"visible",transform:"transformMatrix","fill-opacity":"fillOpacity","fill-rule":"fillRule","font-family":"fontFamily","font-size":"fontSize","font-style":"fontStyle","font-weight":"fontWeight","stroke-dasharray":"strokeDashArray","stroke-linecap":"strokeLineCap","stroke-linejoin":"strokeLineJoin","stroke-miterlimit":"strokeMiterLimit","stroke-opacity":"strokeOpacity","stroke-width":"strokeWidth","text-decoration":"textDecoration","text-anchor":"originX"},d={stroke:"strokeOpacity",fill:"fillOpacity"};function g(t){return t in f?f[t]:t}function p(t,i,r,s){var n,h="[object Array]"===Object.prototype.toString.call(i);return"fill"!==t&&"stroke"!==t||"none"!==i?"strokeDashArray"===t?i=i.replace(/,/g," ").split(/\s+/).map(function(t){return parseFloat(t)}):"transformMatrix"===t?i=r&&r.transformMatrix?a(r.transformMatrix,e.parseTransformAttribute(i)):e.parseTransformAttribute(i):"visible"===t?(i="none"!==i&&"hidden"!==i,r&&!1===r.visible&&(i=!1)):"originX"===t?i="start"===i?"left":"end"===i?"right":"center":n=h?i.map(o):o(i,s):i="",!h&&isNaN(n)?i:n}function v(t,e){var i,r=!0;return(i=b(t,e.pop()))&&e.length&&(r=function(t,e){var i,r=!0;for(;t.parentNode&&1===t.parentNode.nodeType&&e.length;)r&&(i=e.pop()),t=t.parentNode,r=b(t,i);return 0===e.length}(t,e)),i&&r&&0===e.length}function b(t,e){var i,r=t.nodeName,s=t.getAttribute("class"),n=t.getAttribute("id");if(i=new RegExp("^"+r,"i"),e=e.replace(i,""),n&&e.length&&(i=new RegExp("#"+n+"(?![a-zA-Z\\-]+)","i"),e=e.replace(i,"")),s&&e.length)for(var o=(s=s.split(" ")).length;o--;)i=new RegExp("\\."+s[o]+"(?![a-zA-Z\\-]+)","i"),e=e.replace(i,"");return 0===e.length}function m(t,e){var i;if(t.getElementById&&(i=t.getElementById(e)),i)return i;var r,s,n=t.getElementsByTagName("*");for(s=0;s<n.length;s++)if(e===(r=n[s]).getAttribute("id"))return r}e.cssRules={},e.gradientDefs={},e.parseTransformAttribute=function(){var t=[1,0,0,1,0,0],i=e.reNum,r="(?:\\s+,?\\s*|,\\s*)",s="(?:"+("(?:(matrix)\\s*\\(\\s*("+i+")"+r+"("+i+")"+r+"("+i+")"+r+"("+i+")"+r+"("+i+")"+r+"("+i+")\\s*\\))")+"|"+("(?:(translate)\\s*\\(\\s*("+i+")(?:"+r+"("+i+"))?\\s*\\))")+"|"+("(?:(scale)\\s*\\(\\s*("+i+")(?:"+r+"("+i+"))?\\s*\\))")+"|"+("(?:(rotate)\\s*\\(\\s*("+i+")(?:"+r+"("+i+")"+r+"("+i+"))?\\s*\\))")+"|"+("(?:(skewX)\\s*\\(\\s*("+i+")\\s*\\))")+"|"+("(?:(skewY)\\s*\\(\\s*("+i+")\\s*\\))")+")",n=new RegExp("^\\s*(?:"+("(?:"+s+"(?:"+r+"*"+s+")*)")+"?)\\s*$"),o=new RegExp(s,"g");return function(i){var r=t.concat(),a=[];if(!i||i&&!n.test(i))return r;i.replace(o,function(i){var n,o,h,c,l,u,f,d,g,p,v,b,m,y=new RegExp(s).exec(i).filter(function(t){return""!==t&&null!=t}),_=y[1],x=y.slice(2).map(parseFloat);switch(_){case"translate":m=x,(b=r)[4]=m[0],2===m.length&&(b[5]=m[1]);break;case"rotate":x[0]=e.util.degreesToRadians(x[0]),f=r,g=(d=x)[0],p=3===d.length?d[1]:0,v=3===d.length?d[2]:0,f[0]=Math.cos(g),f[1]=Math.sin(g),f[2]=-Math.sin(g),f[3]=Math.cos(g),f[4]=p-(f[0]*p+f[2]*v),f[5]=v-(f[1]*p+f[3]*v);break;case"scale":h=r,l=(c=x)[0],u=2===c.length?c[1]:c[0],h[0]=l,h[3]=u;break;case"skewX":o=x,r[2]=Math.tan(e.util.degreesToRadians(o[0]));break;case"skewY":n=x,r[1]=Math.tan(e.util.degreesToRadians(n[0]));break;case"matrix":r=x}a.push(r.concat()),r=t.concat()});for(var h=a[0];a.length>1;)a.shift(),h=e.util.multiplyTransformMatrices(h,a[0]);return h}}();var y=new RegExp("^\\s*("+e.reNum+"+)\\s*,?\\s*("+e.reNum+"+)\\s*,?\\s*("+e.reNum+"+)\\s*,?\\s*("+e.reNum+"+)\\s*$");function _(t){var i,r,s,n,a,h,l=t.getAttribute("viewBox"),u=1,f=1,d=t.getAttribute("width"),g=t.getAttribute("height"),p=t.getAttribute("x")||0,v=t.getAttribute("y")||0,b=t.getAttribute("preserveAspectRatio")||"",m=!l||!c.test(t.tagName)||!(l=l.match(y)),_=!d||!g||"100%"===d||"100%"===g,x=m&&_,S={},C="";if(S.width=0,S.height=0,S.toBeParsed=x,x)return S;if(m)return S.width=o(d),S.height=o(g),S;if(i=-parseFloat(l[1]),r=-parseFloat(l[2]),s=parseFloat(l[3]),n=parseFloat(l[4]),_?(S.width=s,S.height=n):(S.width=o(d),S.height=o(g),u=S.width/s,f=S.height/n),"none"!==(b=e.util.parsePreserveAspectRatioAttribute(b)).alignX&&(f=u=u>f?f:u),1===u&&1===f&&0===i&&0===r&&0===p&&0===v)return S;if((p||v)&&(C=" translate("+o(p)+" "+o(v)+") "),a=C+" matrix("+u+" 0 0 "+f+" "+i*u+" "+r*f+") ","svg"===t.tagName){for(h=t.ownerDocument.createElement("g");null!=t.firstChild;)h.appendChild(t.firstChild);t.appendChild(h)}else a=(h=t).getAttribute("transform")+a;return h.setAttribute("transform",a),S}e.parseSVGDocument=function(){return function(t,i,r){if(t){!function(t){for(var e=t.getElementsByTagName("use"),i=0;e.length&&i<e.length;){var r,s,n,o,a=e[i],h=a.getAttribute("xlink:href").substr(1),c=a.getAttribute("x")||0,l=a.getAttribute("y")||0,u=m(t,h).cloneNode(!0),f=(u.getAttribute("transform")||"")+" translate("+c+", "+l+")",d=e.length;if(_(u),/^svg$/i.test(u.nodeName)){var g=u.ownerDocument.createElement("g");for(s=0,o=(n=u.attributes).length;s<o;s++)r=n.item(s),g.setAttribute(r.nodeName,r.nodeValue);for(;null!=u.firstChild;)g.appendChild(u.firstChild);u=g}for(s=0,o=(n=a.attributes).length;s<o;s++)"x"!==(r=n.item(s)).nodeName&&"y"!==r.nodeName&&"xlink:href"!==r.nodeName&&("transform"===r.nodeName?f=r.nodeValue+" "+f:u.setAttribute(r.nodeName,r.nodeValue));u.setAttribute("transform",f),u.setAttribute("instantiated_by_use","1"),u.removeAttribute("id"),a.parentNode.replaceChild(u,a),e.length===d&&i++}}(t);var n=new Date,o=e.Object.__uid++,a=_(t),c=e.util.toArray(t.getElementsByTagName("*"));if(a.svgUid=o,0===c.length&&e.isLikelyNode){for(var u=[],f=0,d=(c=t.selectNodes('//*[name(.)!="svg"]')).length;f<d;f++)u[f]=c[f];c=u}var g=c.filter(function(t){return _(t),h.test(t.tagName)&&!function(t,e){for(;t&&(t=t.parentNode);)if(e.test(t.nodeName)&&!t.getAttribute("instantiated_by_use"))return!0;return!1}(t,l)});!g||g&&!g.length?i&&i([],{}):(e.gradientDefs[o]=e.getGradientDefs(t),e.cssRules[o]=e.getCSSRules(t),e.parseElements(g,function(t){e.documentParsingTime=new Date-n,i&&i(t,a)},s(a),r))}}}();var x={has:function(t,e){e(!1)},get:function(){},set:function(){}};function S(t,e,i){e[i]&&e[i].toSVG&&t.push('\t<pattern x="0" y="0" id="',i,'Pattern" ','width="',e[i].source.width,'" height="',e[i].source.height,'" patternUnits="userSpaceOnUse">\n','\t\t<image x="0" y="0" ','width="',e[i].source.width,'" height="',e[i].source.height,'" xlink:href="',e[i].source.src,'"></image>\n\t</pattern>\n')}var C=new RegExp("(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*("+e.reNum+"(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|"+e.reNum+"))?\\s+(.*)");i(e,{parseFontDeclaration:function(t,e){var i=t.match(C);if(i){var r=i[1],s=i[3],n=i[4],a=i[5],h=i[6];r&&(e.fontStyle=r),s&&(e.fontWeight=isNaN(parseFloat(s))?s:parseFloat(s)),n&&(e.fontSize=o(n)),h&&(e.fontFamily=h),a&&(e.lineHeight="normal"===a?1:a)}},getGradientDefs:function(t){var e,i,r,s,n=t.getElementsByTagName("linearGradient"),o=t.getElementsByTagName("radialGradient"),a=0,h=[],c={},l={};for(h.length=n.length+o.length,i=n.length;i--;)h[a++]=n[i];for(i=o.length;i--;)h[a++]=o[i];for(;a--;)s=(e=h[a]).getAttribute("xlink:href"),r=e.getAttribute("id"),s&&(l[r]=s.substr(1)),c[r]=e;for(r in l){var u=c[l[r]].cloneNode(!0);for(e=c[r];u.firstChild;)e.appendChild(u.firstChild)}return c},parseAttributes:function(t,r,s){if(t){var o,a,h={};void 0===s&&(s=t.getAttribute("svgUid")),t.parentNode&&u.test(t.parentNode.nodeName)&&(h=e.parseAttributes(t.parentNode,r,s)),a=h&&h.fontSize||t.getAttribute("font-size")||e.Text.DEFAULT_SVG_FONT_SIZE;var c=r.reduce(function(e,i){return(o=t.getAttribute(i))&&(i=g(i),o=p(i,o,h,a),e[i]=o),e},{});return(c=i(c,i(function(t,i){var r={};for(var s in e.cssRules[i])if(v(t,s.split(" ")))for(var n in e.cssRules[i][s])r[n]=e.cssRules[i][s][n];return r}(t,s),e.parseStyleAttribute(t)))).font&&e.parseFontDeclaration(c.font,c),function(t){for(var i in d)if(void 0!==t[d[i]]&&""!==t[i]){if(void 0===t[i]){if(!e.Object.prototype[i])continue;t[i]=e.Object.prototype[i]}if(0!==t[i].indexOf("url(")){var r=new e.Color(t[i]);t[i]=r.setAlpha(n(r.getAlpha()*t[d[i]],2)).toRgba()}}return t}(i(h,c))}},parseElements:function(t,i,r,s){new e.ElementsParser(t,i,r,s).parse()},parseStyleAttribute:function(t){var e,i,r,s={},n=t.getAttribute("style");return n?("string"==typeof n?(e=s,n.replace(/;\s*$/,"").split(";").forEach(function(t){var s=t.split(":");i=g(s[0].trim().toLowerCase()),r=p(i,s[1].trim()),e[i]=r})):function(t,e){var i,r;for(var s in t)void 0!==t[s]&&(r=p(i=g(s.toLowerCase()),t[s]),e[i]=r)}(n,s),s):s},parsePointsAttribute:function(t){if(!t)return null;var e,i,r=[];for(e=0,i=(t=(t=t.replace(/,/g," ").trim()).split(/\s+/)).length;e<i;e+=2)r.push({x:parseFloat(t[e]),y:parseFloat(t[e+1])});return r},getCSSRules:function(t){for(var i=t.getElementsByTagName("style"),r={},s=0,n=i.length;s<n;s++){var o=i[s].textContent||i[s].text;""!==(o=o.replace(/\/\*[\s\S]*?\*\//g,"")).trim()&&o.match(/[^{]*\{[\s\S]*?\}/g).map(function(t){return t.trim()}).forEach(function(t){for(var i=t.match(/([\s\S]*?)\s*\{([^}]*)\}/),s={},n=i[2].trim().replace(/;$/,"").split(/\s*;\s*/),o=0,a=n.length;o<a;o++){var h=n[o].split(/\s*:\s*/),c=g(h[0]),l=p(c,h[1],h[0]);s[c]=l}(t=i[1]).split(",").forEach(function(t){""!==(t=t.replace(/^svg/i,"").trim())&&(r[t]=e.util.object.clone(s))})})}return r},loadSVGFromURL:function(t,i,s){function n(r){var n=r.responseXML;n&&!n.documentElement&&e.window.ActiveXObject&&r.responseText&&((n=new ActiveXObject("Microsoft.XMLDOM")).async="false",n.loadXML(r.responseText.replace(/<!DOCTYPE[\s\S]*?(\[[\s\S]*\])*?>/i,""))),n&&n.documentElement&&e.parseSVGDocument(n.documentElement,function(r,s){x.set(t,{objects:e.util.array.invoke(r,"toObject"),options:s}),i(r,s)},s)}t=t.replace(/^\n\s*/,"").trim(),x.has(t,function(s){s?x.get(t,function(t){var s,n,o,a=(n=(s=t).objects,o=s.options,{objects:n=n.map(function(t){return e[r(t.type)].fromObject(t)}),options:o});i(a.objects,a.options)}):new e.util.request(t,{method:"get",onComplete:n})})},loadSVGFromString:function(t,i,r){var s;if(t=t.trim(),"undefined"!=typeof DOMParser){var n=new DOMParser;n&&n.parseFromString&&(s=n.parseFromString(t,"text/xml"))}else e.window.ActiveXObject&&((s=new ActiveXObject("Microsoft.XMLDOM")).async="false",s.loadXML(t.replace(/<!DOCTYPE[\s\S]*?(\[[\s\S]*\])*?>/i,"")));e.parseSVGDocument(s.documentElement,function(t,e){i(t,e)},r)},createSVGFontFacesMarkup:function(t){for(var i,r,s,n,o,a,h="",c={},l=e.fontPaths,u=0,f=t.length;u<f;u++)if(r=(i=t[u]).fontFamily,-1!==i.type.indexOf("text")&&!c[r]&&l[r]&&(c[r]=!0,i.styles)){s=i.styles;for(o in s){n=s[o];for(a in n)!c[r=n[a].fontFamily]&&l[r]&&(c[r]=!0)}}for(var d in c)h+=["\t\t@font-face {\n","\t\t\tfont-family: '",d,"';\n","\t\t\tsrc: url('",l[d],"');\n","\t\t}\n"].join("");return h&&(h=['\t<style type="text/css">',"<![CDATA[\n",h,"]]>","</style>\n"].join("")),h},createSVGRefElementsMarkup:function(t){var e=[];return S(e,t,"backgroundColor"),S(e,t,"overlayColor"),e.join("")}})}("undefined"!=typeof exports?exports:this),fabric.ElementsParser=function(t,e,i,r){this.elements=t,this.callback=e,this.options=i,this.reviver=r,this.svgUid=i&&i.svgUid||0},fabric.ElementsParser.prototype.parse=function(){this.instances=new Array(this.elements.length),this.numElements=this.elements.length,this.createObjects()},fabric.ElementsParser.prototype.createObjects=function(){for(var t=0,e=this.elements.length;t<e;t++)this.elements[t].setAttribute("svgUid",this.svgUid),function(t,e){setTimeout(function(){t.createObject(t.elements[e],e)},0)}(this,t)},fabric.ElementsParser.prototype.createObject=function(t,e){var i=fabric[fabric.util.string.capitalize(t.tagName)];if(i&&i.fromElement)try{this._createObject(i,t,e)}catch(t){fabric.log(t)}else this.checkIfDone()},fabric.ElementsParser.prototype._createObject=function(t,e,i){if(t.async)t.fromElement(e,this.createCallback(i,e),this.options);else{var r=t.fromElement(e,this.options);this.resolveGradient(r,"fill"),this.resolveGradient(r,"stroke"),this.reviver&&this.reviver(e,r),this.instances[i]=r,this.checkIfDone()}},fabric.ElementsParser.prototype.createCallback=function(t,e){var i=this;return function(r){i.resolveGradient(r,"fill"),i.resolveGradient(r,"stroke"),i.reviver&&i.reviver(e,r),i.instances[t]=r,i.checkIfDone()}},fabric.ElementsParser.prototype.resolveGradient=function(t,e){var i=t.get(e);if(/^url\(/.test(i)){var r=i.slice(5,i.length-1);fabric.gradientDefs[this.svgUid][r]&&t.set(e,fabric.Gradient.fromElement(fabric.gradientDefs[this.svgUid][r],t))}},fabric.ElementsParser.prototype.checkIfDone=function(){0==--this.numElements&&(this.instances=this.instances.filter(function(t){return null!=t}),this.callback(this.instances))},function(t){"use strict";var e=t.fabric||(t.fabric={});function i(t,e){this.x=t,this.y=e}e.Point?e.warn("fabric.Point is already defined"):(e.Point=i,i.prototype={constructor:i,add:function(t){return new i(this.x+t.x,this.y+t.y)},addEquals:function(t){return this.x+=t.x,this.y+=t.y,this},scalarAdd:function(t){return new i(this.x+t,this.y+t)},scalarAddEquals:function(t){return this.x+=t,this.y+=t,this},subtract:function(t){return new i(this.x-t.x,this.y-t.y)},subtractEquals:function(t){return this.x-=t.x,this.y-=t.y,this},scalarSubtract:function(t){return new i(this.x-t,this.y-t)},scalarSubtractEquals:function(t){return this.x-=t,this.y-=t,this},multiply:function(t){return new i(this.x*t,this.y*t)},multiplyEquals:function(t){return this.x*=t,this.y*=t,this},divide:function(t){return new i(this.x/t,this.y/t)},divideEquals:function(t){return this.x/=t,this.y/=t,this},eq:function(t){return this.x===t.x&&this.y===t.y},lt:function(t){return this.x<t.x&&this.y<t.y},lte:function(t){return this.x<=t.x&&this.y<=t.y},gt:function(t){return this.x>t.x&&this.y>t.y},gte:function(t){return this.x>=t.x&&this.y>=t.y},lerp:function(t,e){return new i(this.x+(t.x-this.x)*e,this.y+(t.y-this.y)*e)},distanceFrom:function(t){var e=this.x-t.x,i=this.y-t.y;return Math.sqrt(e*e+i*i)},midPointFrom:function(t){return new i(this.x+(t.x-this.x)/2,this.y+(t.y-this.y)/2)},min:function(t){return new i(Math.min(this.x,t.x),Math.min(this.y,t.y))},max:function(t){return new i(Math.max(this.x,t.x),Math.max(this.y,t.y))},toString:function(){return this.x+","+this.y},setXY:function(t,e){this.x=t,this.y=e},setFromPoint:function(t){this.x=t.x,this.y=t.y},swap:function(t){var e=this.x,i=this.y;this.x=t.x,this.y=t.y,t.x=e,t.y=i}})}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={});function i(t){this.status=t,this.points=[]}e.Intersection?e.warn("fabric.Intersection is already defined"):(e.Intersection=i,e.Intersection.prototype={appendPoint:function(t){this.points.push(t)},appendPoints:function(t){this.points=this.points.concat(t)}},e.Intersection.intersectLineLine=function(t,r,s,n){var o,a=(n.x-s.x)*(t.y-s.y)-(n.y-s.y)*(t.x-s.x),h=(r.x-t.x)*(t.y-s.y)-(r.y-t.y)*(t.x-s.x),c=(n.y-s.y)*(r.x-t.x)-(n.x-s.x)*(r.y-t.y);if(0!==c){var l=a/c,u=h/c;0<=l&&l<=1&&0<=u&&u<=1?(o=new i("Intersection")).points.push(new e.Point(t.x+l*(r.x-t.x),t.y+l*(r.y-t.y))):o=new i}else o=new i(0===a||0===h?"Coincident":"Parallel");return o},e.Intersection.intersectLinePolygon=function(t,e,r){for(var s=new i,n=r.length,o=0;o<n;o++){var a=r[o],h=r[(o+1)%n],c=i.intersectLineLine(t,e,a,h);s.appendPoints(c.points)}return s.points.length>0&&(s.status="Intersection"),s},e.Intersection.intersectPolygonPolygon=function(t,e){for(var r=new i,s=t.length,n=0;n<s;n++){var o=t[n],a=t[(n+1)%s],h=i.intersectLinePolygon(o,a,e);r.appendPoints(h.points)}return r.points.length>0&&(r.status="Intersection"),r},e.Intersection.intersectPolygonRectangle=function(t,r,s){var n=r.min(s),o=r.max(s),a=new e.Point(o.x,n.y),h=new e.Point(n.x,o.y),c=i.intersectLinePolygon(n,a,t),l=i.intersectLinePolygon(a,o,t),u=i.intersectLinePolygon(o,h,t),f=i.intersectLinePolygon(h,n,t),d=new i;return d.appendPoints(c.points),d.appendPoints(l.points),d.appendPoints(u.points),d.appendPoints(f.points),d.points.length>0&&(d.status="Intersection"),d})}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={});function i(t){t?this._tryParsingColor(t):this.setSource([0,0,0,1])}function r(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*(e-t)*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}e.Color?e.warn("fabric.Color is already defined."):(e.Color=i,e.Color.prototype={_tryParsingColor:function(t){var e;t in i.colorNameMap&&(t=i.colorNameMap[t]),"transparent"===t&&(e=[255,255,255,0]),e||(e=i.sourceFromHex(t)),e||(e=i.sourceFromRgb(t)),e||(e=i.sourceFromHsl(t)),e||(e=[0,0,0,1]),e&&this.setSource(e)},_rgbToHsl:function(t,i,r){t/=255,i/=255,r/=255;var s,n,o,a=e.util.array.max([t,i,r]),h=e.util.array.min([t,i,r]);if(o=(a+h)/2,a===h)s=n=0;else{var c=a-h;switch(n=o>.5?c/(2-a-h):c/(a+h),a){case t:s=(i-r)/c+(i<r?6:0);break;case i:s=(r-t)/c+2;break;case r:s=(t-i)/c+4}s/=6}return[Math.round(360*s),Math.round(100*n),Math.round(100*o)]},getSource:function(){return this._source},setSource:function(t){this._source=t},toRgb:function(){var t=this.getSource();return"rgb("+t[0]+","+t[1]+","+t[2]+")"},toRgba:function(){var t=this.getSource();return"rgba("+t[0]+","+t[1]+","+t[2]+","+t[3]+")"},toHsl:function(){var t=this.getSource(),e=this._rgbToHsl(t[0],t[1],t[2]);return"hsl("+e[0]+","+e[1]+"%,"+e[2]+"%)"},toHsla:function(){var t=this.getSource(),e=this._rgbToHsl(t[0],t[1],t[2]);return"hsla("+e[0]+","+e[1]+"%,"+e[2]+"%,"+t[3]+")"},toHex:function(){var t,e,i,r=this.getSource();return t=1===(t=r[0].toString(16)).length?"0"+t:t,e=1===(e=r[1].toString(16)).length?"0"+e:e,i=1===(i=r[2].toString(16)).length?"0"+i:i,t.toUpperCase()+e.toUpperCase()+i.toUpperCase()},getAlpha:function(){return this.getSource()[3]},setAlpha:function(t){var e=this.getSource();return e[3]=t,this.setSource(e),this},toGrayscale:function(){var t=this.getSource(),e=parseInt((.3*t[0]+.59*t[1]+.11*t[2]).toFixed(0),10),i=t[3];return this.setSource([e,e,e,i]),this},toBlackWhite:function(t){var e=this.getSource(),i=(.3*e[0]+.59*e[1]+.11*e[2]).toFixed(0),r=e[3];return t=t||127,i=Number(i)<Number(t)?0:255,this.setSource([i,i,i,r]),this},overlayWith:function(t){t instanceof i||(t=new i(t));for(var e=[],r=this.getAlpha(),s=this.getSource(),n=t.getSource(),o=0;o<3;o++)e.push(Math.round(.5*s[o]+.5*n[o]));return e[3]=r,this.setSource(e),this}},e.Color.reRGBa=/^rgba?\(\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/,e.Color.reHSLa=/^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3}\%)\s*,\s*(\d{1,3}\%)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/,e.Color.reHex=/^#?([0-9a-f]{6}|[0-9a-f]{3})$/i,e.Color.colorNameMap={aqua:"#00FFFF",black:"#000000",blue:"#0000FF",fuchsia:"#FF00FF",gray:"#808080",grey:"#808080",green:"#008000",lime:"#00FF00",maroon:"#800000",navy:"#000080",olive:"#808000",orange:"#FFA500",purple:"#800080",red:"#FF0000",silver:"#C0C0C0",teal:"#008080",white:"#FFFFFF",yellow:"#FFFF00"},e.Color.fromRgb=function(t){return i.fromSource(i.sourceFromRgb(t))},e.Color.sourceFromRgb=function(t){var e=t.match(i.reRGBa);if(e){var r=parseInt(e[1],10)/(/%$/.test(e[1])?100:1)*(/%$/.test(e[1])?255:1),s=parseInt(e[2],10)/(/%$/.test(e[2])?100:1)*(/%$/.test(e[2])?255:1),n=parseInt(e[3],10)/(/%$/.test(e[3])?100:1)*(/%$/.test(e[3])?255:1);return[parseInt(r,10),parseInt(s,10),parseInt(n,10),e[4]?parseFloat(e[4]):1]}},e.Color.fromRgba=i.fromRgb,e.Color.fromHsl=function(t){return i.fromSource(i.sourceFromHsl(t))},e.Color.sourceFromHsl=function(t){var e=t.match(i.reHSLa);if(e){var s,n,o,a=(parseFloat(e[1])%360+360)%360/360,h=parseFloat(e[2])/(/%$/.test(e[2])?100:1),c=parseFloat(e[3])/(/%$/.test(e[3])?100:1);if(0===h)s=n=o=c;else{var l=c<=.5?c*(h+1):c+h-c*h,u=2*c-l;s=r(u,l,a+1/3),n=r(u,l,a),o=r(u,l,a-1/3)}return[Math.round(255*s),Math.round(255*n),Math.round(255*o),e[4]?parseFloat(e[4]):1]}},e.Color.fromHsla=i.fromHsl,e.Color.fromHex=function(t){return i.fromSource(i.sourceFromHex(t))},e.Color.sourceFromHex=function(t){if(t.match(i.reHex)){var e=t.slice(t.indexOf("#")+1),r=3===e.length,s=r?e.charAt(0)+e.charAt(0):e.substring(0,2),n=r?e.charAt(1)+e.charAt(1):e.substring(2,4),o=r?e.charAt(2)+e.charAt(2):e.substring(4,6);return[parseInt(s,16),parseInt(n,16),parseInt(o,16),1]}},e.Color.fromSource=function(t){var e=new i;return e.setSource(t),e})}("undefined"!=typeof exports?exports:this),function(){function t(t){var e,i,r,s=t.getAttribute("style"),n=t.getAttribute("offset")||0;if(n=(n=parseFloat(n)/(/%$/.test(n)?100:1))<0?0:n>1?1:n,s){var o=s.split(/\s*;\s*/);""===o[o.length-1]&&o.pop();for(var a=o.length;a--;){var h=o[a].split(/\s*:\s*/),c=h[0].trim(),l=h[1].trim();"stop-color"===c?e=l:"stop-opacity"===c&&(r=l)}}return e||(e=t.getAttribute("stop-color")||"rgb(0,0,0)"),r||(r=t.getAttribute("stop-opacity")),i=(e=new fabric.Color(e)).getAlpha(),r=isNaN(parseFloat(r))?1:parseFloat(r),r*=i,{offset:n,color:e.toRgb(),opacity:r}}function e(t,e,i){var r,s=0,n=1,o="";for(var a in e)r=parseFloat(e[a],10),n="string"==typeof e[a]&&/^\d+%$/.test(e[a])?.01:1,"x1"===a||"x2"===a||"r2"===a?(n*="objectBoundingBox"===i?t.width:1,s="objectBoundingBox"===i&&t.left||0):"y1"!==a&&"y2"!==a||(n*="objectBoundingBox"===i?t.height:1,s="objectBoundingBox"===i&&t.top||0),e[a]=r*n+s;if("ellipse"===t.type&&null!==e.r2&&"objectBoundingBox"===i&&t.rx!==t.ry){var h=t.ry/t.rx;o=" scale(1, "+h+")",e.y1&&(e.y1/=h),e.y2&&(e.y2/=h)}return o}fabric.Gradient=fabric.util.createClass({offsetX:0,offsetY:0,initialize:function(t){t||(t={});var e={};this.id=fabric.Object.__uid++,this.type=t.type||"linear",e={x1:t.coords.x1||0,y1:t.coords.y1||0,x2:t.coords.x2||0,y2:t.coords.y2||0},"radial"===this.type&&(e.r1=t.coords.r1||0,e.r2=t.coords.r2||0),this.coords=e,this.colorStops=t.colorStops.slice(),t.gradientTransform&&(this.gradientTransform=t.gradientTransform),this.offsetX=t.offsetX||this.offsetX,this.offsetY=t.offsetY||this.offsetY},addColorStop:function(t){for(var e in t){var i=new fabric.Color(t[e]);this.colorStops.push({offset:e,color:i.toRgb(),opacity:i.getAlpha()})}return this},toObject:function(){return{type:this.type,coords:this.coords,colorStops:this.colorStops,offsetX:this.offsetX,offsetY:this.offsetY,gradientTransform:this.gradientTransform?this.gradientTransform.concat():this.gradientTransform}},toSVG:function(t){var e,i,r=fabric.util.object.clone(this.coords);if(this.colorStops.sort(function(t,e){return t.offset-e.offset}),!t.group||"path-group"!==t.group.type)for(var s in r)"x1"===s||"x2"===s||"r2"===s?r[s]+=this.offsetX-t.width/2:"y1"!==s&&"y2"!==s||(r[s]+=this.offsetY-t.height/2);i='id="SVGID_'+this.id+'" gradientUnits="userSpaceOnUse"',this.gradientTransform&&(i+=' gradientTransform="matrix('+this.gradientTransform.join(" ")+')" '),"linear"===this.type?e=["<linearGradient ",i,' x1="',r.x1,'" y1="',r.y1,'" x2="',r.x2,'" y2="',r.y2,'">\n']:"radial"===this.type&&(e=["<radialGradient ",i,' cx="',r.x2,'" cy="',r.y2,'" r="',r.r2,'" fx="',r.x1,'" fy="',r.y1,'">\n']);for(var n=0;n<this.colorStops.length;n++)e.push("<stop ",'offset="',100*this.colorStops[n].offset+"%",'" style="stop-color:',this.colorStops[n].color,null!=this.colorStops[n].opacity?";stop-opacity: "+this.colorStops[n].opacity:";",'"/>\n');return e.push("linear"===this.type?"</linearGradient>\n":"</radialGradient>\n"),e.join("")},toLive:function(t,e){var i,r,s=fabric.util.object.clone(this.coords);if(this.type){if(e.group&&"path-group"===e.group.type)for(r in s)"x1"===r||"x2"===r?s[r]+=-this.offsetX+e.width/2:"y1"!==r&&"y2"!==r||(s[r]+=-this.offsetY+e.height/2);"linear"===this.type?i=t.createLinearGradient(s.x1,s.y1,s.x2,s.y2):"radial"===this.type&&(i=t.createRadialGradient(s.x1,s.y1,s.r1,s.x2,s.y2,s.r2));for(var n=0,o=this.colorStops.length;n<o;n++){var a=this.colorStops[n].color,h=this.colorStops[n].opacity,c=this.colorStops[n].offset;void 0!==h&&(a=new fabric.Color(a).setAlpha(h).toRgba()),i.addColorStop(parseFloat(c),a)}return i}}}),fabric.util.object.extend(fabric.Gradient,{fromElement:function(i,r){var s,n,o,a=i.getElementsByTagName("stop"),h="linearGradient"===i.nodeName?"linear":"radial",c=i.getAttribute("gradientUnits")||"objectBoundingBox",l=i.getAttribute("gradientTransform"),u=[],f={};"linear"===h?f={x1:(o=i).getAttribute("x1")||0,y1:o.getAttribute("y1")||0,x2:o.getAttribute("x2")||"100%",y2:o.getAttribute("y2")||0}:"radial"===h&&(f={x1:(n=i).getAttribute("fx")||n.getAttribute("cx")||"50%",y1:n.getAttribute("fy")||n.getAttribute("cy")||"50%",r1:0,x2:n.getAttribute("cx")||"50%",y2:n.getAttribute("cy")||"50%",r2:n.getAttribute("r")||"50%"});for(var d=a.length;d--;)u.push(t(a[d]));s=e(r,f,c);var g=new fabric.Gradient({type:h,coords:f,colorStops:u,offsetX:-r.left,offsetY:-r.top});return(l||""!==s)&&(g.gradientTransform=fabric.parseTransformAttribute((l||"")+s)),g},forObject:function(t,i){return i||(i={}),e(t,i.coords,"userSpaceOnUse"),new fabric.Gradient(i)}})}(),fabric.Pattern=fabric.util.createClass({repeat:"repeat",offsetX:0,offsetY:0,initialize:function(t){if(t||(t={}),this.id=fabric.Object.__uid++,t.source)if("string"==typeof t.source)if(void 0!==fabric.util.getFunctionBody(t.source))this.source=new Function(fabric.util.getFunctionBody(t.source));else{var e=this;this.source=fabric.util.createImage(),fabric.util.loadImage(t.source,function(t){e.source=t})}else this.source=t.source;t.repeat&&(this.repeat=t.repeat),t.offsetX&&(this.offsetX=t.offsetX),t.offsetY&&(this.offsetY=t.offsetY)},toObject:function(){var t;return"function"==typeof this.source?t=String(this.source):"string"==typeof this.source.src?t=this.source.src:"object"==typeof this.source&&this.source.toDataURL&&(t=this.source.toDataURL()),{source:t,repeat:this.repeat,offsetX:this.offsetX,offsetY:this.offsetY}},toSVG:function(t){var e="function"==typeof this.source?this.source():this.source,i=e.width/t.getWidth(),r=e.height/t.getHeight(),s=this.offsetX/t.getWidth(),n=this.offsetY/t.getHeight(),o="";return"repeat-x"!==this.repeat&&"no-repeat"!==this.repeat||(r=1),"repeat-y"!==this.repeat&&"no-repeat"!==this.repeat||(i=1),e.src?o=e.src:e.toDataURL&&(o=e.toDataURL()),'<pattern id="SVGID_'+this.id+'" x="'+s+'" y="'+n+'" width="'+i+'" height="'+r+'">\n<image x="0" y="0" width="'+e.width+'" height="'+e.height+'" xlink:href="'+o+'"></image>\n</pattern>\n'},toLive:function(t){var e="function"==typeof this.source?this.source():this.source;if(!e)return"";if(void 0!==e.src){if(!e.complete)return"";if(0===e.naturalWidth||0===e.naturalHeight)return""}return t.createPattern(e,this.repeat)}}),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.toFixed;e.Shadow?e.warn("fabric.Shadow is already defined."):(e.Shadow=e.util.createClass({color:"rgb(0,0,0)",blur:0,offsetX:0,offsetY:0,affectStroke:!1,includeDefaultValues:!0,initialize:function(t){"string"==typeof t&&(t=this._parseShadow(t));for(var i in t)this[i]=t[i];this.id=e.Object.__uid++},_parseShadow:function(t){var i=t.trim(),r=e.Shadow.reOffsetsAndBlur.exec(i)||[];return{color:(i.replace(e.Shadow.reOffsetsAndBlur,"")||"rgb(0,0,0)").trim(),offsetX:parseInt(r[1],10)||0,offsetY:parseInt(r[2],10)||0,blur:parseInt(r[3],10)||0}},toString:function(){return[this.offsetX,this.offsetY,this.blur,this.color].join("px ")},toSVG:function(t){var r=40,s=40,n=e.Object.NUM_FRACTION_DIGITS,o=e.util.rotateVector({x:this.offsetX,y:this.offsetY},e.util.degreesToRadians(-t.angle));return t.width&&t.height&&(r=100*i((Math.abs(o.x)+this.blur)/t.width,n)+20,s=100*i((Math.abs(o.y)+this.blur)/t.height,n)+20),t.flipX&&(o.x*=-1),t.flipY&&(o.y*=-1),'<filter id="SVGID_'+this.id+'" y="-'+s+'%" height="'+(100+2*s)+'%" x="-'+r+'%" width="'+(100+2*r)+'%" >\n\t<feGaussianBlur in="SourceAlpha" stdDeviation="'+i(this.blur?this.blur/2:0,n)+'"></feGaussianBlur>\n\t<feOffset dx="'+i(o.x,n)+'" dy="'+i(o.y,n)+'" result="oBlur" ></feOffset>\n\t<feFlood flood-color="'+this.color+'"/>\n\t<feComposite in2="oBlur" operator="in" />\n\t<feMerge>\n\t\t<feMergeNode></feMergeNode>\n\t\t<feMergeNode in="SourceGraphic"></feMergeNode>\n\t</feMerge>\n</filter>\n'},toObject:function(){if(this.includeDefaultValues)return{color:this.color,blur:this.blur,offsetX:this.offsetX,offsetY:this.offsetY,affectStroke:this.affectStroke};var t={},i=e.Shadow.prototype;return["color","blur","offsetX","offsetY","affectStroke"].forEach(function(e){this[e]!==i[e]&&(t[e]=this[e])},this),t}}),e.Shadow.reOffsetsAndBlur=/(?:\s|^)(-?\d+(?:px)?(?:\s?|$))?(-?\d+(?:px)?(?:\s?|$))?(\d+(?:px)?)?(?:\s?|$)(?:$|\s)/)}("undefined"!=typeof exports?exports:this),function(){"use strict";if(fabric.StaticCanvas)fabric.warn("fabric.StaticCanvas is already defined.");else{var t=fabric.util.object.extend,e=fabric.util.getElementOffset,i=fabric.util.removeFromArray,r=fabric.util.toFixed,s=new Error("Could not initialize `canvas` element");fabric.StaticCanvas=fabric.util.createClass({initialize:function(t,e){e||(e={}),this._initStatic(t,e)},backgroundColor:"",backgroundImage:null,overlayColor:"",overlayImage:null,includeDefaultValues:!0,stateful:!0,renderOnAddRemove:!0,clipTo:null,controlsAboveOverlay:!1,allowTouchScrolling:!1,imageSmoothingEnabled:!0,preserveObjectStacking:!1,viewportTransform:[1,0,0,1,0,0],onBeforeScaleRotate:function(){},enableRetinaScaling:!1,_initStatic:function(t,e){this._objects=[],this._createLowerCanvas(t),this._initOptions(e),this._setImageSmoothing(),this.interactive||this._initRetinaScaling(),e.overlayImage&&this.setOverlayImage(e.overlayImage,this.renderAll.bind(this)),e.backgroundImage&&this.setBackgroundImage(e.backgroundImage,this.renderAll.bind(this)),e.backgroundColor&&this.setBackgroundColor(e.backgroundColor,this.renderAll.bind(this)),e.overlayColor&&this.setOverlayColor(e.overlayColor,this.renderAll.bind(this)),this.calcOffset()},_isRetinaScaling:function(){return 1!==fabric.devicePixelRatio&&this.enableRetinaScaling},_initRetinaScaling:function(){this._isRetinaScaling()&&(this.lowerCanvasEl.setAttribute("width",this.width*fabric.devicePixelRatio),this.lowerCanvasEl.setAttribute("height",this.height*fabric.devicePixelRatio),this.contextContainer.scale(fabric.devicePixelRatio,fabric.devicePixelRatio))},calcOffset:function(){return this._offset=e(this.lowerCanvasEl),this},setOverlayImage:function(t,e,i){return this.__setBgOverlayImage("overlayImage",t,e,i)},setBackgroundImage:function(t,e,i){return this.__setBgOverlayImage("backgroundImage",t,e,i)},setOverlayColor:function(t,e){return this.__setBgOverlayColor("overlayColor",t,e)},setBackgroundColor:function(t,e){return this.__setBgOverlayColor("backgroundColor",t,e)},_setImageSmoothing:function(){var t=this.getContext();t.imageSmoothingEnabled=t.imageSmoothingEnabled||t.webkitImageSmoothingEnabled||t.mozImageSmoothingEnabled||t.msImageSmoothingEnabled||t.oImageSmoothingEnabled,t.imageSmoothingEnabled=this.imageSmoothingEnabled},__setBgOverlayImage:function(t,e,i,r){return"string"==typeof e?fabric.util.loadImage(e,function(e){this[t]=new fabric.Image(e,r),i&&i(e)},this,r&&r.crossOrigin):(r&&e.setOptions(r),this[t]=e,i&&i(e)),this},__setBgOverlayColor:function(t,e,i){if(e&&e.source){var r=this;fabric.util.loadImage(e.source,function(s){r[t]=new fabric.Pattern({source:s,repeat:e.repeat,offsetX:e.offsetX,offsetY:e.offsetY}),i&&i()})}else this[t]=e,i&&i();return this},_createCanvasElement:function(){var t=fabric.document.createElement("canvas");if(t.style||(t.style={}),!t)throw s;return this._initCanvasElement(t),t},_initCanvasElement:function(t){if(fabric.util.createCanvasElement(t),void 0===t.getContext)throw s},_initOptions:function(t){for(var e in t)this[e]=t[e];this.width=this.width||parseInt(this.lowerCanvasEl.width,10)||0,this.height=this.height||parseInt(this.lowerCanvasEl.height,10)||0,this.lowerCanvasEl.style&&(this.lowerCanvasEl.width=this.width,this.lowerCanvasEl.height=this.height,this.lowerCanvasEl.style.width=this.width+"px",this.lowerCanvasEl.style.height=this.height+"px",this.viewportTransform=this.viewportTransform.slice())},_createLowerCanvas:function(t){this.lowerCanvasEl=fabric.util.getById(t)||this._createCanvasElement(),this._initCanvasElement(this.lowerCanvasEl),fabric.util.addClass(this.lowerCanvasEl,"lower-canvas"),this.interactive&&this._applyCanvasStyle(this.lowerCanvasEl),this.contextContainer=this.lowerCanvasEl.getContext("2d")},getWidth:function(){return this.width},getHeight:function(){return this.height},setWidth:function(t,e){return this.setDimensions({width:t},e)},setHeight:function(t,e){return this.setDimensions({height:t},e)},setDimensions:function(t,e){var i;e=e||{};for(var r in t)i=t[r],e.cssOnly||(this._setBackstoreDimension(r,t[r]),i+="px"),e.backstoreOnly||this._setCssDimension(r,i);return this._initRetinaScaling(),this._setImageSmoothing(),this.calcOffset(),e.cssOnly||this.renderAll(),this},_setBackstoreDimension:function(t,e){return this.lowerCanvasEl[t]=e,this.upperCanvasEl&&(this.upperCanvasEl[t]=e),this.cacheCanvasEl&&(this.cacheCanvasEl[t]=e),this[t]=e,this},_setCssDimension:function(t,e){return this.lowerCanvasEl.style[t]=e,this.upperCanvasEl&&(this.upperCanvasEl.style[t]=e),this.wrapperEl&&(this.wrapperEl.style[t]=e),this},getZoom:function(){return Math.sqrt(this.viewportTransform[0]*this.viewportTransform[3])},setViewportTransform:function(t){var e=this.getActiveGroup();this.viewportTransform=t,this.renderAll();for(var i=0,r=this._objects.length;i<r;i++)this._objects[i].setCoords();return e&&e.setCoords(),this},zoomToPoint:function(t,e){var i=t;t=fabric.util.transformPoint(t,fabric.util.invertTransform(this.viewportTransform)),this.viewportTransform[0]=e,this.viewportTransform[3]=e;var r=fabric.util.transformPoint(t,this.viewportTransform);this.viewportTransform[4]+=i.x-r.x,this.viewportTransform[5]+=i.y-r.y,this.renderAll();for(var s=0,n=this._objects.length;s<n;s++)this._objects[s].setCoords();return this},setZoom:function(t){return this.zoomToPoint(new fabric.Point(0,0),t),this},absolutePan:function(t){this.viewportTransform[4]=-t.x,this.viewportTransform[5]=-t.y,this.renderAll();for(var e=0,i=this._objects.length;e<i;e++)this._objects[e].setCoords();return this},relativePan:function(t){return this.absolutePan(new fabric.Point(-t.x-this.viewportTransform[4],-t.y-this.viewportTransform[5]))},getElement:function(){return this.lowerCanvasEl},getActiveObject:function(){return null},getActiveGroup:function(){return null},_onObjectAdded:function(t){this.stateful&&t.setupState(),t._set("canvas",this),t.setCoords(),this.fire("object:added",{target:t}),t.fire("added")},_onObjectRemoved:function(t){this.getActiveObject()===t&&(this.fire("before:selection:cleared",{target:t}),this._discardActiveObject(),this.fire("selection:cleared")),this.fire("object:removed",{target:t}),t.fire("removed")},clearContext:function(t){return t.clearRect(0,0,this.width,this.height),this},getContext:function(){return this.contextContainer},clear:function(){return this._objects.length=0,this.discardActiveGroup&&this.discardActiveGroup(),this.discardActiveObject&&this.discardActiveObject(),this.clearContext(this.contextContainer),this.contextTop&&this.clearContext(this.contextTop),this.fire("canvas:cleared"),this.renderAll(),this},_chooseObjectsToRender:function(){var t,e=this.getActiveGroup(),i=[],r=[];if(e&&!this.preserveObjectStacking){for(var s=0,n=this._objects.length;s<n;s++)t=this._objects[s],e.contains(t)?r.push(t):i.push(t);e._set("_objects",r)}else i=this._objects;return i},renderAll:function(){var t,e=this.contextContainer;return this.contextTop&&this.selection&&!this._groupSelector&&!this.isDrawingMode&&this.clearContext(this.contextTop),this.clearContext(e),this.fire("before:render"),this.clipTo&&fabric.util.clipContext(this,e),this._renderBackground(e),e.save(),t=this._chooseObjectsToRender(),e.transform.apply(e,this.viewportTransform),this._renderObjects(e,t),this.preserveObjectStacking||this._renderObjects(e,[this.getActiveGroup()]),e.restore(),!this.controlsAboveOverlay&&this.interactive&&this.drawControls(e),this.clipTo&&e.restore(),this._renderOverlay(e),this.controlsAboveOverlay&&this.interactive&&this.drawControls(e),this.fire("after:render"),this},_renderObjects:function(t,e){for(var i=0,r=e.length;i<r;++i)e[i]&&e[i].render(t)},_renderBackgroundOrOverlay:function(t,e){var i=this[e+"Color"];i&&(t.fillStyle=i.toLive?i.toLive(t):i,t.fillRect(i.offsetX||0,i.offsetY||0,this.width,this.height)),(i=this[e+"Image"])&&i.render(t)},_renderBackground:function(t){this._renderBackgroundOrOverlay(t,"background")},_renderOverlay:function(t){this._renderBackgroundOrOverlay(t,"overlay")},renderTop:function(){var t=this.contextTop||this.contextContainer;return this.clearContext(t),this.selection&&this._groupSelector&&this._drawSelection(),this.fire("after:render"),this},getCenter:function(){return{top:this.getHeight()/2,left:this.getWidth()/2}},centerObjectH:function(t){return this._centerObject(t,new fabric.Point(this.getCenter().left,t.getCenterPoint().y)),this.renderAll(),this},centerObjectV:function(t){return this._centerObject(t,new fabric.Point(t.getCenterPoint().x,this.getCenter().top)),this.renderAll(),this},centerObject:function(t){var e=this.getCenter();return this._centerObject(t,new fabric.Point(e.left,e.top)),this.renderAll(),this},_centerObject:function(t,e){return t.setPositionByOrigin(e,"center","center"),this},toDatalessJSON:function(t){return this.toDatalessObject(t)},toObject:function(t){return this._toObjectMethod("toObject",t)},toDatalessObject:function(t){return this._toObjectMethod("toDatalessObject",t)},_toObjectMethod:function(e,i){var r={objects:this._toObjects(e,i)};return t(r,this.__serializeBgOverlay()),fabric.util.populateWithProperties(this,r,i),r},_toObjects:function(t,e){return this.getObjects().map(function(i){return this._toObject(i,t,e)},this)},_toObject:function(t,e,i){var r;this.includeDefaultValues||(r=t.includeDefaultValues,t.includeDefaultValues=!1);var s=this._realizeGroupTransformOnObject(t),n=t[e](i);return this.includeDefaultValues||(t.includeDefaultValues=r),this._unwindGroupTransformOnObject(t,s),n},_realizeGroupTransformOnObject:function(t){if(t.group&&t.group===this.getActiveGroup()){var e={};return["angle","flipX","flipY","height","left","scaleX","scaleY","top","width"].forEach(function(i){e[i]=t[i]}),this.getActiveGroup().realizeTransform(t),e}return null},_unwindGroupTransformOnObject:function(t,e){e&&t.set(e)},__serializeBgOverlay:function(){var t={background:this.backgroundColor&&this.backgroundColor.toObject?this.backgroundColor.toObject():this.backgroundColor};return this.overlayColor&&(t.overlay=this.overlayColor.toObject?this.overlayColor.toObject():this.overlayColor),this.backgroundImage&&(t.backgroundImage=this.backgroundImage.toObject()),this.overlayImage&&(t.overlayImage=this.overlayImage.toObject()),t},svgViewportTransformation:!0,toSVG:function(t,e){t||(t={});var i=[];return this._setSVGPreamble(i,t),this._setSVGHeader(i,t),this._setSVGBgOverlayColor(i,"backgroundColor"),this._setSVGBgOverlayImage(i,"backgroundImage"),this._setSVGObjects(i,e),this._setSVGBgOverlayColor(i,"overlayColor"),this._setSVGBgOverlayImage(i,"overlayImage"),i.push("</svg>"),i.join("")},_setSVGPreamble:function(t,e){e.suppressPreamble||t.push('<?xml version="1.0" encoding="',e.encoding||"UTF-8",'" standalone="no" ?>\n','<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ','"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n')},_setSVGHeader:function(t,e){var i,s=e.width||this.width,n=e.height||this.height,o='viewBox="0 0 '+this.width+" "+this.height+'" ',a=fabric.Object.NUM_FRACTION_DIGITS;e.viewBox?o='viewBox="'+e.viewBox.x+" "+e.viewBox.y+" "+e.viewBox.width+" "+e.viewBox.height+'" ':this.svgViewportTransformation&&(i=this.viewportTransform,o='viewBox="'+r(-i[4]/i[0],a)+" "+r(-i[5]/i[3],a)+" "+r(this.width/i[0],a)+" "+r(this.height/i[3],a)+'" '),t.push("<svg ",'xmlns="http://www.w3.org/2000/svg" ','xmlns:xlink="http://www.w3.org/1999/xlink" ','version="1.1" ','width="',s,'" ','height="',n,'" ',this.backgroundColor&&!this.backgroundColor.toLive?'style="background-color: '+this.backgroundColor+'" ':null,o,'xml:space="preserve">\n',"<desc>Created with Fabric.js ",fabric.version,"</desc>\n","<defs>",fabric.createSVGFontFacesMarkup(this.getObjects()),fabric.createSVGRefElementsMarkup(this),"</defs>\n")},_setSVGObjects:function(t,e){for(var i=0,r=this.getObjects(),s=r.length;i<s;i++){var n=r[i],o=this._realizeGroupTransformOnObject(n);t.push(n.toSVG(e)),this._unwindGroupTransformOnObject(n,o)}},_setSVGBgOverlayImage:function(t,e){this[e]&&this[e].toSVG&&t.push(this[e].toSVG())},_setSVGBgOverlayColor:function(t,e){this[e]&&this[e].source?t.push('<rect x="',this[e].offsetX,'" y="',this[e].offsetY,'" ','width="',"repeat-y"===this[e].repeat||"no-repeat"===this[e].repeat?this[e].source.width:this.width,'" height="',"repeat-x"===this[e].repeat||"no-repeat"===this[e].repeat?this[e].source.height:this.height,'" fill="url(#'+e+'Pattern)"',"></rect>\n"):this[e]&&"overlayColor"===e&&t.push('<rect x="0" y="0" ','width="',this.width,'" height="',this.height,'" fill="',this[e],'"',"></rect>\n")},sendToBack:function(t){if(!t)return this;var e,r,s,n=this.getActiveGroup?this.getActiveGroup():null;if(t===n)for(e=(s=n._objects).length;e--;)r=s[e],i(this._objects,r),this._objects.unshift(r);else i(this._objects,t),this._objects.unshift(t);return this.renderAll&&this.renderAll()},bringToFront:function(t){if(!t)return this;var e,r,s,n=this.getActiveGroup?this.getActiveGroup():null;if(t===n)for(s=n._objects,e=0;e<s.length;e++)r=s[e],i(this._objects,r),this._objects.push(r);else i(this._objects,t),this._objects.push(t);return this.renderAll&&this.renderAll()},sendBackwards:function(t,e){if(!t)return this;var r,s,n,o,a,h=this.getActiveGroup?this.getActiveGroup():null;if(t===h)for(a=h._objects,r=0;r<a.length;r++)s=a[r],0!==(n=this._objects.indexOf(s))&&(o=n-1,i(this._objects,s),this._objects.splice(o,0,s));else 0!==(n=this._objects.indexOf(t))&&(o=this._findNewLowerIndex(t,n,e),i(this._objects,t),this._objects.splice(o,0,t));return this.renderAll&&this.renderAll(),this},_findNewLowerIndex:function(t,e,i){var r;if(i){r=e;for(var s=e-1;s>=0;--s){if(t.intersectsWithObject(this._objects[s])||t.isContainedWithinObject(this._objects[s])||this._objects[s].isContainedWithinObject(t)){r=s;break}}}else r=e-1;return r},bringForward:function(t,e){if(!t)return this;var r,s,n,o,a,h=this.getActiveGroup?this.getActiveGroup():null;if(t===h)for(r=(a=h._objects).length;r--;)s=a[r],(n=this._objects.indexOf(s))!==this._objects.length-1&&(o=n+1,i(this._objects,s),this._objects.splice(o,0,s));else(n=this._objects.indexOf(t))!==this._objects.length-1&&(o=this._findNewUpperIndex(t,n,e),i(this._objects,t),this._objects.splice(o,0,t));return this.renderAll&&this.renderAll(),this},_findNewUpperIndex:function(t,e,i){var r;if(i){r=e;for(var s=e+1;s<this._objects.length;++s){if(t.intersectsWithObject(this._objects[s])||t.isContainedWithinObject(this._objects[s])||this._objects[s].isContainedWithinObject(t)){r=s;break}}}else r=e+1;return r},moveTo:function(t,e){return i(this._objects,t),this._objects.splice(e,0,t),this.renderAll&&this.renderAll()},dispose:function(){return this.clear(),this},toString:function(){return"#<fabric.Canvas ("+this.complexity()+"): { objects: "+this.getObjects().length+" }>"}}),t(fabric.StaticCanvas.prototype,fabric.Observable),t(fabric.StaticCanvas.prototype,fabric.Collection),t(fabric.StaticCanvas.prototype,fabric.DataURLExporter),t(fabric.StaticCanvas,{EMPTY_JSON:'{"objects": [], "background": "white"}',supports:function(t){var e=fabric.util.createCanvasElement();if(!e||!e.getContext)return null;var i=e.getContext("2d");if(!i)return null;switch(t){case"getImageData":return void 0!==i.getImageData;case"setLineDash":return void 0!==i.setLineDash;case"toDataURL":return void 0!==e.toDataURL;case"toDataURLWithQuality":try{return e.toDataURL("image/jpeg",0),!0}catch(t){}return!1;default:return null}}}),fabric.StaticCanvas.prototype.toJSON=fabric.StaticCanvas.prototype.toObject}}(),fabric.BaseBrush=fabric.util.createClass({color:"rgb(0, 0, 0)",width:1,shadow:null,strokeLineCap:"round",strokeLineJoin:"round",strokeDashArray:null,setShadow:function(t){return this.shadow=new fabric.Shadow(t),this},_setBrushStyles:function(){var t=this.canvas.contextTop;t.strokeStyle=this.color,t.lineWidth=this.width,t.lineCap=this.strokeLineCap,t.lineJoin=this.strokeLineJoin,this.strokeDashArray&&fabric.StaticCanvas.supports("setLineDash")&&t.setLineDash(this.strokeDashArray)},_setShadow:function(){if(this.shadow){var t=this.canvas.contextTop;t.shadowColor=this.shadow.color,t.shadowBlur=this.shadow.blur,t.shadowOffsetX=this.shadow.offsetX,t.shadowOffsetY=this.shadow.offsetY}},_resetShadow:function(){var t=this.canvas.contextTop;t.shadowColor="",t.shadowBlur=t.shadowOffsetX=t.shadowOffsetY=0}}),fabric.PencilBrush=fabric.util.createClass(fabric.BaseBrush,{initialize:function(t){this.canvas=t,this._points=[]},onMouseDown:function(t){this._prepareForDrawing(t),this._captureDrawingPath(t),this._render()},onMouseMove:function(t){this._captureDrawingPath(t),this.canvas.clearContext(this.canvas.contextTop),this._render()},onMouseUp:function(){this._finalizeAndAddPath()},_prepareForDrawing:function(t){var e=new fabric.Point(t.x,t.y);this._reset(),this._addPoint(e),this.canvas.contextTop.moveTo(e.x,e.y)},_addPoint:function(t){this._points.push(t)},_reset:function(){this._points.length=0,this._setBrushStyles(),this._setShadow()},_captureDrawingPath:function(t){var e=new fabric.Point(t.x,t.y);this._addPoint(e)},_render:function(){var t=this.canvas.contextTop,e=this.canvas.viewportTransform,i=this._points[0],r=this._points[1];t.save(),t.transform(e[0],e[1],e[2],e[3],e[4],e[5]),t.beginPath(),2===this._points.length&&i.x===r.x&&i.y===r.y&&(i.x-=.5,r.x+=.5),t.moveTo(i.x,i.y);for(var s=1,n=this._points.length;s<n;s++){var o=i.midPointFrom(r);t.quadraticCurveTo(i.x,i.y,o.x,o.y),i=this._points[s],r=this._points[s+1]}t.lineTo(i.x,i.y),t.stroke(),t.restore()},convertPointsToSVGPath:function(t){var e=[],i=new fabric.Point(t[0].x,t[0].y),r=new fabric.Point(t[1].x,t[1].y);e.push("M ",t[0].x," ",t[0].y," ");for(var s=1,n=t.length;s<n;s++){var o=i.midPointFrom(r);e.push("Q ",i.x," ",i.y," ",o.x," ",o.y," "),i=new fabric.Point(t[s].x,t[s].y),s+1<t.length&&(r=new fabric.Point(t[s+1].x,t[s+1].y))}return e.push("L ",i.x," ",i.y," "),e},createPath:function(t){var e=new fabric.Path(t,{fill:null,stroke:this.color,strokeWidth:this.width,strokeLineCap:this.strokeLineCap,strokeLineJoin:this.strokeLineJoin,strokeDashArray:this.strokeDashArray,originX:"center",originY:"center"});return this.shadow&&(this.shadow.affectStroke=!0,e.setShadow(this.shadow)),e},_finalizeAndAddPath:function(){this.canvas.contextTop.closePath();var t=this.convertPointsToSVGPath(this._points).join("");if("M 0 0 Q 0 0 0 0 L 0 0"!==t){var e=this.createPath(t);this.canvas.add(e),e.setCoords(),this.canvas.clearContext(this.canvas.contextTop),this._resetShadow(),this.canvas.renderAll(),this.canvas.fire("path:created",{path:e})}else this.canvas.renderAll()}}),fabric.CircleBrush=fabric.util.createClass(fabric.BaseBrush,{width:10,initialize:function(t){this.canvas=t,this.points=[]},drawDot:function(t){var e=this.addPoint(t),i=this.canvas.contextTop,r=this.canvas.viewportTransform;i.save(),i.transform(r[0],r[1],r[2],r[3],r[4],r[5]),i.fillStyle=e.fill,i.beginPath(),i.arc(e.x,e.y,e.radius,0,2*Math.PI,!1),i.closePath(),i.fill(),i.restore()},onMouseDown:function(t){this.points.length=0,this.canvas.clearContext(this.canvas.contextTop),this._setShadow(),this.drawDot(t)},onMouseMove:function(t){this.drawDot(t)},onMouseUp:function(){var t=this.canvas.renderOnAddRemove;this.canvas.renderOnAddRemove=!1;for(var e=[],i=0,r=this.points.length;i<r;i++){var s=this.points[i],n=new fabric.Circle({radius:s.radius,left:s.x,top:s.y,originX:"center",originY:"center",fill:s.fill});this.shadow&&n.setShadow(this.shadow),e.push(n)}var o=new fabric.Group(e,{originX:"center",originY:"center"});o.canvas=this.canvas,this.canvas.add(o),this.canvas.fire("path:created",{path:o}),this.canvas.clearContext(this.canvas.contextTop),this._resetShadow(),this.canvas.renderOnAddRemove=t,this.canvas.renderAll()},addPoint:function(t){var e=new fabric.Point(t.x,t.y),i=fabric.util.getRandomInt(Math.max(0,this.width-20),this.width+20)/2,r=new fabric.Color(this.color).setAlpha(fabric.util.getRandomInt(0,100)/100).toRgba();return e.radius=i,e.fill=r,this.points.push(e),e}}),fabric.SprayBrush=fabric.util.createClass(fabric.BaseBrush,{width:10,density:20,dotWidth:1,dotWidthVariance:1,randomOpacity:!1,optimizeOverlapping:!0,initialize:function(t){this.canvas=t,this.sprayChunks=[]},onMouseDown:function(t){this.sprayChunks.length=0,this.canvas.clearContext(this.canvas.contextTop),this._setShadow(),this.addSprayChunk(t),this.render()},onMouseMove:function(t){this.addSprayChunk(t),this.render()},onMouseUp:function(){var t=this.canvas.renderOnAddRemove;this.canvas.renderOnAddRemove=!1;for(var e=[],i=0,r=this.sprayChunks.length;i<r;i++)for(var s=this.sprayChunks[i],n=0,o=s.length;n<o;n++){var a=new fabric.Rect({width:s[n].width,height:s[n].width,left:s[n].x+1,top:s[n].y+1,originX:"center",originY:"center",fill:this.color});this.shadow&&a.setShadow(this.shadow),e.push(a)}this.optimizeOverlapping&&(e=this._getOptimizedRects(e));var h=new fabric.Group(e,{originX:"center",originY:"center"});h.canvas=this.canvas,this.canvas.add(h),this.canvas.fire("path:created",{path:h}),this.canvas.clearContext(this.canvas.contextTop),this._resetShadow(),this.canvas.renderOnAddRemove=t,this.canvas.renderAll()},_getOptimizedRects:function(t){for(var e,i={},r=0,s=t.length;r<s;r++)i[e=t[r].left+""+t[r].top]||(i[e]=t[r]);var n=[];for(e in i)n.push(i[e]);return n},render:function(){var t=this.canvas.contextTop;t.fillStyle=this.color;var e=this.canvas.viewportTransform;t.save(),t.transform(e[0],e[1],e[2],e[3],e[4],e[5]);for(var i=0,r=this.sprayChunkPoints.length;i<r;i++){var s=this.sprayChunkPoints[i];void 0!==s.opacity&&(t.globalAlpha=s.opacity),t.fillRect(s.x,s.y,s.width,s.width)}t.restore()},addSprayChunk:function(t){this.sprayChunkPoints=[];for(var e,i,r,s=this.width/2,n=0;n<this.density;n++){e=fabric.util.getRandomInt(t.x-s,t.x+s),i=fabric.util.getRandomInt(t.y-s,t.y+s),r=this.dotWidthVariance?fabric.util.getRandomInt(Math.max(1,this.dotWidth-this.dotWidthVariance),this.dotWidth+this.dotWidthVariance):this.dotWidth;var o=new fabric.Point(e,i);o.width=r,this.randomOpacity&&(o.opacity=fabric.util.getRandomInt(0,100)/100),this.sprayChunkPoints.push(o)}this.sprayChunks.push(this.sprayChunkPoints)}}),fabric.PatternBrush=fabric.util.createClass(fabric.PencilBrush,{getPatternSrc:function(){var t=fabric.document.createElement("canvas"),e=t.getContext("2d");return t.width=t.height=25,e.fillStyle=this.color,e.beginPath(),e.arc(10,10,10,0,2*Math.PI,!1),e.closePath(),e.fill(),t},getPatternSrcFunction:function(){return String(this.getPatternSrc).replace("this.color",'"'+this.color+'"')},getPattern:function(){return this.canvas.contextTop.createPattern(this.source||this.getPatternSrc(),"repeat")},_setBrushStyles:function(){this.callSuper("_setBrushStyles"),this.canvas.contextTop.strokeStyle=this.getPattern()},createPath:function(t){var e=this.callSuper("createPath",t);return e.stroke=new fabric.Pattern({source:this.source||this.getPatternSrcFunction()}),e}}),function(){var t=fabric.util.getPointer,e=fabric.util.degreesToRadians,i=fabric.util.radiansToDegrees,r=Math.atan2,s=Math.abs;fabric.Canvas=fabric.util.createClass(fabric.StaticCanvas,{initialize:function(t,e){e||(e={}),this._initStatic(t,e),this._initInteractive(),this._createCacheCanvas()},uniScaleTransform:!1,uniScaleKey:"shiftKey",centeredScaling:!1,centeredRotation:!1,centeredKey:"altKey",altActionKey:"shiftKey",interactive:!0,selection:!0,selectionKey:"shiftKey",selectionColor:"rgba(100, 100, 255, 0.3)",selectionDashArray:[10,5],selectionBorderColor:"rgba(255, 255, 255, 0.3)",selectionLineWidth:1,hoverCursor:"move",moveCursor:"move",defaultCursor:"default",freeDrawingCursor:"crosshair",rotationCursor:"crosshair",containerClass:"canvas-container",perPixelTargetFind:!1,targetFindTolerance:0,skipTargetFind:!1,isDrawingMode:!1,_initInteractive:function(){this._currentTransform=null,this._groupSelector=null,this._initWrapperElement(),this._createUpperCanvas(),this._initEventListeners(),this._initRetinaScaling(),this.freeDrawingBrush=fabric.PencilBrush&&new fabric.PencilBrush(this),this.calcOffset()},_resetCurrentTransform:function(){var t=this._currentTransform;t.target.set({scaleX:t.original.scaleX,scaleY:t.original.scaleY,skewX:t.original.skewX,skewY:t.original.skewY,left:t.original.left,top:t.original.top}),this._shouldCenterTransform(t.target)?"rotate"===t.action?this._setOriginToCenter(t.target):("center"!==t.originX&&("right"===t.originX?t.mouseXSign=-1:t.mouseXSign=1),"center"!==t.originY&&("bottom"===t.originY?t.mouseYSign=-1:t.mouseYSign=1),t.originX="center",t.originY="center"):(t.originX=t.original.originX,t.originY=t.original.originY)},containsPoint:function(t,e){var i=this.getPointer(t,!0),r=this._normalizePointer(e,i);return e.containsPoint(r)||e._findTargetCorner(i)},_normalizePointer:function(t,e){var i,r,s=this.getActiveGroup();return s&&"group"!==t.type&&s.contains(t)&&(r=fabric.util.multiplyTransformMatrices(this.viewportTransform,s.calcTransformMatrix()),r=fabric.util.invertTransform(r),e=fabric.util.transformPoint(e,r,!1),i=fabric.util.transformPoint(s.getCenterPoint(),r,!1),e.x-=i.x,e.y-=i.y),{x:e.x,y:e.y}},isTargetTransparent:function(t,e,i){var r=t.hasBorders,s=t.transparentCorners,n=this.contextCache,o=t.group&&t.group===this.getActiveGroup();t.hasBorders=t.transparentCorners=!1,o&&(n.save(),n.transform.apply(n,t.group.calcTransformMatrix())),t.render(n),t.active&&t._renderControls(n),t.hasBorders=r,t.transparentCorners=s;var a=fabric.util.isTransparent(n,e,i,this.targetFindTolerance);return o&&n.restore(),this.clearContext(n),a},_shouldClearSelection:function(t,e){var i=this.getActiveGroup(),r=this.getActiveObject();return!e||e&&i&&!i.contains(e)&&i!==e&&!t[this.selectionKey]||e&&!e.evented||e&&!e.selectable&&r&&r!==e},_shouldCenterTransform:function(t){if(t){var e,i=this._currentTransform;return"scale"===i.action||"scaleX"===i.action||"scaleY"===i.action?e=this.centeredScaling||t.centeredScaling:"rotate"===i.action&&(e=this.centeredRotation||t.centeredRotation),e?!i.altKey:i.altKey}},_getOriginFromCorner:function(t,e){var i={x:t.originX,y:t.originY};return"ml"===e||"tl"===e||"bl"===e?i.x="right":"mr"!==e&&"tr"!==e&&"br"!==e||(i.x="left"),"tl"===e||"mt"===e||"tr"===e?i.y="bottom":"bl"!==e&&"mb"!==e&&"br"!==e||(i.y="top"),i},_getActionFromCorner:function(t,e,i){if(!e)return"drag";switch(e){case"mtr":return"rotate";case"ml":case"mr":return i[this.altActionKey]?"skewY":"scaleX";case"mt":case"mb":return i[this.altActionKey]?"skewX":"scaleY";default:return"scale"}},_setupCurrentTransform:function(t,i){if(i){var r=this.getPointer(t),s=i._findTargetCorner(this.getPointer(t,!0)),n=this._getActionFromCorner(i,s,t),o=this._getOriginFromCorner(i,s);this._currentTransform={target:i,action:n,corner:s,scaleX:i.scaleX,scaleY:i.scaleY,skewX:i.skewX,skewY:i.skewY,offsetX:r.x-i.left,offsetY:r.y-i.top,originX:o.x,originY:o.y,ex:r.x,ey:r.y,lastX:r.x,lastY:r.y,left:i.left,top:i.top,theta:e(i.angle),width:i.width*i.scaleX,mouseXSign:1,mouseYSign:1,shiftKey:t.shiftKey,altKey:t[this.centeredKey]},this._currentTransform.original={left:i.left,top:i.top,scaleX:i.scaleX,scaleY:i.scaleY,skewX:i.skewX,skewY:i.skewY,originX:o.x,originY:o.y},this._resetCurrentTransform()}},_translateObject:function(t,e){var i=this._currentTransform,r=i.target,s=t-i.offsetX,n=e-i.offsetY,o=!r.get("lockMovementX")&&r.left!==s,a=!r.get("lockMovementY")&&r.top!==n;return o&&r.set("left",s),a&&r.set("top",n),o||a},_changeSkewTransformOrigin:function(t,e,i){var r="originX",s={0:"center"},n=e.target.skewX,o="left",a="right",h="mt"===e.corner||"ml"===e.corner?1:-1,c=1;t=t>0?1:-1,"y"===i&&(n=e.target.skewY,o="top",a="bottom",r="originY"),s[-1]=o,s[1]=a,e.target.flipX&&(c*=-1),e.target.flipY&&(c*=-1),0===n?(e.skewSign=-h*t*c,e[r]=s[-t]):(n=n>0?1:-1,e.skewSign=n,e[r]=s[n*h*c])},_skewObject:function(t,e,i){var r,s=this._currentTransform,n=s.target,o=n.get("lockSkewingX"),a=n.get("lockSkewingY");if(o&&"x"===i||a&&"y"===i)return!1;var h,c,l=n.getCenterPoint(),u=n.toLocalPoint(new fabric.Point(t,e),"center","center")[i],f=n.toLocalPoint(new fabric.Point(s.lastX,s.lastY),"center","center")[i],d=n._getTransformedDimensions();return this._changeSkewTransformOrigin(u-f,s,i),h=n.toLocalPoint(new fabric.Point(t,e),s.originX,s.originY)[i],c=n.translateToOriginPoint(l,s.originX,s.originY),r=this._setObjectSkew(h,s,i,d),s.lastX=t,s.lastY=e,n.setPositionByOrigin(c,s.originX,s.originY),r},_setObjectSkew:function(t,e,i,r){var s,n,o,a,h,c,l,u,f,d,g=e.target,p=e.skewSign;return"x"===i?(h="y",c="Y",l="X",f=0,d=g.skewY):(h="x",c="X",l="Y",f=g.skewX,d=0),a=g._getTransformedDimensions(f,d),(u=2*Math.abs(t)-a[i])<=2?s=0:(s=p*Math.atan(u/g["scale"+l]/(a[h]/g["scale"+c])),s=fabric.util.radiansToDegrees(s)),n=g["skew"+l]!==s,g.set("skew"+l,s),0!==g["skew"+c]&&(o=g._getTransformedDimensions(),s=r[h]/o[h]*g["scale"+c],g.set("scale"+c,s)),n},_scaleObject:function(t,e,i){var r=this._currentTransform,s=r.target,n=s.get("lockScalingX"),o=s.get("lockScalingY"),a=s.get("lockScalingFlip");if(n&&o)return!1;var h,c=s.translateToOriginPoint(s.getCenterPoint(),r.originX,r.originY),l=s.toLocalPoint(new fabric.Point(t,e),r.originX,r.originY),u=s._getTransformedDimensions();return this._setLocalMouse(l,r),h=this._setObjectScale(l,r,n,o,i,a,u),s.setPositionByOrigin(c,r.originX,r.originY),h},_setObjectScale:function(t,e,i,r,s,n,o){var a,h,c,l,u=e.target,f=!1,d=!1,g=!1;return c=t.x*u.scaleX/o.x,l=t.y*u.scaleY/o.y,a=u.scaleX!==c,h=u.scaleY!==l,n&&c<=0&&c<u.scaleX&&(f=!0),n&&l<=0&&l<u.scaleY&&(d=!0),"equally"!==s||i||r?s?"x"!==s||u.get("lockUniScaling")?"y"!==s||u.get("lockUniScaling")||d||r||u.set("scaleY",l)&&(g=g||h):f||i||u.set("scaleX",c)&&(g=g||a):(f||i||u.set("scaleX",c)&&(g=g||a),d||r||u.set("scaleY",l)&&(g=g||h)):f||d||(g=this._scaleObjectEqually(t,u,e,o)),e.newScaleX=c,e.newScaleY=l,f||d||this._flipObject(e,s),g},_scaleObjectEqually:function(t,e,i,r){var s,n=t.y+t.x,o=r.y*i.original.scaleY/e.scaleY+r.x*i.original.scaleX/e.scaleX;return i.newScaleX=i.original.scaleX*n/o,i.newScaleY=i.original.scaleY*n/o,s=i.newScaleX!==e.scaleX||i.newScaleY!==e.scaleY,e.set("scaleX",i.newScaleX),e.set("scaleY",i.newScaleY),s},_flipObject:function(t,e){t.newScaleX<0&&"y"!==e&&("left"===t.originX?t.originX="right":"right"===t.originX&&(t.originX="left")),t.newScaleY<0&&"x"!==e&&("top"===t.originY?t.originY="bottom":"bottom"===t.originY&&(t.originY="top"))},_setLocalMouse:function(t,e){var i=e.target;"right"===e.originX?t.x*=-1:"center"===e.originX&&(t.x*=2*e.mouseXSign,t.x<0&&(e.mouseXSign=-e.mouseXSign)),"bottom"===e.originY?t.y*=-1:"center"===e.originY&&(t.y*=2*e.mouseYSign,t.y<0&&(e.mouseYSign=-e.mouseYSign)),s(t.x)>i.padding?t.x<0?t.x+=i.padding:t.x-=i.padding:t.x=0,s(t.y)>i.padding?t.y<0?t.y+=i.padding:t.y-=i.padding:t.y=0},_rotateObject:function(t,e){var s=this._currentTransform;if(s.target.get("lockRotation"))return!1;var n=r(s.ey-s.top,s.ex-s.left),o=r(e-s.top,t-s.left),a=i(o-n+s.theta);return a<0&&(a=360+a),s.target.angle=a%360,!0},setCursor:function(t){this.upperCanvasEl.style.cursor=t},_resetObjectTransform:function(t){t.scaleX=1,t.scaleY=1,t.skewX=0,t.skewY=0,t.setAngle(0)},_drawSelection:function(){var t=this.contextTop,e=this._groupSelector,i=e.left,r=e.top,n=s(i),o=s(r);if(t.fillStyle=this.selectionColor,t.fillRect(e.ex-(i>0?0:-i),e.ey-(r>0?0:-r),n,o),t.lineWidth=this.selectionLineWidth,t.strokeStyle=this.selectionBorderColor,this.selectionDashArray.length>1){var a=e.ex+.5-(i>0?0:n),h=e.ey+.5-(r>0?0:o);t.beginPath(),fabric.util.drawDashedLine(t,a,h,a+n,h,this.selectionDashArray),fabric.util.drawDashedLine(t,a,h+o-1,a+n,h+o-1,this.selectionDashArray),fabric.util.drawDashedLine(t,a,h,a,h+o,this.selectionDashArray),fabric.util.drawDashedLine(t,a+n-1,h,a+n-1,h+o,this.selectionDashArray),t.closePath(),t.stroke()}else t.strokeRect(e.ex+.5-(i>0?0:n),e.ey+.5-(r>0?0:o),n,o)},_isLastRenderedObject:function(t){return this.controlsAboveOverlay&&this.lastRenderedObjectWithControlsAboveOverlay&&this.lastRenderedObjectWithControlsAboveOverlay.visible&&this.containsPoint(t,this.lastRenderedObjectWithControlsAboveOverlay)&&this.lastRenderedObjectWithControlsAboveOverlay._findTargetCorner(this.getPointer(t,!0))},findTarget:function(t,e){if(!this.skipTargetFind){if(this._isLastRenderedObject(t))return this.lastRenderedObjectWithControlsAboveOverlay;var i=this.getActiveGroup();if(!e&&this._checkTarget(t,i,this.getPointer(t,!0)))return i;var r=this._searchPossibleTargets(t,e);return this._fireOverOutEvents(r,t),r}},_fireOverOutEvents:function(t,e){t?this._hoveredTarget!==t&&(this._hoveredTarget&&(this.fire("mouse:out",{target:this._hoveredTarget,e:e}),this._hoveredTarget.fire("mouseout")),this.fire("mouse:over",{target:t,e:e}),t.fire("mouseover"),this._hoveredTarget=t):this._hoveredTarget&&(this.fire("mouse:out",{target:this._hoveredTarget,e:e}),this._hoveredTarget.fire("mouseout"),this._hoveredTarget=null)},_checkTarget:function(t,e,i){if(e&&e.visible&&e.evented&&this.containsPoint(t,e)){if(!this.perPixelTargetFind&&!e.perPixelTargetFind||e.isEditing)return!0;if(!this.isTargetTransparent(e,i.x,i.y))return!0}},_searchPossibleTargets:function(t,e){for(var i,r=this.getPointer(t,!0),s=this._objects.length;s--;)if((!this._objects[s]||!this._objects[s].group||e)&&this._checkTarget(t,this._objects[s],r)){this.relatedTarget=this._objects[s],i=this._objects[s];break}return i},getPointer:function(e,i,r){r||(r=this.upperCanvasEl);var s,n=t(e),o=r.getBoundingClientRect(),a=o.width||0,h=o.height||0;return a&&h||("top"in o&&"bottom"in o&&(h=Math.abs(o.top-o.bottom)),"right"in o&&"left"in o&&(a=Math.abs(o.right-o.left))),this.calcOffset(),n.x=n.x-this._offset.left,n.y=n.y-this._offset.top,i||(n=fabric.util.transformPoint(n,fabric.util.invertTransform(this.viewportTransform))),s=0===a||0===h?{width:1,height:1}:{width:r.width/a,height:r.height/h},{x:n.x*s.width,y:n.y*s.height}},_createUpperCanvas:function(){var t=this.lowerCanvasEl.className.replace(/\s*lower-canvas\s*/,"");this.upperCanvasEl=this._createCanvasElement(),fabric.util.addClass(this.upperCanvasEl,"upper-canvas "+t),this.wrapperEl.appendChild(this.upperCanvasEl),this._copyCanvasStyle(this.lowerCanvasEl,this.upperCanvasEl),this._applyCanvasStyle(this.upperCanvasEl),this.contextTop=this.upperCanvasEl.getContext("2d")},_createCacheCanvas:function(){this.cacheCanvasEl=this._createCanvasElement(),this.cacheCanvasEl.setAttribute("width",this.width),this.cacheCanvasEl.setAttribute("height",this.height),this.contextCache=this.cacheCanvasEl.getContext("2d")},_initWrapperElement:function(){this.wrapperEl=fabric.util.wrapElement(this.lowerCanvasEl,"div",{class:this.containerClass}),fabric.util.setStyle(this.wrapperEl,{width:this.getWidth()+"px",height:this.getHeight()+"px",position:"relative"}),fabric.util.makeElementUnselectable(this.wrapperEl)},_applyCanvasStyle:function(t){var e=this.getWidth()||t.width,i=this.getHeight()||t.height;fabric.util.setStyle(t,{position:"absolute",width:e+"px",height:i+"px",left:0,top:0}),t.width=e,t.height=i,fabric.util.makeElementUnselectable(t)},_copyCanvasStyle:function(t,e){e.style.cssText=t.style.cssText},getSelectionContext:function(){return this.contextTop},getSelectionElement:function(){return this.upperCanvasEl},_setActiveObject:function(t){this._activeObject&&this._activeObject.set("active",!1),this._activeObject=t,t.set("active",!0)},setActiveObject:function(t,e){return this._setActiveObject(t),this.renderAll(),this.fire("object:selected",{target:t,e:e}),t.fire("selected",{e:e}),this},getActiveObject:function(){return this._activeObject},_discardActiveObject:function(){this._activeObject&&this._activeObject.set("active",!1),this._activeObject=null},discardActiveObject:function(t){return this._discardActiveObject(),this.renderAll(),this.fire("selection:cleared",{e:t}),this},_setActiveGroup:function(t){this._activeGroup=t,t&&t.set("active",!0)},setActiveGroup:function(t,e){return this._setActiveGroup(t),t&&(this.fire("object:selected",{target:t,e:e}),t.fire("selected",{e:e})),this},getActiveGroup:function(){return this._activeGroup},_discardActiveGroup:function(){var t=this.getActiveGroup();t&&t.destroy(),this.setActiveGroup(null)},discardActiveGroup:function(t){return this._discardActiveGroup(),this.fire("selection:cleared",{e:t}),this},deactivateAll:function(){for(var t=this.getObjects(),e=0,i=t.length;e<i;e++)t[e].set("active",!1);return this._discardActiveGroup(),this._discardActiveObject(),this},deactivateAllWithDispatch:function(t){var e=this.getActiveGroup()||this.getActiveObject();return e&&this.fire("before:selection:cleared",{target:e,e:t}),this.deactivateAll(),e&&this.fire("selection:cleared",{e:t}),this},dispose:function(){this.callSuper("dispose");var t=this.wrapperEl;return this.removeListeners(),t.removeChild(this.upperCanvasEl),t.removeChild(this.lowerCanvasEl),delete this.upperCanvasEl,t.parentNode&&t.parentNode.replaceChild(this.lowerCanvasEl,this.wrapperEl),delete this.wrapperEl,this},drawControls:function(t){var e=this.getActiveGroup();e?e._renderControls(t):this._drawObjectsControls(t)},_drawObjectsControls:function(t){for(var e=0,i=this._objects.length;e<i;++e)this._objects[e]&&this._objects[e].active&&(this._objects[e]._renderControls(t),this.lastRenderedObjectWithControlsAboveOverlay=this._objects[e])}});for(var n in fabric.StaticCanvas)"prototype"!==n&&(fabric.Canvas[n]=fabric.StaticCanvas[n]);fabric.isTouchSupported&&(fabric.Canvas.prototype._setCursorFromEvent=function(){}),fabric.Element=fabric.Canvas}(),function(){var t={mt:0,tr:1,mr:2,br:3,mb:4,bl:5,ml:6,tl:7},e=fabric.util.addListener,i=fabric.util.removeListener;fabric.util.object.extend(fabric.Canvas.prototype,{cursorMap:["n-resize","ne-resize","e-resize","se-resize","s-resize","sw-resize","w-resize","nw-resize"],_initEventListeners:function(){this._bindEvents(),e(fabric.window,"resize",this._onResize),e(this.upperCanvasEl,"mousedown",this._onMouseDown),e(this.upperCanvasEl,"mousemove",this._onMouseMove),e(this.upperCanvasEl,"mousewheel",this._onMouseWheel),e(this.upperCanvasEl,"mouseout",this._onMouseOut),e(this.upperCanvasEl,"touchstart",this._onMouseDown),e(this.upperCanvasEl,"touchmove",this._onMouseMove),"undefined"!=typeof eventjs&&"add"in eventjs&&(eventjs.add(this.upperCanvasEl,"gesture",this._onGesture),eventjs.add(this.upperCanvasEl,"drag",this._onDrag),eventjs.add(this.upperCanvasEl,"orientation",this._onOrientationChange),eventjs.add(this.upperCanvasEl,"shake",this._onShake),eventjs.add(this.upperCanvasEl,"longpress",this._onLongPress))},_bindEvents:function(){this._onMouseDown=this._onMouseDown.bind(this),this._onMouseMove=this._onMouseMove.bind(this),this._onMouseUp=this._onMouseUp.bind(this),this._onResize=this._onResize.bind(this),this._onGesture=this._onGesture.bind(this),this._onDrag=this._onDrag.bind(this),this._onShake=this._onShake.bind(this),this._onLongPress=this._onLongPress.bind(this),this._onOrientationChange=this._onOrientationChange.bind(this),this._onMouseWheel=this._onMouseWheel.bind(this),this._onMouseOut=this._onMouseOut.bind(this)},removeListeners:function(){i(fabric.window,"resize",this._onResize),i(this.upperCanvasEl,"mousedown",this._onMouseDown),i(this.upperCanvasEl,"mousemove",this._onMouseMove),i(this.upperCanvasEl,"mousewheel",this._onMouseWheel),i(this.upperCanvasEl,"mouseout",this._onMouseOut),i(this.upperCanvasEl,"touchstart",this._onMouseDown),i(this.upperCanvasEl,"touchmove",this._onMouseMove),"undefined"!=typeof eventjs&&"remove"in eventjs&&(eventjs.remove(this.upperCanvasEl,"gesture",this._onGesture),eventjs.remove(this.upperCanvasEl,"drag",this._onDrag),eventjs.remove(this.upperCanvasEl,"orientation",this._onOrientationChange),eventjs.remove(this.upperCanvasEl,"shake",this._onShake),eventjs.remove(this.upperCanvasEl,"longpress",this._onLongPress))},_onGesture:function(t,e){this.__onTransformGesture&&this.__onTransformGesture(t,e)},_onDrag:function(t,e){this.__onDrag&&this.__onDrag(t,e)},_onMouseWheel:function(t,e){this.__onMouseWheel&&this.__onMouseWheel(t,e)},_onMouseOut:function(t){var e=this._hoveredTarget;this.fire("mouse:out",{target:e,e:t}),this._hoveredTarget=null,e&&e.fire("mouseout",{e:t})},_onOrientationChange:function(t,e){this.__onOrientationChange&&this.__onOrientationChange(t,e)},_onShake:function(t,e){this.__onShake&&this.__onShake(t,e)},_onLongPress:function(t,e){this.__onLongPress&&this.__onLongPress(t,e)},_onMouseDown:function(t){this.__onMouseDown(t),e(fabric.document,"touchend",this._onMouseUp),e(fabric.document,"touchmove",this._onMouseMove),i(this.upperCanvasEl,"mousemove",this._onMouseMove),i(this.upperCanvasEl,"touchmove",this._onMouseMove),"touchstart"===t.type?i(this.upperCanvasEl,"mousedown",this._onMouseDown):(e(fabric.document,"mouseup",this._onMouseUp),e(fabric.document,"mousemove",this._onMouseMove))},_onMouseUp:function(t){if(this.__onMouseUp(t),i(fabric.document,"mouseup",this._onMouseUp),i(fabric.document,"touchend",this._onMouseUp),i(fabric.document,"mousemove",this._onMouseMove),i(fabric.document,"touchmove",this._onMouseMove),e(this.upperCanvasEl,"mousemove",this._onMouseMove),e(this.upperCanvasEl,"touchmove",this._onMouseMove),"touchend"===t.type){var r=this;setTimeout(function(){e(r.upperCanvasEl,"mousedown",r._onMouseDown)},400)}},_onMouseMove:function(t){!this.allowTouchScrolling&&t.preventDefault&&t.preventDefault(),this.__onMouseMove(t)},_onResize:function(){this.calcOffset()},_shouldRender:function(t,e){var i=this.getActiveGroup()||this.getActiveObject();return!!(t&&(t.isMoving||t!==i)||!t&&i||!t&&!i&&!this._groupSelector||e&&this._previousPointer&&this.selection&&(e.x!==this._previousPointer.x||e.y!==this._previousPointer.y))},__onMouseUp:function(t){var e,i=!0,r=this._currentTransform;if(this.isDrawingMode&&this._isCurrentlyDrawing)this._onMouseUpInDrawingMode(t);else{r&&(this._finalizeCurrentTransform(),i=!r.actionPerformed),e=i?this.findTarget(t,!0):r.target;var s=this._shouldRender(e,this.getPointer(t));this._maybeGroupObjects(t),e&&(e.isMoving=!1),s&&this.renderAll(),this._handleCursorAndEvent(t,e)}},_handleCursorAndEvent:function(t,e){this._setCursorFromEvent(t,e),this.fire("mouse:up",{target:e,e:t}),e&&e.fire("mouseup",{e:t})},_finalizeCurrentTransform:function(){var t=this._currentTransform,e=t.target;e._scaling&&(e._scaling=!1),e.setCoords(),this._restoreOriginXY(e),(t.actionPerformed||this.stateful&&e.hasStateChanged())&&(this.fire("object:modified",{target:e,transform:t}),e.fire("modified"))},_restoreOriginXY:function(t){if(this._previousOriginX&&this._previousOriginY){var e=t.translateToOriginPoint(t.getCenterPoint(),this._previousOriginX,this._previousOriginY);t.originX=this._previousOriginX,t.originY=this._previousOriginY,t.left=e.x,t.top=e.y,this._previousOriginX=null,this._previousOriginY=null}},_onMouseDownInDrawingMode:function(t){this._isCurrentlyDrawing=!0,this.discardActiveObject(t).renderAll(),this.clipTo&&fabric.util.clipContext(this,this.contextTop);var e=fabric.util.invertTransform(this.viewportTransform),i=fabric.util.transformPoint(this.getPointer(t,!0),e);this.freeDrawingBrush.onMouseDown(i),this.fire("mouse:down",{e:t});var r=this.findTarget(t);void 0!==r&&r.fire("mousedown",{e:t,target:r})},_onMouseMoveInDrawingMode:function(t){if(this._isCurrentlyDrawing){var e=fabric.util.invertTransform(this.viewportTransform),i=fabric.util.transformPoint(this.getPointer(t,!0),e);this.freeDrawingBrush.onMouseMove(i)}this.setCursor(this.freeDrawingCursor),this.fire("mouse:move",{e:t});var r=this.findTarget(t);void 0!==r&&r.fire("mousemove",{e:t,target:r})},_onMouseUpInDrawingMode:function(t){this._isCurrentlyDrawing=!1,this.clipTo&&this.contextTop.restore(),this.freeDrawingBrush.onMouseUp(),this.fire("mouse:up",{e:t});var e=this.findTarget(t);void 0!==e&&e.fire("mouseup",{e:t,target:e})},__onMouseDown:function(t){if(!("which"in t?1===t.which:0===t.button)&&fabric.isTouchSupported,this.isDrawingMode)this._onMouseDownInDrawingMode(t);else if(!this._currentTransform){var e=this.findTarget(t),i=this.getPointer(t,!0);this._previousPointer=i;var r=this._shouldRender(e,i),s=this._shouldGroup(t,e);this._shouldClearSelection(t,e)?this._clearSelection(t,e,i):s&&(this._handleGrouping(t,e),e=this.getActiveGroup()),e&&(!e.selectable||!e.__corner&&s||(this._beforeTransform(t,e),this._setupCurrentTransform(t,e))),r&&this.renderAll(),this.fire("mouse:down",{target:e,e:t}),e&&e.fire("mousedown",{e:t})}},_beforeTransform:function(t,e){this.stateful&&e.saveState(),e._findTargetCorner(this.getPointer(t))&&this.onBeforeScaleRotate(e),e!==this.getActiveGroup()&&e!==this.getActiveObject()&&(this.deactivateAll(),this.setActiveObject(e,t))},_clearSelection:function(t,e,i){this.deactivateAllWithDispatch(t),e&&e.selectable?this.setActiveObject(e,t):this.selection&&(this._groupSelector={ex:i.x,ey:i.y,top:0,left:0})},_setOriginToCenter:function(t){this._previousOriginX=this._currentTransform.target.originX,this._previousOriginY=this._currentTransform.target.originY;var e=t.getCenterPoint();t.originX="center",t.originY="center",t.left=e.x,t.top=e.y,this._currentTransform.left=t.left,this._currentTransform.top=t.top},_setCenterToOrigin:function(t){var e=t.translateToOriginPoint(t.getCenterPoint(),this._previousOriginX,this._previousOriginY);t.originX=this._previousOriginX,t.originY=this._previousOriginY,t.left=e.x,t.top=e.y,this._previousOriginX=null,this._previousOriginY=null},__onMouseMove:function(t){var e,i;if(this.isDrawingMode)this._onMouseMoveInDrawingMode(t);else if(!(void 0!==t.touches&&t.touches.length>1)){var r=this._groupSelector;r?(i=this.getPointer(t,!0),r.left=i.x-r.ex,r.top=i.y-r.ey,this.renderTop()):this._currentTransform?this._transformObject(t):(e=this.findTarget(t),this._setCursorFromEvent(t,e)),this.fire("mouse:move",{target:e,e:t}),e&&e.fire("mousemove",{e:t})}},_transformObject:function(t){var e=this.getPointer(t),i=this._currentTransform;i.reset=!1,i.target.isMoving=!0,this._beforeScaleTransform(t,i),this._performTransformAction(t,i,e),this.renderAll()},_performTransformAction:function(t,e,i){var r=i.x,s=i.y,n=e.target,o=e.action,a=!1;"rotate"===o?(a=this._rotateObject(r,s))&&this._fire("rotating",n,t):"scale"===o?(a=this._onScale(t,e,r,s))&&this._fire("scaling",n,t):"scaleX"===o?(a=this._scaleObject(r,s,"x"))&&this._fire("scaling",n,t):"scaleY"===o?(a=this._scaleObject(r,s,"y"))&&this._fire("scaling",n,t):"skewX"===o?(a=this._skewObject(r,s,"x"))&&this._fire("skewing",n,t):"skewY"===o?(a=this._skewObject(r,s,"y"))&&this._fire("skewing",n,t):(a=this._translateObject(r,s))&&(this._fire("moving",n,t),this.setCursor(n.moveCursor||this.moveCursor)),e.actionPerformed=a},_fire:function(t,e,i){this.fire("object:"+t,{target:e,e:i}),e.fire(t,{e:i})},_beforeScaleTransform:function(t,e){if("scale"===e.action||"scaleX"===e.action||"scaleY"===e.action){var i=this._shouldCenterTransform(e.target);(i&&("center"!==e.originX||"center"!==e.originY)||!i&&"center"===e.originX&&"center"===e.originY)&&(this._resetCurrentTransform(),e.reset=!0)}},_onScale:function(t,e,i,r){return!t[this.uniScaleKey]&&!this.uniScaleTransform||e.target.get("lockUniScaling")?(e.reset||"scale"!==e.currentAction||this._resetCurrentTransform(),e.currentAction="scaleEqually",this._scaleObject(i,r,"equally")):(e.currentAction="scale",this._scaleObject(i,r))},_setCursorFromEvent:function(t,e){if(!e)return this.setCursor(this.defaultCursor),!1;var i=e.hoverCursor||this.hoverCursor;if(e.selectable){var r=this.getActiveGroup(),s=e._findTargetCorner&&(!r||!r.contains(e))&&e._findTargetCorner(this.getPointer(t,!0));s?this._setCornerCursor(s,e,t):this.setCursor(i)}else this.setCursor(i);return!0},_setCornerCursor:function(e,i,r){if(e in t)this.setCursor(this._getRotatedCornerCursor(e,i,r));else{if("mtr"!==e||!i.hasRotatingPoint)return this.setCursor(this.defaultCursor),!1;this.setCursor(this.rotationCursor)}},_getRotatedCornerCursor:function(e,i,r){var s=Math.round(i.getAngle()%360/45);return s<0&&(s+=8),s+=t[e],r[this.altActionKey]&&t[e]%2==0&&(s+=2),s%=8,this.cursorMap[s]}})}(),function(){var t=Math.min,e=Math.max;fabric.util.object.extend(fabric.Canvas.prototype,{_shouldGroup:function(t,e){var i=this.getActiveObject();return t[this.selectionKey]&&e&&e.selectable&&(this.getActiveGroup()||i&&i!==e)&&this.selection},_handleGrouping:function(t,e){(e!==this.getActiveGroup()||(e=this.findTarget(t,!0))&&!e.isType("group"))&&(this.getActiveGroup()?this._updateActiveGroup(e,t):this._createActiveGroup(e,t),this._activeGroup&&this._activeGroup.saveCoords())},_updateActiveGroup:function(t,e){var i=this.getActiveGroup();if(i.contains(t)){if(i.removeWithUpdate(t),t.set("active",!1),1===i.size())return this.discardActiveGroup(e),void this.setActiveObject(i.item(0))}else i.addWithUpdate(t);this.fire("selection:created",{target:i,e:e}),i.set("active",!0)},_createActiveGroup:function(t,e){if(this._activeObject&&t!==this._activeObject){var i=this._createGroup(t);i.addWithUpdate(),this.setActiveGroup(i),this._activeObject=null,this.fire("selection:created",{target:i,e:e})}t.set("active",!0)},_createGroup:function(t){var e=this.getObjects(),i=e.indexOf(this._activeObject)<e.indexOf(t)?[this._activeObject,t]:[t,this._activeObject];return new fabric.Group(i,{canvas:this})},_groupSelectedObjects:function(t){var e=this._collectObjects();1===e.length?this.setActiveObject(e[0],t):e.length>1&&((e=new fabric.Group(e.reverse(),{canvas:this})).addWithUpdate(),this.setActiveGroup(e,t),e.saveCoords(),this.fire("selection:created",{target:e}),this.renderAll())},_collectObjects:function(){for(var i,r=[],s=this._groupSelector.ex,n=this._groupSelector.ey,o=s+this._groupSelector.left,a=n+this._groupSelector.top,h=new fabric.Point(t(s,o),t(n,a)),c=new fabric.Point(e(s,o),e(n,a)),l=s===o&&n===a,u=this._objects.length;u--&&!((i=this._objects[u])&&i.selectable&&i.visible&&(i.intersectsWithRect(h,c)||i.isContainedWithinRect(h,c)||i.containsPoint(h)||i.containsPoint(c))&&(i.set("active",!0),r.push(i),l)););return r},_maybeGroupObjects:function(t){this.selection&&this._groupSelector&&this._groupSelectedObjects(t);var e=this.getActiveGroup();e&&(e.setObjectsCoords().setCoords(),e.isMoving=!1,this.setCursor(this.defaultCursor)),this._groupSelector=null,this._currentTransform=null}})}(),fabric.util.object.extend(fabric.StaticCanvas.prototype,{toDataURL:function(t){t||(t={});var e=t.format||"png",i=t.quality||1,r=t.multiplier||1,s={left:t.left,top:t.top,width:t.width,height:t.height};return this._isRetinaScaling()&&(r*=fabric.devicePixelRatio),1!==r?this.__toDataURLWithMultiplier(e,i,s,r):this.__toDataURL(e,i,s)},__toDataURL:function(t,e,i){this.renderAll();var r=this.contextContainer.canvas,s=this.__getCroppedCanvas(r,i);"jpg"===t&&(t="jpeg");var n=fabric.StaticCanvas.supports("toDataURLWithQuality")?(s||r).toDataURL("image/"+t,e):(s||r).toDataURL("image/"+t);return s&&(s=null),n},__getCroppedCanvas:function(t,e){var i,r;return("left"in e||"top"in e||"width"in e||"height"in e)&&(r=(i=fabric.util.createCanvasElement()).getContext("2d"),i.width=e.width||this.width,i.height=e.height||this.height,r.drawImage(t,-e.left||0,-e.top||0)),i},__toDataURLWithMultiplier:function(t,e,i,r){var s=this.getWidth(),n=this.getHeight(),o=s*r,a=n*r,h=this.getActiveObject(),c=this.getActiveGroup();this.getZoom(),fabric.devicePixelRatio;r>1&&this.setDimensions({width:o,height:a}),this.setZoom(r),i.left&&(i.left*=r),i.top&&(i.top*=r),i.width?i.width*=r:r<1&&(i.width=o),i.height?i.height*=r:r<1&&(i.height=a),c?this._tempRemoveBordersControlsFromGroup(c):h&&this.deactivateAll&&this.deactivateAll();var l=this.__toDataURL(t,e,i);return c?this._restoreBordersControlsOnGroup(c):h&&this.setActiveObject&&this.setActiveObject(h),this.setZoom(1),this.setDimensions({width:s,height:n}),l},toDataURLWithMultiplier:function(t,e,i){return this.toDataURL({format:t,multiplier:e,quality:i})},_tempRemoveBordersControlsFromGroup:function(t){t.origHasControls=t.hasControls,t.origBorderColor=t.borderColor,t.hasControls=!0,t.borderColor="rgba(0,0,0,0)",t.forEachObject(function(t){t.origBorderColor=t.borderColor,t.borderColor="rgba(0,0,0,0)"})},_restoreBordersControlsOnGroup:function(t){t.hideControls=t.origHideControls,t.borderColor=t.origBorderColor,t.forEachObject(function(t){t.borderColor=t.origBorderColor,delete t.origBorderColor})}}),fabric.util.object.extend(fabric.StaticCanvas.prototype,{loadFromDatalessJSON:function(t,e,i){return this.loadFromJSON(t,e,i)},loadFromJSON:function(t,e,i){if(t){var r="string"==typeof t?JSON.parse(t):fabric.util.object.clone(t);this.clear();var s=this;this._enlivenObjects(r.objects,function(){s._setBgOverlay(r,e)},i),delete r.objects,delete r.backgroundImage,delete r.overlayImage,delete r.background,delete r.overlay;for(var n in r)this[n]=r[n];return this}},_setBgOverlay:function(t,e){var i=this,r={backgroundColor:!1,overlayColor:!1,backgroundImage:!1,overlayImage:!1};if(t.backgroundImage||t.overlayImage||t.background||t.overlay){var s=function(){r.backgroundImage&&r.overlayImage&&r.backgroundColor&&r.overlayColor&&(i.renderAll(),e&&e())};this.__setBgOverlay("backgroundImage",t.backgroundImage,r,s),this.__setBgOverlay("overlayImage",t.overlayImage,r,s),this.__setBgOverlay("backgroundColor",t.background,r,s),this.__setBgOverlay("overlayColor",t.overlay,r,s),s()}else e&&e()},__setBgOverlay:function(t,e,i,r){var s=this;e?"backgroundImage"===t||"overlayImage"===t?fabric.Image.fromObject(e,function(e){s[t]=e,i[t]=!0,r&&r()}):this["set"+fabric.util.string.capitalize(t,!0)](e,function(){i[t]=!0,r&&r()}):i[t]=!0},_enlivenObjects:function(t,e,i){var r=this;if(t&&0!==t.length){var s=this.renderOnAddRemove;this.renderOnAddRemove=!1,fabric.util.enlivenObjects(t,function(t){t.forEach(function(t,e){r.insertAt(t,e,!0)}),r.renderOnAddRemove=s,e&&e()},null,i)}else e&&e()},_toDataURL:function(t,e){this.clone(function(i){e(i.toDataURL(t))})},_toDataURLWithMultiplier:function(t,e,i){this.clone(function(r){i(r.toDataURLWithMultiplier(t,e))})},clone:function(t,e){var i=JSON.stringify(this.toJSON(e));this.cloneWithoutData(function(e){e.loadFromJSON(i,function(){t&&t(e)})})},cloneWithoutData:function(t){var e=fabric.document.createElement("canvas");e.width=this.getWidth(),e.height=this.getHeight();var i=new fabric.Canvas(e);i.clipTo=this.clipTo,this.backgroundImage?(i.setBackgroundImage(this.backgroundImage.src,function(){i.renderAll(),t&&t(i)}),i.backgroundImageOpacity=this.backgroundImageOpacity,i.backgroundImageStretch=this.backgroundImageStretch):t&&t(i)}}),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.util.toFixed,s=e.util.string.capitalize,n=e.util.degreesToRadians,o=e.StaticCanvas.supports("setLineDash");e.Object||(e.Object=e.util.createClass({type:"object",originX:"left",originY:"top",top:0,left:0,width:0,height:0,scaleX:1,scaleY:1,flipX:!1,flipY:!1,opacity:1,angle:0,skewX:0,skewY:0,cornerSize:13,transparentCorners:!0,hoverCursor:null,moveCursor:null,padding:0,borderColor:"rgba(102,153,255,0.75)",borderDashArray:null,cornerColor:"rgba(102,153,255,0.5)",cornerStrokeColor:null,cornerStyle:"rect",cornerDashArray:null,centeredScaling:!1,centeredRotation:!0,fill:"rgb(0,0,0)",fillRule:"nonzero",globalCompositeOperation:"source-over",backgroundColor:"",selectionBackgroundColor:"",stroke:null,strokeWidth:1,strokeDashArray:null,strokeLineCap:"butt",strokeLineJoin:"miter",strokeMiterLimit:10,shadow:null,borderOpacityWhenMoving:.4,borderScaleFactor:1,transformMatrix:null,minScaleLimit:.25,selectable:!0,evented:!0,visible:!0,hasControls:!0,hasBorders:!0,hasRotatingPoint:!0,rotatingPointOffset:40,perPixelTargetFind:!1,includeDefaultValues:!0,clipTo:null,lockMovementX:!1,lockMovementY:!1,lockRotation:!1,lockScalingX:!1,lockScalingY:!1,lockUniScaling:!1,lockSkewingX:!1,lockSkewingY:!1,lockScalingFlip:!1,stateProperties:"top left width height scaleX scaleY flipX flipY originX originY transformMatrix stroke strokeWidth strokeDashArray strokeLineCap strokeLineJoin strokeMiterLimit angle opacity fill fillRule globalCompositeOperation shadow clipTo visible backgroundColor alignX alignY meetOrSlice skewX skewY".split(" "),initialize:function(t){t&&this.setOptions(t)},_initGradient:function(t){!t.fill||!t.fill.colorStops||t.fill instanceof e.Gradient||this.set("fill",new e.Gradient(t.fill)),!t.stroke||!t.stroke.colorStops||t.stroke instanceof e.Gradient||this.set("stroke",new e.Gradient(t.stroke))},_initPattern:function(t){!t.fill||!t.fill.source||t.fill instanceof e.Pattern||this.set("fill",new e.Pattern(t.fill)),!t.stroke||!t.stroke.source||t.stroke instanceof e.Pattern||this.set("stroke",new e.Pattern(t.stroke))},_initClipping:function(t){if(t.clipTo&&"string"==typeof t.clipTo){var i=e.util.getFunctionBody(t.clipTo);void 0!==i&&(this.clipTo=new Function("ctx",i))}},setOptions:function(t){for(var e in t)this.set(e,t[e]);this._initGradient(t),this._initPattern(t),this._initClipping(t)},transform:function(t,e){this.group&&this.canvas.preserveObjectStacking&&this.group===this.canvas._activeGroup&&this.group.transform(t);var i=e?this._getLeftTopCoords():this.getCenterPoint();t.translate(i.x,i.y),t.rotate(n(this.angle)),t.scale(this.scaleX*(this.flipX?-1:1),this.scaleY*(this.flipY?-1:1)),t.transform(1,0,Math.tan(n(this.skewX)),1,0,0),t.transform(1,Math.tan(n(this.skewY)),0,1,0,0)},toObject:function(t){var i=e.Object.NUM_FRACTION_DIGITS,s={type:this.type,originX:this.originX,originY:this.originY,left:r(this.left,i),top:r(this.top,i),width:r(this.width,i),height:r(this.height,i),fill:this.fill&&this.fill.toObject?this.fill.toObject():this.fill,stroke:this.stroke&&this.stroke.toObject?this.stroke.toObject():this.stroke,strokeWidth:r(this.strokeWidth,i),strokeDashArray:this.strokeDashArray?this.strokeDashArray.concat():this.strokeDashArray,strokeLineCap:this.strokeLineCap,strokeLineJoin:this.strokeLineJoin,strokeMiterLimit:r(this.strokeMiterLimit,i),scaleX:r(this.scaleX,i),scaleY:r(this.scaleY,i),angle:r(this.getAngle(),i),flipX:this.flipX,flipY:this.flipY,opacity:r(this.opacity,i),shadow:this.shadow&&this.shadow.toObject?this.shadow.toObject():this.shadow,visible:this.visible,clipTo:this.clipTo&&String(this.clipTo),backgroundColor:this.backgroundColor,fillRule:this.fillRule,globalCompositeOperation:this.globalCompositeOperation,transformMatrix:this.transformMatrix?this.transformMatrix.concat():this.transformMatrix,skewX:r(this.skewX,i),skewY:r(this.skewY,i)};return this.includeDefaultValues||(s=this._removeDefaultValues(s)),e.util.populateWithProperties(this,s,t),s},toDatalessObject:function(t){return this.toObject(t)},_removeDefaultValues:function(t){var i=e.util.getKlass(t.type).prototype;return i.stateProperties.forEach(function(e){t[e]===i[e]&&delete t[e],"[object Array]"===Object.prototype.toString.call(t[e])&&"[object Array]"===Object.prototype.toString.call(i[e])&&0===t[e].length&&0===i[e].length&&delete t[e]}),t},toString:function(){return"#<fabric."+s(this.type)+">"},get:function(t){return this[t]},_setObject:function(t){for(var e in t)this._set(e,t[e])},set:function(t,e){return"object"==typeof t?this._setObject(t):"function"==typeof e&&"clipTo"!==t?this._set(t,e(this.get(t))):this._set(t,e),this},_set:function(t,i){return("scaleX"===t||"scaleY"===t)&&(i=this._constrainScale(i)),"scaleX"===t&&i<0?(this.flipX=!this.flipX,i*=-1):"scaleY"===t&&i<0?(this.flipY=!this.flipY,i*=-1):"shadow"!==t||!i||i instanceof e.Shadow||(i=new e.Shadow(i)),this[t]=i,"width"!==t&&"height"!==t||(this.minScaleLimit=Math.min(.1,1/Math.max(this.width,this.height))),this},setOnGroup:function(){},toggle:function(t){var e=this.get(t);return"boolean"==typeof e&&this.set(t,!e),this},setSourcePath:function(t){return this.sourcePath=t,this},getViewportTransform:function(){return this.canvas&&this.canvas.viewportTransform?this.canvas.viewportTransform:[1,0,0,1,0,0]},render:function(t,i){0===this.width&&0===this.height||!this.visible||(t.save(),this._setupCompositeOperation(t),this.drawSelectionBackground(t),i||this.transform(t),this._setStrokeStyles(t),this._setFillStyles(t),this.transformMatrix&&t.transform.apply(t,this.transformMatrix),this._setOpacity(t),this._setShadow(t),this.clipTo&&e.util.clipContext(this,t),this._render(t,i),this.clipTo&&t.restore(),t.restore())},_setOpacity:function(t){this.group&&this.group._setOpacity(t),t.globalAlpha*=this.opacity},_setStrokeStyles:function(t){this.stroke&&(t.lineWidth=this.strokeWidth,t.lineCap=this.strokeLineCap,t.lineJoin=this.strokeLineJoin,t.miterLimit=this.strokeMiterLimit,t.strokeStyle=this.stroke.toLive?this.stroke.toLive(t,this):this.stroke)},_setFillStyles:function(t){this.fill&&(t.fillStyle=this.fill.toLive?this.fill.toLive(t,this):this.fill)},_setLineDash:function(t,e,i){e&&(1&e.length&&e.push.apply(e,e),o?t.setLineDash(e):i&&i(t))},_renderControls:function(t,i){if(!(!this.active||i||this.group&&this.group!==this.canvas.getActiveGroup())){var r,s=this.getViewportTransform(),o=this.calcTransformMatrix();o=e.util.multiplyTransformMatrices(s,o),r=e.util.qrDecompose(o),t.save(),t.translate(r.translateX,r.translateY),t.lineWidth=1/this.borderScaleFactor,t.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1,this.group&&this.group===this.canvas.getActiveGroup()?(t.rotate(n(r.angle)),this.drawBordersInGroup(t,r)):(t.rotate(n(this.angle)),this.drawBorders(t)),this.drawControls(t),t.restore()}},_setShadow:function(t){if(this.shadow){var i=this.canvas&&this.canvas.viewportTransform[0]||1,r=this.canvas&&this.canvas.viewportTransform[3]||1;this.canvas&&this.canvas._isRetinaScaling()&&(i*=e.devicePixelRatio,r*=e.devicePixelRatio),t.shadowColor=this.shadow.color,t.shadowBlur=this.shadow.blur*(i+r)*(this.scaleX+this.scaleY)/4,t.shadowOffsetX=this.shadow.offsetX*i*this.scaleX,t.shadowOffsetY=this.shadow.offsetY*r*this.scaleY}},_removeShadow:function(t){this.shadow&&(t.shadowColor="",t.shadowBlur=t.shadowOffsetX=t.shadowOffsetY=0)},_renderFill:function(t){if(this.fill){if(t.save(),this.fill.gradientTransform){var e=this.fill.gradientTransform;t.transform.apply(t,e)}this.fill.toLive&&t.translate(-this.width/2+this.fill.offsetX||0,-this.height/2+this.fill.offsetY||0),"evenodd"===this.fillRule?t.fill("evenodd"):t.fill(),t.restore()}},_renderStroke:function(t){if(this.stroke&&0!==this.strokeWidth){if(this.shadow&&!this.shadow.affectStroke&&this._removeShadow(t),t.save(),this._setLineDash(t,this.strokeDashArray,this._renderDashedStroke),this.stroke.gradientTransform){var e=this.stroke.gradientTransform;t.transform.apply(t,e)}this.stroke.toLive&&t.translate(-this.width/2+this.stroke.offsetX||0,-this.height/2+this.stroke.offsetY||0),t.stroke(),t.restore()}},clone:function(t,i){return this.constructor.fromObject?this.constructor.fromObject(this.toObject(i),t):new e.Object(this.toObject(i))},cloneAsImage:function(t){var i=this.toDataURL();return e.util.loadImage(i,function(i){t&&t(new e.Image(i))}),this},toDataURL:function(t){t||(t={});var i=e.util.createCanvasElement(),r=this.getBoundingRect();i.width=r.width,i.height=r.height,e.util.wrapElement(i,"div");var s=new e.StaticCanvas(i);"jpg"===t.format&&(t.format="jpeg"),"jpeg"===t.format&&(s.backgroundColor="#fff");var n={active:this.get("active"),left:this.getLeft(),top:this.getTop()};this.set("active",!1),this.setPositionByOrigin(new e.Point(s.getWidth()/2,s.getHeight()/2),"center","center");var o=this.canvas;s.add(this);var a=s.toDataURL(t);return this.set(n).setCoords(),this.canvas=o,s.dispose(),s=null,a},isType:function(t){return this.type===t},complexity:function(){return 0},toJSON:function(t){return this.toObject(t)},setGradient:function(t,i){i||(i={});var r={colorStops:[]};r.type=i.type||(i.r1||i.r2?"radial":"linear"),r.coords={x1:i.x1,y1:i.y1,x2:i.x2,y2:i.y2},(i.r1||i.r2)&&(r.coords.r1=i.r1,r.coords.r2=i.r2),i.gradientTransform&&(r.gradientTransform=i.gradientTransform);for(var s in i.colorStops){var n=new e.Color(i.colorStops[s]);r.colorStops.push({offset:s,color:n.toRgb(),opacity:n.getAlpha()})}return this.set(t,e.Gradient.forObject(this,r))},setPatternFill:function(t){return this.set("fill",new e.Pattern(t))},setShadow:function(t){return this.set("shadow",t?new e.Shadow(t):null)},setColor:function(t){return this.set("fill",t),this},setAngle:function(t){var e=("center"!==this.originX||"center"!==this.originY)&&this.centeredRotation;return e&&this._setOriginToCenter(),this.set("angle",t),e&&this._resetOrigin(),this},centerH:function(){return this.canvas.centerObjectH(this),this},centerV:function(){return this.canvas.centerObjectV(this),this},center:function(){return this.canvas.centerObject(this),this},remove:function(){return this.canvas.remove(this),this},getLocalPointer:function(t,i){i=i||this.canvas.getPointer(t);var r=new e.Point(i.x,i.y),s=this._getLeftTopCoords();return this.angle&&(r=e.util.rotatePoint(r,s,e.util.degreesToRadians(-this.angle))),{x:r.x-s.x,y:r.y-s.y}},_setupCompositeOperation:function(t){this.globalCompositeOperation&&(t.globalCompositeOperation=this.globalCompositeOperation)}}),e.util.createAccessors(e.Object),e.Object.prototype.rotate=e.Object.prototype.setAngle,i(e.Object.prototype,e.Observable),e.Object.NUM_FRACTION_DIGITS=2,e.Object.__uid=0)}("undefined"!=typeof exports?exports:this),function(){var t=fabric.util.degreesToRadians,e={left:-.5,center:0,right:.5},i={top:-.5,center:0,bottom:.5};fabric.util.object.extend(fabric.Object.prototype,{translateToGivenOrigin:function(t,r,s,n,o){var a,h=t.x,c=t.y,l=e[n]-e[r],u=i[o]-i[s];return(l||u)&&(a=this._getTransformedDimensions(),h=t.x+l*a.x,c=t.y+u*a.y),new fabric.Point(h,c)},translateToCenterPoint:function(e,i,r){var s=this.translateToGivenOrigin(e,i,r,"center","center");return this.angle?fabric.util.rotatePoint(s,e,t(this.angle)):s},translateToOriginPoint:function(e,i,r){var s=this.translateToGivenOrigin(e,"center","center",i,r);return this.angle?fabric.util.rotatePoint(s,e,t(this.angle)):s},getCenterPoint:function(){var t=new fabric.Point(this.left,this.top);return this.translateToCenterPoint(t,this.originX,this.originY)},getPointByOrigin:function(t,e){var i=this.getCenterPoint();return this.translateToOriginPoint(i,t,e)},toLocalPoint:function(e,i,r){var s,n,o=this.getCenterPoint();return s=i&&r?this.translateToGivenOrigin(o,"center","center",i,r):new fabric.Point(this.left,this.top),n=new fabric.Point(e.x,e.y),this.angle&&(n=fabric.util.rotatePoint(n,o,-t(this.angle))),n.subtractEquals(s)},setPositionByOrigin:function(t,e,i){var r=this.translateToCenterPoint(t,e,i),s=this.translateToOriginPoint(r,this.originX,this.originY);this.set("left",s.x),this.set("top",s.y)},adjustPosition:function(i){var r=t(this.angle),s=this.getWidth(),n=Math.cos(r)*s,o=Math.sin(r)*s;this.left+=n*(e[i]-e[this.originX]),this.top+=o*(e[i]-e[this.originX]),this.setCoords(),this.originX=i},_setOriginToCenter:function(){this._originalOriginX=this.originX,this._originalOriginY=this.originY;var t=this.getCenterPoint();this.originX="center",this.originY="center",this.left=t.x,this.top=t.y},_resetOrigin:function(){var t=this.translateToOriginPoint(this.getCenterPoint(),this._originalOriginX,this._originalOriginY);this.originX=this._originalOriginX,this.originY=this._originalOriginY,this.left=t.x,this.top=t.y,this._originalOriginX=null,this._originalOriginY=null},_getLeftTopCoords:function(){return this.translateToOriginPoint(this.getCenterPoint(),"left","top")}})}(),function(){function t(t){return[new fabric.Point(t.tl.x,t.tl.y),new fabric.Point(t.tr.x,t.tr.y),new fabric.Point(t.br.x,t.br.y),new fabric.Point(t.bl.x,t.bl.y)]}var e=fabric.util.degreesToRadians,i=fabric.util.multiplyTransformMatrices;fabric.util.object.extend(fabric.Object.prototype,{oCoords:null,intersectsWithRect:function(e,i){var r=t(this.oCoords);return"Intersection"===fabric.Intersection.intersectPolygonRectangle(r,e,i).status},intersectsWithObject:function(e){return"Intersection"===fabric.Intersection.intersectPolygonPolygon(t(this.oCoords),t(e.oCoords)).status},isContainedWithinObject:function(t){var e=t.getBoundingRect(),i=new fabric.Point(e.left,e.top),r=new fabric.Point(e.left+e.width,e.top+e.height);return this.isContainedWithinRect(i,r)},isContainedWithinRect:function(t,e){var i=this.getBoundingRect();return i.left>=t.x&&i.left+i.width<=e.x&&i.top>=t.y&&i.top+i.height<=e.y},containsPoint:function(t){var e=this._getImageLines(this.oCoords),i=this._findCrossPoints(t,e);return 0!==i&&i%2==1},_getImageLines:function(t){return{topline:{o:t.tl,d:t.tr},rightline:{o:t.tr,d:t.br},bottomline:{o:t.br,d:t.bl},leftline:{o:t.bl,d:t.tl}}},_findCrossPoints:function(t,e){var i,r,s,n,o,a=0;for(var h in e)if(!((o=e[h]).o.y<t.y&&o.d.y<t.y||o.o.y>=t.y&&o.d.y>=t.y||(o.o.x===o.d.x&&o.o.x>=t.x?(n=o.o.x,t.y):(i=0,r=(o.d.y-o.o.y)/(o.d.x-o.o.x),(s=t.y-i*t.x)+i*(n=-(s-(o.o.y-r*o.o.x))/(i-r))),n>=t.x&&(a+=1),2!==a)))break;return a},getBoundingRectWidth:function(){return this.getBoundingRect().width},getBoundingRectHeight:function(){return this.getBoundingRect().height},getBoundingRect:function(){return this.oCoords||this.setCoords(),fabric.util.makeBoundingBoxFromPoints([this.oCoords.tl,this.oCoords.tr,this.oCoords.br,this.oCoords.bl])},getWidth:function(){return this._getTransformedDimensions().x},getHeight:function(){return this._getTransformedDimensions().y},_constrainScale:function(t){return Math.abs(t)<this.minScaleLimit?t<0?-this.minScaleLimit:this.minScaleLimit:t},scale:function(t){return(t=this._constrainScale(t))<0&&(this.flipX=!this.flipX,this.flipY=!this.flipY,t*=-1),this.scaleX=t,this.scaleY=t,this.setCoords(),this},scaleToWidth:function(t){var e=this.getBoundingRect().width/this.getWidth();return this.scale(t/this.width/e)},scaleToHeight:function(t){var e=this.getBoundingRect().height/this.getHeight();return this.scale(t/this.height/e)},setCoords:function(){var t=e(this.angle),i=this.getViewportTransform(),r=this._calculateCurrentDimensions(),s=r.x,n=r.y;s<0&&(s=Math.abs(s));var o=Math.sin(t),a=Math.cos(t),h=s>0?Math.atan(n/s):0,c=s/Math.cos(h)/2,l=Math.cos(h+t)*c,u=Math.sin(h+t)*c,f=fabric.util.transformPoint(this.getCenterPoint(),i),d=new fabric.Point(f.x-l,f.y-u),g=new fabric.Point(d.x+s*a,d.y+s*o),p=new fabric.Point(d.x-n*o,d.y+n*a),v=new fabric.Point(f.x+l,f.y+u),b=new fabric.Point((d.x+p.x)/2,(d.y+p.y)/2),m=new fabric.Point((g.x+d.x)/2,(g.y+d.y)/2),y=new fabric.Point((v.x+g.x)/2,(v.y+g.y)/2),_=new fabric.Point((v.x+p.x)/2,(v.y+p.y)/2),x=new fabric.Point(m.x+o*this.rotatingPointOffset,m.y-a*this.rotatingPointOffset);return this.oCoords={tl:d,tr:g,br:v,bl:p,ml:b,mt:m,mr:y,mb:_,mtr:x},this._setCornerCoords&&this._setCornerCoords(),this},_calcRotateMatrix:function(){if(this.angle){var t=e(this.angle),i=Math.cos(t),r=Math.sin(t);return[i,r,-r,i,0,0]}return[1,0,0,1,0,0]},calcTransformMatrix:function(){var t=this.getCenterPoint(),e=[1,0,0,1,t.x,t.y],r=this._calcRotateMatrix(),s=this._calcDimensionsTransformMatrix(this.skewX,this.skewY,!0),n=this.group?this.group.calcTransformMatrix():[1,0,0,1,0,0];return n=i(n,e),n=i(n,r),n=i(n,s)},_calcDimensionsTransformMatrix:function(t,r,s){var n=[1,0,Math.tan(e(t)),1],o=[1,Math.tan(e(r)),0,1],a=this.scaleX*(s&&this.flipX?-1:1),h=this.scaleY*(s&&this.flipY?-1:1),c=i([a,0,0,h],n,!0);return i(c,o,!0)}})}(),fabric.util.object.extend(fabric.Object.prototype,{sendToBack:function(){return this.group?fabric.StaticCanvas.prototype.sendToBack.call(this.group,this):this.canvas.sendToBack(this),this},bringToFront:function(){return this.group?fabric.StaticCanvas.prototype.bringToFront.call(this.group,this):this.canvas.bringToFront(this),this},sendBackwards:function(t){return this.group?fabric.StaticCanvas.prototype.sendBackwards.call(this.group,this,t):this.canvas.sendBackwards(this,t),this},bringForward:function(t){return this.group?fabric.StaticCanvas.prototype.bringForward.call(this.group,this,t):this.canvas.bringForward(this,t),this},moveTo:function(t){return this.group?fabric.StaticCanvas.prototype.moveTo.call(this.group,this,t):this.canvas.moveTo(this,t),this}}),function(){function t(t,e){if(e){if(e.toLive)return t+": url(#SVGID_"+e.id+"); ";var i=new fabric.Color(e),r=t+": "+e+"; ",s=i.getAlpha();return 1!==s&&(r=t+": "+i.toRgb()+"; ",r+=t+"-opacity: "+s.toString()+"; "),r}return t+": none; "}fabric.util.object.extend(fabric.Object.prototype,{getSvgStyles:function(e){var i=this.fillRule,r=this.strokeWidth?this.strokeWidth:"0",s=this.strokeDashArray?this.strokeDashArray.join(" "):"none",n=this.strokeLineCap?this.strokeLineCap:"butt",o=this.strokeLineJoin?this.strokeLineJoin:"miter",a=this.strokeMiterLimit?this.strokeMiterLimit:"4",h=void 0!==this.opacity?this.opacity:"1",c=this.visible?"":" visibility: hidden;",l=e?"":this.getSvgFilter(),u=t("fill",this.fill);return[t("stroke",this.stroke),"stroke-width: ",r,"; ","stroke-dasharray: ",s,"; ","stroke-linecap: ",n,"; ","stroke-linejoin: ",o,"; ","stroke-miterlimit: ",a,"; ",u,"fill-rule: ",i,"; ","opacity: ",h,";",l,c].join("")},getSvgFilter:function(){return this.shadow?"filter: url(#SVGID_"+this.shadow.id+");":""},getSvgTransform:function(){if(this.group&&"path-group"===this.group.type)return"";var t=fabric.util.toFixed,e=this.getAngle(),i=this.getSkewX()%360,r=this.getSkewY()%360,s=this.getCenterPoint(),n=fabric.Object.NUM_FRACTION_DIGITS,o="path-group"===this.type?"":"translate("+t(s.x,n)+" "+t(s.y,n)+")",a=0!==e?" rotate("+t(e,n)+")":"",h=1===this.scaleX&&1===this.scaleY?"":" scale("+t(this.scaleX,n)+" "+t(this.scaleY,n)+")",c=0!==i?" skewX("+t(i,n)+")":"",l=0!==r?" skewY("+t(r,n)+")":"",u="path-group"===this.type?this.width:0,f=this.flipX?" matrix(-1 0 0 1 "+u+" 0) ":"",d="path-group"===this.type?this.height:0;return[o,a,h,f,this.flipY?" matrix(1 0 0 -1 0 "+d+")":"",c,l].join("")},getSvgTransformMatrix:function(){return this.transformMatrix?" matrix("+this.transformMatrix.join(" ")+") ":""},_createBaseSVGMarkup:function(){var t=[];return this.fill&&this.fill.toLive&&t.push(this.fill.toSVG(this,!1)),this.stroke&&this.stroke.toLive&&t.push(this.stroke.toSVG(this,!1)),this.shadow&&t.push(this.shadow.toSVG(this)),t}})}(),fabric.util.object.extend(fabric.Object.prototype,{hasStateChanged:function(){return this.stateProperties.some(function(t){return this.get(t)!==this.originalState[t]},this)},saveState:function(t){return this.stateProperties.forEach(function(t){this.originalState[t]=this.get(t)},this),t&&t.stateProperties&&t.stateProperties.forEach(function(t){this.originalState[t]=this.get(t)},this),this},setupState:function(){return this.originalState={},this.saveState(),this}}),function(){var t=fabric.util.degreesToRadians;fabric.util.object.extend(fabric.Object.prototype,{_controlsVisibility:null,_findTargetCorner:function(t){if(!this.hasControls||!this.active)return!1;var e,i,r=t.x,s=t.y;this.__corner=0;for(var n in this.oCoords)if(this.isControlVisible(n)&&("mtr"!==n||this.hasRotatingPoint)&&(!this.get("lockUniScaling")||"mt"!==n&&"mr"!==n&&"mb"!==n&&"ml"!==n)&&(i=this._getImageLines(this.oCoords[n].corner),0!==(e=this._findCrossPoints({x:r,y:s},i))&&e%2==1))return this.__corner=n,n;return!1},_setCornerCoords:function(){var e=this.oCoords,i=t(45-this.angle),r=.707106*this.cornerSize;Math.cos(i),Math.sin(i);e.tl.corner={tl:{x:e.tl.x-this.cornerSize,y:e.tl.y-this.cornerSize},tr:{x:e.tl.x,y:e.tl.y-this.cornerSize},bl:{x:e.tl.x-this.cornerSize,y:e.tl.y},br:{x:e.tl.x,y:e.tl.y}},e.tr.corner={tl:{x:e.tr.x,y:e.tr.y-this.cornerSize},tr:{x:e.tr.x+this.cornerSize,y:e.tr.y-this.cornerSize},bl:{x:e.tr.x,y:e.tr.y},br:{x:e.tr.x+this.cornerSize,y:e.tr.y}},e.bl.corner={tl:{x:e.bl.x-this.cornerSize,y:e.bl.y},tr:{x:e.bl.x,y:e.bl.y},bl:{x:e.bl.x-this.cornerSize,y:e.bl.y+this.cornerSize},br:{x:e.bl.x,y:e.bl.y+this.cornerSize}},e.br.corner={tl:{x:e.br.x,y:e.br.y},tr:{x:e.br.x+this.cornerSize,y:e.br.y},bl:{x:e.br.x,y:e.br.y+this.cornerSize},br:{x:e.br.x+this.cornerSize,y:e.br.y+this.cornerSize}}},_getNonTransformedDimensions:function(){var t=this.strokeWidth,e=this.width,i=this.height,r=!0,s=!0;return"line"===this.type&&"butt"===this.strokeLineCap&&(s=e,r=i),s&&(i+=i<0?-t:t),r&&(e+=e<0?-t:t),{x:e,y:i}},_getTransformedDimensions:function(t,e){void 0===t&&(t=this.skewX),void 0===e&&(e=this.skewY);var i,r,s=this._getNonTransformedDimensions(),n=s.x/2,o=s.y/2,a=[{x:-n,y:-o},{x:n,y:-o},{x:-n,y:o},{x:n,y:o}],h=this._calcDimensionsTransformMatrix(t,e,!1);for(i=0;i<a.length;i++)a[i]=fabric.util.transformPoint(a[i],h);return{x:(r=fabric.util.makeBoundingBoxFromPoints(a)).width,y:r.height}},_calculateCurrentDimensions:function(){var t=this.getViewportTransform(),e=this._getTransformedDimensions(),i=e.x,r=e.y;return i+=2*this.padding,r+=2*this.padding,fabric.util.transformPoint(new fabric.Point(i,r),t,!0)},drawSelectionBackground:function(e){if(!this.selectionBackgroundColor||!this.active||this.group)return this;e.save();var i=this.getCenterPoint(),r=this._calculateCurrentDimensions();return e.translate(i.x,i.y),e.rotate(t(this.angle)),e.fillStyle=this.selectionBackgroundColor,e.fillRect(-r.x/2,-r.y/2,r.x,r.y),e.restore(),this},drawBorders:function(t){if(!this.hasBorders)return this;var e=this._calculateCurrentDimensions(),i=1/this.borderScaleFactor,r=e.x+i,s=e.y+i;if(t.save(),t.strokeStyle=this.borderColor,this._setLineDash(t,[5,10],null),t.strokeRect(-r/2,-s/2,r,s),this.hasRotatingPoint&&this.isControlVisible("mtr")&&!this.get("lockRotation")&&this.hasControls){var n=-s/2;t.beginPath(),t.moveTo(0,n),t.lineTo(0,n-this.rotatingPointOffset),t.closePath(),t.stroke()}return t.restore(),this},drawBordersInGroup:function(t,e){if(!this.hasBorders)return this;var i=this._getNonTransformedDimensions(),r=fabric.util.customTransformMatrix(e.scaleX,e.scaleY,e.skewX),s=fabric.util.transformPoint(i,r),n=1/this.borderScaleFactor,o=s.x+n+2*this.padding,a=s.y+n+2*this.padding;return t.save(),this._setLineDash(t,this.borderDashArray,null),t.strokeStyle=this.borderColor,t.strokeRect(-o/2,-a/2,o,a),t.restore(),this},drawControls:function(t){if(!this.hasControls)return this;var e=this._calculateCurrentDimensions(),i=e.x,r=e.y,s=this.cornerSize,n=-(i+s)/2,o=-(r+s)/2,a=this.transparentCorners?"stroke":"fill";return t.save(),t.strokeStyle=t.fillStyle=this.cornerColor,this.transparentCorners||(t.strokeStyle=this.cornerStrokeColor),this._setLineDash(t,this.cornerDashArray,null),this._drawControl("tl",t,a,n,o),this._drawControl("tr",t,a,n+i,o),this._drawControl("bl",t,a,n,o+r),this._drawControl("br",t,a,n+i,o+r),this.get("lockUniScaling")||(this._drawControl("mt",t,a,n+i/2,o),this._drawControl("mb",t,a,n+i/2,o+r),this._drawControl("mr",t,a,n+i,o+r/2),this._drawControl("ml",t,a,n,o+r/2)),this.hasRotatingPoint&&this._drawControl("mtr",t,a,n+i/2,o-this.rotatingPointOffset),t.restore(),this},_drawControl:function(t,e,i,r,s){if(this.isControlVisible(t)){var n=this.cornerSize,o=!this.transparentCorners&&this.cornerStrokeColor;switch(this.cornerStyle){case"circle":e.beginPath(),e.arc(r+n/2,s+n/2,n/2,0,2*Math.PI,!1),e[i](),o&&e.stroke();break;default:"undefined"!=typeof G_vmlCanvasManager||this.transparentCorners||e.clearRect(r,s,n,n),e[i+"Rect"](r,s,n,n),o&&e.strokeRect(r,s,n,n)}}},isControlVisible:function(t){return this._getControlsVisibility()[t]},setControlVisible:function(t,e){return this._getControlsVisibility()[t]=e,this},setControlsVisibility:function(t){t||(t={});for(var e in t)this.setControlVisible(e,t[e]);return this},_getControlsVisibility:function(){return this._controlsVisibility||(this._controlsVisibility={tl:!0,tr:!1,br:!0,bl:!0,ml:!1,mt:!1,mr:!1,mb:!1,mtr:!1}),this._controlsVisibility}})}(),fabric.util.object.extend(fabric.StaticCanvas.prototype,{FX_DURATION:500,fxCenterObjectH:function(t,e){var i=function(){},r=(e=e||{}).onComplete||i,s=e.onChange||i,n=this;return fabric.util.animate({startValue:t.get("left"),endValue:this.getCenter().left,duration:this.FX_DURATION,onChange:function(e){t.set("left",e),n.renderAll(),s()},onComplete:function(){t.setCoords(),r()}}),this},fxCenterObjectV:function(t,e){var i=function(){},r=(e=e||{}).onComplete||i,s=e.onChange||i,n=this;return fabric.util.animate({startValue:t.get("top"),endValue:this.getCenter().top,duration:this.FX_DURATION,onChange:function(e){t.set("top",e),n.renderAll(),s()},onComplete:function(){t.setCoords(),r()}}),this},fxRemove:function(t,e){var i=function(){},r=(e=e||{}).onComplete||i,s=e.onChange||i,n=this;return fabric.util.animate({startValue:t.get("opacity"),endValue:0,duration:this.FX_DURATION,onStart:function(){t.set("active",!1)},onChange:function(e){t.set("opacity",e),n.renderAll(),s()},onComplete:function(){n.remove(t),r()}}),this}}),fabric.util.object.extend(fabric.Object.prototype,{animate:function(){if(arguments[0]&&"object"==typeof arguments[0]){var t,e,i=[];for(t in arguments[0])i.push(t);for(var r=0,s=i.length;r<s;r++)t=i[r],e=r!==s-1,this._animate(t,arguments[0][t],arguments[1],e)}else this._animate.apply(this,arguments);return this},_animate:function(t,e,i,r){var s,n=this;e=e.toString(),i=i?fabric.util.object.clone(i):{},~t.indexOf(".")&&(s=t.split("."));var o=s?this.get(s[0])[s[1]]:this.get(t);"from"in i||(i.from=o),e=~e.indexOf("=")?o+parseFloat(e.replace("=","")):parseFloat(e),fabric.util.animate({startValue:i.from,endValue:e,byValue:i.by,easing:i.easing,duration:i.duration,abort:i.abort&&function(){return i.abort.call(n)},onChange:function(e){s?n[s[0]][s[1]]=e:n.set(t,e),r||i.onChange&&i.onChange()},onComplete:function(){r||(n.setCoords(),i.onComplete&&i.onComplete())}})}}),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r={x1:1,x2:1,y1:1,y2:1},s=e.StaticCanvas.supports("setLineDash");function n(t,e){var i=t.origin,r=t.axis1,s=t.axis2,n=t.dimension,o=e.nearest,a=e.center,h=e.farthest;return function(){switch(this.get(i)){case o:return Math.min(this.get(r),this.get(s));case a:return Math.min(this.get(r),this.get(s))+.5*this.get(n);case h:return Math.max(this.get(r),this.get(s))}}}e.Line?e.warn("fabric.Line is already defined"):(e.Line=e.util.createClass(e.Object,{type:"line",x1:0,y1:0,x2:0,y2:0,initialize:function(t,e){e=e||{},t||(t=[0,0,0,0]),this.callSuper("initialize",e),this.set("x1",t[0]),this.set("y1",t[1]),this.set("x2",t[2]),this.set("y2",t[3]),this._setWidthHeight(e)},_setWidthHeight:function(t){t||(t={}),this.width=Math.abs(this.x2-this.x1),this.height=Math.abs(this.y2-this.y1),this.left="left"in t?t.left:this._getLeftToOriginX(),this.top="top"in t?t.top:this._getTopToOriginY()},_set:function(t,e){return this.callSuper("_set",t,e),void 0!==r[t]&&this._setWidthHeight(),this},_getLeftToOriginX:n({origin:"originX",axis1:"x1",axis2:"x2",dimension:"width"},{nearest:"left",center:"center",farthest:"right"}),_getTopToOriginY:n({origin:"originY",axis1:"y1",axis2:"y2",dimension:"height"},{nearest:"top",center:"center",farthest:"bottom"}),_render:function(t,e){if(t.beginPath(),e){var i=this.getCenterPoint();t.translate(i.x-this.strokeWidth/2,i.y-this.strokeWidth/2)}if(!this.strokeDashArray||this.strokeDashArray&&s){var r=this.calcLinePoints();t.moveTo(r.x1,r.y1),t.lineTo(r.x2,r.y2)}t.lineWidth=this.strokeWidth;var n=t.strokeStyle;t.strokeStyle=this.stroke||t.fillStyle,this.stroke&&this._renderStroke(t),t.strokeStyle=n},_renderDashedStroke:function(t){var i=this.calcLinePoints();t.beginPath(),e.util.drawDashedLine(t,i.x1,i.y1,i.x2,i.y2,this.strokeDashArray),t.closePath()},toObject:function(t){return i(this.callSuper("toObject",t),this.calcLinePoints())},calcLinePoints:function(){var t=this.x1<=this.x2?-1:1,e=this.y1<=this.y2?-1:1,i=t*this.width*.5,r=e*this.height*.5;return{x1:i,x2:t*this.width*-.5,y1:r,y2:e*this.height*-.5}},toSVG:function(t){var e=this._createBaseSVGMarkup(),i={x1:this.x1,x2:this.x2,y1:this.y1,y2:this.y2};return this.group&&"path-group"===this.group.type||(i=this.calcLinePoints()),e.push("<line ",'x1="',i.x1,'" y1="',i.y1,'" x2="',i.x2,'" y2="',i.y2,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform(),this.getSvgTransformMatrix(),'"/>\n'),t?t(e.join("")):e.join("")},complexity:function(){return 1}}),e.Line.ATTRIBUTE_NAMES=e.SHARED_ATTRIBUTES.concat("x1 y1 x2 y2".split(" ")),e.Line.fromElement=function(t,r){var s=e.parseAttributes(t,e.Line.ATTRIBUTE_NAMES),n=[s.x1||0,s.y1||0,s.x2||0,s.y2||0];return new e.Line(n,i(s,r))},e.Line.fromObject=function(t){var i=[t.x1,t.y1,t.x2,t.y2];return new e.Line(i,t)})}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=Math.PI,r=e.util.object.extend;e.Circle?e.warn("fabric.Circle is already defined."):(e.Circle=e.util.createClass(e.Object,{type:"circle",radius:0,startAngle:0,endAngle:2*i,initialize:function(t){t=t||{},this.callSuper("initialize",t),this.set("radius",t.radius||0),this.startAngle=t.startAngle||this.startAngle,this.endAngle=t.endAngle||this.endAngle},_set:function(t,e){return this.callSuper("_set",t,e),"radius"===t&&this.setRadius(e),this},toObject:function(t){return r(this.callSuper("toObject",t),{radius:this.get("radius"),startAngle:this.startAngle,endAngle:this.endAngle})},toSVG:function(t){var e=this._createBaseSVGMarkup(),r=0,s=0,n=(this.endAngle-this.startAngle)%(2*i);if(0===n)this.group&&"path-group"===this.group.type&&(r=this.left+this.radius,s=this.top+this.radius),e.push("<circle ",'cx="'+r+'" cy="'+s+'" ','r="',this.radius,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform()," ",this.getSvgTransformMatrix(),'"/>\n');else{var o=Math.cos(this.startAngle)*this.radius,a=Math.sin(this.startAngle)*this.radius,h=Math.cos(this.endAngle)*this.radius,c=Math.sin(this.endAngle)*this.radius,l=n>i?"1":"0";e.push('<path d="M '+o+" "+a," A "+this.radius+" "+this.radius," 0 ",+l+" 1"," "+h+" "+c,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform()," ",this.getSvgTransformMatrix(),'"/>\n')}return t?t(e.join("")):e.join("")},_render:function(t,e){t.beginPath(),t.arc(e?this.left+this.radius:0,e?this.top+this.radius:0,this.radius,this.startAngle,this.endAngle,!1),this._renderFill(t),this._renderStroke(t)},getRadiusX:function(){return this.get("radius")*this.get("scaleX")},getRadiusY:function(){return this.get("radius")*this.get("scaleY")},setRadius:function(t){return this.radius=t,this.set("width",2*t).set("height",2*t)},complexity:function(){return 1}}),e.Circle.ATTRIBUTE_NAMES=e.SHARED_ATTRIBUTES.concat("cx cy r".split(" ")),e.Circle.fromElement=function(t,i){i||(i={});var s,n=e.parseAttributes(t,e.Circle.ATTRIBUTE_NAMES);if(!("radius"in(s=n)&&s.radius>=0))throw new Error("value of `r` attribute is required and can not be negative");n.left=n.left||0,n.top=n.top||0;var o=new e.Circle(r(n,i));return o.left-=o.radius,o.top-=o.radius,o},e.Circle.fromObject=function(t){return new e.Circle(t)})}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={});e.Triangle?e.warn("fabric.Triangle is already defined"):(e.Triangle=e.util.createClass(e.Object,{type:"triangle",initialize:function(t){t=t||{},this.callSuper("initialize",t),this.set("width",t.width||100).set("height",t.height||100)},_render:function(t){var e=this.width/2,i=this.height/2;t.beginPath(),t.moveTo(-e,i),t.lineTo(0,-i),t.lineTo(e,i),t.closePath(),this._renderFill(t),this._renderStroke(t)},_renderDashedStroke:function(t){var i=this.width/2,r=this.height/2;t.beginPath(),e.util.drawDashedLine(t,-i,r,0,-r,this.strokeDashArray),e.util.drawDashedLine(t,0,-r,i,r,this.strokeDashArray),e.util.drawDashedLine(t,i,r,-i,r,this.strokeDashArray),t.closePath()},toSVG:function(t){var e=this._createBaseSVGMarkup(),i=this.width/2,r=this.height/2,s=[-i+" "+r,"0 "+-r,i+" "+r].join(",");return e.push("<polygon ",'points="',s,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform(),'"/>'),t?t(e.join("")):e.join("")},complexity:function(){return 1}}),e.Triangle.fromObject=function(t){return new e.Triangle(t)})}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=2*Math.PI,r=e.util.object.extend;e.Ellipse?e.warn("fabric.Ellipse is already defined."):(e.Ellipse=e.util.createClass(e.Object,{type:"ellipse",rx:0,ry:0,initialize:function(t){t=t||{},this.callSuper("initialize",t),this.set("rx",t.rx||0),this.set("ry",t.ry||0)},_set:function(t,e){switch(this.callSuper("_set",t,e),t){case"rx":this.rx=e,this.set("width",2*e);break;case"ry":this.ry=e,this.set("height",2*e)}return this},getRx:function(){return this.get("rx")*this.get("scaleX")},getRy:function(){return this.get("ry")*this.get("scaleY")},toObject:function(t){return r(this.callSuper("toObject",t),{rx:this.get("rx"),ry:this.get("ry")})},toSVG:function(t){var e=this._createBaseSVGMarkup(),i=0,r=0;return this.group&&"path-group"===this.group.type&&(i=this.left+this.rx,r=this.top+this.ry),e.push("<ellipse ",'cx="',i,'" cy="',r,'" ','rx="',this.rx,'" ry="',this.ry,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform(),this.getSvgTransformMatrix(),'"/>\n'),t?t(e.join("")):e.join("")},_render:function(t,e){t.beginPath(),t.save(),t.transform(1,0,0,this.ry/this.rx,0,0),t.arc(e?this.left+this.rx:0,e?(this.top+this.ry)*this.rx/this.ry:0,this.rx,0,i,!1),t.restore(),this._renderFill(t),this._renderStroke(t)},complexity:function(){return 1}}),e.Ellipse.ATTRIBUTE_NAMES=e.SHARED_ATTRIBUTES.concat("cx cy rx ry".split(" ")),e.Ellipse.fromElement=function(t,i){i||(i={});var s=e.parseAttributes(t,e.Ellipse.ATTRIBUTE_NAMES);s.left=s.left||0,s.top=s.top||0;var n=new e.Ellipse(r(s,i));return n.top-=n.ry,n.left-=n.rx,n},e.Ellipse.fromObject=function(t){return new e.Ellipse(t)})}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend;if(e.Rect)e.warn("fabric.Rect is already defined");else{var r=e.Object.prototype.stateProperties.concat();r.push("rx","ry","x","y"),e.Rect=e.util.createClass(e.Object,{stateProperties:r,type:"rect",rx:0,ry:0,strokeDashArray:null,initialize:function(t){t=t||{},this.callSuper("initialize",t),this._initRxRy()},_initRxRy:function(){this.rx&&!this.ry?this.ry=this.rx:this.ry&&!this.rx&&(this.rx=this.ry)},_render:function(t,e){if(1!==this.width||1!==this.height){var i=this.rx?Math.min(this.rx,this.width/2):0,r=this.ry?Math.min(this.ry,this.height/2):0,s=this.width,n=this.height,o=e?this.left:-this.width/2,a=e?this.top:-this.height/2,h=0!==i||0!==r,c=.4477152502;t.beginPath(),t.moveTo(o+i,a),t.lineTo(o+s-i,a),h&&t.bezierCurveTo(o+s-c*i,a,o+s,a+c*r,o+s,a+r),t.lineTo(o+s,a+n-r),h&&t.bezierCurveTo(o+s,a+n-c*r,o+s-c*i,a+n,o+s-i,a+n),t.lineTo(o+i,a+n),h&&t.bezierCurveTo(o+c*i,a+n,o,a+n-c*r,o,a+n-r),t.lineTo(o,a+r),h&&t.bezierCurveTo(o,a+c*r,o+c*i,a,o+i,a),t.closePath(),this._renderFill(t),this._renderStroke(t)}else t.fillRect(-.5,-.5,1,1)},_renderDashedStroke:function(t){var i=-this.width/2,r=-this.height/2,s=this.width,n=this.height;t.beginPath(),e.util.drawDashedLine(t,i,r,i+s,r,this.strokeDashArray),e.util.drawDashedLine(t,i+s,r,i+s,r+n,this.strokeDashArray),e.util.drawDashedLine(t,i+s,r+n,i,r+n,this.strokeDashArray),e.util.drawDashedLine(t,i,r+n,i,r,this.strokeDashArray),t.closePath()},toObject:function(t){var e=i(this.callSuper("toObject",t),{rx:this.get("rx")||0,ry:this.get("ry")||0});return this.includeDefaultValues||this._removeDefaultValues(e),e},toSVG:function(t){var e=this._createBaseSVGMarkup(),i=this.left,r=this.top;return this.group&&"path-group"===this.group.type||(i=-this.width/2,r=-this.height/2),e.push("<rect ",'x="',i,'" y="',r,'" rx="',this.get("rx"),'" ry="',this.get("ry"),'" width="',this.width,'" height="',this.height,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform(),this.getSvgTransformMatrix(),'"/>\n'),t?t(e.join("")):e.join("")},complexity:function(){return 1}}),e.Rect.ATTRIBUTE_NAMES=e.SHARED_ATTRIBUTES.concat("x y rx ry width height".split(" ")),e.Rect.fromElement=function(t,r){if(!t)return null;r=r||{};var s=e.parseAttributes(t,e.Rect.ATTRIBUTE_NAMES);s.left=s.left||0,s.top=s.top||0;var n=new e.Rect(i(r?e.util.object.clone(r):{},s));return n.visible=n.width>0&&n.height>0,n},e.Rect.fromObject=function(t){return new e.Rect(t)}}}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={});e.Polyline?e.warn("fabric.Polyline is already defined"):(e.Polyline=e.util.createClass(e.Object,{type:"polyline",points:null,minX:0,minY:0,initialize:function(t,i){return e.Polygon.prototype.initialize.call(this,t,i)},_calcDimensions:function(){return e.Polygon.prototype._calcDimensions.call(this)},_applyPointOffset:function(){return e.Polygon.prototype._applyPointOffset.call(this)},toObject:function(t){return e.Polygon.prototype.toObject.call(this,t)},toSVG:function(t){return e.Polygon.prototype.toSVG.call(this,t)},_render:function(t,i){e.Polygon.prototype.commonRender.call(this,t,i)&&(this._renderFill(t),this._renderStroke(t))},_renderDashedStroke:function(t){var i,r;t.beginPath();for(var s=0,n=this.points.length;s<n;s++)i=this.points[s],r=this.points[s+1]||i,e.util.drawDashedLine(t,i.x,i.y,r.x,r.y,this.strokeDashArray)},complexity:function(){return this.get("points").length}}),e.Polyline.ATTRIBUTE_NAMES=e.SHARED_ATTRIBUTES.concat(),e.Polyline.fromElement=function(t,i){if(!t)return null;i||(i={});var r=e.parsePointsAttribute(t.getAttribute("points")),s=e.parseAttributes(t,e.Polyline.ATTRIBUTE_NAMES);return new e.Polyline(r,e.util.object.extend(s,i))},e.Polyline.fromObject=function(t){var i=t.points;return new e.Polyline(i,t,!0)})}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.util.array.min,s=e.util.array.max,n=e.util.toFixed;e.Polygon?e.warn("fabric.Polygon is already defined"):(e.Polygon=e.util.createClass(e.Object,{type:"polygon",points:null,minX:0,minY:0,initialize:function(t,e){e=e||{},this.points=t||[],this.callSuper("initialize",e),this._calcDimensions(),"top"in e||(this.top=this.minY),"left"in e||(this.left=this.minX),this.pathOffset={x:this.minX+this.width/2,y:this.minY+this.height/2}},_calcDimensions:function(){var t=this.points,e=r(t,"x"),i=r(t,"y"),n=s(t,"x"),o=s(t,"y");this.width=n-e||0,this.height=o-i||0,this.minX=e||0,this.minY=i||0},toObject:function(t){return i(this.callSuper("toObject",t),{points:this.points.concat()})},toSVG:function(t){for(var e,i=[],r=this._createBaseSVGMarkup(),s=0,o=this.points.length;s<o;s++)i.push(n(this.points[s].x,2),",",n(this.points[s].y,2)," ");return this.group&&"path-group"===this.group.type||(e=" translate("+-this.pathOffset.x+", "+-this.pathOffset.y+") "),r.push("<",this.type," ",'points="',i.join(""),'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform(),e," ",this.getSvgTransformMatrix(),'"/>\n'),t?t(r.join("")):r.join("")},_render:function(t,e){this.commonRender(t,e)&&(this._renderFill(t),(this.stroke||this.strokeDashArray)&&(t.closePath(),this._renderStroke(t)))},commonRender:function(t,e){var i,r=this.points.length;if(!r||isNaN(this.points[r-1].y))return!1;e||t.translate(-this.pathOffset.x,-this.pathOffset.y),t.beginPath(),t.moveTo(this.points[0].x,this.points[0].y);for(var s=0;s<r;s++)i=this.points[s],t.lineTo(i.x,i.y);return!0},_renderDashedStroke:function(t){e.Polyline.prototype._renderDashedStroke.call(this,t),t.closePath()},complexity:function(){return this.points.length}}),e.Polygon.ATTRIBUTE_NAMES=e.SHARED_ATTRIBUTES.concat(),e.Polygon.fromElement=function(t,r){if(!t)return null;r||(r={});var s=e.parsePointsAttribute(t.getAttribute("points")),n=e.parseAttributes(t,e.Polygon.ATTRIBUTE_NAMES);return new e.Polygon(s,i(n,r))},e.Polygon.fromObject=function(t){return new e.Polygon(t.points,t,!0)})}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.array.min,r=e.util.array.max,s=e.util.object.extend,n=Object.prototype.toString,o=e.util.drawArc,a={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7},h={m:"l",M:"L"};e.Path?e.warn("fabric.Path is already defined"):(e.Path=e.util.createClass(e.Object,{type:"path",path:null,minX:0,minY:0,initialize:function(t,e){e=e||{},this.setOptions(e),t||(t=[]);var i="[object Array]"===n.call(t);this.path=i?t:t.match&&t.match(/[mzlhvcsqta][^mzlhvcsqta]*/gi),this.path&&(i||(this.path=this._parsePath()),this._setPositionDimensions(e),e.sourcePath&&this.setSourcePath(e.sourcePath))},_setPositionDimensions:function(t){var e=this._parseDimensions();this.minX=e.left,this.minY=e.top,this.width=e.width,this.height=e.height,void 0===t.left&&(this.left=e.left+("center"===this.originX?this.width/2:"right"===this.originX?this.width:0)),void 0===t.top&&(this.top=e.top+("center"===this.originY?this.height/2:"bottom"===this.originY?this.height:0)),this.pathOffset=this.pathOffset||{x:this.minX+this.width/2,y:this.minY+this.height/2}},_render:function(t){var e,i,r,s=null,n=0,a=0,h=0,c=0,l=0,u=0,f=-this.pathOffset.x,d=-this.pathOffset.y;this.group&&"path-group"===this.group.type&&(f=0,d=0),t.beginPath();for(var g=0,p=this.path.length;g<p;++g){switch((e=this.path[g])[0]){case"l":h+=e[1],c+=e[2],t.lineTo(h+f,c+d);break;case"L":h=e[1],c=e[2],t.lineTo(h+f,c+d);break;case"h":h+=e[1],t.lineTo(h+f,c+d);break;case"H":h=e[1],t.lineTo(h+f,c+d);break;case"v":c+=e[1],t.lineTo(h+f,c+d);break;case"V":c=e[1],t.lineTo(h+f,c+d);break;case"m":n=h+=e[1],a=c+=e[2],t.moveTo(h+f,c+d);break;case"M":n=h=e[1],a=c=e[2],t.moveTo(h+f,c+d);break;case"c":i=h+e[5],r=c+e[6],l=h+e[3],u=c+e[4],t.bezierCurveTo(h+e[1]+f,c+e[2]+d,l+f,u+d,i+f,r+d),h=i,c=r;break;case"C":h=e[5],c=e[6],l=e[3],u=e[4],t.bezierCurveTo(e[1]+f,e[2]+d,l+f,u+d,h+f,c+d);break;case"s":i=h+e[3],r=c+e[4],null===s[0].match(/[CcSs]/)?(l=h,u=c):(l=2*h-l,u=2*c-u),t.bezierCurveTo(l+f,u+d,h+e[1]+f,c+e[2]+d,i+f,r+d),l=h+e[1],u=c+e[2],h=i,c=r;break;case"S":i=e[3],r=e[4],null===s[0].match(/[CcSs]/)?(l=h,u=c):(l=2*h-l,u=2*c-u),t.bezierCurveTo(l+f,u+d,e[1]+f,e[2]+d,i+f,r+d),h=i,c=r,l=e[1],u=e[2];break;case"q":i=h+e[3],r=c+e[4],l=h+e[1],u=c+e[2],t.quadraticCurveTo(l+f,u+d,i+f,r+d),h=i,c=r;break;case"Q":i=e[3],r=e[4],t.quadraticCurveTo(e[1]+f,e[2]+d,i+f,r+d),h=i,c=r,l=e[1],u=e[2];break;case"t":i=h+e[1],r=c+e[2],null===s[0].match(/[QqTt]/)?(l=h,u=c):(l=2*h-l,u=2*c-u),t.quadraticCurveTo(l+f,u+d,i+f,r+d),h=i,c=r;break;case"T":i=e[1],r=e[2],null===s[0].match(/[QqTt]/)?(l=h,u=c):(l=2*h-l,u=2*c-u),t.quadraticCurveTo(l+f,u+d,i+f,r+d),h=i,c=r;break;case"a":o(t,h+f,c+d,[e[1],e[2],e[3],e[4],e[5],e[6]+h+f,e[7]+c+d]),h+=e[6],c+=e[7];break;case"A":o(t,h+f,c+d,[e[1],e[2],e[3],e[4],e[5],e[6]+f,e[7]+d]),h=e[6],c=e[7];break;case"z":case"Z":h=n,c=a,t.closePath()}s=e}this._renderFill(t),this._renderStroke(t)},toString:function(){return"#<fabric.Path ("+this.complexity()+'): { "top": '+this.top+', "left": '+this.left+" }>"},toObject:function(t){var e=s(this.callSuper("toObject",t),{path:this.path.map(function(t){return t.slice()}),pathOffset:this.pathOffset});return this.sourcePath&&(e.sourcePath=this.sourcePath),this.transformMatrix&&(e.transformMatrix=this.transformMatrix),e},toDatalessObject:function(t){var e=this.toObject(t);return this.sourcePath&&(e.path=this.sourcePath),delete e.sourcePath,e},toSVG:function(t){for(var e=[],i=this._createBaseSVGMarkup(),r="",s=0,n=this.path.length;s<n;s++)e.push(this.path[s].join(" "));var o=e.join(" ");return this.group&&"path-group"===this.group.type||(r=" translate("+-this.pathOffset.x+", "+-this.pathOffset.y+") "),i.push("<path ",'d="',o,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform(),r,this.getSvgTransformMatrix(),'" stroke-linecap="round" ',"/>\n"),t?t(i.join("")):i.join("")},complexity:function(){return this.path.length},_parsePath:function(){for(var t,e,i,r,s,n=[],o=[],c=/([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi,l=0,u=this.path.length;l<u;l++){for(r=(t=this.path[l]).slice(1).trim(),o.length=0;i=c.exec(r);)o.push(i[0]);s=[t.charAt(0)];for(var f=0,d=o.length;f<d;f++)e=parseFloat(o[f]),isNaN(e)||s.push(e);var g=s[0],p=a[g.toLowerCase()],v=h[g]||g;if(s.length-1>p)for(var b=1,m=s.length;b<m;b+=p)n.push([g].concat(s.slice(b,b+p))),g=v;else n.push(s)}return n},_parseDimensions:function(){for(var t,s,n,o,a=[],h=[],c=null,l=0,u=0,f=0,d=0,g=0,p=0,v=0,b=this.path.length;v<b;++v){switch((t=this.path[v])[0]){case"l":f+=t[1],d+=t[2],o=[];break;case"L":f=t[1],d=t[2],o=[];break;case"h":f+=t[1],o=[];break;case"H":f=t[1],o=[];break;case"v":d+=t[1],o=[];break;case"V":d=t[1],o=[];break;case"m":l=f+=t[1],u=d+=t[2],o=[];break;case"M":l=f=t[1],u=d=t[2],o=[];break;case"c":s=f+t[5],n=d+t[6],g=f+t[3],p=d+t[4],o=e.util.getBoundsOfCurve(f,d,f+t[1],d+t[2],g,p,s,n),f=s,d=n;break;case"C":f=t[5],d=t[6],g=t[3],p=t[4],o=e.util.getBoundsOfCurve(f,d,t[1],t[2],g,p,f,d);break;case"s":s=f+t[3],n=d+t[4],null===c[0].match(/[CcSs]/)?(g=f,p=d):(g=2*f-g,p=2*d-p),o=e.util.getBoundsOfCurve(f,d,g,p,f+t[1],d+t[2],s,n),g=f+t[1],p=d+t[2],f=s,d=n;break;case"S":s=t[3],n=t[4],null===c[0].match(/[CcSs]/)?(g=f,p=d):(g=2*f-g,p=2*d-p),o=e.util.getBoundsOfCurve(f,d,g,p,t[1],t[2],s,n),f=s,d=n,g=t[1],p=t[2];break;case"q":s=f+t[3],n=d+t[4],g=f+t[1],p=d+t[2],o=e.util.getBoundsOfCurve(f,d,g,p,g,p,s,n),f=s,d=n;break;case"Q":g=t[1],p=t[2],o=e.util.getBoundsOfCurve(f,d,g,p,g,p,t[3],t[4]),f=t[3],d=t[4];break;case"t":s=f+t[1],n=d+t[2],null===c[0].match(/[QqTt]/)?(g=f,p=d):(g=2*f-g,p=2*d-p),o=e.util.getBoundsOfCurve(f,d,g,p,g,p,s,n),f=s,d=n;break;case"T":s=t[1],n=t[2],null===c[0].match(/[QqTt]/)?(g=f,p=d):(g=2*f-g,p=2*d-p),o=e.util.getBoundsOfCurve(f,d,g,p,g,p,s,n),f=s,d=n;break;case"a":o=e.util.getBoundsOfArc(f,d,t[1],t[2],t[3],t[4],t[5],t[6]+f,t[7]+d),f+=t[6],d+=t[7];break;case"A":o=e.util.getBoundsOfArc(f,d,t[1],t[2],t[3],t[4],t[5],t[6],t[7]),f=t[6],d=t[7];break;case"z":case"Z":f=l,d=u}c=t,o.forEach(function(t){a.push(t.x),h.push(t.y)}),a.push(f),h.push(d)}var m=i(a)||0,y=i(h)||0;return{left:m,top:y,width:(r(a)||0)-m,height:(r(h)||0)-y}}}),e.Path.fromObject=function(t,i){"string"==typeof t.path?e.loadSVGFromURL(t.path,function(r){var s=r[0],n=t.path;delete t.path,e.util.object.extend(s,t),s.setSourcePath(n),i(s)}):i(new e.Path(t.path,t))},e.Path.ATTRIBUTE_NAMES=e.SHARED_ATTRIBUTES.concat(["d"]),e.Path.fromElement=function(t,i,r){var n=e.parseAttributes(t,e.Path.ATTRIBUTE_NAMES);i&&i(new e.Path(n.d,s(n,r)))},e.Path.async=!0)}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.util.array.invoke,s=e.Object.prototype.toObject;e.PathGroup?e.warn("fabric.PathGroup is already defined"):(e.PathGroup=e.util.createClass(e.Path,{type:"path-group",fill:"",initialize:function(t,e){e=e||{},this.paths=t||[];for(var i=this.paths.length;i--;)this.paths[i].group=this;e.toBeParsed&&(this.parseDimensionsFromPaths(e),delete e.toBeParsed),this.setOptions(e),this.setCoords(),e.sourcePath&&this.setSourcePath(e.sourcePath)},parseDimensionsFromPaths:function(t){for(var i,r,s,n,o,a,h=[],c=[],l=this.paths.length;l--;){n=(s=this.paths[l]).height+s.strokeWidth,o=s.width+s.strokeWidth,i=[{x:s.left,y:s.top},{x:s.left+o,y:s.top},{x:s.left,y:s.top+n},{x:s.left+o,y:s.top+n}],a=this.paths[l].transformMatrix;for(var u=0;u<i.length;u++)r=i[u],a&&(r=e.util.transformPoint(r,a,!1)),h.push(r.x),c.push(r.y)}t.width=Math.max.apply(null,h),t.height=Math.max.apply(null,c)},render:function(t){if(this.visible){t.save(),this.transformMatrix&&t.transform.apply(t,this.transformMatrix),this.transform(t),this._setShadow(t),this.clipTo&&e.util.clipContext(this,t),t.translate(-this.width/2,-this.height/2);for(var i=0,r=this.paths.length;i<r;++i)this.paths[i].render(t,!0);this.clipTo&&t.restore(),t.restore()}},_set:function(t,e){if("fill"===t&&e&&this.isSameColor())for(var i=this.paths.length;i--;)this.paths[i]._set(t,e);return this.callSuper("_set",t,e)},toObject:function(t){var e=i(s.call(this,t),{paths:r(this.getObjects(),"toObject",t)});return this.sourcePath&&(e.sourcePath=this.sourcePath),e},toDatalessObject:function(t){var e=this.toObject(t);return this.sourcePath&&(e.paths=this.sourcePath),e},toSVG:function(t){var e=this.getObjects(),i=this.getPointByOrigin("left","top"),r="translate("+i.x+" "+i.y+")",s=this._createBaseSVGMarkup();s.push("<g ",'style="',this.getSvgStyles(),'" ','transform="',this.getSvgTransformMatrix(),r,this.getSvgTransform(),'" ',">\n");for(var n=0,o=e.length;n<o;n++)s.push("\t",e[n].toSVG(t));return s.push("</g>\n"),t?t(s.join("")):s.join("")},toString:function(){return"#<fabric.PathGroup ("+this.complexity()+"): { top: "+this.top+", left: "+this.left+" }>"},isSameColor:function(){var t=this.getObjects()[0].get("fill")||"";return"string"==typeof t&&(t=t.toLowerCase(),this.getObjects().every(function(e){var i=e.get("fill")||"";return"string"==typeof i&&i.toLowerCase()===t}))},complexity:function(){return this.paths.reduce(function(t,e){return t+(e&&e.complexity?e.complexity():0)},0)},getObjects:function(){return this.paths}}),e.PathGroup.fromObject=function(t,i){"string"==typeof t.paths?e.loadSVGFromURL(t.paths,function(r){var s=t.paths;delete t.paths;var n=e.util.groupSVGElements(r,t,s);i(n)}):e.util.enlivenObjects(t.paths,function(r){delete t.paths,i(new e.PathGroup(r,t))})},e.PathGroup.async=!0)}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.util.array.min,s=e.util.array.max,n=e.util.array.invoke;if(!e.Group){var o={lockMovementX:!0,lockMovementY:!0,lockRotation:!0,lockScalingX:!0,lockScalingY:!0,lockUniScaling:!0};e.Group=e.util.createClass(e.Object,e.Collection,{type:"group",strokeWidth:0,initialize:function(t,e,i){e=e||{},this._objects=[],i&&this.callSuper("initialize",e),this._objects=t||[];for(var r=this._objects.length;r--;)this._objects[r].group=this;this.originalState={},e.originX&&(this.originX=e.originX),e.originY&&(this.originY=e.originY),i?this._updateObjectsCoords(!0):(this._calcBounds(),this._updateObjectsCoords(),this.callSuper("initialize",e)),this.setCoords(),this.saveCoords()},_updateObjectsCoords:function(t){for(var e=this._objects.length;e--;)this._updateObjectCoords(this._objects[e],t)},_updateObjectCoords:function(t,e){if(t.__origHasControls=t.hasControls,t.hasControls=!1,!e){var i=t.getLeft(),r=t.getTop(),s=this.getCenterPoint();t.set({originalLeft:i,originalTop:r,left:i-s.x,top:r-s.y}),t.setCoords()}},toString:function(){return"#<fabric.Group: ("+this.complexity()+")>"},addWithUpdate:function(t){return this._restoreObjectsState(),e.util.resetObjectTransform(this),t&&(this._objects.push(t),t.group=this,t._set("canvas",this.canvas)),this.forEachObject(this._setObjectActive,this),this._calcBounds(),this._updateObjectsCoords(),this},_setObjectActive:function(t){t.set("active",!0),t.group=this},removeWithUpdate:function(t){return this._restoreObjectsState(),e.util.resetObjectTransform(this),this.forEachObject(this._setObjectActive,this),this.remove(t),this._calcBounds(),this._updateObjectsCoords(),this},_onObjectAdded:function(t){t.group=this,t._set("canvas",this.canvas)},_onObjectRemoved:function(t){delete t.group,t.set("active",!1)},delegatedProperties:{fill:!0,stroke:!0,strokeWidth:!0,fontFamily:!0,fontWeight:!0,fontSize:!0,fontStyle:!0,lineHeight:!0,textDecoration:!0,textAlign:!0,backgroundColor:!0},_set:function(t,e){var i=this._objects.length;if(this.delegatedProperties[t]||"canvas"===t)for(;i--;)this._objects[i].set(t,e);else for(;i--;)this._objects[i].setOnGroup(t,e);this.callSuper("_set",t,e)},toObject:function(t){return i(this.callSuper("toObject",t),{objects:n(this._objects,"toObject",t)})},render:function(t){if(this.visible){t.save(),this.transformMatrix&&t.transform.apply(t,this.transformMatrix),this.transform(t),this._setShadow(t),this.clipTo&&e.util.clipContext(this,t);for(var i=0,r=this._objects.length;i<r;i++)this._renderObject(this._objects[i],t);this.clipTo&&t.restore(),t.restore()}},_renderControls:function(t,e){this.callSuper("_renderControls",t,e);for(var i=0,r=this._objects.length;i<r;i++)this._objects[i]._renderControls(t)},_renderObject:function(t,e){if(t.visible){var i=t.hasRotatingPoint;t.hasRotatingPoint=!1,t.render(e),t.hasRotatingPoint=i}},_restoreObjectsState:function(){return this._objects.forEach(this._restoreObjectState,this),this},realizeTransform:function(t){var i=t.calcTransformMatrix(),r=e.util.qrDecompose(i),s=new e.Point(r.translateX,r.translateY);return t.scaleX=r.scaleX,t.scaleY=r.scaleY,t.skewX=r.skewX,t.skewY=r.skewY,t.angle=r.angle,t.flipX=!1,t.flipY=!1,t.setPositionByOrigin(s,"center","center"),t},_restoreObjectState:function(t){return this.realizeTransform(t),t.setCoords(),t.hasControls=t.__origHasControls,delete t.__origHasControls,t.set("active",!1),delete t.group,this},destroy:function(){return this._restoreObjectsState()},saveCoords:function(){return this._originalLeft=this.get("left"),this._originalTop=this.get("top"),this},hasMoved:function(){return this._originalLeft!==this.get("left")||this._originalTop!==this.get("top")},setObjectsCoords:function(){return this.forEachObject(function(t){t.setCoords()}),this},_calcBounds:function(t){for(var e,i,r,s=[],n=[],o=["tr","br","bl","tl"],a=0,h=this._objects.length,c=o.length;a<h;++a)for((e=this._objects[a]).setCoords(),r=0;r<c;r++)i=o[r],s.push(e.oCoords[i].x),n.push(e.oCoords[i].y);this.set(this._getBounds(s,n,t))},_getBounds:function(t,i,n){var o=e.util.invertTransform(this.getViewportTransform()),a=e.util.transformPoint(new e.Point(r(t),r(i)),o),h=e.util.transformPoint(new e.Point(s(t),s(i)),o),c={width:h.x-a.x||0,height:h.y-a.y||0};return n||(c.left=a.x||0,c.top=a.y||0,"center"===this.originX&&(c.left+=c.width/2),"right"===this.originX&&(c.left+=c.width),"center"===this.originY&&(c.top+=c.height/2),"bottom"===this.originY&&(c.top+=c.height)),c},toSVG:function(t){var e=this._createBaseSVGMarkup();e.push('<g transform="',this.getSvgTransform(),this.getSvgTransformMatrix(),'" style="',this.getSvgFilter(),'">\n');for(var i=0,r=this._objects.length;i<r;i++)e.push("\t",this._objects[i].toSVG(t));return e.push("</g>\n"),t?t(e.join("")):e.join("")},get:function(t){if(t in o){if(this[t])return this[t];for(var e=0,i=this._objects.length;e<i;e++)if(this._objects[e][t])return!0;return!1}return t in this.delegatedProperties?this._objects[0]&&this._objects[0].get(t):this[t]}}),e.Group.fromObject=function(t,i){e.util.enlivenObjects(t.objects,function(r){delete t.objects,i&&i(new e.Group(r,t,!0))})},e.Group.async=!0}}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=fabric.util.object.extend;t.fabric||(t.fabric={}),t.fabric.Image?fabric.warn("fabric.Image is already defined."):(fabric.Image=fabric.util.createClass(fabric.Object,{type:"image",crossOrigin:"",alignX:"none",alignY:"none",meetOrSlice:"meet",strokeWidth:0,_lastScaleX:1,_lastScaleY:1,initialize:function(t,e){e||(e={}),this.filters=[],this.resizeFilters=[],this.callSuper("initialize",e),this._initElement(t,e)},getElement:function(){return this._element},setElement:function(t,e,i){return this._element=t,this._originalElement=t,this._initConfig(i),0!==this.filters.length?this.applyFilters(e):e&&e(),this},setCrossOrigin:function(t){return this.crossOrigin=t,this._element.crossOrigin=t,this},getOriginalSize:function(){var t=this.getElement();return{width:t.width,height:t.height}},_stroke:function(t){if(this.stroke&&0!==this.strokeWidth){var e=this.width/2,i=this.height/2;t.beginPath(),t.moveTo(-e,-i),t.lineTo(e,-i),t.lineTo(e,i),t.lineTo(-e,i),t.lineTo(-e,-i),t.closePath()}},_renderDashedStroke:function(t){var e=-this.width/2,i=-this.height/2,r=this.width,s=this.height;t.save(),this._setStrokeStyles(t),t.beginPath(),fabric.util.drawDashedLine(t,e,i,e+r,i,this.strokeDashArray),fabric.util.drawDashedLine(t,e+r,i,e+r,i+s,this.strokeDashArray),fabric.util.drawDashedLine(t,e+r,i+s,e,i+s,this.strokeDashArray),fabric.util.drawDashedLine(t,e,i+s,e,i,this.strokeDashArray),t.closePath(),t.restore()},toObject:function(t){var i=[],r=[],s=this._originalElement,n=1,o=1;this.filters.forEach(function(t){t&&("Resize"===t.type&&(n*=t.scaleX,o*=t.scaleY),i.push(t.toObject()))}),this.resizeFilters.forEach(function(t){t&&r.push(t.toObject())});var a=e(this.callSuper("toObject",t),{src:s?s.src||s._src:"",filters:i,resizeFilters:r,crossOrigin:this.crossOrigin,alignX:this.alignX,alignY:this.alignY,meetOrSlice:this.meetOrSlice});return a.width/=n,a.height/=o,this.includeDefaultValues||this._removeDefaultValues(a),a},toSVG:function(t){var e=this._createBaseSVGMarkup(),i=-this.width/2,r=-this.height/2,s="none";if(this.group&&"path-group"===this.group.type&&(i=this.left,r=this.top),"none"!==this.alignX&&"none"!==this.alignY&&(s="x"+this.alignX+"Y"+this.alignY+" "+this.meetOrSlice),e.push('<g transform="',this.getSvgTransform(),this.getSvgTransformMatrix(),'">\n','<image xlink:href="',this.getSvgSrc(),'" x="',i,'" y="',r,'" style="',this.getSvgStyles(),'" width="',this.width,'" height="',this.height,'" preserveAspectRatio="',s,'"',"></image>\n"),this.stroke||this.strokeDashArray){var n=this.fill;this.fill=null,e.push("<rect ",'x="',i,'" y="',r,'" width="',this.width,'" height="',this.height,'" style="',this.getSvgStyles(),'"/>\n'),this.fill=n}return e.push("</g>\n"),t?t(e.join("")):e.join("")},getSrc:function(){if(this.getElement())return this.getElement().src||this.getElement()._src},setSrc:function(t,e,i){fabric.util.loadImage(t,function(t){return this.setElement(t,e,i)},this,i&&i.crossOrigin)},toString:function(){return'#<fabric.Image: { src: "'+this.getSrc()+'" }>'},clone:function(t,e){this.constructor.fromObject(this.toObject(e),t)},applyFilters:function(t,e,i,r){if(e=e||this.filters,i=i||this._originalElement){var s=i,n=fabric.util.createCanvasElement(),o=fabric.util.createImage(),a=this;return n.width=s.width,n.height=s.height,n.getContext("2d").drawImage(s,0,0,s.width,s.height),0===e.length?(this._element=i,t&&t(),n):(e.forEach(function(t){t&&t.applyTo(n,t.scaleX||a.scaleX,t.scaleY||a.scaleY),!r&&t&&"Resize"===t.type&&(a.width*=t.scaleX,a.height*=t.scaleY)}),o.width=n.width,o.height=n.height,fabric.isLikelyNode?(o.src=n.toBuffer(void 0,fabric.Image.pngCompression),a._element=o,!r&&(a._filteredEl=o),t&&t()):(o.onload=function(){a._element=o,!r&&(a._filteredEl=o),t&&t(),o.onload=n=s=null},o.src=n.toDataURL("image/png")),n)}},_render:function(t,e){var i,r,s,n=this._findMargins();i=e?this.left:-this.width/2,r=e?this.top:-this.height/2,"slice"===this.meetOrSlice&&(t.beginPath(),t.rect(i,r,this.width,this.height),t.clip()),!1===this.isMoving&&this.resizeFilters.length&&this._needsResize()?(this._lastScaleX=this.scaleX,this._lastScaleY=this.scaleY,s=this.applyFilters(null,this.resizeFilters,this._filteredEl||this._originalElement,!0)):s=this._element,s&&t.drawImage(s,i+n.marginX,r+n.marginY,n.width,n.height),this._stroke(t),this._renderStroke(t)},_needsResize:function(){return this.scaleX!==this._lastScaleX||this.scaleY!==this._lastScaleY},_findMargins:function(){var t,e,i=this.width,r=this.height,s=0,n=0;return"none"===this.alignX&&"none"===this.alignY||(t=[this.width/this._element.width,this.height/this._element.height],e="meet"===this.meetOrSlice?Math.min.apply(null,t):Math.max.apply(null,t),i=this._element.width*e,r=this._element.height*e,"Mid"===this.alignX&&(s=(this.width-i)/2),"Max"===this.alignX&&(s=this.width-i),"Mid"===this.alignY&&(n=(this.height-r)/2),"Max"===this.alignY&&(n=this.height-r)),{width:i,height:r,marginX:s,marginY:n}},_resetWidthHeight:function(){var t=this.getElement();this.set("width",t.width),this.set("height",t.height)},_initElement:function(t,e){this.setElement(fabric.util.getById(t),null,e),fabric.util.addClass(this.getElement(),fabric.Image.CSS_CANVAS)},_initConfig:function(t){t||(t={}),this.setOptions(t),this._setWidthHeight(t),this._element&&this.crossOrigin&&(this._element.crossOrigin=this.crossOrigin)},_initFilters:function(t,e){t&&t.length?fabric.util.enlivenObjects(t,function(t){e&&e(t)},"fabric.Image.filters"):e&&e()},_setWidthHeight:function(t){this.width="width"in t?t.width:this.getElement()&&this.getElement().width||0,this.height="height"in t?t.height:this.getElement()&&this.getElement().height||0},complexity:function(){return 1}}),fabric.Image.CSS_CANVAS="canvas-img",fabric.Image.prototype.getSvgSrc=fabric.Image.prototype.getSrc,fabric.Image.fromObject=function(t,e){fabric.util.loadImage(t.src,function(i){fabric.Image.prototype._initFilters.call(t,t.filters,function(r){t.filters=r||[],fabric.Image.prototype._initFilters.call(t,t.resizeFilters,function(r){t.resizeFilters=r||[];var s=new fabric.Image(i,t);e&&e(s)})})},null,t.crossOrigin)},fabric.Image.fromURL=function(t,e,i){fabric.util.loadImage(t,function(t){e&&e(new fabric.Image(t,i))},null,i&&i.crossOrigin)},fabric.Image.ATTRIBUTE_NAMES=fabric.SHARED_ATTRIBUTES.concat("x y width height preserveAspectRatio xlink:href".split(" ")),fabric.Image.fromElement=function(t,i,r){var s,n=fabric.parseAttributes(t,fabric.Image.ATTRIBUTE_NAMES);n.preserveAspectRatio&&(s=fabric.util.parsePreserveAspectRatioAttribute(n.preserveAspectRatio),e(n,s)),fabric.Image.fromURL(n["xlink:href"],i,e(r?fabric.util.object.clone(r):{},n))},fabric.Image.async=!0,fabric.Image.pngCompression=1)}("undefined"!=typeof exports?exports:this),fabric.util.object.extend(fabric.Object.prototype,{_getAngleValueForStraighten:function(){var t=this.getAngle()%360;return t>0?90*Math.round((t-1)/90):90*Math.round(t/90)},straighten:function(){return this.setAngle(this._getAngleValueForStraighten()),this},fxStraighten:function(t){var e=function(){},i=(t=t||{}).onComplete||e,r=t.onChange||e,s=this;return fabric.util.animate({startValue:this.get("angle"),endValue:this._getAngleValueForStraighten(),duration:this.FX_DURATION,onChange:function(t){s.setAngle(t),r()},onComplete:function(){s.setCoords(),i()},onStart:function(){s.set("active",!1)}}),this}}),fabric.util.object.extend(fabric.StaticCanvas.prototype,{straightenObject:function(t){return t.straighten(),this.renderAll(),this},fxStraightenObject:function(t){return t.fxStraighten({onChange:this.renderAll.bind(this)}),this}}),fabric.Image.filters=fabric.Image.filters||{},fabric.Image.filters.BaseFilter=fabric.util.createClass({type:"BaseFilter",initialize:function(t){t&&this.setOptions(t)},setOptions:function(t){for(var e in t)this[e]=t[e]},toObject:function(){return{type:this.type}},toJSON:function(){return this.toObject()}}),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend;e.Image.filters.Brightness=e.util.createClass(e.Image.filters.BaseFilter,{type:"Brightness",initialize:function(t){t=t||{},this.brightness=t.brightness||0},applyTo:function(t){for(var e=t.getContext("2d"),i=e.getImageData(0,0,t.width,t.height),r=i.data,s=this.brightness,n=0,o=r.length;n<o;n+=4)r[n]+=s,r[n+1]+=s,r[n+2]+=s;e.putImageData(i,0,0)},toObject:function(){return i(this.callSuper("toObject"),{brightness:this.brightness})}}),e.Image.filters.Brightness.fromObject=function(t){return new e.Image.filters.Brightness(t)}}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend;e.Image.filters.Convolute=e.util.createClass(e.Image.filters.BaseFilter,{type:"Convolute",initialize:function(t){t=t||{},this.opaque=t.opaque,this.matrix=t.matrix||[0,0,0,0,1,0,0,0,0]},applyTo:function(t){for(var e,i,r,s,n,o,a,h,c,l=this.matrix,u=t.getContext("2d"),f=u.getImageData(0,0,t.width,t.height),d=Math.round(Math.sqrt(l.length)),g=Math.floor(d/2),p=f.data,v=f.width,b=f.height,m=u.createImageData(v,b),y=m.data,_=this.opaque?1:0,x=0;x<b;x++)for(var S=0;S<v;S++){n=4*(x*v+S),e=0,i=0,r=0,s=0;for(var C=0;C<d;C++)for(var w=0;w<d;w++)o=S+w-g,(a=x+C-g)<0||a>b||o<0||o>v||(h=4*(a*v+o),c=l[C*d+w],e+=p[h]*c,i+=p[h+1]*c,r+=p[h+2]*c,s+=p[h+3]*c);y[n]=e,y[n+1]=i,y[n+2]=r,y[n+3]=s+_*(255-s)}u.putImageData(m,0,0)},toObject:function(){return i(this.callSuper("toObject"),{opaque:this.opaque,matrix:this.matrix})}}),e.Image.filters.Convolute.fromObject=function(t){return new e.Image.filters.Convolute(t)}}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend;e.Image.filters.GradientTransparency=e.util.createClass(e.Image.filters.BaseFilter,{type:"GradientTransparency",initialize:function(t){t=t||{},this.threshold=t.threshold||100},applyTo:function(t){for(var e=t.getContext("2d"),i=e.getImageData(0,0,t.width,t.height),r=i.data,s=this.threshold,n=r.length,o=0,a=r.length;o<a;o+=4)r[o+3]=s+255*(n-o)/n;e.putImageData(i,0,0)},toObject:function(){return i(this.callSuper("toObject"),{threshold:this.threshold})}}),e.Image.filters.GradientTransparency.fromObject=function(t){return new e.Image.filters.GradientTransparency(t)}}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={});e.Image.filters.Grayscale=e.util.createClass(e.Image.filters.BaseFilter,{type:"Grayscale",applyTo:function(t){for(var e,i=t.getContext("2d"),r=i.getImageData(0,0,t.width,t.height),s=r.data,n=r.width*r.height*4,o=0;o<n;)e=(s[o]+s[o+1]+s[o+2])/3,s[o]=e,s[o+1]=e,s[o+2]=e,o+=4;i.putImageData(r,0,0)}}),e.Image.filters.Grayscale.fromObject=function(){return new e.Image.filters.Grayscale}}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={});e.Image.filters.Invert=e.util.createClass(e.Image.filters.BaseFilter,{type:"Invert",applyTo:function(t){var e,i=t.getContext("2d"),r=i.getImageData(0,0,t.width,t.height),s=r.data,n=s.length;for(e=0;e<n;e+=4)s[e]=255-s[e],s[e+1]=255-s[e+1],s[e+2]=255-s[e+2];i.putImageData(r,0,0)}}),e.Image.filters.Invert.fromObject=function(){return new e.Image.filters.Invert}}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend;e.Image.filters.Mask=e.util.createClass(e.Image.filters.BaseFilter,{type:"Mask",initialize:function(t){t=t||{},this.mask=t.mask,this.channel=[0,1,2,3].indexOf(t.channel)>-1?t.channel:0},applyTo:function(t){if(this.mask){var i,r=t.getContext("2d"),s=r.getImageData(0,0,t.width,t.height),n=s.data,o=this.mask.getElement(),a=e.util.createCanvasElement(),h=this.channel,c=s.width*s.height*4;a.width=t.width,a.height=t.height,a.getContext("2d").drawImage(o,0,0,t.width,t.height);var l=a.getContext("2d").getImageData(0,0,t.width,t.height).data;for(i=0;i<c;i+=4)n[i+3]=l[i+h];r.putImageData(s,0,0)}},toObject:function(){return i(this.callSuper("toObject"),{mask:this.mask.toObject(),channel:this.channel})}}),e.Image.filters.Mask.fromObject=function(t,i){e.util.loadImage(t.mask.src,function(r){t.mask=new e.Image(r,t.mask),i&&i(new e.Image.filters.Mask(t))})},e.Image.filters.Mask.async=!0}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend;e.Image.filters.Noise=e.util.createClass(e.Image.filters.BaseFilter,{type:"Noise",initialize:function(t){t=t||{},this.noise=t.noise||0},applyTo:function(t){for(var e,i=t.getContext("2d"),r=i.getImageData(0,0,t.width,t.height),s=r.data,n=this.noise,o=0,a=s.length;o<a;o+=4)e=(.5-Math.random())*n,s[o]+=e,s[o+1]+=e,s[o+2]+=e;i.putImageData(r,0,0)},toObject:function(){return i(this.callSuper("toObject"),{noise:this.noise})}}),e.Image.filters.Noise.fromObject=function(t){return new e.Image.filters.Noise(t)}}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend;e.Image.filters.Pixelate=e.util.createClass(e.Image.filters.BaseFilter,{type:"Pixelate",initialize:function(t){t=t||{},this.blocksize=t.blocksize||4},applyTo:function(t){var e,i,r,s,n,o,a,h=t.getContext("2d"),c=h.getImageData(0,0,t.width,t.height),l=c.data,u=c.height,f=c.width;for(i=0;i<u;i+=this.blocksize)for(r=0;r<f;r+=this.blocksize){s=l[e=4*i*f+4*r],n=l[e+1],o=l[e+2],a=l[e+3];for(var d=i,g=i+this.blocksize;d<g;d++)for(var p=r,v=r+this.blocksize;p<v;p++)l[e=4*d*f+4*p]=s,l[e+1]=n,l[e+2]=o,l[e+3]=a}h.putImageData(c,0,0)},toObject:function(){return i(this.callSuper("toObject"),{blocksize:this.blocksize})}}),e.Image.filters.Pixelate.fromObject=function(t){return new e.Image.filters.Pixelate(t)}}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend;e.Image.filters.RemoveColor=e.util.createClass(e.Image.filters.BaseFilter,{type:"RemoveColor",initialize:function(t){t=t||{},this.distance=t.distance||20,this.color=t.color||[255,255,255]},applyTo:function(t){for(var e,i,r,s=t.getContext("2d"),n=s.getImageData(0,0,t.width,t.height),o=n.data,a=this.distance,h=this.color.map(function(t){return parseInt(t,10)}),c=Math.max(h[0]-a,0),l=Math.min(h[0]+a,255),u=Math.max(h[1]-a,0),f=Math.min(h[1]+a,255),d=Math.max(h[2]-a,0),g=Math.min(h[2]+a,255),p=function(t){return(e>=c-t&&e<=c&&i>=u-t&&i<=u&&r>=d-t&&r<=d||e<=l+t&&e>=l&&i<=f+t&&i>=f&&r<=g+t&&r>=g)&&Math.round(3*t)},v=0,b=o.length;v<b;v+=4)e=o[v],i=o[v+1],r=o[v+2],o[v+3]=e>=c&&l>=e&&i>=u&&f>=i&&r>=d&&g>=r?0:p(a)||p(2*a)||p(3*a)||p(4*a)||p(5*a)||p(6*a)||p(7*a)||o[v+3];s.putImageData(n,0,0)},toObject:function(){return i(this.callSuper("toObject"),{threshold:this.threshold,distance:this.distance})}}),e.Image.filters.RemoveColor.fromObject=function(t){return new e.Image.filters.RemoveColor(t)}}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={});e.Image.filters.Sepia=e.util.createClass(e.Image.filters.BaseFilter,{type:"Sepia",applyTo:function(t){var e,i,r=t.getContext("2d"),s=r.getImageData(0,0,t.width,t.height),n=s.data,o=n.length;for(e=0;e<o;e+=4)i=.3*n[e]+.59*n[e+1]+.11*n[e+2],n[e]=i+100,n[e+1]=i+50,n[e+2]=i+255;r.putImageData(s,0,0)}}),e.Image.filters.Sepia.fromObject=function(){return new e.Image.filters.Sepia}}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={});e.Image.filters.Sepia2=e.util.createClass(e.Image.filters.BaseFilter,{type:"Sepia2",applyTo:function(t){var e,i,r,s,n=t.getContext("2d"),o=n.getImageData(0,0,t.width,t.height),a=o.data,h=a.length;for(e=0;e<h;e+=4)i=a[e],r=a[e+1],s=a[e+2],a[e]=(.393*i+.769*r+.189*s)/1.351,a[e+1]=(.349*i+.686*r+.168*s)/1.203,a[e+2]=(.272*i+.534*r+.131*s)/2.14;n.putImageData(o,0,0)}}),e.Image.filters.Sepia2.fromObject=function(){return new e.Image.filters.Sepia2}}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend;e.Image.filters.Tint=e.util.createClass(e.Image.filters.BaseFilter,{type:"Tint",initialize:function(t){t=t||{},this.color=t.color||"#000000",this.opacity=void 0!==t.opacity?t.opacity:new e.Color(this.color).getAlpha()},applyTo:function(t){var i,r,s,n,o,a,h,c,l,u=t.getContext("2d"),f=u.getImageData(0,0,t.width,t.height),d=f.data,g=d.length;for(r=(l=new e.Color(this.color).getSource())[0]*this.opacity,s=l[1]*this.opacity,n=l[2]*this.opacity,c=1-this.opacity,i=0;i<g;i+=4)o=d[i],a=d[i+1],h=d[i+2],d[i]=r+o*c,d[i+1]=s+a*c,d[i+2]=n+h*c;u.putImageData(f,0,0)},toObject:function(){return i(this.callSuper("toObject"),{color:this.color,opacity:this.opacity})}}),e.Image.filters.Tint.fromObject=function(t){return new e.Image.filters.Tint(t)}}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend;e.Image.filters.Multiply=e.util.createClass(e.Image.filters.BaseFilter,{type:"Multiply",initialize:function(t){t=t||{},this.color=t.color||"#000000"},applyTo:function(t){var i,r,s=t.getContext("2d"),n=s.getImageData(0,0,t.width,t.height),o=n.data,a=o.length;for(r=new e.Color(this.color).getSource(),i=0;i<a;i+=4)o[i]*=r[0]/255,o[i+1]*=r[1]/255,o[i+2]*=r[2]/255;s.putImageData(n,0,0)},toObject:function(){return i(this.callSuper("toObject"),{color:this.color})}}),e.Image.filters.Multiply.fromObject=function(t){return new e.Image.filters.Multiply(t)}}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric;e.Image.filters.Blend=e.util.createClass(e.Image.filters.BaseFilter,{type:"Blend",initialize:function(t){t=t||{},this.color=t.color||"#000",this.image=t.image||!1,this.mode=t.mode||"multiply",this.alpha=t.alpha||1},applyTo:function(t){var i,r,s,n,o,a,h,c,l,u,f=t.getContext("2d"),d=f.getImageData(0,0,t.width,t.height),g=d.data,p=!1;if(this.image){p=!0;var v=e.util.createCanvasElement();v.width=this.image.width,v.height=this.image.height;var b=new e.StaticCanvas(v);b.add(this.image),u=b.getContext("2d").getImageData(0,0,b.width,b.height).data}else i=(u=new e.Color(this.color).getSource())[0]*this.alpha,r=u[1]*this.alpha,s=u[2]*this.alpha;for(var m=0,y=g.length;m<y;m+=4)switch(n=g[m],o=g[m+1],a=g[m+2],p&&(i=u[m]*this.alpha,r=u[m+1]*this.alpha,s=u[m+2]*this.alpha),this.mode){case"multiply":g[m]=n*i/255,g[m+1]=o*r/255,g[m+2]=a*s/255;break;case"screen":g[m]=1-(1-n)*(1-i),g[m+1]=1-(1-o)*(1-r),g[m+2]=1-(1-a)*(1-s);break;case"add":g[m]=Math.min(255,n+i),g[m+1]=Math.min(255,o+r),g[m+2]=Math.min(255,a+s);break;case"diff":case"difference":g[m]=Math.abs(n-i),g[m+1]=Math.abs(o-r),g[m+2]=Math.abs(a-s);break;case"subtract":h=n-i,c=o-r,l=a-s,g[m]=h<0?0:h,g[m+1]=c<0?0:c,g[m+2]=l<0?0:l;break;case"darken":g[m]=Math.min(n,i),g[m+1]=Math.min(o,r),g[m+2]=Math.min(a,s);break;case"lighten":g[m]=Math.max(n,i),g[m+1]=Math.max(o,r),g[m+2]=Math.max(a,s)}f.putImageData(d,0,0)},toObject:function(){return{color:this.color,image:this.image,mode:this.mode,alpha:this.alpha}}}),e.Image.filters.Blend.fromObject=function(t){return new e.Image.filters.Blend(t)}}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=Math.pow,r=Math.floor,s=Math.sqrt,n=Math.abs,o=Math.max,a=Math.round,h=Math.sin,c=Math.ceil;e.Image.filters.Resize=e.util.createClass(e.Image.filters.BaseFilter,{type:"Resize",resizeType:"hermite",scaleX:0,scaleY:0,lanczosLobes:3,applyTo:function(t,e,i){this.rcpScaleX=1/e,this.rcpScaleY=1/i;var r,s=t.width,n=t.height,o=a(s*e),h=a(n*i);"sliceHack"===this.resizeType&&(r=this.sliceByTwo(t,s,n,o,h)),"hermite"===this.resizeType&&(r=this.hermiteFastResize(t,s,n,o,h)),"bilinear"===this.resizeType&&(r=this.bilinearFiltering(t,s,n,o,h)),"lanczos"===this.resizeType&&(r=this.lanczosResize(t,s,n,o,h)),t.width=o,t.height=h,t.getContext("2d").putImageData(r,0,0)},sliceByTwo:function(t,i,s,n,a){var h,c=t.getContext("2d"),l=.5,u=.5,f=1,d=1,g=!1,p=!1,v=i,b=s,m=e.util.createCanvasElement(),y=m.getContext("2d");for(n=r(n),a=r(a),m.width=o(n,i),m.height=o(a,s),n>i&&(l=2,f=-1),a>s&&(u=2,d=-1),h=c.getImageData(0,0,i,s),t.width=o(n,i),t.height=o(a,s),c.putImageData(h,0,0);!g||!p;)i=v,s=b,n*f<r(v*l*f)?v=r(v*l):(v=n,g=!0),a*d<r(b*u*d)?b=r(b*u):(b=a,p=!0),h=c.getImageData(0,0,i,s),y.putImageData(h,0,0),c.clearRect(0,0,v,b),c.drawImage(m,0,0,i,s,0,0,v,b);return c.getImageData(0,0,n,a)},lanczosResize:function(t,e,o,a,l){var u,f=t.getContext("2d"),d=f.getImageData(0,0,e,o),g=f.getImageData(0,0,a,l),p=d.data,v=g.data,b=(u=this.lanczosLobes,function(t){if(t>u)return 0;if(t*=Math.PI,n(t)<1e-16)return 1;var e=t/u;return h(t)*h(e)/t/e}),m=this.rcpScaleX,y=this.rcpScaleY,_=2/this.rcpScaleX,x=2/this.rcpScaleY,S=c(m*this.lanczosLobes/2),C=c(y*this.lanczosLobes/2),w={},O={},T={};return function t(h){var c,u,f,d,k,j,A,M,P,L,D;for(O.x=(h+.5)*m,T.x=r(O.x),c=0;c<l;c++){for(O.y=(c+.5)*y,T.y=r(O.y),k=0,j=0,A=0,M=0,P=0,u=T.x-S;u<=T.x+S;u++)if(!(u<0||u>=e)){L=r(1e3*n(u-O.x)),w[L]||(w[L]={});for(var E=T.y-C;E<=T.y+C;E++)E<0||E>=o||(D=r(1e3*n(E-O.y)),w[L][D]||(w[L][D]=b(s(i(L*_,2)+i(D*x,2))/1e3)),(f=w[L][D])>0&&(k+=f,j+=f*p[d=4*(E*e+u)],A+=f*p[d+1],M+=f*p[d+2],P+=f*p[d+3]))}v[d=4*(c*a+h)]=j/k,v[d+1]=A/k,v[d+2]=M/k,v[d+3]=P/k}return++h<a?t(h):g}(0)},bilinearFiltering:function(t,e,i,s,n){var o,a,h,c,l,u,f,d,g,p=0,v=this.rcpScaleX,b=this.rcpScaleY,m=t.getContext("2d"),y=4*(e-1),_=m.getImageData(0,0,e,i).data,x=m.getImageData(0,0,s,n),S=x.data;for(h=0;h<n;h++)for(c=0;c<s;c++)for(l=v*c-(o=r(v*c)),u=b*h-(a=r(b*h)),g=4*(a*e+o),f=0;f<4;f++)d=_[g+f]*(1-l)*(1-u)+_[g+4+f]*l*(1-u)+_[g+y+f]*u*(1-l)+_[g+y+4+f]*l*u,S[p++]=d;return x},hermiteFastResize:function(t,e,i,o,a){for(var h=this.rcpScaleX,l=this.rcpScaleY,u=c(h/2),f=c(l/2),d=t.getContext("2d"),g=d.getImageData(0,0,e,i).data,p=d.getImageData(0,0,o,a),v=p.data,b=0;b<a;b++)for(var m=0;m<o;m++){for(var y=4*(m+b*o),_=0,x=0,S=0,C=0,w=0,O=0,T=0,k=(b+.5)*l,j=r(b*l);j<(b+1)*l;j++)for(var A=n(k-(j+.5))/f,M=(m+.5)*h,P=A*A,L=r(m*h);L<(m+1)*h;L++){var D=n(M-(L+.5))/u,E=s(P+D*D);E>1&&E<-1||(_=2*E*E*E-3*E*E+1)>0&&(T+=_*g[(D=4*(L+j*e))+3],S+=_,g[D+3]<255&&(_=_*g[D+3]/250),C+=_*g[D],w+=_*g[D+1],O+=_*g[D+2],x+=_)}v[y]=C/x,v[y+1]=w/x,v[y+2]=O/x,v[y+3]=T/S}return p},toObject:function(){return{type:this.type,scaleX:this.scaleX,scaleY:this.scaleY,resizeType:this.resizeType,lanczosLobes:this.lanczosLobes}}}),e.Image.filters.Resize.fromObject=function(t){return new e.Image.filters.Resize(t)}}("undefined"!=typeof exports?exports:this),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.extend,r=e.util.object.clone,s=e.util.toFixed,n=e.StaticCanvas.supports("setLineDash"),o=e.Object.NUM_FRACTION_DIGITS;if(e.Text)e.warn("fabric.Text is already defined");else{var a=e.Object.prototype.stateProperties.concat();a.push("fontFamily","fontWeight","fontSize","text","textDecoration","textAlign","fontStyle","lineHeight","textBackgroundColor"),e.Text=e.util.createClass(e.Object,{_dimensionAffectingProps:{fontSize:!0,fontWeight:!0,fontFamily:!0,fontStyle:!0,lineHeight:!0,stroke:!0,strokeWidth:!0,text:!0,textAlign:!0},_reNewline:/\r?\n/,_reSpacesAndTabs:/[ \t\r]+/g,type:"text",fontSize:40,fontWeight:"normal",fontFamily:"Arial Black",textDecoration:"",textAlign:"left",fontStyle:"",lineHeight:1,textBackgroundColor:"",stateProperties:a,stroke:null,shadow:null,_fontSizeFraction:.25,_fontSizeMult:1,initialize:function(t,e){e=e||{},this.text=t,this.__skipDimension=!0,this.setOptions(e),this.__skipDimension=!1,this._initDimensions()},_initDimensions:function(t){this.__skipDimension||(t||(t=e.util.createCanvasElement().getContext("2d"),this._setTextStyles(t)),this._textLines=this._splitTextIntoLines(),this._clearCache(),this.width=this._getTextWidth(t),this.height=this._getTextHeight(t))},toString:function(){return"#<fabric.Text ("+this.complexity()+'): { "text": "'+this.text+'", "fontFamily": "'+this.fontFamily+'" }>'},_render:function(t){this.clipTo&&e.util.clipContext(this,t),this._setOpacity(t),this._setShadow(t),this._setupCompositeOperation(t),this._renderTextBackground(t),this._setStrokeStyles(t),this._setFillStyles(t),this._renderText(t),this._renderTextDecoration(t),this.clipTo&&t.restore()},_renderText:function(t){this._translateForTextAlign(t),this._renderTextFill(t),this._renderTextStroke(t),this._translateForTextAlign(t,!0)},_translateForTextAlign:function(t,e){if("left"!==this.textAlign&&"justify"!==this.textAlign){var i=e?-1:1;t.translate("center"===this.textAlign?i*this.width/2:i*this.width,0)}},_setTextStyles:function(t){t.textBaseline="alphabetic",this.skipTextAlign||(t.textAlign=this.textAlign),t.font=this._getFontDeclaration()},_getTextHeight:function(){return this._textLines.length*this._getHeightOfLine()},_getTextWidth:function(t){for(var e=this._getLineWidth(t,0),i=1,r=this._textLines.length;i<r;i++){var s=this._getLineWidth(t,i);s>e&&(e=s)}return e},_renderChars:function(t,e,i,r,s){var n=t.slice(0,-4);if(this[n].toLive){var o=-this.width/2+this[n].offsetX||0,a=-this.height/2+this[n].offsetY||0;e.save(),e.translate(o,a),r-=o,s-=a}e[t](i,r,s),this[n].toLive&&e.restore()},_renderTextLine:function(t,e,i,r,s,n){s-=this.fontSize*this._fontSizeFraction;var o=this._getLineWidth(e,n);if("justify"!==this.textAlign||this.width<o)this._renderChars(t,e,i,r,s,n);else for(var a,h=i.split(/\s+/),c=0,l=this._getWidthOfWords(e,i,n,0),u=this.width-l,f=h.length-1,d=f>0?u/f:0,g=0,p=0,v=h.length;p<v;p++){for(;" "===i[c]&&c<i.length;)c++;a=h[p],this._renderChars(t,e,a,r+g,s,n,c),g+=this._getWidthOfWords(e,a,n,c)+d,c+=a.length}},_getWidthOfWords:function(t,e){return t.measureText(e.replace(/\s+/g,"")).width},_getLeftOffset:function(){return-this.width/2},_getTopOffset:function(){return-this.height/2},isEmptyStyles:function(){return!0},_renderTextFill:function(t){if(this.fill||!this.isEmptyStyles())for(var e=0,i=0,r=this._textLines.length;i<r;i++){var s=this._getHeightOfLine(t,i),n=s/this.lineHeight;this._renderTextLine("fillText",t,this._textLines[i],this._getLeftOffset(),this._getTopOffset()+e+n,i),e+=s}},_renderTextStroke:function(t){if(this.stroke&&0!==this.strokeWidth||!this.isEmptyStyles()){var e=0;this.shadow&&!this.shadow.affectStroke&&this._removeShadow(t),t.save(),this.strokeDashArray&&(1&this.strokeDashArray.length&&this.strokeDashArray.push.apply(this.strokeDashArray,this.strokeDashArray),n&&t.setLineDash(this.strokeDashArray)),t.beginPath();for(var i=0,r=this._textLines.length;i<r;i++){var s=this._getHeightOfLine(t,i),o=s/this.lineHeight;this._renderTextLine("strokeText",t,this._textLines[i],this._getLeftOffset(),this._getTopOffset()+e+o,i),e+=s}t.closePath(),t.restore()}},_getHeightOfLine:function(){return this.fontSize*this._fontSizeMult*this.lineHeight},_renderTextBackground:function(t){this._renderTextBoxBackground(t),this._renderTextLinesBackground(t)},_renderTextBoxBackground:function(t){this.backgroundColor&&(t.fillStyle=this.backgroundColor,t.fillRect(this._getLeftOffset(),this._getTopOffset(),this.width,this.height),this._removeShadow(t))},_renderTextLinesBackground:function(t){if(this.textBackgroundColor){var e,i,r,s=0;t.fillStyle=this.textBackgroundColor;for(var n=0,o=this._textLines.length;n<o;n++)e=this._getHeightOfLine(t,n),(i=this._getLineWidth(t,n))>0&&(r=this._getLineLeftOffset(i),t.fillRect(this._getLeftOffset()+r,this._getTopOffset()+s,i,e/this.lineHeight)),s+=e;this._removeShadow(t)}},_getLineLeftOffset:function(t){return"center"===this.textAlign?(this.width-t)/2:"right"===this.textAlign?this.width-t:0},_clearCache:function(){this.__lineWidths=[],this.__lineHeights=[]},_shouldClearCache:function(){var t=!1;if(this._forceClearCache)return this._forceClearCache=!1,!0;for(var e in this._dimensionAffectingProps)this["__"+e]!==this[e]&&(this["__"+e]=this[e],t=!0);return t},_getLineWidth:function(t,e){if(this.__lineWidths[e])return-1===this.__lineWidths[e]?this.width:this.__lineWidths[e];var i,r=this._textLines[e];return i=""===r?0:this._measureLine(t,e),this.__lineWidths[e]=i,i&&"justify"===this.textAlign&&r.split(/\s+/).length>1&&(this.__lineWidths[e]=-1),i},_measureLine:function(t,e){return t.measureText(this._textLines[e]).width},_renderTextDecoration:function(t){if(this.textDecoration){var e=this.height/2,i=this,r=[];this.textDecoration.indexOf("underline")>-1&&r.push(.85),this.textDecoration.indexOf("line-through")>-1&&r.push(.43),this.textDecoration.indexOf("overline")>-1&&r.push(-.12),r.length>0&&function(r){var s,n,o,a,h,c,l,u=0;for(s=0,n=i._textLines.length;s<n;s++){for(h=i._getLineWidth(t,s),c=i._getLineLeftOffset(h),l=i._getHeightOfLine(t,s),o=0,a=r.length;o<a;o++)t.fillRect(i._getLeftOffset()+c,u+(i._fontSizeMult-1+r[o])*i.fontSize-e,h,i.fontSize/15);u+=l}}(r)}},_getFontDeclaration:function(){return[e.isLikelyNode?this.fontWeight:this.fontStyle,e.isLikelyNode?this.fontStyle:this.fontWeight,this.fontSize+"px",e.isLikelyNode?'"'+this.fontFamily+'"':this.fontFamily].join(" ")},render:function(t,e){this.visible&&(t.save(),this._setTextStyles(t),this._shouldClearCache()&&this._initDimensions(t),this.drawSelectionBackground(t),e||this.transform(t),this.transformMatrix&&t.transform.apply(t,this.transformMatrix),this.group&&"path-group"===this.group.type&&t.translate(this.left,this.top),this._render(t),t.restore())},_splitTextIntoLines:function(){return this.text.split(this._reNewline)},toObject:function(t){var e=i(this.callSuper("toObject",t),{text:this.text,fontSize:this.fontSize,fontWeight:this.fontWeight,fontFamily:this.fontFamily,fontStyle:this.fontStyle,lineHeight:this.lineHeight,textDecoration:this.textDecoration,textAlign:this.textAlign,textBackgroundColor:this.textBackgroundColor});return this.includeDefaultValues||this._removeDefaultValues(e),e},toSVG:function(t){var e=this._createBaseSVGMarkup(),i=this._getSVGLeftTopOffsets(this.ctx),r=this._getSVGTextAndBg(i.textTop,i.textLeft);return this._wrapSVGTextAndBg(e,r),t?t(e.join("")):e.join("")},_getSVGLeftTopOffsets:function(t){var e=this._getHeightOfLine(t,0);return{textLeft:-this.width/2+(this.group&&"path-group"===this.group.type?this.left:0),textTop:0+(this.group&&"path-group"===this.group.type?-this.top:0),lineTop:e}},_wrapSVGTextAndBg:function(t,e){var i=this.getSvgFilter(),r=""===i?"":' style="'+i+'"';t.push('\t<g transform="',this.getSvgTransform(),this.getSvgTransformMatrix(),'"',r,">\n",e.textBgRects.join(""),"\t\t<text ",this.fontFamily?'font-family="'+this.fontFamily.replace(/"/g,"'")+'" ':"",this.fontSize?'font-size="'+this.fontSize+'" ':"",this.fontStyle?'font-style="'+this.fontStyle+'" ':"",this.fontWeight?'font-weight="'+this.fontWeight+'" ':"",this.textDecoration?'text-decoration="'+this.textDecoration+'" ':"",'style="',this.getSvgStyles(!0),'" >\n',e.textSpans.join(""),"\t\t</text>\n","\t</g>\n")},_getSVGTextAndBg:function(t,e){var i=[],r=[],s=0;this._setSVGBg(r);for(var n=0,o=this._textLines.length;n<o;n++)this.textBackgroundColor&&this._setSVGTextLineBg(r,n,e,t,s),this._setSVGTextLineText(n,i,s,e,t,r),s+=this._getHeightOfLine(this.ctx,n);return{textSpans:i,textBgRects:r}},_setSVGTextLineText:function(t,i,r,n,a){var h=this.fontSize*(this._fontSizeMult-this._fontSizeFraction)-a+r-this.height/2;"justify"!==this.textAlign?i.push('\t\t\t<tspan x="',s(n+this._getLineLeftOffset(this._getLineWidth(this.ctx,t)),o),'" ','y="',s(h,o),'" ',this._getFillAttributes(this.fill),">",e.util.string.escapeXml(this._textLines[t]),"</tspan>\n"):this._setSVGTextLineJustifed(t,i,h,n)},_setSVGTextLineJustifed:function(t,i,r,n){var a=e.util.createCanvasElement().getContext("2d");this._setTextStyles(a);var h,c,l=this._textLines[t],u=l.split(/\s+/),f=this._getWidthOfWords(a,l),d=this.width-f,g=u.length-1,p=g>0?d/g:0,v=this._getFillAttributes(this.fill);for(n+=this._getLineLeftOffset(this._getLineWidth(a,t)),t=0,c=u.length;t<c;t++)h=u[t],i.push('\t\t\t<tspan x="',s(n,o),'" ','y="',s(r,o),'" ',v,">",e.util.string.escapeXml(h),"</tspan>\n"),n+=this._getWidthOfWords(a,h)+p},_setSVGTextLineBg:function(t,e,i,r,n){t.push("\t\t<rect ",this._getFillAttributes(this.textBackgroundColor),' x="',s(i+this._getLineLeftOffset(this._getLineWidth(this.ctx,e)),o),'" y="',s(n-this.height/2,o),'" width="',s(this._getLineWidth(this.ctx,e),o),'" height="',s(this._getHeightOfLine(this.ctx,e)/this.lineHeight,o),'"></rect>\n')},_setSVGBg:function(t){this.backgroundColor&&t.push("\t\t<rect ",this._getFillAttributes(this.backgroundColor),' x="',s(-this.width/2,o),'" y="',s(-this.height/2,o),'" width="',s(this.width,o),'" height="',s(this.height,o),'"></rect>\n')},_getFillAttributes:function(t){var i=t&&"string"==typeof t?new e.Color(t):"";return i&&i.getSource()&&1!==i.getAlpha()?'opacity="'+i.getAlpha()+'" fill="'+i.setAlpha(1).toRgb()+'"':'fill="'+t+'"'},_set:function(t,e){this.callSuper("_set",t,e),t in this._dimensionAffectingProps&&(this._initDimensions(),this.setCoords())},complexity:function(){return 1}}),e.Text.ATTRIBUTE_NAMES=e.SHARED_ATTRIBUTES.concat("x y dx dy font-family font-style font-weight font-size text-decoration text-anchor".split(" ")),e.Text.DEFAULT_SVG_FONT_SIZE=16,e.Text.fromElement=function(t,i){if(!t)return null;var r=e.parseAttributes(t,e.Text.ATTRIBUTE_NAMES);(i=e.util.object.extend(i?e.util.object.clone(i):{},r)).top=i.top||0,i.left=i.left||0,"dx"in r&&(i.left+=r.dx),"dy"in r&&(i.top+=r.dy),"fontSize"in i||(i.fontSize=e.Text.DEFAULT_SVG_FONT_SIZE),i.originX||(i.originX="left");var s="";"textContent"in t?s=t.textContent:"firstChild"in t&&null!==t.firstChild&&"data"in t.firstChild&&null!==t.firstChild.data&&(s=t.firstChild.data),s=s.replace(/^\s+|\s+$|\n+/g,"").replace(/\s+/g," ");var n=new e.Text(s,i),o=0;return"left"===n.originX&&(o=n.getWidth()/2),"right"===n.originX&&(o=-n.getWidth()/2),n.set({left:n.getLeft()+o,top:n.getTop()-n.getHeight()/2+n.fontSize*(.18+n._fontSizeFraction)}),n},e.Text.fromObject=function(t){return new e.Text(t.text,r(t))},e.util.createAccessors(e.Text)}}("undefined"!=typeof exports?exports:this),function(){var t=fabric.util.object.clone;fabric.IText=fabric.util.createClass(fabric.Text,fabric.Observable,{type:"i-text",selectionStart:0,selectionEnd:0,selectionColor:"rgba(17,119,255,0.3)",isEditing:!1,editable:!0,editingBorderColor:"rgba(102,153,255,0.25)",cursorWidth:2,cursorColor:"#333",cursorDelay:1e3,cursorDuration:600,styles:null,caching:!0,_reSpace:/\s|\n/,_currentCursorOpacity:0,_selectionDirection:null,_abortCursorAnimation:!1,_charWidthsCache:{},__widthOfSpace:[],initialize:function(t,e){this.styles=e&&e.styles||{},this.callSuper("initialize",t,e),this.initBehavior()},_clearCache:function(){this.callSuper("_clearCache"),this.__widthOfSpace=[]},isEmptyStyles:function(){if(!this.styles)return!0;var t=this.styles;for(var e in t)for(var i in t[e])for(var r in t[e][i])return!1;return!0},setSelectionStart:function(t){t=Math.max(t,0),this.selectionStart!==t&&(this.fire("selection:changed"),this.canvas&&this.canvas.fire("text:selection:changed",{target:this}),this.selectionStart=t),this._updateTextarea()},setSelectionEnd:function(t){t=Math.min(t,this.text.length),this.selectionEnd!==t&&(this.fire("selection:changed"),this.canvas&&this.canvas.fire("text:selection:changed",{target:this}),this.selectionEnd=t),this._updateTextarea()},getSelectionStyles:function(t,e){if(2===arguments.length){for(var i=[],r=t;r<e;r++)i.push(this.getSelectionStyles(r));return i}var s=this.get2DCursorLocation(t);return this._getStyleDeclaration(s.lineIndex,s.charIndex)||{}},setSelectionStyles:function(t){if(this.selectionStart===this.selectionEnd)this._extendStyles(this.selectionStart,t);else for(var e=this.selectionStart;e<this.selectionEnd;e++)this._extendStyles(e,t);return this._forceClearCache=!0,this},_extendStyles:function(t,e){var i=this.get2DCursorLocation(t);this._getLineStyle(i.lineIndex)||this._setLineStyle(i.lineIndex,{}),this._getStyleDeclaration(i.lineIndex,i.charIndex)||this._setStyleDeclaration(i.lineIndex,i.charIndex,{}),fabric.util.object.extend(this._getStyleDeclaration(i.lineIndex,i.charIndex),e)},_render:function(t){this.callSuper("_render",t),this.ctx=t,this.isEditing&&this.renderCursorOrSelection()},renderCursorOrSelection:function(){if(this.active){var t,e,i=this.text.split("");this.canvas.contextTop?((e=this.canvas.contextTop).save(),e.transform.apply(e,this.canvas.viewportTransform),this.transform(e),this.transformMatrix&&e.transform.apply(e,this.transformMatrix)):(e=this.ctx).save(),this.selectionStart===this.selectionEnd?(t=this._getCursorBoundaries(i,"cursor"),this.renderCursor(t,e)):(t=this._getCursorBoundaries(i,"selection"),this.renderSelection(i,t,e)),e.restore()}},get2DCursorLocation:function(t){void 0===t&&(t=this.selectionStart);for(var e=this._textLines.length,i=0;i<e;i++){if(t<=this._textLines[i].length)return{lineIndex:i,charIndex:t};t-=this._textLines[i].length+1}return{lineIndex:i-1,charIndex:this._textLines[i-1].length<t?this._textLines[i-1].length:t}},getCurrentCharStyle:function(t,e){var i=this._getStyleDeclaration(t,0===e?0:e-1);return{fontSize:i&&i.fontSize||this.fontSize,fill:i&&i.fill||this.fill,textBackgroundColor:i&&i.textBackgroundColor||this.textBackgroundColor,textDecoration:i&&i.textDecoration||this.textDecoration,fontFamily:i&&i.fontFamily||this.fontFamily,fontWeight:i&&i.fontWeight||this.fontWeight,fontStyle:i&&i.fontStyle||this.fontStyle,stroke:i&&i.stroke||this.stroke,strokeWidth:i&&i.strokeWidth||this.strokeWidth}},getCurrentCharFontSize:function(t,e){var i=this._getStyleDeclaration(t,0===e?0:e-1);return i&&i.fontSize?i.fontSize:this.fontSize},getCurrentCharColor:function(t,e){var i=this._getStyleDeclaration(t,0===e?0:e-1);return i&&i.fill?i.fill:this.cursorColor},_getCursorBoundaries:function(t,e){var i=Math.round(this._getLeftOffset()),r=this._getTopOffset(),s=this._getCursorBoundariesOffsets(t,e);return{left:i,top:r,leftOffset:s.left+s.lineLeft,topOffset:s.top}},_getCursorBoundariesOffsets:function(t,e){for(var i=0,r=0,s=0,n=0,o=0,a=0;a<this.selectionStart;a++)"\n"===t[a]?(o=0,n+=this._getHeightOfLine(this.ctx,r),r++,s=0):(o+=this._getWidthOfChar(this.ctx,t[a],r,s),s++),i=this._getLineLeftOffset(this._getLineWidth(this.ctx,r));return"cursor"===e&&(n+=(1-this._fontSizeFraction)*this._getHeightOfLine(this.ctx,r)/this.lineHeight-this.getCurrentCharFontSize(r,s)*(1-this._fontSizeFraction)),{top:n,left:o,lineLeft:i}},renderCursor:function(t,e){var i=this.get2DCursorLocation(),r=i.lineIndex,s=i.charIndex,n=this.getCurrentCharFontSize(r,s),o=0===r&&0===s?this._getLineLeftOffset(this._getLineWidth(e,r)):t.leftOffset;e.fillStyle=this.getCurrentCharColor(r,s),e.globalAlpha=this.__isMousedown?1:this._currentCursorOpacity,e.fillRect(t.left+o,t.top+t.topOffset,this.cursorWidth/this.scaleX,n)},renderSelection:function(t,e,i){i.fillStyle=this.selectionColor;for(var r=this.get2DCursorLocation(this.selectionStart),s=this.get2DCursorLocation(this.selectionEnd),n=r.lineIndex,o=s.lineIndex,a=n;a<=o;a++){var h=this._getLineLeftOffset(this._getLineWidth(i,a))||0,c=this._getHeightOfLine(this.ctx,a),l=0,u=this._textLines[a];if(a===n)for(var f=0,d=u.length;f<d;f++)f>=r.charIndex&&(a!==o||f<s.charIndex)&&(l+=this._getWidthOfChar(i,u[f],a,f)),f<r.charIndex&&(h+=this._getWidthOfChar(i,u[f],a,f));else if(a>n&&a<o)l+=this._getLineWidth(i,a)||5;else if(a===o)for(var g=0,p=s.charIndex;g<p;g++)l+=this._getWidthOfChar(i,u[g],a,g);i.fillRect(e.left+h,e.top+e.topOffset,l,c),e.topOffset+=c}},_renderChars:function(t,e,i,r,s,n,o){if(this.isEmptyStyles())return this._renderCharsFast(t,e,i,r,s);o=o||0,this.skipTextAlign=!0,r-="center"===this.textAlign?this.width/2:"right"===this.textAlign?this.width:0;var a,h,c=this._getHeightOfLine(e,n),l="";r+=this._getLineLeftOffset(this._getLineWidth(e,n))||0,e.save(),s-=c/this.lineHeight*this._fontSizeFraction;for(var u=o,f=i.length+o;u<=f;u++)a=a||this.getCurrentCharStyle(n,u),h=this.getCurrentCharStyle(n,u+1),(this._hasStyleChanged(a,h)||u===f)&&(this._renderChar(t,e,n,u-1,l,r,s,c),l="",a=h),l+=i[u-o];e.restore()},_renderCharsFast:function(t,e,i,r,s){this.skipTextAlign=!1,"fillText"===t&&this.fill&&this.callSuper("_renderChars",t,e,i,r,s),"strokeText"===t&&(this.stroke&&this.strokeWidth>0||this.skipFillStrokeCheck)&&this.callSuper("_renderChars",t,e,i,r,s)},_renderChar:function(t,e,i,r,s,n,o,a){var h,c,l,u,f,d,g=this._getStyleDeclaration(i,r);g?(c=this._getHeightOfChar(e,s,i,r),u=g.stroke,l=g.fill,d=g.textDecoration):c=this.fontSize,u=(u||this.stroke)&&"strokeText"===t,l=(l||this.fill)&&"fillText"===t,g&&e.save(),h=this._applyCharStylesGetWidth(e,s,i,r,g||{}),d=d||this.textDecoration,g&&g.textBackgroundColor&&this._removeShadow(e),l&&e.fillText(s,n,o),u&&e.strokeText(s,n,o),(d||""!==d)&&(f=this._fontSizeFraction*a/this.lineHeight,this._renderCharDecoration(e,d,n,o,f,h,c)),g&&e.restore(),e.translate(h,0)},_hasStyleChanged:function(t,e){return t.fill!==e.fill||t.fontSize!==e.fontSize||t.textBackgroundColor!==e.textBackgroundColor||t.textDecoration!==e.textDecoration||t.fontFamily!==e.fontFamily||t.fontWeight!==e.fontWeight||t.fontStyle!==e.fontStyle||t.stroke!==e.stroke||t.strokeWidth!==e.strokeWidth},_renderCharDecoration:function(t,e,i,r,s,n,o){if(e){var a,h,c=o/15,l={underline:r+o/10,"line-through":r-o*(this._fontSizeFraction+this._fontSizeMult-1)+c,overline:r-(this._fontSizeMult-this._fontSizeFraction)*o},u=["underline","line-through","overline"];for(a=0;a<u.length;a++)h=u[a],e.indexOf(h)>-1&&t.fillRect(i,l[h],n,c)}},_renderTextLine:function(t,e,i,r,s,n){this.isEmptyStyles()||(s+=this.fontSize*(this._fontSizeFraction+.03)),this.callSuper("_renderTextLine",t,e,i,r,s,n)},_renderTextDecoration:function(t){if(this.isEmptyStyles())return this.callSuper("_renderTextDecoration",t)},_renderTextLinesBackground:function(t){this.callSuper("_renderTextLinesBackground",t);for(var e,i,r,s,n,o,a=0,h=this._getLeftOffset(),c=this._getTopOffset(),l=0,u=this._textLines.length;l<u;l++)if(e=this._getHeightOfLine(t,l),""!==(s=this._textLines[l])&&this.styles&&this._getLineStyle(l)){i=this._getLineWidth(t,l),r=this._getLineLeftOffset(i);for(var f=0,d=s.length;f<d;f++)(o=this._getStyleDeclaration(l,f))&&o.textBackgroundColor&&(n=s[f],t.fillStyle=o.textBackgroundColor,t.fillRect(h+r+this._getWidthOfCharsAt(t,l,f),c+a,this._getWidthOfChar(t,n,l,f)+1,e/this.lineHeight));a+=e}else a+=e},_getCacheProp:function(t,e){return t+e.fontFamily+e.fontSize+e.fontWeight+e.fontStyle+e.shadow},_applyCharStylesGetWidth:function(e,i,r,s,n){var o,a=this._getStyleDeclaration(r,s),h=n&&t(n)||t(a);this._applyFontStyles(h);var c=this._getCacheProp(i,h);if(!a&&this._charWidthsCache[c]&&this.caching)return this._charWidthsCache[c];"string"==typeof h.shadow&&(h.shadow=new fabric.Shadow(h.shadow));var l=h.fill||this.fill;return e.fillStyle=l.toLive?l.toLive(e,this):l,h.stroke&&(e.strokeStyle=h.stroke&&h.stroke.toLive?h.stroke.toLive(e,this):h.stroke),e.lineWidth=h.strokeWidth||this.strokeWidth,e.font=this._getFontDeclaration.call(h),h.shadow&&(h.scaleX=this.scaleX,h.scaleY=this.scaleY,h.canvas=this.canvas,this._setShadow.call(h,e)),this.caching&&this._charWidthsCache[c]?this._charWidthsCache[c]:(o=e.measureText(i).width,this.caching&&(this._charWidthsCache[c]=o),o)},_applyFontStyles:function(t){t.fontFamily||(t.fontFamily=this.fontFamily),t.fontSize||(t.fontSize=this.fontSize),t.fontWeight||(t.fontWeight=this.fontWeight),t.fontStyle||(t.fontStyle=this.fontStyle)},_getStyleDeclaration:function(e,i,r){return r?this.styles[e]&&this.styles[e][i]?t(this.styles[e][i]):{}:this.styles[e]&&this.styles[e][i]?this.styles[e][i]:null},_setStyleDeclaration:function(t,e,i){this.styles[t][e]=i},_deleteStyleDeclaration:function(t,e){delete this.styles[t][e]},_getLineStyle:function(t){return this.styles[t]},_setLineStyle:function(t,e){this.styles[t]=e},_deleteLineStyle:function(t){delete this.styles[t]},_getWidthOfChar:function(t,e,i,r){if(!this._isMeasuring&&"justify"===this.textAlign&&this._reSpacesAndTabs.test(e))return this._getWidthOfSpace(t,i);var s=this._getStyleDeclaration(i,r,!0);this._applyFontStyles(s);var n=this._getCacheProp(e,s);if(this._charWidthsCache[n]&&this.caching)return this._charWidthsCache[n];if(t){t.save();var o=this._applyCharStylesGetWidth(t,e,i,r);return t.restore(),o}},_getHeightOfChar:function(t,e,i){var r=this._getStyleDeclaration(e,i);return r&&r.fontSize?r.fontSize:this.fontSize},_getWidthOfCharsAt:function(t,e,i){var r,s,n=0;for(r=0;r<i;r++)s=this._textLines[e][r],n+=this._getWidthOfChar(t,s,e,r);return n},_measureLine:function(t,e){this._isMeasuring=!0;var i=this._getWidthOfCharsAt(t,e,this._textLines[e].length);return this._isMeasuring=!1,i},_getWidthOfSpace:function(t,e){if(this.__widthOfSpace[e])return this.__widthOfSpace[e];var i=this._textLines[e],r=this._getWidthOfWords(t,i,e,0),s=this.width-r,n=i.length-i.replace(this._reSpacesAndTabs,"").length,o=Math.max(s/n,t.measureText(" ").width);return this.__widthOfSpace[e]=o,o},_getWidthOfWords:function(t,e,i,r){for(var s=0,n=0;n<e.length;n++){var o=e[n];o.match(/\s/)||(s+=this._getWidthOfChar(t,o,i,n+r))}return s},_getHeightOfLine:function(t,e){if(this.__lineHeights[e])return this.__lineHeights[e];for(var i=this._textLines[e],r=this._getHeightOfChar(t,e,0),s=1,n=i.length;s<n;s++){var o=this._getHeightOfChar(t,e,s);o>r&&(r=o)}return this.__lineHeights[e]=r*this.lineHeight*this._fontSizeMult,this.__lineHeights[e]},_getTextHeight:function(t){for(var e=0,i=0,r=this._textLines.length;i<r;i++)e+=this._getHeightOfLine(t,i);return e},toObject:function(e){var i,r,s,n={};for(i in this.styles){s=this.styles[i],n[i]={};for(r in s)n[i][r]=t(s[r])}return fabric.util.object.extend(this.callSuper("toObject",e),{styles:n})}}),fabric.IText.fromObject=function(e){return new fabric.IText(e.text,t(e))}}(),function(){var t=fabric.util.object.clone;fabric.util.object.extend(fabric.IText.prototype,{initBehavior:function(){this.initAddedHandler(),this.initRemovedHandler(),this.initCursorSelectionHandlers(),this.initDoubleClickSimulation()},initSelectedHandler:function(){this.on("selected",function(){var t=this;setTimeout(function(){t.selected=!0},100)})},initAddedHandler:function(){var t=this;this.on("added",function(){this.canvas&&!this.canvas._hasITextHandlers&&(this.canvas._hasITextHandlers=!0,this._initCanvasHandlers()),t.canvas&&(t.canvas._iTextInstances=t.canvas._iTextInstances||[],t.canvas._iTextInstances.push(t))})},initRemovedHandler:function(){var t=this;this.on("removed",function(){t.canvas&&(t.canvas._iTextInstances=t.canvas._iTextInstances||[],fabric.util.removeFromArray(t.canvas._iTextInstances,t))})},_initCanvasHandlers:function(){var t=this;this.canvas.on("selection:cleared",function(){fabric.IText.prototype.exitEditingOnOthers(t.canvas)}),this.canvas.on("mouse:up",function(){t.canvas._iTextInstances&&t.canvas._iTextInstances.forEach(function(t){t.__isMousedown=!1})}),this.canvas.on("object:selected",function(){fabric.IText.prototype.exitEditingOnOthers(t.canvas)})},_tick:function(){this._currentTickState=this._animateCursor(this,1,this.cursorDuration,"_onTickComplete")},_animateCursor:function(t,e,i,r){var s;return s={isAborted:!1,abort:function(){this.isAborted=!0}},t.animate("_currentCursorOpacity",e,{duration:i,onComplete:function(){s.isAborted||t[r]()},onChange:function(){t.canvas&&(t.canvas.clearContext(t.canvas.contextTop||t.ctx),t.renderCursorOrSelection())},abort:function(){return s.isAborted}}),s},_onTickComplete:function(){var t=this;this._cursorTimeout1&&clearTimeout(this._cursorTimeout1),this._cursorTimeout1=setTimeout(function(){t._currentTickCompleteState=t._animateCursor(t,0,this.cursorDuration/2,"_tick")},100)},initDelayedCursor:function(t){var e=this,i=t?0:this.cursorDelay;this._currentTickState&&this._currentTickState.abort(),this._currentTickCompleteState&&this._currentTickCompleteState.abort(),clearTimeout(this._cursorTimeout1),this._currentCursorOpacity=1,this.canvas&&(this.canvas.clearContext(this.canvas.contextTop||this.ctx),this.renderCursorOrSelection()),this._cursorTimeout2&&clearTimeout(this._cursorTimeout2),this._cursorTimeout2=setTimeout(function(){e._tick()},i)},abortCursorAnimation:function(){this._currentTickState&&this._currentTickState.abort(),this._currentTickCompleteState&&this._currentTickCompleteState.abort(),clearTimeout(this._cursorTimeout1),clearTimeout(this._cursorTimeout2),this._currentCursorOpacity=0,this.canvas&&this.canvas.clearContext(this.canvas.contextTop||this.ctx)},selectAll:function(){this.setSelectionStart(0),this.setSelectionEnd(this.text.length)},getSelectedText:function(){return this.text.slice(this.selectionStart,this.selectionEnd)},findWordBoundaryLeft:function(t){var e=0,i=t-1;if(this._reSpace.test(this.text.charAt(i)))for(;this._reSpace.test(this.text.charAt(i));)e++,i--;for(;/\S/.test(this.text.charAt(i))&&i>-1;)e++,i--;return t-e},findWordBoundaryRight:function(t){var e=0,i=t;if(this._reSpace.test(this.text.charAt(i)))for(;this._reSpace.test(this.text.charAt(i));)e++,i++;for(;/\S/.test(this.text.charAt(i))&&i<this.text.length;)e++,i++;return t+e},findLineBoundaryLeft:function(t){for(var e=0,i=t-1;!/\n/.test(this.text.charAt(i))&&i>-1;)e++,i--;return t-e},findLineBoundaryRight:function(t){for(var e=0,i=t;!/\n/.test(this.text.charAt(i))&&i<this.text.length;)e++,i++;return t+e},getNumNewLinesInSelectedText:function(){for(var t=this.getSelectedText(),e=0,i=0,r=t.length;i<r;i++)"\n"===t[i]&&e++;return e},searchWordBoundary:function(t,e){for(var i=this._reSpace.test(this.text.charAt(t))?t-1:t,r=this.text.charAt(i),s=/[ \n\.,;!\?\-]/;!s.test(r)&&i>0&&i<this.text.length;)i+=e,r=this.text.charAt(i);return s.test(r)&&"\n"!==r&&(i+=1===e?0:1),i},selectWord:function(t){var e=this.searchWordBoundary(t,-1),i=this.searchWordBoundary(t,1);this.setSelectionStart(e),this.setSelectionEnd(i)},selectLine:function(t){var e=this.findLineBoundaryLeft(t),i=this.findLineBoundaryRight(t);this.setSelectionStart(e),this.setSelectionEnd(i)},enterEditing:function(t){if(!this.isEditing&&this.editable)return this.canvas&&this.exitEditingOnOthers(this.canvas),this.isEditing=!0,this.initHiddenTextarea(t),this.hiddenTextarea.focus(),this._updateTextarea(),this._saveEditingProps(),this._setEditingProps(),this._textBeforeEdit=this.text,this._tick(),this.fire("editing:entered"),this.canvas?(this.canvas.renderAll(),this.canvas.fire("text:editing:entered",{target:this}),this.initMouseMoveHandler(),this):this},exitEditingOnOthers:function(t){t._iTextInstances&&t._iTextInstances.forEach(function(t){t.selected=!1,t.isEditing&&t.exitEditing()})},initMouseMoveHandler:function(){var t=this;this.canvas.on("mouse:move",function(e){if(t.__isMousedown&&t.isEditing){var i=t.getSelectionStartFromPointer(e.e);i>=t.__selectionStartOnMouseDown?(t.setSelectionStart(t.__selectionStartOnMouseDown),t.setSelectionEnd(i)):(t.setSelectionStart(i),t.setSelectionEnd(t.__selectionStartOnMouseDown))}})},_setEditingProps:function(){this.hoverCursor="text",this.canvas&&(this.canvas.defaultCursor=this.canvas.moveCursor="text"),this.borderColor=this.editingBorderColor,this.hasControls=this.selectable=!1,this.lockMovementX=this.lockMovementY=!0},_updateTextarea:function(){if(this.hiddenTextarea&&!this.inCompositionMode&&(this.hiddenTextarea.value=this.text,this.hiddenTextarea.selectionStart=this.selectionStart,this.hiddenTextarea.selectionEnd=this.selectionEnd,this.selectionStart===this.selectionEnd)){var t=this._calcTextareaPosition();this.hiddenTextarea.style.left=t.x+"px",this.hiddenTextarea.style.top=t.y+"px"}},_calcTextareaPosition:function(){var t=this.text.split(""),e=this._getCursorBoundaries(t,"cursor"),i=this.get2DCursorLocation(),r=i.lineIndex,s=i.charIndex,n=this.getCurrentCharFontSize(r,s),o=0===r&&0===s?this._getLineLeftOffset(this._getLineWidth(this.ctx,r)):e.leftOffset,a=this.calcTransformMatrix(),h={x:e.left+o,y:e.top+e.topOffset+n};return this.hiddenTextarea.style.fontSize=n+"px",fabric.util.transformPoint(h,a)},_saveEditingProps:function(){this._savedProps={hasControls:this.hasControls,borderColor:this.borderColor,lockMovementX:this.lockMovementX,lockMovementY:this.lockMovementY,hoverCursor:this.hoverCursor,defaultCursor:this.canvas&&this.canvas.defaultCursor,moveCursor:this.canvas&&this.canvas.moveCursor}},_restoreEditingProps:function(){this._savedProps&&(this.hoverCursor=this._savedProps.overCursor,this.hasControls=this._savedProps.hasControls,this.borderColor=this._savedProps.borderColor,this.lockMovementX=this._savedProps.lockMovementX,this.lockMovementY=this._savedProps.lockMovementY,this.canvas&&(this.canvas.defaultCursor=this._savedProps.defaultCursor,this.canvas.moveCursor=this._savedProps.moveCursor))},exitEditing:function(){var t=this._textBeforeEdit!==this.text;return this.selected=!1,this.isEditing=!1,this.selectable=!0,this.selectionEnd=this.selectionStart,this.hiddenTextarea&&this.canvas&&this.hiddenTextarea.parentNode.removeChild(this.hiddenTextarea),this.hiddenTextarea=null,this.abortCursorAnimation(),this._restoreEditingProps(),this._currentCursorOpacity=0,this.fire("editing:exited"),t&&this.fire("modified"),this.canvas&&(this.canvas.fire("text:editing:exited",{target:this}),t&&this.canvas.fire("object:modified",{target:this})),this},_removeExtraneousStyles:function(){for(var t in this.styles)this._textLines[t]||delete this.styles[t]},_removeCharsFromTo:function(t,e){for(;e!==t;)this._removeSingleCharAndStyle(t+1),e--;this.setSelectionStart(t)},_removeSingleCharAndStyle:function(t){var e="\n"===this.text[t-1],i=e?t:t-1;this.removeStyleObject(e,i),this.text=this.text.slice(0,t-1)+this.text.slice(t),this._textLines=this._splitTextIntoLines()},insertChars:function(t,e){var i;if(this.selectionEnd-this.selectionStart>1&&(this._removeCharsFromTo(this.selectionStart,this.selectionEnd),this.setSelectionEnd(this.selectionStart)),e||!this.isEmptyStyles())for(var r=0,s=t.length;r<s;r++)e&&(i=fabric.copiedTextStyle[r]),this.insertChar(t[r],r<s-1,i);else this.insertChar(t,!1)},insertChar:function(t,e,i){var r="\n"===this.text[this.selectionStart];this.text=this.text.slice(0,this.selectionStart)+t+this.text.slice(this.selectionEnd),this._textLines=this._splitTextIntoLines(),this.insertStyleObjects(t,r,i),this.selectionStart+=t.length,this.selectionEnd=this.selectionStart,e||(this._updateTextarea(),this.canvas&&this.canvas.renderAll(),this.setCoords(),this.fire("changed"),this.canvas&&this.canvas.fire("text:changed",{target:this}))},insertNewlineStyleObject:function(e,i,r){this.shiftLineStyles(e,1),this.styles[e+1]||(this.styles[e+1]={});var s={},n={};if(this.styles[e]&&this.styles[e][i-1]&&(s=this.styles[e][i-1]),r)n[0]=t(s),this.styles[e+1]=n;else{for(var o in this.styles[e])parseInt(o,10)>=i&&(n[parseInt(o,10)-i]=this.styles[e][o],delete this.styles[e][o]);this.styles[e+1]=n}this._forceClearCache=!0},insertCharStyleObject:function(e,i,r){var s=this.styles[e],n=t(s);0!==i||r||(i=1);for(var o in n){var a=parseInt(o,10);a>=i&&(s[a+1]=n[a],n[a-1]||delete s[a])}this.styles[e][i]=r||t(s[i-1]),this._forceClearCache=!0},insertStyleObjects:function(t,e,i){var r=this.get2DCursorLocation(),s=r.lineIndex,n=r.charIndex;this._getLineStyle(s)||this._setLineStyle(s,{}),"\n"===t?this.insertNewlineStyleObject(s,n,e):this.insertCharStyleObject(s,n,i)},shiftLineStyles:function(e,i){var r=t(this.styles);for(var s in this.styles){var n=parseInt(s,10);n>e&&(this.styles[n+i]=r[n],r[n-i]||delete this.styles[n])}},removeStyleObject:function(t,e){var i=this.get2DCursorLocation(e),r=i.lineIndex,s=i.charIndex;this._removeStyleObject(t,i,r,s)},_getTextOnPreviousLine:function(t){return this._textLines[t-1]},_removeStyleObject:function(e,i,r,s){if(e){var n=this._getTextOnPreviousLine(i.lineIndex),o=n?n.length:0;this.styles[r-1]||(this.styles[r-1]={});for(s in this.styles[r])this.styles[r-1][parseInt(s,10)+o]=this.styles[r][s];this.shiftLineStyles(i.lineIndex,-1)}else{var a=this.styles[r];a&&delete a[s];var h=t(a);for(var c in h){var l=parseInt(c,10);l>=s&&0!==l&&(a[l-1]=h[l],delete a[l])}}},insertNewline:function(){this.insertChars("\n")}})}(),fabric.util.object.extend(fabric.IText.prototype,{initDoubleClickSimulation:function(){this.__lastClickTime=+new Date,this.__lastLastClickTime=+new Date,this.__lastPointer={},this.on("mousedown",this.onMouseDown.bind(this))},onMouseDown:function(t){this.__newClickTime=+new Date;var e=this.canvas.getPointer(t.e);this.isTripleClick(e)?(this.fire("tripleclick",t),this._stopEvent(t.e)):this.isDoubleClick(e)&&(this.fire("dblclick",t),this._stopEvent(t.e)),this.__lastLastClickTime=this.__lastClickTime,this.__lastClickTime=this.__newClickTime,this.__lastPointer=e,this.__lastIsEditing=this.isEditing,this.__lastSelected=this.selected},isDoubleClick:function(t){return this.__newClickTime-this.__lastClickTime<500&&this.__lastPointer.x===t.x&&this.__lastPointer.y===t.y&&this.__lastIsEditing},isTripleClick:function(t){return this.__newClickTime-this.__lastClickTime<500&&this.__lastClickTime-this.__lastLastClickTime<500&&this.__lastPointer.x===t.x&&this.__lastPointer.y===t.y},_stopEvent:function(t){t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation()},initCursorSelectionHandlers:function(){this.initSelectedHandler(),this.initMousedownHandler(),this.initMouseupHandler(),this.initClicks()},initClicks:function(){this.on("dblclick",function(t){this.selectWord(this.getSelectionStartFromPointer(t.e))}),this.on("tripleclick",function(t){this.selectLine(this.getSelectionStartFromPointer(t.e))})},initMousedownHandler:function(){this.on("mousedown",function(t){if(this.editable){var e=this.canvas.getPointer(t.e);this.__mousedownX=e.x,this.__mousedownY=e.y,this.__isMousedown=!0,this.hiddenTextarea&&this.canvas&&this.canvas.wrapperEl.appendChild(this.hiddenTextarea),this.selected&&this.setCursorByClick(t.e),this.isEditing&&(this.__selectionStartOnMouseDown=this.selectionStart,this.initDelayedCursor(!0))}})},_isObjectMoved:function(t){var e=this.canvas.getPointer(t);return this.__mousedownX!==e.x||this.__mousedownY!==e.y},initMouseupHandler:function(){this.on("mouseup",function(t){this.__isMousedown=!1,this.editable&&!this._isObjectMoved(t.e)&&(this.__lastSelected&&!this.__corner&&(this.enterEditing(t.e),this.initDelayedCursor(!0)),this.selected=!0)})},setCursorByClick:function(t){var e=this.getSelectionStartFromPointer(t);t.shiftKey?e<this.selectionStart?(this.setSelectionEnd(this.selectionStart),this.setSelectionStart(e)):this.setSelectionEnd(e):(this.setSelectionStart(e),this.setSelectionEnd(e))},getSelectionStartFromPointer:function(t){for(var e,i=this.getLocalPointer(t),r=0,s=0,n=0,o=0,a=0,h=this._textLines.length;a<h;a++){e=this._textLines[a],n+=this._getHeightOfLine(this.ctx,a)*this.scaleY;var c=this._getLineWidth(this.ctx,a);s=this._getLineLeftOffset(c)*this.scaleX;for(var l=0,u=e.length;l<u;l++){if(r=s,s+=this._getWidthOfChar(this.ctx,e[l],a,this.flipX?u-l:l)*this.scaleX,!(n<=i.y||s<=i.x))return this._getNewSelectionStartFromOffset(i,r,s,o+a,u);o++}if(i.y<n)return this._getNewSelectionStartFromOffset(i,r,s,o+a-1,u)}return this.text.length},_getNewSelectionStartFromOffset:function(t,e,i,r,s){var n=t.x-e,o=r+(i-t.x>n?0:1);return this.flipX&&(o=s-o),o>this.text.length&&(o=this.text.length),o}}),fabric.util.object.extend(fabric.IText.prototype,{initHiddenTextarea:function(t){var e;t&&this.canvas?e=this.canvas.getPointer(t):(this.oCoords||this.setCoords(),e=this.oCoords.tl),this.hiddenTextarea=fabric.document.createElement("textarea"),this.hiddenTextarea.setAttribute("autocapitalize","off"),this.hiddenTextarea.style.cssText="position: absolute; top: "+e.y+"px; left: "+e.x+"px; opacity: 0; width: 0px; height: 0px; z-index: -999;",this.canvas?this.canvas.lowerCanvasEl.parentNode.appendChild(this.hiddenTextarea):fabric.document.body.appendChild(this.hiddenTextarea),fabric.util.addListener(this.hiddenTextarea,"keydown",this.onKeyDown.bind(this)),fabric.util.addListener(this.hiddenTextarea,"keyup",this.onKeyUp.bind(this)),fabric.util.addListener(this.hiddenTextarea,"input",this.onInput.bind(this)),fabric.util.addListener(this.hiddenTextarea,"copy",this.copy.bind(this)),fabric.util.addListener(this.hiddenTextarea,"cut",this.cut.bind(this)),fabric.util.addListener(this.hiddenTextarea,"paste",this.paste.bind(this)),fabric.util.addListener(this.hiddenTextarea,"compositionstart",this.onCompositionStart.bind(this)),fabric.util.addListener(this.hiddenTextarea,"compositionupdate",this.onCompositionUpdate.bind(this)),fabric.util.addListener(this.hiddenTextarea,"compositionend",this.onCompositionEnd.bind(this)),!this._clickHandlerInitialized&&this.canvas&&(fabric.util.addListener(this.canvas.upperCanvasEl,"click",this.onClick.bind(this)),this._clickHandlerInitialized=!0)},_keysMap:{8:"removeChars",9:"exitEditing",27:"exitEditing",13:"insertNewline",33:"moveCursorUp",34:"moveCursorDown",35:"moveCursorRight",36:"moveCursorLeft",37:"moveCursorLeft",38:"moveCursorUp",39:"moveCursorRight",40:"moveCursorDown",46:"forwardDelete"},_ctrlKeysMapUp:{67:"copy",88:"cut"},_ctrlKeysMapDown:{65:"selectAll"},onClick:function(){this.hiddenTextarea&&this.hiddenTextarea.focus()},onKeyDown:function(t){if(this.isEditing){if(t.keyCode in this._keysMap)this[this._keysMap[t.keyCode]](t);else{if(!(t.keyCode in this._ctrlKeysMapDown&&(t.ctrlKey||t.metaKey)))return;this[this._ctrlKeysMapDown[t.keyCode]](t)}t.stopImmediatePropagation(),t.preventDefault(),this.canvas&&this.canvas.renderAll()}},onKeyUp:function(t){this.isEditing&&!this._copyDone?t.keyCode in this._ctrlKeysMapUp&&(t.ctrlKey||t.metaKey)&&(this[this._ctrlKeysMapUp[t.keyCode]](t),t.stopImmediatePropagation(),t.preventDefault(),this.canvas&&this.canvas.renderAll()):this._copyDone=!1},onInput:function(t){if(this.isEditing&&!this.inCompositionMode){var e,i,r,s=this.selectionStart||0,n=this.selectionEnd||0,o=this.text.length,a=this.hiddenTextarea.value.length;a>o?(r="left"===this._selectionDirection?n:s,e=a-o,i=this.hiddenTextarea.value.slice(r,r+e)):(e=a-o+n-s,i=this.hiddenTextarea.value.slice(s,s+e)),this.insertChars(i),t.stopPropagation()}},onCompositionStart:function(){this.inCompositionMode=!0,this.prevCompositionLength=0,this.compositionStart=this.selectionStart},onCompositionEnd:function(){this.inCompositionMode=!1},onCompositionUpdate:function(t){var e=t.data;this.selectionStart=this.compositionStart,this.selectionEnd=this.selectionEnd===this.selectionStart?this.compositionStart+this.prevCompositionLength:this.selectionEnd,this.insertChars(e,!1),this.prevCompositionLength=e.length},forwardDelete:function(t){if(this.selectionStart===this.selectionEnd){if(this.selectionStart===this.text.length)return;this.moveCursorRight(t)}this.removeChars(t)},copy:function(t){if(this.selectionStart!==this.selectionEnd){var e=this.getSelectedText(),i=this._getClipboardData(t);i&&i.setData("text",e),fabric.copiedText=e,fabric.copiedTextStyle=this.getSelectionStyles(this.selectionStart,this.selectionEnd),t.stopImmediatePropagation(),t.preventDefault(),this._copyDone=!0}},paste:function(t){var e=null,i=this._getClipboardData(t),r=!0;i?(e=i.getData("text").replace(/\r/g,""),fabric.copiedTextStyle&&fabric.copiedText===e||(r=!1)):e=fabric.copiedText,e&&this.insertChars(e,r),t.stopImmediatePropagation(),t.preventDefault()},cut:function(t){this.selectionStart!==this.selectionEnd&&(this.copy(t),this.removeChars(t))},_getClipboardData:function(t){return t&&t.clipboardData||fabric.window.clipboardData},getDownCursorOffset:function(t,e){var i,r=e?this.selectionEnd:this.selectionStart,s=this.get2DCursorLocation(r),n=s.lineIndex,o=this._textLines[n].slice(0,s.charIndex),a=this._textLines[n].slice(s.charIndex),h=this._textLines[n+1]||"";if(n===this._textLines.length-1||t.metaKey||34===t.keyCode)return this.text.length-r;for(var c=this._getLineWidth(this.ctx,n),l=this._getLineLeftOffset(c),u=0,f=o.length;u<f;u++)i=o[u],l+=this._getWidthOfChar(this.ctx,i,n,u);var d=this._getIndexOnNextLine(s,h,l);return a.length+1+d},_getIndexOnNextLine:function(t,e,i){for(var r,s=t.lineIndex+1,n=this._getLineWidth(this.ctx,s),o=this._getLineLeftOffset(n),a=0,h=0,c=e.length;h<c;h++){var l=e[h],u=this._getWidthOfChar(this.ctx,l,s,h);if((o+=u)>i){r=!0;var f=o-u,d=o,g=Math.abs(f-i);a=Math.abs(d-i)<g?h+1:h;break}}return r||(a=e.length),a},moveCursorDown:function(t){this.abortCursorAnimation(),this._currentCursorOpacity=1;var e=this.getDownCursorOffset(t,"right"===this._selectionDirection);t.shiftKey?this.moveCursorDownWithShift(e):this.moveCursorDownWithoutShift(e),this.initDelayedCursor()},moveCursorDownWithoutShift:function(t){this._selectionDirection="right",this.setSelectionStart(this.selectionStart+t),this.setSelectionEnd(this.selectionStart)},swapSelectionPoints:function(){var t=this.selectionEnd;this.setSelectionEnd(this.selectionStart),this.setSelectionStart(t)},moveCursorDownWithShift:function(t){this.selectionEnd===this.selectionStart&&(this._selectionDirection="right"),"right"===this._selectionDirection?this.setSelectionEnd(this.selectionEnd+t):this.setSelectionStart(this.selectionStart+t),this.selectionEnd<this.selectionStart&&"left"===this._selectionDirection&&(this.swapSelectionPoints(),this._selectionDirection="right"),this.selectionEnd>this.text.length&&this.setSelectionEnd(this.text.length)},getUpCursorOffset:function(t,e){var i=e?this.selectionEnd:this.selectionStart,r=this.get2DCursorLocation(i),s=r.lineIndex;if(0===s||t.metaKey||33===t.keyCode)return i;for(var n,o=this._textLines[s].slice(0,r.charIndex),a=this._textLines[s-1]||"",h=this._getLineWidth(this.ctx,r.lineIndex),c=this._getLineLeftOffset(h),l=0,u=o.length;l<u;l++)n=o[l],c+=this._getWidthOfChar(this.ctx,n,s,l);var f=this._getIndexOnPrevLine(r,a,c);return a.length-f+o.length},_getIndexOnPrevLine:function(t,e,i){for(var r,s=t.lineIndex-1,n=this._getLineWidth(this.ctx,s),o=this._getLineLeftOffset(n),a=0,h=0,c=e.length;h<c;h++){var l=e[h],u=this._getWidthOfChar(this.ctx,l,s,h);if((o+=u)>i){r=!0;var f=o-u,d=o,g=Math.abs(f-i);a=Math.abs(d-i)<g?h:h-1;break}}return r||(a=e.length-1),a},moveCursorUp:function(t){this.abortCursorAnimation(),this._currentCursorOpacity=1;var e=this.getUpCursorOffset(t,"right"===this._selectionDirection);t.shiftKey?this.moveCursorUpWithShift(e):this.moveCursorUpWithoutShift(e),this.initDelayedCursor()},moveCursorUpWithShift:function(t){this.selectionEnd===this.selectionStart&&(this._selectionDirection="left"),"right"===this._selectionDirection?this.setSelectionEnd(this.selectionEnd-t):this.setSelectionStart(this.selectionStart-t),this.selectionEnd<this.selectionStart&&"right"===this._selectionDirection&&(this.swapSelectionPoints(),this._selectionDirection="left")},moveCursorUpWithoutShift:function(t){this.selectionStart===this.selectionEnd&&this.setSelectionStart(this.selectionStart-t),this.setSelectionEnd(this.selectionStart),this._selectionDirection="left"},moveCursorLeft:function(t){0===this.selectionStart&&0===this.selectionEnd||(this.abortCursorAnimation(),this._currentCursorOpacity=1,t.shiftKey?this.moveCursorLeftWithShift(t):this.moveCursorLeftWithoutShift(t),this.initDelayedCursor())},_move:function(t,e,i){var r="selectionStart"===e?"setSelectionStart":"setSelectionEnd";t.altKey?this[r](this["findWordBoundary"+i](this[e])):t.metaKey||35===t.keyCode||36===t.keyCode?this[r](this["findLineBoundary"+i](this[e])):this[r](this[e]+("Left"===i?-1:1))},_moveLeft:function(t,e){this._move(t,e,"Left")},_moveRight:function(t,e){this._move(t,e,"Right")},moveCursorLeftWithoutShift:function(t){this._selectionDirection="left",this.selectionEnd===this.selectionStart&&this._moveLeft(t,"selectionStart"),this.setSelectionEnd(this.selectionStart)},moveCursorLeftWithShift:function(t){"right"===this._selectionDirection&&this.selectionStart!==this.selectionEnd?this._moveLeft(t,"selectionEnd"):(this._selectionDirection="left",this._moveLeft(t,"selectionStart"))},moveCursorRight:function(t){this.selectionStart>=this.text.length&&this.selectionEnd>=this.text.length||(this.abortCursorAnimation(),this._currentCursorOpacity=1,t.shiftKey?this.moveCursorRightWithShift(t):this.moveCursorRightWithoutShift(t),this.initDelayedCursor())},moveCursorRightWithShift:function(t){"left"===this._selectionDirection&&this.selectionStart!==this.selectionEnd?this._moveRight(t,"selectionStart"):(this._selectionDirection="right",this._moveRight(t,"selectionEnd"))},moveCursorRightWithoutShift:function(t){this._selectionDirection="right",this.selectionStart===this.selectionEnd?(this._moveRight(t,"selectionStart"),this.setSelectionEnd(this.selectionStart)):(this.setSelectionEnd(this.selectionEnd+this.getNumNewLinesInSelectedText()),this.setSelectionStart(this.selectionEnd))},removeChars:function(t){this.selectionStart===this.selectionEnd?this._removeCharsNearCursor(t):this._removeCharsFromTo(this.selectionStart,this.selectionEnd),this.setSelectionEnd(this.selectionStart),this._removeExtraneousStyles(),this.canvas&&this.canvas.renderAll(),this.setCoords(),this.fire("changed"),this.canvas&&this.canvas.fire("text:changed",{target:this})},_removeCharsNearCursor:function(t){if(0!==this.selectionStart)if(t.metaKey){var e=this.findLineBoundaryLeft(this.selectionStart);this._removeCharsFromTo(e,this.selectionStart),this.setSelectionStart(e)}else if(t.altKey){var i=this.findWordBoundaryLeft(this.selectionStart);this._removeCharsFromTo(i,this.selectionStart),this.setSelectionStart(i)}else this._removeSingleCharAndStyle(this.selectionStart),this.setSelectionStart(this.selectionStart-1)}}),function(){var t=fabric.util.toFixed,e=fabric.Object.NUM_FRACTION_DIGITS;fabric.util.object.extend(fabric.IText.prototype,{_setSVGTextLineText:function(t,e,i,r,s,n){this._getLineStyle(t)?this._setSVGTextLineChars(t,e,i,r,n):fabric.Text.prototype._setSVGTextLineText.call(this,t,e,i,r,s)},_setSVGTextLineChars:function(t,e,i,r,s){for(var n=this._textLines[t],o=0,a=this._getLineLeftOffset(this._getLineWidth(this.ctx,t))-this.width/2,h=this._getSVGLineTopOffset(t),c=this._getHeightOfLine(this.ctx,t),l=0,u=n.length;l<u;l++){var f=this._getStyleDeclaration(t,l)||{};e.push(this._createTextCharSpan(n[l],f,a,h.lineTop+h.offset,o));var d=this._getWidthOfChar(this.ctx,n[l],t,l);f.textBackgroundColor&&s.push(this._createTextCharBg(f,a,h.lineTop,c,d,o)),o+=d}},_getSVGLineTopOffset:function(t){for(var e,i=0,r=0;r<t;r++)i+=this._getHeightOfLine(this.ctx,r);return e=this._getHeightOfLine(this.ctx,r),{lineTop:i,offset:(this._fontSizeMult-this._fontSizeFraction)*e/(this.lineHeight*this._fontSizeMult)}},_createTextCharBg:function(i,r,s,n,o,a){return['\t\t<rect fill="',i.textBackgroundColor,'" x="',t(r+a,e),'" y="',t(s-this.height/2,e),'" width="',t(o,e),'" height="',t(n/this.lineHeight,e),'"></rect>\n'].join("")},_createTextCharSpan:function(i,r,s,n,o){var a=this.getSvgStyles.call(fabric.util.object.extend({visible:!0,fill:this.fill,stroke:this.stroke,type:"text",getSvgFilter:fabric.Object.prototype.getSvgFilter},r));return['\t\t\t<tspan x="',t(s+o,e),'" y="',t(n-this.height/2,e),'" ',r.fontFamily?'font-family="'+r.fontFamily.replace(/"/g,"'")+'" ':"",r.fontSize?'font-size="'+r.fontSize+'" ':"",r.fontStyle?'font-style="'+r.fontStyle+'" ':"",r.fontWeight?'font-weight="'+r.fontWeight+'" ':"",r.textDecoration?'text-decoration="'+r.textDecoration+'" ':"",'style="',a,'">',fabric.util.string.escapeXml(i),"</tspan>\n"].join("")}})}(),function(t){"use strict";var e=t.fabric||(t.fabric={}),i=e.util.object.clone;e.Textbox=e.util.createClass(e.IText,e.Observable,{type:"textbox",minWidth:20,dynamicMinWidth:0,__cachedLines:null,lockScalingY:!0,lockScalingFlip:!0,initialize:function(t,i){this.ctx=e.util.createCanvasElement().getContext("2d"),this.callSuper("initialize",t,i),this.setControlsVisibility(e.Textbox.getTextboxControlVisibility()),this._dimensionAffectingProps.width=!0},_initDimensions:function(t){this.__skipDimension||(t||(t=e.util.createCanvasElement().getContext("2d"),this._setTextStyles(t)),this.dynamicMinWidth=0,this._textLines=this._splitTextIntoLines(),this.dynamicMinWidth>this.width&&this._set("width",this.dynamicMinWidth),this._clearCache(),this.height=this._getTextHeight(t))},_generateStyleMap:function(){for(var t=0,e=0,i=0,r={},s=0;s<this._textLines.length;s++)"\n"===this.text[i]?(e=0,i++,t++):" "===this.text[i]&&(e++,i++),r[s]={line:t,offset:e},i+=this._textLines[s].length,e+=this._textLines[s].length;return r},_getStyleDeclaration:function(t,e,i){if(this._styleMap){var r=this._styleMap[t];if(!r)return i?{}:null;t=r.line,e=r.offset+e}return this.callSuper("_getStyleDeclaration",t,e,i)},_setStyleDeclaration:function(t,e,i){var r=this._styleMap[t];t=r.line,e=r.offset+e,this.styles[t][e]=i},_deleteStyleDeclaration:function(t,e){var i=this._styleMap[t];t=i.line,e=i.offset+e,delete this.styles[t][e]},_getLineStyle:function(t){var e=this._styleMap[t];return this.styles[e.line]},_setLineStyle:function(t,e){var i=this._styleMap[t];this.styles[i.line]=e},_deleteLineStyle:function(t){var e=this._styleMap[t];delete this.styles[e.line]},_wrapText:function(t,e){var i,r=e.split(this._reNewline),s=[];for(i=0;i<r.length;i++)s=s.concat(this._wrapLine(t,r[i],i));return s},_measureText:function(t,e,i,r){var s=0;r=r||0;for(var n=0,o=e.length;n<o;n++)s+=this._getWidthOfChar(t,e[n],i,n+r);return s},_wrapLine:function(t,e,i){for(var r=0,s=[],n="",o=e.split(" "),a="",h=0,c=0,l=0,u=0,f=!0,d=0;d<o.length;d++)a=o[d],c=this._measureText(t,a,i,h),h+=a.length,(r+=l+c)>=this.width&&!f&&(s.push(n),n="",r=c,f=!0),f||(n+=" "),n+=a,l=this._measureText(t," ",i,h),h++,f=!1,c>u&&(u=c);return d&&s.push(n),u>this.dynamicMinWidth&&(this.dynamicMinWidth=u),s},_splitTextIntoLines:function(){var t=this.textAlign;this.ctx.save(),this._setTextStyles(this.ctx),this.textAlign="left";var e=this._wrapText(this.ctx,this.text);return this.textAlign=t,this.ctx.restore(),this._textLines=e,this._styleMap=this._generateStyleMap(),e},setOnGroup:function(t,e){"scaleX"===t&&(this.set("scaleX",Math.abs(1/e)),this.set("width",this.get("width")*e/(void 0===this.__oldScaleX?1:this.__oldScaleX)),this.__oldScaleX=e)},get2DCursorLocation:function(t){void 0===t&&(t=this.selectionStart);for(var e=this._textLines.length,i=0,r=0;r<e;r++){var s=this._textLines[r].length;if(t<=i+s)return{lineIndex:r,charIndex:t-i};i+=s,"\n"!==this.text[i]&&" "!==this.text[i]||i++}return{lineIndex:e-1,charIndex:this._textLines[e-1].length}},_getCursorBoundariesOffsets:function(t,e){for(var i=0,r=0,s=this.get2DCursorLocation(),n=this._textLines[s.lineIndex].split(""),o=this._getLineLeftOffset(this._getLineWidth(this.ctx,s.lineIndex)),a=0;a<s.charIndex;a++)r+=this._getWidthOfChar(this.ctx,n[a],s.lineIndex,a);for(a=0;a<s.lineIndex;a++)i+=this._getHeightOfLine(this.ctx,a);return"cursor"===e&&(i+=(1-this._fontSizeFraction)*this._getHeightOfLine(this.ctx,s.lineIndex)/this.lineHeight-this.getCurrentCharFontSize(s.lineIndex,s.charIndex)*(1-this._fontSizeFraction)),{top:i,left:r,lineLeft:o}},getMinWidth:function(){return Math.max(this.minWidth,this.dynamicMinWidth)},toObject:function(t){return e.util.object.extend(this.callSuper("toObject",t),{minWidth:this.minWidth})}}),e.Textbox.fromObject=function(t){return new e.Textbox(t.text,i(t))},e.Textbox.getTextboxControlVisibility=function(){return{tl:!1,tr:!1,br:!1,bl:!1,ml:!0,mt:!1,mr:!0,mb:!1,mtr:!0}},e.Textbox.instances=[]}("undefined"!=typeof exports?exports:this),function(){var t=fabric.Canvas.prototype._setObjectScale;fabric.Canvas.prototype._setObjectScale=function(e,i,r,s,n,o,a){var h=i.target;if(!(h instanceof fabric.Textbox))return t.call(fabric.Canvas.prototype,e,i,r,s,n,o,a);var c=h.width*(e.x/i.scaleX/(h.width+h.strokeWidth));return c>=h.getMinWidth()?(h.set("width",c),!0):void 0},fabric.Group.prototype._refreshControlsVisibility=function(){if(void 0!==fabric.Textbox)for(var t=this._objects.length;t--;)if(this._objects[t]instanceof fabric.Textbox)return void this.setControlsVisibility(fabric.Textbox.getTextboxControlVisibility())};var e=fabric.util.object.clone;fabric.util.object.extend(fabric.Textbox.prototype,{_removeExtraneousStyles:function(){for(var t in this._styleMap)this._textLines[t]||delete this.styles[this._styleMap[t].line]},insertCharStyleObject:function(t,e,i){var r=this._styleMap[t];t=r.line,e=r.offset+e,fabric.IText.prototype.insertCharStyleObject.apply(this,[t,e,i])},insertNewlineStyleObject:function(t,e,i){var r=this._styleMap[t];t=r.line,e=r.offset+e,fabric.IText.prototype.insertNewlineStyleObject.apply(this,[t,e,i])},shiftLineStyles:function(t,i){var r=e(this.styles);t=this._styleMap[t].line;for(var s in this.styles){var n=parseInt(s,10);n>t&&(this.styles[n+i]=r[n],r[n-i]||delete this.styles[n])}},_getTextOnPreviousLine:function(t){for(var e=this._textLines[t-1];this._styleMap[t-2]&&this._styleMap[t-2].line===this._styleMap[t-1].line;)e=this._textLines[t-2]+e,t--;return e},removeStyleObject:function(t,e){var i=this.get2DCursorLocation(e),r=this._styleMap[i.lineIndex],s=r.line,n=r.offset+i.charIndex;this._removeStyleObject(t,i,s,n)}})}(),function(){var t=fabric.IText.prototype._getNewSelectionStartFromOffset;fabric.IText.prototype._getNewSelectionStartFromOffset=function(e,i,r,s,n){s=t.call(this,e,i,r,s,n);for(var o=0,a=0,h=0;h<this._textLines.length&&!((o+=this._textLines[h].length)+a>=s);h++)"\n"!==this.text[o+a]&&" "!==this.text[o+a]||a++;return s-h+a}}(),function(){if("undefined"==typeof document||"undefined"==typeof window){var DOMParser=require("xmldom").DOMParser,URL=require("url"),HTTP=require("http"),HTTPS=require("https"),Canvas=require("canvas"),Image=require("canvas").Image;fabric.util.loadImage=function(t,e,i){function r(r){r?(s.src=new Buffer(r,"binary"),s._src=t,e&&e.call(i,s)):(s=null,e&&e.call(i,null,!0))}var s=new Image;t&&(t instanceof Buffer||0===t.indexOf("data"))?(s.src=s._src=t,e&&e.call(i,s)):t&&0!==t.indexOf("http")?requestFs(t,r):t?request(t,"binary",r):e&&e.call(i,t)},fabric.loadSVGFromURL=function(t,e,i){0!==(t=t.replace(/^\n\s*/,"").replace(/\?.*$/,"").trim()).indexOf("http")?requestFs(t,function(t){fabric.loadSVGFromString(t.toString(),e,i)}):request(t,"",function(t){fabric.loadSVGFromString(t,e,i)})},fabric.loadSVGFromString=function(t,e,i){var r=(new DOMParser).parseFromString(t);fabric.parseSVGDocument(r.documentElement,function(t,i){e&&e(t,i)},i)},fabric.util.getScript=function(url,callback){request(url,"",function(body){eval(body),callback&&callback()})},fabric.Image.fromObject=function(t,e){fabric.util.loadImage(t.src,function(i){var r=new fabric.Image(i);r._initConfig(t),r._initFilters(t.filters,function(i){r.filters=i||[],r._initFilters(t.resizeFilters,function(t){r.resizeFilters=t||[],e&&e(r)})})})},fabric.createCanvasForNode=function(t,e,i,r){r=r||i;var s=fabric.document.createElement("canvas"),n=new Canvas(t||600,e||600,r);s.style={},s.width=n.width,s.height=n.height;var o=new(fabric.Canvas||fabric.StaticCanvas)(s,i);return o.contextContainer=n.getContext("2d"),o.nodeCanvas=n,o.Font=Canvas.Font,o},fabric.StaticCanvas.prototype.createPNGStream=function(){return this.nodeCanvas.createPNGStream()},fabric.StaticCanvas.prototype.createJPEGStream=function(t){return this.nodeCanvas.createJPEGStream(t)};var origSetWidth=fabric.StaticCanvas.prototype.setWidth;fabric.StaticCanvas.prototype.setWidth=function(t,e){return origSetWidth.call(this,t,e),this.nodeCanvas.width=t,this},fabric.Canvas&&(fabric.Canvas.prototype.setWidth=fabric.StaticCanvas.prototype.setWidth);var origSetHeight=fabric.StaticCanvas.prototype.setHeight;fabric.StaticCanvas.prototype.setHeight=function(t,e){return origSetHeight.call(this,t,e),this.nodeCanvas.height=t,this},fabric.Canvas&&(fabric.Canvas.prototype.setHeight=fabric.StaticCanvas.prototype.setHeight)}function request(t,e,i){var r=URL.parse(t);r.port||(r.port=0===r.protocol.indexOf("https:")?443:80);var s=(0===r.protocol.indexOf("https:")?HTTPS:HTTP).request({hostname:r.hostname,port:r.port,path:r.path,method:"GET"},function(t){var r="";e&&t.setEncoding(e),t.on("end",function(){i(r)}),t.on("data",function(e){200===t.statusCode&&(r+=e)})});s.on("error",function(t){t.errno===process.ECONNREFUSED?fabric.log("ECONNREFUSED: connection refused to "+r.hostname+":"+r.port):fabric.log(t.message),i(null)}),s.end()}function requestFs(t,e){require("fs").readFile(t,function(t,i){if(t)throw fabric.log(t),t;e(i)})}}();
			
			
			
			
!function(t){"use strict";var e=t.fabric||(t.fabric={}),r=e.util.degreesToRadians,i={mt:0,tr:1,mr:2,br:3,mb:4,bl:5,ml:6,tl:7};-1===t.fabric.version.indexOf("1.6")&&console.warn("this extension might not be fully compatible with your version of fabric.js ("+t.fabric.version+").Consider using the latest compatible build of fabric.js1.6"),e.util.object.extend(e.Object.prototype,{useCustomIcons:!1,cornerBackgroundColor:"transparent",cornerShape:"",cornerPadding:0,customiseCornerIcons:function(t,e){var r;for(r in t)t.hasOwnProperty(r)&&(void 0!==t[r].cornerShape&&(this.cornerShape=t[r].cornerShape),void 0!==t[r].cornerBackgroundColor&&(this.cornerBackgroundColor=t[r].cornerBackgroundColor),void 0!==t[r].borderColor&&(this.borderColor=t[r].borderColor),void 0!==t[r].cornerSize&&(this.cornerSize=t[r].cornerSize),void 0!==t[r].cornerPadding&&(this.cornerPadding=t[r].cornerPadding),void 0!==t[r].icon&&(this.useCustomIcons=!0,this.loadIcon(r,t[r].icon,function(){e&&"function"==typeof e&&e()})),void 0!==t[r].trOffset?this.trOffset=t[r].trOffset:void 0==this.trOffset&&(this.trOffset=[0,0]),void 0!==t[r].tlOffset?this.tlOffset=t[r].tlOffset:void 0==this.tlOffset&&(this.tlOffset=[0,0]),void 0!==t[r].brOffset?this.brOffset=t[r].brOffset:void 0==this.brOffset&&(this.brOffset=[0,0]),void 0!==t[r].blOffset?this.blOffset=t[r].blOffset:void 0==this.blOffset&&(this.blOffset=[0,0]))},loadIcon:function(t,r,i){var o=this,s=new Image;s.onload=function(){o[t+"Icon"]=this,i&&"function"==typeof i&&i()},s.onerror=function(){e.warn(this.src+" icon is not an image")},s.src=r},customizeCornerIcons:function(t){this.customiseCornerIcons(t)},drawControls:function(t){if(!this.hasControls)return this;var e,r=this._calculateCurrentDimensions(!0),i=r.x,o=r.y,s=this.cornerSize,n=-(i+s)/2,c=-(o+s)/2;return this.useCustomIcons?e="drawImage":(t.lineWidth=1,t.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1,t.strokeStyle=t.fillStyle=this.cornerColor,e=this.transparentCorners?"strokeRect":"fillRect"),t.save(),this._drawControl("tl",t,e,n+this.tlOffset[0],c+this.tlOffset[1],this.tlIcon),this._drawControl("tr",t,e,n+i+this.trOffset[0],c+this.trOffset[1],this.trIcon),this._drawControl("bl",t,e,n+this.blOffset[0],c+o+this.blOffset[1],this.blIcon),this._drawControl("br",t,e,n+i+this.brOffset[0],c+o+this.brOffset[1],this.brIcon),this.get("lockUniScaling")||(this._drawControl("mt",t,e,n+i/2,c,this.mtIcon),this._drawControl("mb",t,e,n+i/2,c+o,this.mbIcon),this._drawControl("mr",t,e,n+i,c+o/2,this.mrIcon),this._drawControl("ml",t,e,n,c+o/2,this.mlIcon)),this.hasRotatingPoint&&this._drawControl("mtr",t,e,n+i/2,c-this.rotatingPointOffset,this.mtrIcon),t.restore(),this},_drawControl:function(t,e,r,i,o,s){if(this.isControlVisible(t)){var n=this.cornerSize,c=this.cornerBackgroundColor||"black",a=this.cornerShape||"rect",h=this.cornerPadding||10;if(this.useCustomIcons)if(a)switch(e.globalAlpha=1,e.fillStyle=c,a){case"rect":e.fillRect(i,o,n,n),void 0!==s&&e[r](s,i+h/2,o+h/2,n-h,n-h);break;case"circle":e.beginPath(),e.arc(i+n/2,o+n/2,n/2,0,2*Math.PI),e.fill(),e.closePath(),void 0!==s&&e[r](s,i+h/2,o+h/2,n-h,n-h)}else void 0!==s&&e[r](s,i,o,n,n);else"undefined"!=typeof G_vmlCanvasManager||this.transparentCorners||e.clearRect(i,o,n,n),e[r](i,o,n,n)}}}),e.util.object.extend(e.Canvas.prototype,{overwriteActions:!1,fixedCursors:!1,customiseControls:function(t){var e;for(e in t)t.hasOwnProperty(e)&&(void 0!==t[e].action&&(this.overwriteActions=!0,this.setCustomAction(e,t[e].action)),void 0!==t[e].cursor&&(this.fixedCursors=!0,this.setCustomCursor(e,t[e].cursor)))},setCustomAction:function(t,e){this[t+"Action"]=e},setCustomCursor:function(t,e){this[t+"cursorIcon"]=e},customizeControls:function(t){this.customiseControls(t)},_getActionFromCorner:function(t,e,r){if(!e)return"drag";if(e)if(this[e+"Action"]&&this.overwriteActions)switch(e){case"mtr":return this[e+"Action"]||"rotate";case"ml":case"mr":return r.shiftKey?r.shiftKey?"skewY":"scaleX":this[e+"Action"];case"mt":case"mb":return r.shiftKey?r.shiftKey?"skewY":"scaleY":this[e+"Action"];default:return this[e+"Action"]||"scale"}else switch(e){case"mtr":return"rotate";case"ml":case"mr":return r.shiftKey?"skewY":"scaleX";case"mt":case"mb":return r.shiftKey?"skewX":"scaleY";default:return"scale"}},_setupCurrentTransform:function(t,e){if(e){var i=this.getPointer(t),o=e._findTargetCorner(this.getPointer(t,!0)),s=this._getActionFromCorner(e,o,t),n=this._getOriginFromCorner(e,o);"function"==typeof s&&s.call(this,t,e),this._currentTransform={target:e,action:s,corner:o,scaleX:e.scaleX,scaleY:e.scaleY,skewX:e.skewX,skewY:e.skewY,offsetX:i.x-e.left,offsetY:i.y-e.top,originX:n.x,originY:n.y,ex:i.x,ey:i.y,lastX:i.x,lastY:i.y,left:e.left,top:e.top,theta:r(e.angle),width:e.width*e.scaleX,mouseXSign:1,mouseYSign:1,shiftKey:t.shiftKey,altKey:t.altKey},this._currentTransform.original={left:e.left,top:e.top,scaleX:e.scaleX,scaleY:e.scaleY,skewX:e.skewX,skewY:e.skewY,originX:n.x,originY:n.y},"remove"===s&&this._removeAction(t,e),"moveUp"===s&&this._moveLayerUpAction(t,e),"moveDown"===s&&this._moveLayerDownAction(t,e),"object"==typeof s&&"rotateByDegrees"===Object.keys(s)[0]&&this._rotateByDegrees(t,e,s.rotateByDegrees),this._resetCurrentTransform(t)}},_removeAction:function(t,e){this.getActiveGroup()&&"undefined"!==this.getActiveGroup()?(this.getActiveGroup().forEachObject(function(t){t.remove()}),this.discardActiveGroup()):e.remove()},_moveLayerUpAction:function(t,e){this.getActiveGroup()&&"undefined"!==this.getActiveGroup()?this.getActiveGroup().forEachObject(function(t){t.bringForward()}):e.bringForward()},_moveLayerDownAction:function(t,e){this.getActiveGroup()&&"undefined"!==this.getActiveGroup()?this.getActiveGroup().forEachObject(function(t){t.sendBackwards()}):e.sendBackwards()},_rotateByDegrees:function(t,e,r){var i=parseInt(e.getAngle())+r,o=!1;"center"===e.originX&&"center"===e.originY||!e.centeredRotation||(this._setOriginToCenter(e),o=!0),i=i>360?i-360:i,this.getActiveGroup()&&"undefined"!==this.getActiveGroup()?this.getActiveGroup().forEachObject(function(t){t.setAngle(i).setCoords()}):e.setAngle(i).setCoords(),o&&this._setCenterToOrigin(e),this.renderAll()},_setOriginToCenter:function(t){t._originalOriginX=t.originX,t._originalOriginY=t.originY;var e=t.getCenterPoint();t.set({originX:"center",originY:"center",left:e.x,top:e.y})},_setCenterToOrigin:function(t){var e=t.translateToOriginPoint(t.getCenterPoint(),t._originalOriginX,t._originalOriginY);t.set({originX:t._originalOriginX,originY:t._originalOriginY,left:e.x,top:e.y})},_setCornerCursor:function(t,e,r){if(this.fixedCursors&&this[t+"cursorIcon"])/\.(?:jpe?g|png|gif|jpg|jpeg|svg)$/.test(this[t+"cursorIcon"])?this.setCursor("url("+this[t+"cursorIcon"]+"), auto"):"resize"===this[t+"cursorIcon"]?this.setCursor(this._getRotatedCornerCursor(t,e,r)):this.setCursor(this[t+"cursorIcon"]);else if(t in i)this.setCursor(this._getRotatedCornerCursor(t,e,r));else{if("mtr"!==t||!e.hasRotatingPoint)return this.setCursor(this.defaultCursor),!1;this.setCursor(this.rotationCursor)}}})}("undefined"!=typeof exports?exports:this);
			
			
			
			
