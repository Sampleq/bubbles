const vcont2 = document.querySelector('.video-cnt_2');
const btn2 = document.querySelector('.video__btn_2');
const modal2 = document.querySelector('.video__mov_2');
const video2 = document.querySelector('.video__clip_2');

btn2.onclick = () => {
    modal2.style.display = 'flex';
    setTimeout(() => {
        // video.play();
    }, 600);
}

modal2.onclick = (event) => {
    if (event.target === modal2) {
        // video.pause();  // - !! из-за этого не работает закрытие видео с youtube (во frame-е).
        video2.classList.remove('video__clip_in');
        video2.classList.add('video__clip_out');

        controlYoutubeVideo('pauseVideo');

        video2.style.animationPlayState = 'running';
        // нет необходимости скрывать показывать элемент для запуска анимации - запускаем анимацию с помощью css свойства animation-play-state: running; (в JS -  animationPlayState = 'running')

        // возвращаем нужные классы с анимацией и скрываем элемент родитель (контейнер). задержка 0.5 секунды - точно как продолжительность анимации
        setTimeout(() => {
            video2.classList.remove('video__clip_out');
            video2.classList.add('video__clip_in');
            modal2.style.display = 'none';
        }, 500);
    }

}


function controlYoutubeVideo(vidFunc) {
    // let iframe = document.getElementsByTagName("iframe")[0].contentWindow;
    let iframe = document.querySelector('.video__clip_2').contentWindow;
    console.log(iframe);
    iframe.postMessage(
        '{"event":"command","func":"' + vidFunc + '","args":""}',
        "*"
    );
}

btn_pause.onclick = () => {
    controlYoutubeVideo('pauseVideo');
}
btn_stop.onclick = () => {
    controlYoutubeVideo('stopVideo');
}
btn_play.onclick = () => {
    controlYoutubeVideo('playVideo');
}

// https://codepen.io/mrminnkhantnaing/pen/RwQjpaK
