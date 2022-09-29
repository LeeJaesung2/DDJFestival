const remainTime = document.querySelector("#remain-time");
const clock = document.querySelector("#clock");

//디데이
function diffDay() {
    console.log("실행");
    console.log(remainTime);
    const festiTime = new Date('2022-10-19');
    const todayTime = new Date();

    const diff = festiTime - todayTime;

    const diffDay = Math.floor(diff / (1000*60*60*24));
//const diffHour = Math.floor((diff / (1000*60*60)) % 24);
//const diffMin = Math.floor((diff / (1000*60)) % 60);
//const diffSec = Math.floor(diff/ 1000 % 600);

    remainTime.innerText = `D-${diffDay}`;
};

diffDay();
setInterval(diffDay, 1000);

//현재 시간
function getClock() {
    console.log("실행완료")
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours} : ${min} : ${sec}`;
};

getClock();
setInterval(getClock, 1000);
