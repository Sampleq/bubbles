// 
// Анимация движения овала в секции Footer при движении указателя мыши по секции Footer
// 

if (window.innerWidth > 1024) {
    const oval = document.querySelector('.footer__oval-cont');
    const footer = document.querySelector('.footer');

    function moveByMouse(event) {
        oval.style.transform = 'translate(' + (-event.clientX * 0.003) + 'rem, ' + (-event.clientY * 0.002) + 'rem)';
    };

    // вешаем листнер после загрузки всего контента страницы
    document.addEventListener("DOMContentLoaded", () => {
        footer.addEventListener('mousemove', moveByMouse);
    }
    );
}





// Works!
// document.onmousemove = (event) => {
//     moveByMouse(event);
// };

// Works!
// document.addEventListener('mousemove', (event) => {
//     oval.style.transform = 'translate(' + (-event.clientX * 0.003) + 'rem, ' + (-event.clientY * 0.002) + 'rem)';
// })

// Works!
// document.addEventListener('mousemove', moveByMouse);



