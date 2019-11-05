const daysE = document.getElementById("days");
const hoursE = document.getElementById("hours");
const minutesE = document.getElementById("minutes");
const secondsE = document.getElementById("seconds");

function countDown(){
    const newYearsDate = new Date('1 Jan 2022')
    const currentDate = new Date();

    const difference = newYearsDate - currentDate;
    var seconds = Math.floor(difference/1000);
    var minutes = Math.floor(seconds/60);
    var hours = Math.floor(minutes/60);
    var days = Math.floor(hours/24);

    hours = hours - (days*24);
    minutes = minutes-(days*24*60)-(hours*60);
    seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);
    
    daysE.innerHTML = days;
    hoursE.innerHTML = formatTime(hours);
    minutesE.innerHTML = formatTime(minutes);
    secondsE.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

countDown();

setInterval(countDown,1000);