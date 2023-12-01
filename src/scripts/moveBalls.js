// 
// Анимация движения шаров для секции Video - при наведении на неё указателя мыши
// 


// if (window.innerWidth >= 1024) {

const video = document.getElementById('video');
const vballs = document.querySelectorAll('.video__ball');

// задаём функцию для передвижения объектов массива на заданное расстояние (в rem)
// Math.floor() для округления до меньшего целого - можно не использовать
function moveOnce(arr, x, y) {
    for (let el of arr) {
        if (window.innerWidth < 768) {
            el.style.transform = 'translate(' + (Math.random() * (2 * x) - x) + 'rem, ' + (Math.random() * (2 * y) - y) + 'rem) ' + 'scale(' + (0.2 + Math.random() * 0.5) + ')';
        } else {
            el.style.transform = 'translate(' + (Math.random() * (2 * x) - x) + 'rem, ' + (Math.random() * (2 * y) - y) + 'rem) ' + 'scale(' + (0.4 + Math.random() * 1.1) + ')';
        }
    }
}

// задаём переменную в которую будем сохранять "идентификатор для регулярного запуска функции" moveBalls - идентификатор возвращает функция setInterval() -, чтобы потом можно было остановить её повторяющееся выполнение через clearInterval(). При вызове clearInterval() браузер найдёт таймер (из список активных таймеров браузера) по идентификатору и уберёт его из списка - повторение функции moveBalls прекратится.
let mbId;

// Создаём функцию с однократным запуском перемещения элементов и регулярным её перезапуском каждые 4000мс
function moveBalls(section, arr, x, y) {
    moveOnce(arr, x, y);
    mbId = setInterval(moveOnce, 4000, arr, x, y);

    // вешаем листнер на остановку анимации. Благодаря опции  { once: true }  - обработчик сработает один раз, а затем автоматически удалится. ({ once: true } можно даже использовать с анонимными функциями и не нужно будет очищать обработчик  - он удалится автоматически.)
    section.addEventListener('mouseleave', () => { stopBalls(section, arr) }, { once: true });
}

// Создаём функцию, которая остановит регулярный перезапуск moveOnce. - Функции clearInterval() передаём аргументом идентификатор регулярного перезапуска функции - идентификатором, который возвращает функция setInterval() - мы его сохранили в переменную mbId
function stopBalls(section, arr) {
    // прервали повторение выполнения функции перемещения элементов moveOnce
    clearInterval(mbId);
    console.log("stopBalls runs and clearInterval(mbId)")

    for (let el of arr) {
        //  зададём продолжительность transition 0.5s для  элементов - чтобы плавно но быстро вернуть их в начальное место.
        el.style.transition = 'all 0.5s linear';

        //  для каждой ширины экрана возвращаем начальные свойства transform  для элементов
        if (window.innerWidth < 425) {
            el.style.transform = 'translate(0, 0) scale(0.35)';
        } else {
            if (window.innerWidth < 768) {
                el.style.transform = 'translate(0, 0) scale(0.5)';
            } else {
                if (window.innerWidth < 1024) {
                    el.style.transform = 'translate(0, 0) scale(0.75)';
                } else {

                    el.style.transform = 'translate(0, 0)';
                }
            }
        }
        // после выполнения остального js кода - возвращаем изначальное значение transition = 12s для всех элементов - чтоб при следующих запусках перемещений элементы двигались с изначально заданной скоростью.
        //  Хотя transition =  12s присваивается элементам ещё в момент анимации с transition = 0.5s  - анимация всё равно продолжается время 0.5s - как это было указано во время начала анимации
        setTimeout(
            () => {
                el.style.transition = 'all 12s linear';
            }
            , 16)
    }

    // вешаем листнер на старт анимации. Благодаря опции  { once: true }  - обработчик сработает один раз, а затем автоматически удалится.
    section.addEventListener('mouseenter', () => { moveBalls(section, arr, 80, 40) }, { once: true });
}

// вешаем первоначальный (после загрузки страницы) листнер на старт анимации. Благодаря опции  { once: true }  - обработчик сработает один раз, а затем автоматически удалится. (убрать листнер  с функцией с аргументами  через removeEventListener - не получается, внутрь безымянной функции-обёртки класть не стал)
video.addEventListener('mouseenter', () => { moveBalls(video, vballs, 80, 40) }, { once: true });

// не экономя память - просто вешаем листнеры
// video.addEventListener('mouseenter', () => { moveBalls(vballs, 80, 40) });
// вешаем листнер для остановки анимации.
// video.addEventListener('mouseleave', () => { stopBalls(vballs) });

// добавляем анимацию на второй блок с видео с id="video2"

const video2 = document.getElementById('video2');
const vballsYtb = document.querySelectorAll('.video__ball_ytb');

video2.addEventListener('mouseenter', () => { moveBalls(video2, vballsYtb, 80, 40) }, { once: true })





// остановливаем анимацию движения шаров после нажатия  на кнопку воспроизведения видео
const btn1 = document.querySelector('.video__btn');
const btn2 = document.querySelector('.video__btn_2');

function stopBallsByBtn(arr) {
    clearInterval(mbId);
    clearInterval(mbIdAftMod); //останавливаем движение запущенное закрытием модального окна
    for (let el of arr) {
        el.style.transition = 'all 0.5s linear';
        if (window.innerWidth < 425) {
            el.style.transform = 'translate(0, 0) scale(0.35)';
        } else {
            if (window.innerWidth < 768) {
                el.style.transform = 'translate(0, 0) scale(0.5)';
            } else {
                if (window.innerWidth < 1024) {
                    el.style.transform = 'translate(0, 0) scale(0.75)';
                } else {

                    el.style.transform = 'translate(0, 0)';
                }
            }
        };
        setTimeout(() => {
            el.style.transition = 'all 12s linear';
        }, 16)
    };
}

btn1.addEventListener('click', () => {
    stopBallsByBtn(vballs);
});
btn2.addEventListener('click', () => {
    stopBallsByBtn(vballsYtb);
});

// }
// , { once: true }


// 
// from file ShowVideo.js
const vcont = document.querySelector('.video-cnt');
const btn = document.querySelector('.video__btn');
const modal = document.querySelector('.video__mov');
const videoJS = document.querySelector('.video__clip');

btn.onclick = () => {
    // vcont.style.display = 'none';
    // modal.classList.add('video__mov_in')
    modal.style.display = 'flex';
    setTimeout(() => {
        videoJS.play();
    }, 600);
}

let mbIdAftMod;

modal.onclick = (event) => {
    if (event.target === modal) {
        videoJS.pause();  // - !! из-за этого не работает закрытие видео с youtube (во frame-е).
        // .stop() - такого метода нет. video.stop();
        // video.style.display = 'none';
        videoJS.classList.remove('video__clip_in');
        videoJS.classList.add('video__clip_out');

        // сначала скрываем элемент, а затем показываем для срабатывания анимации. Можно также через js запустить старт анимации (.animationPlayState = 'running') после смены классов с анимацией
        // setTimeout(() => {
        //     video.style.display = 'block';
        // }, 0);

        videoJS.style.animationPlayState = 'running';
        // нет необхдимости скрывать показывать элемент для запуска анимации - запускаем анимацию с помощью css свойства animation-play-state: running; (в JS - .animationPlayState = 'running')

        // возвращаем нужные классы с анимацией и скрываем элемент родитель (контейнер). задержка 0.5 секунды - точно как продолжительность анимации
        setTimeout(() => {
            videoJS.classList.remove('video__clip_out');
            videoJS.classList.add('video__clip_in');
            modal.style.display = 'none';
        }, 500);




        // возобновляем движение после закрытия модала. Т.к. пишем в разных файлах - некоторые переменые с объектами и части функций задаём и пишем заново и/или повторно 
        const videoLocal = document.getElementById('video');
        const vballs = document.querySelectorAll('.video__ball');
        function moveOnceAftMod(arr, x, y) {
            for (let el of arr) {
                if (window.innerWidth < 768) {
                    el.style.transform = 'translate(' + (Math.random() * (2 * x) - x) + 'rem, ' + (Math.random() * (2 * y) - y) + 'rem) ' + 'scale(' + (0.2 + Math.random() * 0.5) + ')';
                } else {
                    el.style.transform = 'translate(' + (Math.random() * (2 * x) - x) + 'rem, ' + (Math.random() * (2 * y) - y) + 'rem) ' + 'scale(' + (0.4 + Math.random() * 1.1) + ')';
                }
            }
        }

        function moveBallsAftMod(section, arr, x, y) {
            setTimeout(() => {
                moveOnceAftMod(arr, x, y);
            }, 500);
            mbIdAftMod = setInterval(moveOnceAftMod, 4000, arr, x, y);
            section.addEventListener('mouseleave', () => { stopBallsAftMod(section, arr) }, { once: true });
        }

        function stopBallsAftMod(section, arr) {
            clearInterval(mbIdAftMod);
            console.log("stopBallsAftMod runs and clearInterval(mbIdAftMod)")

        }

        moveBallsAftMod(videoLocal, vballs, 80, 40);


    }

}


// стартуем движение шаров при попадании в область видимости на мобильных

// https://stackoverflow.com/questions/56324813/how-to-detect-touch-device-in-2019

// function isTouchDevice() {
//     return (('ontouchstart' in window) ||
//        (navigator.maxTouchPoints > 0) ||
//        (navigator.msMaxTouchPoints > 0));
//   }

// // .window перед matchMedia() - не обязательно
// if (matchMedia('(hover: hover)').matches) {
//     console.log("matchMedia('(hover: hover)')");
// }

// if (window.matchMedia('(pointer: coarse)').matches) {
//     // touchscreen

//     // @media(hover: none) and(pointer: coarse) {
//     //     /* touchscreens */
//     // }
//     // @media(hover: none) and(pointer: fine) {
//     //     /* stylus */
//     // }
//     // @media(hover: hover) and(pointer: coarse) {
//     //     /* controllers */
//     // }
//     // @media(hover: hover) and(pointer: fine) {
//     //     /* mouse or touchpad */
//     // }
// }

// if (window.matchMedia('(hover: none)').matches) {

video.currentBalls = vballs;
// console.log(video.currentBalls);
video2.currentBalls = vballsYtb;
// console.log(video2.currentBalls);

const observerMob = new IntersectionObserver(
    function (entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting === true) {

                // глючило и запускало moveBalls когда секция уже была в области видимости - чтобы точно избежать такого поведения - оставляем принудительную остановку анимации 
                stopBalls(entry.target, entry.target.currentBalls)
                console.log(entry.target);
                console.log('stopBalls()');
                // чтобы успело примениться transition к шарикам (entry.target.currentBalls)
                setTimeout(() => {
                    moveBalls(entry.target, entry.target.currentBalls, 80, 40);
                    // Убрать вешание листнеров в конце функций;  и вешать их  только если есть ховер
                    console.log(entry.target);
                    console.log('start moveBalls()');
                }, 33);

            } else {
                stopBalls(entry.target, entry.target.currentBalls)
                console.log(entry.target);
                console.log('stopBalls()');
            }
        }
        )
    }
)


observerMob.observe(video);
observerMob.observe(video2);
// }