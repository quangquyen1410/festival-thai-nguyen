// Trang home
$(window).scroll(function () {
    var heightHeader = $(".header").height();

    if ($(window).scrollTop() >= 1) {
        $(".header").addClass("js_nav_fixed");
    } else $(".header").removeClass("js_nav_fixed");
});
$(document).ready(function () {
    $(".btn_search_click").click(function (event) {
        event.preventDefault();
        let hash = this.hash;
        $(".btn_search_click").removeClass("active");
        $(this).addClass("active");
        $(".form_header_search").removeClass("active fadeIn animated");
        $(hash).addClass("active fadeIn animated");
    });
    // Trang place details
    $(".content_details .nav_link").click(function (event) {
        event.preventDefault();
        let hash = this.hash;
        $(".content_details .nav_link").removeClass("active");
        $(this).addClass("active");
        $(".content_text").removeClass("active bounceInUp animated");
        $(hash).addClass("active bounceInUp animated");
    })
});

new WOW().init();
var mySwiper = new Swiper('.slide_header .swiper-container', {
    speed: 800,
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.slide_header_pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.slide_header_btn.swiper-button-next',
        prevEl: '.slide_header_btn.swiper-button-prev',
    },
});
var mySwiper2 = new Swiper('.events_hightlights .swiper-container', {
    speed: 800,
    slidesPerView: 3,
    loop: true,
    spaceBetween: 0,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
    },

    navigation: {
        nextEl: ' .events_hightlights .swiper-button-next',
        prevEl: '.events_hightlights .swiper-button-prev',
    },
});

// Trang listpage


function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
var maxValueDefault = 5000000;
var minValueDefault = 0;
var formatMin = formatNumber(minValueDefault);
var formatMax = formatNumber(maxValueDefault);


var sliderPrice = new rSlider({
    target: '#slider_price',
    values: { min: minValueDefault, max: maxValueDefault },
    set: [200000, 3500000],
    step: 100000,
    tooltip: false,
    range: true, // range slider
    onChange: function (vals) {
        var strVals = vals.toString();
        // console.log(strVals);
        var priceArray = strVals.split(",");
        // console.log(priceArray);
        let priceMin = formatNumber(priceArray[0]);
        // console.log(priceMin);
        let priceMax = formatNumber(priceArray[1]);
        // console.log(priceMax);

        $("#price_min").val(priceMin);
        $("#price_max").val(priceMax);

    },
});


$(".input_price .input_common").keyup(function () {
    let valMin = ($("#price_min").val()).toString();
    let valMax = ($("#price_max").val()).toString();
    // console.log(valMax);
    // console.log(valMin);    
    valMax = valMax.match(/\d/g);
    valMax = parseInt(valMax.join(""));
    valMin = valMin.match(/\d/g);
    valMin = parseInt(valMin.join(""));
    // console.log(typeof valMin);
    // console.log(valMax);


    let valMaxFormat = formatNumber(valMax);
    let valMinFormat = formatNumber(valMin);
    $("#price_min").val(valMinFormat);
    $("#price_max").val(valMaxFormat);

    if (valMax > maxValueDefault) {
        alert("Giá trị Max không được lớn hơn " + formatMax);

        $("#price_max").val(formatMax);
    }
    if (valMin < minValueDefault) {
        alert("Giá trị Max không được bé hơn " + formatMin);
        $("#price_min").val(formatMin);
    }
    if (valMin > valMax) {
        alert("Giá trị Min không được lớn hơn giá trị Max");
    }
});

// click custom search
$(".tt_custom_search").click(function (e) {
    e.preventDefault();
    let hash = this.hash;
    $(hash).toggle();
    $(this).toggleClass("js_icon_up");
    $(hash).removeClass("bounceIn animated");
    $(hash).addClass("bounceIn animated");
});
$(".js_btn_service").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
});
$(document).ready(function () {
    $('#library > .library_img').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: true,
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
        }
    });
});
// menu mobile
$(document).ready(function () {
    $('.menu-icon').click(function () { 
        $(".header").toggleClass("active");        
    });
});
$(window).on('load',function(){
    $('#myModal').modal('show');
    $(".modal-dialog").addClass("animated flipInX");    
});













