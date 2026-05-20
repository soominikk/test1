$(function(){

// 메뉴
    $('.main-menu').on('mouseover', function(){
        $('.sub-menu'). stop().slideDown();
    })


    $('.main-menu').on('mouseleave', function(){
        $('.sub-menu').stop().slideUp();
    })


// 이미지 슬라이드
    // let i = 0;

    // setInterval(function(){
    //     if(i < 2) i++;
    //     else i = 0;

    //     $('.image-slide>ul').animate({marginLeft : -1200 * i});
    // }, 2000)

    setInterval(function(){
        $('.image-slide>ul').animate({ marginLeft: -1200 }, 1000, function(){
            $('.image-slide>ul').append($('.image-slide>ul>li').first());
            $('.image-slide>ul').css('marginLeft', 0);
        })
    }, 2000)


    // 탭
    $('.notice-gallery>ul>li').on('click', function(){
        $('.notice-gallery>ul>li').removeClass('tab-active')
        $(this).addClass('tab-active');

        let i = $(this).index();
        $('.tab-content').removeClass('tab-content-active');
        $('.tab-content').eq(i).addClass('tab-content-active');
    })
    

    // 팝업창
    $('.pop').on('click', function(){
        $('.popup-container').show();
    })

    $('.popup-container button').on('click', function(){
        $('.popup-container').hide();
    })

})


