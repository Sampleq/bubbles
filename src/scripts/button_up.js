const btnUp = document.getElementById('btn_up');
if (window.scrollY > window.innerHeight) {
    btnUp.style.visibility = 'visible';
    btnUp.style.opacity = 0.7;
}

document.onscroll = (event) => {
    // console.log(event);
    // console.log(window.scrollY);

    // if (window.scrollY > 1000) {
    if (window.scrollY < (1.2 * window.innerHeight)) {
        // btnUp.style.display = 'none';
        btnUp.style.visibility = 'hidden';
        btnUp.style.opacity = 0;
    } else {
        // console.log(window.innerHeight);
        // btnUp.style.display = 'block';
        btnUp.style.visibility = 'visible';
        btnUp.style.opacity = 0.7;
    }

}

btnUp.onclick = () => {
    // console.log('btnUp');
    // window.scrollTo(0, 0) - просто координаты без указания типа перемотки(моментально или плавно)
    window.scrollTo(
        {
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
};