let hourSpan = document.querySelector('.hourSpan');
let secondSpan = document.querySelector('.secondSpan');
let minuteSpan = document.querySelector('.minuteSpan');
let secondsCircle = document.querySelector('.secondsCircle');
let minutesCircle = document.querySelector('.minutesCircle');
let hoursCircle = document.querySelector('.hoursCircle');
let secondsDot = document.querySelector('.secondsDot');
let minutesDot = document.querySelector('.minutesDot');
let hoursDot = document.querySelector('.hoursDot');
let ampm = document.querySelector('.ampmspan');
let daySpan = document.querySelector('.day');
let dateSpan = document.querySelector('.date');
let daysArr = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let monthsArr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
setInterval(() => {
    let seconds = new Date().getSeconds();
    let minutes = new Date().getMinutes();
    let hours = new Date().getHours();
    let date = new Date().getDate();
    let day = new Date().getDay();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    daySpan.innerHTML = daysArr[day];
    dateSpan.innerHTML = `${date} ${monthsArr[month]}, ${year}`;
    if(hours>12){
        hours = hours-12;
        ampm.innerHTML = 'PM';

    }
    else{
        ampm.innerHTML = 'AM';
    }
    if(hours<10){
        hourSpan.innerHTML = `0${hours}:`
    }
    else{
        hourSpan.innerHTML = `${hours}:`
    }
    if(seconds<10){
        secondSpan.innerHTML = `0${seconds}`
    }
    else{
        secondSpan.innerHTML = `${seconds}`
    }
    if(minutes<10){
        minuteSpan.innerHTML = `0${minutes}:`
    }
    else{
        minuteSpan.innerHTML = `${minutes}:`
    }

    secondsCircle.style.strokeDashoffset = 950 - (950 * seconds/60); 
    minutesCircle.style.strokeDashoffset = 792 - (792 * minutes/60); 
    hoursCircle.style.strokeDashoffset = 634 - (634 * hours/12);
    hoursDot.style.transform = `rotateZ(${hours*30}deg)`; 
    secondsDot.style.transform = `rotateZ(${seconds*6}deg)`; 
    minutesDot.style.transform = `rotateZ(${minutes*6}deg)`; 

},1000)




