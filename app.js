const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')

const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')
const slidesCount = mainSlide.querySelectorAll('div').length // Сначала (4 строка кода) мы получили блок main-slide, а затем получили массив всех div которые в нем находятся. Length нужно для того, чтобы получить число. 


let activeSlideIndex = 0


sidebar.style.top = `-${(slidesCount - 1) * 100}vh` // Обращаясь к классу сайдбара и задавая стиль, чтобы совместить градиент с картинкой (так как изначально для нужного нам эффекта они расположена зеркально). Конструкция ${} позволяет динамически что то вычислять. В данном случае мы число умножаем на 100 для получения нужного результата. Число (slidesCount - 1) так, как всего 4 картинки, но 1 уже стоит в самом начале. Теперь сколько бы не было градиентов и картинок, все будет соответствовать.


// Создаем два события для кнопок. И создаем функцию, которая срабатывает, если нажимаем на стрелочку вверх (up) или вниз (down) при нажатии на стрелочку вниз.

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

// Проверяем условия, если функция приняла up, то к индексу градиентов (в нашем случае их 4 - 0, 1, 2, 3) прибавляется 1, так мы проверяем еще одно условие, что Индекс = Числу градиентов, если условие срабатывает, индекс обнуляется.

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex === slidesCount) 
        {
            activeSlideIndex = 0
        }

    // Теперь проверяем кнопку вниз, если по какой то причине, а в нашем случае она одна, если при заходе на сайт сразу нажать на стрелку вниз, то Индекс принимает значение (0 - 1) чего быть не может (так как индекс массива от 0 начинается), то Индекс = Число градиентов - 1


    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) 
        {
            activeSlideIndex = slidesCount - 1
        }
    }

    // Сначала вызвали контейнер, затем создали переменную, и задали анимацию дял кнопок
    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}