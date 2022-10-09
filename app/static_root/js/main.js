function myPlugin({ swiper, extendParams, on }) {
  extendParams({
    debugger: false,
  });

  on("init", () => {
    if (!swiper.params.debugger) return;
  });
  on("click", (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log(swiper);
  });
  on("tap", (swiper, e) => {
    if (!swiper.params.debugger) return;
  });
  on("doubleTap", (swiper, e) => {
    if (!swiper.params.debugger) return;
  });
  on("sliderMove", (swiper, e) => {
    if (!swiper.params.debugger) return;
  });
  on("slideChange", (e) => {
    if (!swiper.params.debugger) return;
  });
  on("slideChangeTransitionStart", () => {
    if (!swiper.params.debugger) return;
  });
  on("slideChangeTransitionEnd", () => {
    if (!swiper.params.debugger) return;
  });
  on("transitionStart", () => {
    if (!swiper.params.debugger) return;
  });
  on("transitionEnd", () => {
    if (!swiper.params.debugger) return;
  });
  on("fromEdge", () => {
    if (!swiper.params.debugger) return;
  });
  on("reachBeginning", () => {
    if (!swiper.params.debugger) return;
  });
  on("reachEnd", () => {
    if (!swiper.params.debugger) return;
  });
}

// Init Swiper
var day = ["WED", "THU", "FRI"];

var swiper = new Swiper(".mySwiper", {
  modules: [myPlugin],

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + day[index] + "</span>";
    },
  },
});

var pagingSwiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination2",
    type: "bullets",
    clickable: true,
  },
});

swiper.controller.control = pagingSwiper;

var swiper = new Swiper(".mySwiper2", {
  autoplay: {
    // 자동 슬라이드 설정 , 비 활성화 시 false
    delay: 3000, // 시간 설정
    disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Enable debugger
  debugger: true,
});

var swiper = new Swiper(".mySwiper3", {
  autoplay: {
    // 자동 슬라이드 설정 , 비 활성화 시 false
    delay: 3000, // 시간 설정
    disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Enable debugger
  debugger: true,
});
