// 
// Анимация движения шаров для секций Call и Footer при их нахождении в поле видимости (во viewport)
// 

const call = document.querySelector('.call');
const cballs = document.querySelectorAll('.call__ball');

function moveOnceC(arr, x, y) {
    for (let el of arr) {
        el.style.transform = 'translate(' + (Math.random() * (2 * x) - 1.2 * x) + 'rem, ' + (Math.random() * (2 * y) - y) + 'rem) ' + 'scale(' + (0.2 + Math.random() * 1.5) + ')';
    }
}

// ???
// Создаём новую сущность класса IntersectionObserver и передаём в коллбек функцию которая вызывается при изменении пересечения (с вьюпортом). 
// Коллбек функция получает массив объектов IntersectionObserverEntry каждый из которых описывает пересечение целевого элемента с вьюпортом. 
// циклом или иным способом проходимся (обращаемся) к каждому элементу  и проверяем истинность isIntersecting ( is true) - что соответствует видимости элемента. Описываем необходимые действия для видимого элемента

// Works OK!!
// let mocid

// const observer = new IntersectionObserver(
//     function (entries) {
//         // console.log(entries);
//         // массив entries можно обойти циклами for или .forEach . Если один элемент в массиве - можно обратиться к нему просто по индексу ([0]). Если элементов - несколько - к 1, и т.д.. обратиться по индексу не получается
//         // if (entries[0].isIntersecting === true) { можно не писать явно  === true и записать короче:

//         if (entries[0].isIntersecting) {
//             // call.style.background = 'red';
//             moveOnceC(cballs, 60, 20);
//             mocid = setInterval(moveOnceC, 4000, cballs, 60, 10);
//             console.log('start func looped');
//             console.log(entries[0]);
//         }
//         else {
//             clearInterval(mocid);
//             console.log('section "call" is not in a view');
//         }
//     });

// observer.observe(call);
// Works OK!!


// добавим объекты в футере для анимации 
const ftr = document.querySelector('.footer');
const fballs = document.querySelectorAll('.footer__ball');

function moveOnceF(arr, x, y) {
    for (let el of arr) {
        el.style.transform = 'translate(' + (Math.random() * (2 * x) - (1.2 * x)) + 'rem, ' + (Math.random() * (2 * y) - y) + 'rem) ' + 'scale(' + (0.4 + Math.random() * 1.1) + ')';
    }
}

//  задаём переменные для хранения идентификаторов регулярного запуска
    let cmocid
    let fmocid

    // создадим методы каждому объекту. Называем одинаково, чтоб потом можно было обратиться в цикле. (но содержание  методов у каждого объекта  - своё )
    call.startAnim = () => {
        moveOnceC(cballs, 60, 20);
            cmocid = setInterval(moveOnceC, 4000, cballs, 60, 10);
    };
    call.stopAnim = () => {
        clearInterval(cmocid);
    }

    ftr.startAnim = () => {
        moveOnceF(fballs, 15, 5);
            fmocid = setInterval(moveOnceF, 4000, fballs, 15, 5);
    };
    ftr.stopAnim = () => {
        clearInterval(fmocid);
    }


const observer = new IntersectionObserver(
    function (entries) {

        for (let entry of entries) {
            if (entry.isIntersecting) {
            // entry.target.style.background = 'red';
            entry.target.startAnim();
            // console.log(entry);
            // console.log('section "is in a view');
        }
        else {
            entry.target.stopAnim();
            // console.log('section is not in a view');
        }
        }
    });

    // объекты для наблюдения добавляем после объявления самого const observer 
    observer.observe(call);
    observer.observe(ftr);

