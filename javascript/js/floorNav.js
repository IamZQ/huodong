/*楼层定位*/
	function cliEntWidth(){
		//获取浏览器可见区域宽度
		var cWidth = document.body.clientWidth;
		var boxId = document.getElementById("box");
		var cRightValue = (cWidth-1330)/2 + "px"; 
		boxId.style.right = cRightValue;
		console.info(cRightValue);
	}
	window.onload=function(){  
		cliEntWidth();
	window.onresize = function(){  
		cliEntWidth();
		}
	} 
    $(function () {
        // @ 给窗口加滚动条事件
        $(window).scroll(function () {
            // 获得窗口滚动上去的距离
            var ling = $(document).scrollTop();
            // 在标题栏显示滚动的距离
			if (ling > 400) {
				$('#box').show();
			}else if(ling < 400){
				 $('#box').hide();
			}
            if (400 < ling && ling < 900) {
                // 让第一层的数字隐藏，文字显示，让其他兄弟元素的li数字显示，文字隐藏
                $('#box ul li').eq(0).find('.num').hide().siblings('.word').css('display', 'block');
                $('#box ul li').eq(0).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
            } else if (ling < 1358) {
                $('#box ul li').eq(1).find('.num').hide().siblings('.word').css('display', 'block');
                $('#box ul li').eq(1).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
            } else if (ling < 1816) {
                $('#box ul li').eq(2).find('.num').hide().siblings('.word').css('display', 'block');
                $('#box ul li').eq(2).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
            } else if (ling < 2452) {
                $('#box ul li').eq(3).find('.num').hide().siblings('.word').css('display', 'block');
                $('#box ul li').eq(3).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
            } else if (ling < 2996) {
                $('#box ul li').eq(4).find('.num').hide().siblings('.word').css('display', 'block');
                $('#box ul li').eq(4).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
            } else if (ling < 3988) {
                $('#box ul li').eq(5).find('.num').hide().siblings('.word').css('display', 'block');
                $('#box ul li').eq(5).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
            } else if (ling < 4534) {
                $('#box ul li').eq(6).find('.num').hide().siblings('.word').css('display', 'block');
                $('#box ul li').eq(6).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
            } else if (ling < 4634) {
                $('#box ul li').eq(7).find('.num').hide().siblings('.word').css('display', 'block');
                $('#box ul li').eq(7).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
            } else if (ling < 5034) {
                $('#box ul li').eq(8).find('.num').hide().siblings('.word').css('display', 'block');
                $('#box ul li').eq(8).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
            } 
            if (ling > 8800 || ling < 400) {
                // $('#box').css('display','none');  // @ 这一句和下一句效果一样。
               $('#box').hide();
            }

        })
　　　　　　//楼层点击事件 定位到楼层
        $(".word").click(function () {
            var id = $(this).attr("data-id");
            var h = $("#item-" + id).offset().top;
            $('body,html').animate({ scrollTop: h }, 200);
        });
    })

    $(function () {
        $('#box ul li').hover(function () {
            $(this).find('.num').hide().siblings('.word').css({ 'display': 'block', 'background': '#CB1C39', 'color': 'white' });
        }, function () {

            $(this).find('.num').css({ 'display': 'block', 'background': 'white', 'color': '#666' }).siblings('.word').hide().css({ 'display': 'none', 'background': '', 'color': '' });
        })
    })