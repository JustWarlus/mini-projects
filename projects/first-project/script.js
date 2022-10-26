const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        cleaeActiveClasses()
        slide.classList.add('active')
    })
}

function cleaeActiveClasses(){
    slides.forEach(item => item.classList.remove('active'))
}