const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#timeList')
let time = 0
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
let score = 0
const colors = ['#c9e9da', '#fed7c8', '#fc95b3', '#ffd64d', '#9bc01c', '#ae562a', '#97b8d8', '#409ae1', '#40c5af']

startBtn.addEventListener('click', (event) =>{
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', (event) =>{
    if(event.target.classList.contains = 'time-btn'){
       time = +(event.target.getAttribute('data-time'))
       screens[1].classList.add('up')
       startGame()
    }
})

board.addEventListener('click',(event) =>{
   if(event.target.classList.contains('circle')){
    score++
    event.target.remove()
    createRandomCircle()
   }
})

function startGame(){
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreaseTime(){
    if(time === 0){
        finishGame()
    } else {
        let current = --time
        if(current < 10){
            current = '0' + current
        }
        setTime(current)
    }
}

function setTime(value){
    timeEl.innerHTML = `00:${value}`
}

function finishGame(){
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Счет: <span class="primary"> ${score} </span></h1>`
}

function createRandomCircle(){
    const circle = document.createElement('div')
    circle.classList.add('circle')
    const size = getRandomNumber(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.background = getColor(colors)
    board.append(circle)
}

function getRandomNumber(min, max){
    return Math.round(Math.random() * (max - min) + min)
}

function getColor(array){
    const index = Math.floor(Math.random() * array.length)
    return array[index]
 }