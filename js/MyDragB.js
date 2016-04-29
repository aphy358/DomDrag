(function($) {

	$.fn.mydragb = function() {
		var move = false; 		//标记控件是否处于被拖动状态
		var dragOffsetX = 0; 	//控件左边界和鼠标X轴的差
		var dragOffsetY = 0; 	//控件上边界和鼠标Y轴的差
		var _this = this; 	//用于存储当前对象

		this.mousedown(function(e) {
			move = true;

			//获取鼠标和该控件的位置偏移量，并存入全局变量供后续调用
			dragOffsetX = e.clientX - e.currentTarget.offsetLeft;
			dragOffsetY = e.clientY - e.currentTarget.offsetTop;
		});

		$(document).mousemove(function(e) {
			if (move) {
				//不断获取鼠标新的坐标，并计算出控件的新坐标
				var newX = e.clientX - dragOffsetX;
				var newY = e.clientY - dragOffsetY;

				//边界控制，document.documentElement.clientWidth：可见区域宽度  document.documentElement.clientHeight：可见区域高度
				newX = newX < 0 ? 0 : newX;
				newY = newY < 0 ? 0 : newY;
				newX = newX > (document.documentElement.clientWidth - _this.outerWidth()) ? (document.documentElement.clientWidth - _this.outerWidth()) : newX;
				newY = newY > (document.documentElement.clientHeight - _this.outerHeight()) ? (document.documentElement.clientHeight - _this.outerHeight()) : newY;

				//把新的坐标重新赋值给控件
				_this.css({
					left: newX + "px",
					top: newY + "px",
					position: 'absolute'
				});
			}
		});

		$(document).mouseup(function() {
			if (move) {
				move = false;
			}
		});
	};
})(jQuery);