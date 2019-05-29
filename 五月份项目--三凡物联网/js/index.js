$(function(){
    // 返回顶部
    $('#TOP').hide();
        $(window).scroll(function(){
            if($(this).scrollTop() > 1000){
                $('#TOP').fadeIn();
            }else{
                $('#TOP').fadeOut();
            }
        });
        $('#TOP').click(function(){
            $('html,body').animate({scrollTop: 0}, 500);
                return false;
    });

    // 导航条
    $("#justify").click(function(){
        $(".N-ul1").css("right","0");
        $("body").css("overflow","hidden");
    });
    $(".N-ul1 p").click(function(){
        $(".N-ul1").css("right","-300px");
        $("body").css("overflow","");
    });
    $(".li1").click(function(){
        $(".li1 .ul").stop(true).slideToggle()
    });
    $(".li2").click(function(){
        $(".li2 .ul").stop(true).slideToggle()
    });
    $(".li3").click(function(){
        $(".li3 .ul").stop(true).slideToggle()
    });
    $(".li4").click(function(){
        $(".li4 .ul").stop(true).slideToggle()
    });
    $(".li5").click(function(){
        $(".li5 .ul").stop(true).slideToggle()
    });

    

    $(window).scroll(function(){
    	if($(this).scrollTop()>400){
    		$("#about div").addClass("two");
        }else{
        	$("#about div").html();
        }
        if($(this).scrollTop()>700){
    		$("#intro .I-conter ul li").addClass("three");
        }else{
        	$("#intro .I-conter ul li").html();
        }
        if($(this).scrollTop()>900){
    		$("#intro .I-conter ul li").addClass("four");
        }else{
        	$("#intro .I-conter ul li").html();
        }
        if($(this).scrollTop()>2800){
    		$("#product .p-conter ul li").addClass("five");
        }else{
        	$("#product .p-conter ul li").html();
        }
        if($(this).scrollTop()>3000){
    		$("#product .p-conter ul li").addClass("six");
        }else{
        	$("#product .p-conter ul li").html();
        }
        if($(this).scrollTop()>3200){
    		$("#product .p-conter ul li").addClass("seven");
        }else{
        	$("#product .p-conter ul li").html();
        }
        if($(this).scrollTop()>3900){
    		$("#case .C-conter h2").addClass("eight");
        }else{
        	$("#case .C-conter h2").html();
        }
    })
})
window.onload=function(){
    var v1=document.getElementById('photo');
    var v2=document.getElementById('div2');
    var v3=document.getElementById('div3');
    var left=document.getElementById('Left');
    var right=document.getElementById('Right');
    v3.innerHTML= v2.innerHTML;//将v2容器里面的图片插入到v3容器里面  使其空白区域被遮住。
    function fun(){
        if(v1.scrollLeft<=0){
            v1.scrollLeft=1000;
        }else{
            v1.scrollLeft--;
        }  
    }
    var fun1=setInterval(fun,20);
    v1.onmouseover = function() {//鼠标经过时  清除定时器  停止图片的滚动
        clearInterval(fun1)
    };
    v1.onmouseout = function() {//鼠标离开后  继续滚动图片
        fun1 = setInterval(fun, 20)
    };
    right.onclick = function(){
        clearInterval(fun1);
        setInterval(function(){
            if(v1.scrollLeft<=0){
                v1.scrollLeft=1000;
            }else{
                v1.scrollLeft--;
            }
        })  
    }
    left.onclick = function(){
        clearInterval(fun1);
        setInterval(function(){
            if(v1.scrollLeft<=0){
                v1.scrollLeft=1000;
            }else{
                v1.scrollLeft++;
            }
        })    
    }
}