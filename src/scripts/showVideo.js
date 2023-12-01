const vcont = document.querySelector('.video-cnt');
const btn = document.querySelector('.video__btn');
const modal = document.querySelector('.video__mov');
const video = document.querySelector('.video__clip');

btn.onclick = () => {
    // vcont.style.display = 'none';
    // modal.classList.add('video__mov_in')
    modal.style.display = 'flex';
    setTimeout(() => {
        video.play();
    }, 600);
}

let mbIdAftMod;

modal.onclick = (event) => {
    if (event.target === modal) {
        video.pause();  // - !! из-за этого не работает закрытие видео с youtube (во frame-е).
        // .stop() - такого метода нет. video.stop();
        // video.style.display = 'none';
        video.classList.remove('video__clip_in');
        video.classList.add('video__clip_out');

        // сначала скрываем элемент, а затем показываем для срабатывания анимации. Можно также через js запустить старт анимации (.animationPlayState = 'running') после смены классов с анимацией
        // setTimeout(() => {
        //     video.style.display = 'block';
        // }, 0);

        // video.style.animationPlayState = 'running'; // Не нужно! анимация старитует просто при назначении нового класса с анимацией
        // (нет необхдимости скрывать показывать элемент для запуска анимации - запускаем анимацию с помощью css свойства animation-play-state: running; (в JS - .animationPlayState = 'running') )

        // возвращаем нужные классы с анимацией и скрываем элемент родитель (контейнер). задержка 0.5 секунды - точно как продолжительность анимации
        setTimeout(() => {
            video.classList.remove('video__clip_out');
            video.classList.add('video__clip_in');
            modal.style.display = 'none';
        }, 500);




        // возобновляем движение после закрытия модала. Т.к. пишем в разных файлах - некоторые переменые с объектами и части функций задаём и пишем заново и/или повторно 
        const videoLocal = document.getElementById('video');
        const vballs = document.querySelectorAll('.video__ball');
        function moveOnceAftMod(arr, x, y) {
            for (let el of arr) {
                el.style.transform = 'translate(' + (Math.random() * (2 * x) - x) + 'rem, ' + (Math.random() * (2 * y) - y) + 'rem) ' + 'scale(' + (0.4 + Math.random() * 1.1) + ')';
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