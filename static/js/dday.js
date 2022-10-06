const remainTime = document.querySelector("#remain-time");
const clock = document.querySelector("#clock");

//디데이
function diffDay() {
    console.log("실행");
    console.log(remainTime);
    const festiDay = new Date('2022-10-19');
    const todayDay = new Date();

    const diff = festiDay - todayDay;

    const diffDay = Math.floor(diff / (1000*60*60*24));
//const diffHour = Math.floor((diff / (1000*60*60)) % 24);
//const diffMin = Math.floor((diff / (1000*60)) % 60);
//const diffSec = Math.floor(diff/ 1000 % 60);

    remainTime.innerText = `D-${diffDay}`;
};

diffDay();
setInterval(diffDay, 1000);

//현재 시간
function getClock() {
    console.log("실행완료")
    const festiTime = new Date('2022-10-19');
    const todayTime = new Date();

    const count = festiTime - todayTime;
    console.log(count);
    console.log(todayTime);
    console.log(festiTime);

    let countHour = Math.floor((count / (1000*60*60)) % 24);
    let countMin = Math.floor((count / (1000*60)) % 60);
    let countSec = Math.floor(count / 1000 % 60);

    countHour = countHour-9 < 10 ? `0${countHour-9}`: countHour-9;
    countMin = countMin < 10 ? `0${countMin}`: countMin;
    countSec = countSec < 10 ? `0${countSec}`: countSec;

    clock.innerText = `${countHour} : ${countMin} : ${countSec}`;
}

getClock();
setInterval(getClock, 1000);
