
const newYear = "1 Jan 2021"

 const  days__time  = document.querySelector('.days__time') 
 const  hours__time = document.querySelector('.hours__time') 
 const  minutes__time = document.querySelector('.minutes__time') 
 const  seconds__time = document.querySelector('.seconds__time') 
function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

        const totalseconds =  (newYearDate - currentDate) / 1000;
        const days = Math.floor(totalseconds / 3600 / 24);
        const hours =  Math.floor(totalseconds / 3600 ) % 24;
        const minites =  Math.floor(totalseconds / 60 ) % 60 
        const seconds =  Math.floor( totalseconds ) % 60 
        
days__time.innerHTML = days;
hours__time.innerHTML = format(hours);
minutes__time.innerHTML = format(minites);
seconds__time.innerHTML = format(seconds);
   
}

const format = (time) => {
    return time < 10 ? `0${time}` : time
}

countdown();
setInterval( countdown, 1000);
 



