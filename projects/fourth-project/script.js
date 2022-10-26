const board = document.querySelector('#board')
const colors = ['#c9e9da', '#fed7c8', '#fc95b3', '#ffd64d', '#9bc01c', '#ae562a', '#97b8d8', '#409ae1', '#40c5af']
const squreNumbers = 700

for(let i = 0; i < squreNumbers; i++){
    const square = document.createElement('div')
    square.className = 'square'

    square.addEventListener('mouseover', () =>{
        setColore(square)
    })
    square.addEventListener('mouseleave', () => {
        removedColor(square)
    })

    board.append(square)
}

function setColore(element){
    element.style.backgroundColor = getColor(colors)
    element.style.boxShadow = `0 0 2px ${getColor(colors)}, 0 0 10px ${getColor(colors)}`
}

function removedColor(element){
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getColor(array){
   const index = Math.floor(Math.random() * array.length)
   return array[index]
}