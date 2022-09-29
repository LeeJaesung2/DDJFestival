
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
        time: "낮 행사",
        data: "프로그램 이름",
        detail: "프로그램 장소",
      },
      {
        time: "17:00~18:00",
        data: "프로그램 이름",
        detail: "(프로그램 장소)",
      },
      {
        time: "17:00~18:00",
        data: "프로그램 이름",
        detail: "(프로그램 장소)",
      },
      {
        time: "17:00~18:00",
        data: "프로그램 이름",
        detail: "(프로그램 장소)",
      },
      {
        time: "17:00~18:00",
        data: "프로그램 이름",
        detail: "(프로그램 장소)",
      },
      {
        time: "17:00~18:00",
        data: "프로그램 이름",
        detail: "(프로그램 장소)",
      },
    ],
  },
  {
    id: 1,
    date: "10.20 THUR",
    detail: [
      {
        time: "낮 행사2",
        data: "프로그램 이름",
        detail: "프로그램 장소",
      },
      {
        time: "17:00~18:00",
        data: "프로그램 이름2",
        detail: "(프로그램 장소)",
      },
      {
        time: "17:00~18:00",
        data: "프로그램 이름2",
        detail: "(프로그램 장소)",
      },
      {
        time: "17:00~18:00",
        data: "프로그램 이름2",
        detail: "(프로그램 장소)",
      },
      {
        time: "17:00~18:00",
        data: "프로그램 이름2",
        detail: "(프로그램 장소)",
      },
      {
        time: "17:00~18:00",
        data: "프로그램 이름2",
        detail: "(프로그램 장소)",
      },
    ],
  },
  {
    id: 2,
    date: "10.21 FRI",
    detail: [
      {
        time: "낮 행사3",
        data: "프로그램 이름3",
        detail: "프로그램 장소",
      },
      {
        time: "17:00~18:00",
        data: "프로그램 이름3",
        detail: "(프로그램 장소)",
      },
      {
        time: "17:00~18:00",
        data: "프로그램 이름3",
        detail: "(프로그램 장소)",
      },
      {
        time: "17:00~18:00",
        data: "프로그램 이름3",
        detail: "(프로그램 장소)",
      },
      {
        time: "17:00~18:00",
        data: "프로그램 이름3",
        detail: "(프로그램 장소)",
      },
      {
        time: "17:00~18:00",
        data: "프로그램 이름3",
        detail: "(프로그램 장소)",
      },
    ],
  },
];

function prevButton() {
  if (tabTitleName.innerHTML == "10.19 WED") {
    tabTitleName.innerHTML = "10.21 FRI";
  } else if (tabTitleName.innerHTML == "10.20 THUR") {
    tabTitleName.innerHTML = "10.19 WED";
  } else if (tabTitleName.innerHTML == "10.21 FRI") {
    tabTitleName.innerHTML = "10.20 THUR";
  }
  dataOpen(tabTitleName.innerHTML);
}

function nextButton() {
  if (tabTitleName.innerHTML == "10.19 WED") {
    tabTitleName.innerHTML = "10.20 THUR";
  } else if (tabTitleName.innerHTML == "10.20 THUR") {
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