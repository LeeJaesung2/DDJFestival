
function myPlugin({ swiper, extendParams, on }) {
    extendParams({
        debugger: false,
    });

    on('init', () => {
        if (!swiper.params.debugger) return;
    });
    on('click', (swiper, e) => {
        if (!swiper.params.debugger) return;
        console.log(swiper);
    });
    on('tap', (swiper, e) => {
        if (!swiper.params.debugger) return;
    });
    on('doubleTap', (swiper, e) => {
        if (!swiper.params.debugger) return;
    });
    on('sliderMove', (swiper, e) => {
        if (!swiper.params.debugger) return;
        
    });
    on('slideChange', (e) => {
        if (!swiper.params.debugger) return;
    });
    on('slideChangeTransitionStart', () => {
        if (!swiper.params.debugger) return;
    });
    on('slideChangeTransitionEnd', () => {
        if (!swiper.params.debugger) return;
    });
    on('transitionStart', () => {
        if (!swiper.params.debugger) return;
    });
    on('transitionEnd', () => {
        if (!swiper.params.debugger) return;
    });
    on('fromEdge', () => {
        if (!swiper.params.debugger) return;
    });
    on('reachBeginning', () => {
        if (!swiper.params.debugger) return;
    });
    on('reachEnd', () => {
        if (!swiper.params.debugger) return;
    });
}

// Init Swiper
var swiper = new Swiper('.mySwiper', {
    // Install Plugin To Swiper
    modules: [myPlugin],
    // autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
    //     delay : 3000,   // 시간 설정
    //     disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    // },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Enable debugger
    debugger: true,
});

const datebtns = document.querySelectorAll('.day');
const lineup_wrapper = document.querySelector('.swiper-wrapper');
const change_value = lineup_wrapper.clientWidth;
let activenum = 1;

datebtns.forEach(ele => {
    ele.addEventListener('click', (e)=>{
        activenum = Number(ele.dataset.activenum);
        lineup_wrapper.style.transform = `translateX(${-(activenum-1)*change_value}px)`;        
    });
});

var swiper = new Swiper('.mySwiper2', {
    autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
        delay : 3000,   // 시간 설정
        disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Enable debugger
    debugger: true,
});

var swiper = new Swiper('.mySwiper3', {
    autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
        delay : 3000,   // 시간 설정
        disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Enable debugger
    debugger: true,
});

//clicked js
$('.day').each(function(index){
    $(this).attr('day-index', index);
}).click(function(){
    var index = $(this).attr('day-index');
    $('.day[day-index=0]').removeClass('active');
    $('.day[day-index='+ index + ']').addClass('active');
    $('.day[day-index!=' + index + ']').removeClass('active');
});