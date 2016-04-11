
//nav点击显示/隐藏
function navShow(){
	//用i来判断是显示还是隐藏
	var i = 0;
	$(".shownav").on("touchstart",function(){
	if (i==0) {
		$(".shownav").html("&nbsp;&nbsp;收起&and;");
		$(".nav3,.nav4").slideDown();
		i=1;
	}else if(i==1){
		$(".shownav").html("&nbsp;&nbsp;更多&or;");
		$(".nav3,.nav4").slideUp();
		i=0;
	}
	})
}

//点击关闭底部固定广告
function closeFix (){
var close = $("#close-fix");
close.on("touchstart",function(){
	$("#main-fix").fadeOut();
})

}

//banner图片切换
var timer;
function changeBanner(i){
	//调用手指滑动banner方法
	moveBanner();
	//获取单张图片的宽，以图片的宽来做标准移动banner
	var imgwidth=$("#banner ul img").width();
	var ul = $("#banner ul");
	//用定时器来控制图片的滚动
	clearInterval(timer);
	timer = setInterval(function(){
		if (i==0) {
			ul.animate({left:-imgwidth},500);
			i++;
		}else if(i==1){
			ul.animate({left:-imgwidth*2},500);
			i++;
		}else if(i==2){
			ul.animate({left:0},500);
			i=0;
		}
	},2000)
}

//手指滑动banner
function moveBanner(){
	//banner容器
	var ban = $("#banner-box");
	//单张图片宽高
	var img = ban.find("img").width();
	//绑定手指按下的事件
	ban.on("touchstart",function(e1){
		//清除定时器，增加用户体验
		clearInterval(timer);
		//获取到事件
		var ev1 = e1.originalEvent.changedTouches[0];
		//记录手指按下时的X坐标
		var l1 = ev1.pageX;
		//记录容器当前的横向偏移量
		var leftX=ban.offset().left;
		//绑定手指移动时的事件
		ban.on("touchmove",function(e2){
			//获取到事件
			var ev2 = e2.originalEvent.changedTouches[0];
			//获取手指和banner图的相对坐标
			var l2 = ev2.pageX-l1;
			//banner跟随手指移动
			ban.css({left:l2+leftX});
		})
		//绑定手指移开事件
		ban.on("touchend",function(){
			//获取到移开时的banner横向偏移量
			var leftX=ban.offset().left;
			//index为调用changeBanner方法中传入的参数
			var index;
			//判断运动边界
			if(leftX>-img/2){
				ban.stop(false,false).animate({left:0})
				index = 0;
			}else if (leftX<=-img/2&&leftX>-img*1.5) {
				ban.stop(false,false).animate({left:-img});
				index = 1;
			}else if (leftX<=-img*1.5) {
				ban.stop(false,false).animate({left:-img*2});
				index = 2;
			}
			//解除banner容器上的所有事件
			ban.unbind();
			//让banner继续自动切换
			changeBanner(index);
		})
	})
}

//控制字符长度
function control(){
	var ccon = $("#ccon");
	var content = ccon.find("li a span");
	for (var i =0;i<content.length;i++) {
		var txt = content.eq(i).html();
		//当txt的长度大于16时，charCodeAt返回-1，否则返回一个对应字符的ASC码
		if (txt.charCodeAt(16)) {
			var sub = txt.substring(0,17)
			content.eq(i).html(sub+"...");
		}
	}
}

//banner图
function setBannerSub(){
	var sub = $(".banner-sub");
	var banimg = $("#banner-box li img").height();
	sub.height(banimg);
	sub.eq(1).css({left:-sub.eq(1).width()})
}


//DOM元素加载完要执行的方法
$(function(){
	navShow();
	closeFix();
	changeBanner(0);
	control();
})
//所有资源都加载完调用
window.onload=function(){
	setBannerSub();
}






