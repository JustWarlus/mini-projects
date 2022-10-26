const hh = document.getElementById('hh')
const mm = document.getElementById('mm')
const ss = document.getElementById('ss')

const secDot = document.querySelector('.sec_dot')
const minDot = document.querySelector('.min_dot')
const hrDot = document.querySelector('.hr_dot')

const btnStart = document.getElementById('Start')
const btnPause = document.getElementById('Pause')
const btnClear = document.getElementById('Clear')

let timerID;
let timeSecond = 0;
let timeMinute = 0;
let timeHours = 0;

const renderWatch = (value, typeValue) =>{
    typeValue.removeChild(typeValue.firstChild)
    value = (value < 10) ? '0' + value : value
    const time = document.createTextNode(value)
    typeValue.append(time)
}

const transformMinuteAndHours = (timeS) =>{
    if(timeS === 59){
        timeSecond = 0
        timeMinute++
    }
    if(timeMinute === 59){
        timeMinute = 0
        timeHours++
    }
}

const clearValueTimer = () =>{
    timeSecond = 0;
    timeMinute = 0;
    timeHours = 0;

    renderWatch(timeHours, hours)
    renderWatch(timeMinute, minute)
    renderWatch(timeSecond, seconds)

    hh.style.strokeDashoffset = 510 - (510 * timeHours) / 12
    mm.style.strokeDashoffset = 630 - (630 * timeMinute) / 60
    ss.style.strokeDashoffset = 760 - (760 * timeSecond) / 60 

    secDot.style.transform = `rotateZ(${timeSecond * 6}deg)`
    minDot.style.transform = `rotateZ(${timeMinute * 6}deg)`
    hrDot.style.transform = `rotateZ(${timeHours * 30}deg)`
}

const startTimer = () =>{
    timerID = setInterval(()=>{
        ++timeSecond

        renderWatch(timeHours, hours)
        renderWatch(timeMinute, minute)
        renderWatch(timeSecond, seconds)

        transformMinuteAndHours(timeSecond)
    
        hh.style.strokeDashoffset = 510 - (510 * timeHours) / 12
        mm.style.strokeDashoffset = 630 - (630 * timeMinute) / 60
        ss.style.strokeDashoffset = 760 - (760 * timeSecond) / 60 
    
        secDot.style.transform = `rotateZ(${timeSecond * 6}deg)`
        minDot.style.transform = `rotateZ(${timeMinute * 6}deg)`
        hrDot.style.transform = `rotateZ(${timeHours * 30}deg)`
    }, 100)
}

btnStart.addEventListener('click', () =>{
    startTimer()
})

btnClear.addEventListener('click', () =>{
    clearInterval(timerID)
    clearValueTimer()
})

btnPause.addEventListener('click', () =>{
    clearInterval(timerID)
})
