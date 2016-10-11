;(function($){
	//鼠标划过“看过”时，弹出提示框
	
	$('.user-group .user-list').first().hover(function(event) {
		// event.preventDefault();
		$('.user-shell .user-hint .play-record-show').stop().fadeIn('slow', function() {
			
		});
	},function(event){
		$('.user-shell .user-hint .play-record-show').hover(function() {
			$(this).stop().css({
				'display': 'block'
			});
		}, function() {
			$(this).stop().fadeOut('fast', function() {
				
			});
		});
		$('.user-shell .user-hint .play-record-show').stop().fadeOut('fast', function() {
				
		});

	});


	//鼠标划过“VIP”时，弹出提示框
	$('.user-group .user-list-vip').hover(function(event) {
		// event.preventDefault();
		$('.vip-show').stop().fadeIn('slow', function() {
			
		});
	},function(event){
		$('.user-shell .user-hint .vip-show').hover(function() {
			$(this).stop().css({
				'display': 'block'
			});
		}, function() {
			$(this).stop().fadeOut('fast', function() {
				
			});
		});
		$('.user-shell .user-hint .vip-show').stop().fadeOut('fast', function() {
				
		});

	});

	//鼠标划过“登录头像”时，弹出提示框
	$('.user-group .user-list').last().hover(function(event) {
		// event.preventDefault();
		$('.login-show').stop().fadeIn('slow', function() {
			
		});
	},function(event){
		$('.user-shell .user-hint .login-show').hover(function() {
			$(this).stop().css({
				'display': 'block'
			});
		}, function() {
			$(this).stop().fadeOut('fast', function() {
				
			});
		});
		$('.user-shell .user-hint .login-show').stop().fadeOut('fast', function() {
				
		});

	});



	//获取页面的高度
	var inner_height = innerHeight;
	$('.login-group').css({
		'height': inner_height
	});
	//点击头像弹出登录选择种类窗口
	$('.login-show .login-hint .hint-content-link').on('click', function(event) {
		event.preventDefault();
		$('.login-group').css({
			'display': 'block'
		});
	});
	$('.user-shell .vip-show .vip-login').on('click', function(event) {
		event.preventDefault();
		$('.login-group').css({
			'display': 'block'
		});
	});

	//点击登录窗口右上角的关闭按钮，关闭登录页面
	$('.login-group .login-gn .fa.fa-close').on('click', function(event) {
		event.preventDefault();
		$(this).parents('.login-group').css({
			'display': 'none'
		});
	});
	


	//导航栏提示框
	$('.nav .navbar .navbar-default .navbar-tab').hover(function(event) {
		var nav_index = $(this).index();   //鼠标划在每一个li上面时，获取li的序列号
		//通过序列号判断显示的提示框内容
		$('.nav .nav-content .nav-content-default .nav-content-default-tab').eq(nav_index).stop().fadeIn('slow').siblings().css({
			'display': 'none'
		});
	},function(event){
		//在鼠标划入li，所对应提示框显示之后，如果鼠标滑到提示框之上，则提示框继续显示，只有当鼠标划出提示框并且鼠标不在li上时，提示框才能隐藏
		$('.nav .nav-content .nav-content-default .nav-content-default-tab').hover(function() {
			$(this).stop().css({
				'display': 'block'
			});
		}, function() {
			$(this).stop().fadeOut('slow', function() {
				
			});
		});
		//鼠标划出li时，显示的提示框自动隐藏
		$('.nav .nav-content .nav-content-default .nav-content-default-tab').fadeOut('slow', function() {
				
		});
	});


	//定时器控制图片的相互转化
	var cir_index = $('.carousel .carousel-inner .carousel-link').index();
	var circulation = function(){
		$('.carousel .carousel-inner .carousel-link').eq(cir_index).addClass('car-active').siblings().removeClass('car-active');
		$('.carousel .carousel-caption .caption-link').eq(cir_index).addClass('cap-active').siblings().removeClass('cap-active');
		cir_index ++;
		if(cir_index == 11){
			cir_index = 0;
		}
	}
	var time = setInterval(circulation,4000);

	//鼠标划入图片时，定时器停止，当鼠标划出图片时，定时器继续恢复工作
	$('.carousel .carousel-inner').hover(function() {
		clearInterval(time);
	}, function() {
		time = setInterval(circulation,4000);
	});

	//鼠标划入时，定时器停止，但是图片与文字必须相互对应，鼠标移出时，定时器继续工作
	$('.carousel .carousel-caption .caption-link').hover(function() {
		clearInterval(time);
		var cap_index = $(this).index();
		$(this).addClass('cap-active').siblings().removeClass('cap-active');
		$('.carousel .carousel-inner .carousel-link').eq(cap_index).addClass('car-active').siblings().removeClass('car-active');
	}, function() {
		time = setInterval(circulation,4000);
	});
	
	//同步剧场的轮播效果
	//获取li的序列号
	var small_index = $('.ch-rt-col .star-group .star').index();
	var small_cycle = function(){
		$('.ch-rt-col .star-group .star').eq(small_index).addClass('star-active').siblings().removeClass('star-active');
		$('.ch-rt-col .star-circle .star-small').eq(small_index).addClass('small-active').siblings().removeClass('small-active');
		small_index++;
		if(small_index == 2){
			small_index = 0;
		}
	}
	var timing = setInterval(small_cycle,3000);
	//鼠标划入时，定时器停止工作，当鼠标划出时，定时器继续工作
	$('.ch-rt-col .star-group').hover(function() {
		clearInterval(timing);
	}, function() {
		timing = setInterval(small_cycle,3000);
	});
	//鼠标划入轮播标志点时，图片相应进行切换
	$('.ch-rt-col .star-circle .star-small').hover(function(){
		clearInterval(timing);
		var sm_index = $(this).index();
		$(this).addClass('small-active').siblings().removeClass('small-active');
		$('.ch-rt-col .star-group .star').eq(sm_index).addClass('star-active').siblings().removeClass('star-active');
	},function(){
		timing = setInterval(small_cycle,3000);
	})


	//springback的动态效果
	var small_left = $('.springback .springback-group .sp-member .sp-small').width();
	$('.springback .springback-group .sp-member').hover(function() {
		var sp_index = $(this).index();
		if(sp_index >= 3){
			$(this).parent().animate({
				'left': -(sp_index - 2) * small_left +'px'
			},200);
		}
		$(this).find('.sp-big').addClass('sp-big-active');
	}, function() {
		var sp_index = $(this).index();
		if(sp_index >= 3){
			$(this).parent().animate({
				'left': 0 +'px'
			},200);
		}
		$(this).find('.sp-big').removeClass('sp-big-active');
	});

	//返回顶部效果
	right_Bar();
	function right_Bar(){
		$(window).scroll(function(){
			var scroll_top = $(document).scrollTop();
			//返回顶部图标的判断
			if(scroll_top > 200){
				$('.return-top').fadeIn(500);
			}else{
				$('.return-top').fadeOut(500);
			}
			//页面搜索框部分滚动
			if(scroll_top > 400){
				$('.tencent').css({
					'position': 'fixed',
					'background-color': '#FCFCFC',
					'z-index': '4',
					'box-shadow': '#666 0 -2px 10px 2px'
				},500);
				$('.tencent .header-search').css({
					'border': '1px solid #FF920B'
				});
				$('.tencent .logo-word').css({
					'color': 'green'
				});
			}else{
				$('.tencent').css({
					'position': 'absolute',
					'background-color': 'transparent',
					'z-index': '3',
					'box-shadow': 'none'
				},500);
				$('.tencent .logo-word').css({
					'color': '#FCFCFC'
				});
			}
		});
		$('.return-top .fa.fa-angle-up').on('click', function(event) {
			event.preventDefault();
			$('html,body').animate({scrollTop:0},100);
			$('.return-top').hide();
		});
	}

})(jQuery);