$(document).ready(function(){
    // 해더 윗부분 서브 메뉴
    $(".util_myca").hover(function(){
        $(".my").stop().slideDown("fast");
    }, function(){
        $(".my").stop().slideUp("fast");
    })// .util_myca.hover

    // 해더 아랫부분 메뉴
    $(".gnb_p").hover(function(){
        $(".d_wrap").stop().animate({"height":"400px","padding":"20px"}, 500)
    }, function(){
        $(".d_wrap").stop().animate({"height":"0","padding":"0px"}, 500)
    })// .gnb li:nth-child(1).hover

    // 메인 비쥬얼 슬라이드 슬릭 적용 ▼
    $(".move").slick({
        autoplay: true,
        dots: true,
        arrows: false,
        autoplaySpeed: 3000
    });// .move.slick

    // 메인 비쥬얼 슬라이드 정지 플레이 제어 ▼
    $(".main_visual .stop").click(function(){
        if($(this).hasClass("on") == true){
            // 버튼클릭시 모양 바뀌게(1)
            $(this).removeClass("on");
            // 버튼에 맞게 슬라이드 동작 연결제어(2)
            $(".move").slick("slickPlay");
        }else{
            $(this).addClass("on");
            $(".move").slick("slickPause"); // slickPause 슬릭용 멈추기 기능
        }
    })// .main_visual .stop.click

    // 메인 1의 포토 슬릭 ▼

    $(".photo").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true
    });// .photo.slick

    // 메인의 배너 슬릭 ▼

    $(".banner").slick({
        arrows: false,
        dots: true
    })// .banner.slick

    // 베너 슬라이드 제어용 버튼 ▼
    $(".banner_wrap .b_play").click(function(){
        // 클릭시 모양 바뀌게 설정(1)
        if($(this).hasClass("on") == true){
            $(this).removeClass("on");
            // 클릭시 버튼에 따라 슬라이드 되게(2)
            $(".banner").slick("slickPause");
        }else{
            $(this).addClass("on");
            $(".banner").slick("slickPlay");
        }
    })// .banner_wrap .b_play.click

    $(".viewer").slick({
        arrows: false,
        dots: true
    })// .viewer.slick

    $(".viewer_wrap .b_play").click(function(){
        // 클릭시 모양 바뀌게 설정(1)
        if($(this).hasClass("on") == true){
            $(this).removeClass("on");
            // 클릭시 버튼에 따라 슬라이드 되게(2)
            $(".viewer").slick("slickPause");
        }else{
            $(this).addClass("on");
            $(".viewer").slick("slickPlay");
        }
    })// .viewer_wrap .b_play.click

    
})// 제이커리 끝