const tabList = document.querySelectorAll(".tab_menu .list li");
var tabTitleName = document.getElementById("title-date");
var title = document.getElementById("title");
var detail = document.getElementById("detail");

const tabDetail = [
  {
    id: 0,
    date: "10.19 WED",
    detail: [
      {
        time: "9:00",
        data: "E-sports 대회",
        detail: "(학생회관 라운지)",
      },
      {
        time: "10:00",
        data: "타로부스",
        detail: "(중앙잔디광장)",
      },
      {
        time: "18:00",
        data: "미스터 개척 보디빌딩 대회",
        detail: "(대운동장)",
      },
      {
        time: "20:20",
        data: "개회식",
        detail: "(대운동장)",
      },
      {
        time: "21:30",
        data: "붗꽃놀이 및 초대가수 공연A",
        detail: "(대운동장)",
      },
    ],
  },
  {
    id: 1,
    date: "10.20 THU",
    detail: [
      {
      time: "9:00",
      data: "E-sports 대회",
      detail: "(학생회관 라운지)",
      },
      {
        time: "11:00",
        data: "뿅뿅 하나 오락실",
        detail: "(중앙잔디광장)",
      },
      {
        time: "15:00",
        data: "토크콘서트",
        detail: "(가좌캠퍼스 국제어학원 오디토리움)",
      },
      {
        time: "15:00",
        data: "영산쇠머리대기 시연회",
        detail: "(대운동장)",
      },
      {
        time: "18:00",
        data: "내외빈 소개",
        detail: "(대운동장)",
      },
      {
        time: "18:30",
        data: "응답하라 개척스타",
        detail: "(대운동장)",
      },
      {
        time: "21:30",
        data: "초청가수 공연",
        detail: "(대운동장)",
      },
    ],
  },
  {
    id: 2,
    date: "10.21 FRI",
    detail: [
      {
        time: "13:00",
        data: "퍼스널컬러 부스",
        detail: "(중앙잔디광장)",
      },
      {
        time: "13:00",
        data: "하모요",
        detail: "(중앙잔디광장)",
      },
      {
        time: "13:00",
        data: "여성물품나눔행사",
        detail: "(중앙잔디광장)",
      },
      {
        time: "16:30",
        data: "동아리 공연",
        detail: "(중앙잔디광장)",
      },
      {
        time: "20:30",
        data: "불꽃놀이&폐회식",
        detail: "(대운동장)",
      },
      {
        time: "21:300",
        data: "초대가수 공연",
        detail: "(대운동장)",
      },
    ],
  },
];

function prevButton() {
  if (tabTitleName.innerHTML == "10.19 WED") {
    tabTitleName.innerHTML = "10.21 FRI";
  } else if (tabTitleName.innerHTML == "10.20 THU") {
    tabTitleName.innerHTML = "10.19 WED";
  } else if (tabTitleName.innerHTML == "10.21 FRI") {
    tabTitleName.innerHTML = "10.20 THU";
  }
  dataOpen(tabTitleName.innerHTML);
}

function nextButton() {
  if (tabTitleName.innerHTML == "10.19 WED") {
    tabTitleName.innerHTML = "10.20 THU";
  } else if (tabTitleName.innerHTML == "10.20 THU") {
    tabTitleName.innerHTML = "10.21 FRI";
  } else if (tabTitleName.innerHTML == "10.21 FRI") {
    tabTitleName.innerHTML = "10.19 WED";
  }
  dataOpen(tabTitleName.innerHTML);
}

dataOpen(tabTitleName.innerHTML);

function dataOpen(data) {
  let tagTr = "";
  let tdObj = "";
  title.innerHTML = "";
  tabDetail.forEach((element) => {
    if (data == element.date) {
      for (var i = 0; i < element.detail.length; i++) {
        tagTr = document.createElement("tr");
        tdObj = document.createElement("td");

        tagTr.appendChild(tdObj);
        tdObj.innerHTML = element.detail[i].time;
        var tdSecondObj = document.createElement("td");
        tagTr.appendChild(tdSecondObj);
        tdSecondObj.className = "right-td";

        tdSecondObj.innerHTML =
          element.detail[i].data + "<br />" + element.detail[i].detail;

        title.appendChild(tagTr);
      }
    }
  });
  tagTr = "";
  tdObj = "";
}

for (var i = 0; i < tabList.length; i++) {
  tabList[i].querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault();
    for (var j = 0; j < tabList.length; j++) {
      tabList[j].classList.remove("is_on");
    }
    this.parentNode.classList.add("is_on");
  });
}

// 슬라이드 박스
let slide_box = document.getElementsByClassName("slidebox")[0];

// 현재 이미지 번호 0~
var slide_images_idx = 0;

// 슬라이드 될 이미지들
var slide_images = document.getElementsByClassName("slideitem");
console.log(slide_images);

// 윈도우 넓이
let windowWidth = window.innerWidth;
// let windowWidth = screen.width;

// 이미지 넓이
let imageWidth = windowWidth * 0.9;

function slide_left_img() {
  // 화면 넓이 값 새로 설정
  windowWidth = window.innerWidth;
  imageWidth = windowWidth * 0.9;

  if (slide_images_idx < slide_images.length) {
    console.log(slide_images);
    slide_images[slide_images_idx].animate(
      [
        // from
        {
          transform: `translateX(-${imageWidth * slide_images_idx}px)`,
        },
        // tp
        {
          transform: `translateX(-${imageWidth * (slide_images_idx + 1)}px)`,
        },
      ],
      {
        duration: 500,
        easing: "ease-in",
        fill: "forwards",
      }
    );

    slide_images[slide_images_idx + 1].animate(
      [
        // from
        {
          transform: `translateX(-${imageWidth * slide_images_idx}px)`,
        },
        // tp
        {
          transform: `translateX(-${imageWidth * (slide_images_idx + 1)}px)`,
        },
      ],
      {
        duration: 500,
        easing: "ease-in",
        fill: "forwards",
      }
    );

    slide_images_idx += 1;
    changeButtonColor();
    changePrgramInfo();
    console.log(slide_images_idx);
  }
}

function slide_right_img() {
  // 화면 넓이 값 새로 설정
  windowWidth = window.innerWidth;
  imageWidth = windowWidth * 0.9;

  // 인덱스 넘치지 않게
  if (0 < slide_images_idx) {
    slide_images[slide_images_idx - 1].animate(
      [
        // from
        {
          transform: `translateX(-${imageWidth * slide_images_idx}px)`,
        },
        // tp
        {
          transform: `translateX(-${imageWidth * (slide_images_idx - 1)}px)`,
        },
      ],
      {
        duration: 500,
        easing: "ease-in",
        fill: "forwards",
      }
    );

    slide_images[slide_images_idx].animate(
      [
        // from
        {
          transform: `translateX(-${imageWidth * slide_images_idx}px)`,
        },
        // tp
        {
          transform: `translateX(-${imageWidth * (slide_images_idx - 1)}px)`,
        },
      ],
      {
        duration: 500,
        easing: "ease-in",
        fill: "forwards",
      }
    );
  }

  slide_images_idx -= 1;
  changeButtonColor();
  changePrgramInfo();
  console.log(slide_images_idx);
}

let slide_circles = document.getElementsByClassName("slide-circle");
slide_circles[slide_images_idx].style.backgroundColor = "white"; // 동그라미 초기화
console.log(slide_images.length);
function changeButtonColor() {
  for (i = 0; i <= slide_images.length - 1; i++) {
    if (i == slide_images_idx) {
      slide_circles[i].style.backgroundColor = "white";
    } else {
      console.log(`check idx ${i}`);
      slide_circles[i].style.backgroundColor = "gray";
    }
  }
}

// 프로그램 설명 애니메이션
let program_texts = document.getElementsByClassName("program_text");
changePrgramInfo(); // 윈도우 로드 최초 실행
function changePrgramInfo() {
  for (i = 0; i <= program_texts.length - 1; i++) {
    if (i == slide_images_idx) {
      program_texts[i].style.display = "block";
    } else {
      console.log(`check idx ${i}`);
      program_texts[i].style.display = "none";
    }
  }
}

// ############## Drag Event ########## //

let startPoint = 0;
let endPoint = 0;

// PC 클릭 이벤트 (드래그)
slide_box.addEventListener("mousedown", (e) => {
  console.log("mousedown", e.pageX);
  startPoint = e.pageX; // 마우스 드래그 시작 위치 저장
});

slide_box.addEventListener("mouseup", (e) => {
  console.log("mouseup", e.pageX);
  endPoint = e.pageX; // 마우스 드래그 끝 위치 저장
  if (startPoint < endPoint) {
    // 마우스가 오른쪽으로 드래그 된 경우
    console.log("prev move");
    slide_right_img();
  } else if (startPoint > endPoint) {
    // 마우스가 왼쪽으로 드래그 된 경우
    console.log("next move");
    slide_left_img();
  }
});

// 모바일 터치 이벤트 (스와이프)
slide_box.addEventListener("touchstart", (e) => {
  console.log("touchstart", e.touches[0].pageX);
  startPoint = e.touches[0].pageX; // 터치가 시작되는 위치 저장
});
slide_box.addEventListener("touchend", (e) => {
  console.log("touchend", e.changedTouches[0].pageX);
  endPoint = e.changedTouches[0].pageX; // 터치가 끝나는 위치 저장
  if (startPoint < endPoint) {
    // 오른쪽으로 스와이프 된 경우
    console.log("prev move");
    slide_right_img();
  } else if (startPoint > endPoint) {
    // 왼쪽으로 스와이프 된 경우
    console.log("next move");
    slide_left_img();
  }
});

/// 케이크워크 코드
// const right_arrow = document.querySelector(".next");
// const left_arrow = document.querySelector(".previous");
// let cur_img_num;

// /*const img_src_str = "./cake_img/cake";*/

// right_arrow.addEventListener("click", () => {
//   cur_img_num++;

//   if (cur_img_num <= 7) {
//     modal_img.setAttribute("src", `${img_src_str}${cur_img_num}.png`);
//   } else {
//     cur_img_num--;
//   }
// });

// left_arrow.addEventListener("click", () => {
//   cur_img_num--;

//   if (cur_img_num >= 0) {
//     modal_img.setAttribute("src", `${img_src_str}${cur_img_num}.png`);
//   } else {
//     cur_img_num++;
//   }
// });
