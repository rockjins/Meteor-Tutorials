//这个jQuery插件功能很简单，就是给调用对象添加一个高亮背景色、文字颜色和加粗
//请大家注意看注释，学习插件的基本编写规则
//这里的$为形参，实参为下面的jQuery
(function($) {
//在jQuery下添加一个叫hulight的方法
//options为传入的参数可以不传，最多用json数据传2个值，分别是background和color
	$.fn.hilight = function (options) {
//使用jQuery的插件扩展方法，把传入的options赋值给ops变量，如果没有传值，则使用默认值
		var ops = $.extend({},$.fn.hilight.defaults,options);
//把调用hilight()的jQuery对象返回，并在each方法里写要实现的功能
		return this.each(function(){
//这里的赋值是为了减少$(this)的多次查询，优化性能
			$this = $(this);
//实现插件的方法
			$this.css({

				backgroundColor:ops.background,

				color:ops.color

			});
//给内容文字加粗
			var markup =$this.html();

			markup = $.fn.hilight.format(markup);

			$this.html(markup);
		})
	}
//给传入的string字符串添加一个加粗标签
	$.fn.hilight.format=function(txt){

		return "<strong>"+txt+"</strong>";
	};
//hilight的初始参数
	$.fn.hilight.defaults={

		color:"#FAFAFA",

		background:"#FFB6C1"

	};
//传入jQuery做为参数
})(jQuery)
