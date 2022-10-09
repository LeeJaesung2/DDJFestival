const locationMap = document.querySelector('.map-wrap');
const popup = document.querySelector('.booth-popup');
const popupName = document.querySelector('.booth-name');
const popupInfo = document.querySelector('.booth-info')
const popupListWrap = document.querySelector('.event-list');
const xBtn = document.querySelector('.x-btn');

locationMap.addEventListener('click', (e) => {
    console.log(e.target.className)
    popupListWrap.innerHTML = "";
    if(e.target.className === 'fa-solid fa-location-dot') {
        popupName.innerText = e.target.dataset.name;
        popupInfo.innerText = e.target.dataset.info;
        const eventList = e.target.dataset.event.split(' ');
        const locationWrap = e.target.closest('.location-wrap');
        const top = getComputedStyle(locationWrap).top.replace('px', '') / 16;
        const left = getComputedStyle(locationWrap).left.replace('px', '') / 16;
        console.log(top, left);
        popup.style.top = `${top}rem`;
        popup.style.left = `${left}rem`;
        
        for(let i=0; i < eventList.length; i++) {
            let li = document.createElement('li');
            li.innerText = eventList[i];
            popupListWrap.appendChild(li);
        }
        popup.style.display = 'block';

    }
})

xBtn.addEventListener('click', () => {
    popup.style.display = 'none';
})