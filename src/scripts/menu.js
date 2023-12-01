// 
// Меню писалось изначально только десктоп и чисто на CSS. После добавления мобильного меню - по необходимости функционал дописывался JS.
// 

const logo = document.getElementById('logo');
const menu = document.getElementById('menu');
const liSub = document.getElementById('liSub');

logo.onclick = () => {
    if (window.innerWidth < 768) {
        menu.classList.toggle('menu-active');
        menu.classList.remove('menu-active_sub');
        popupMenu.classList.remove('popup-menu_active');
    }
};

const popupMenu = document.getElementById('popup-menu');


liSub.onclick = () => {
    if (window.innerWidth < 768) {
    popupMenu.classList.toggle('popup-menu_active');
    menu.classList.toggle('menu-active_sub');
    }
}

liSub.onmouseover = () => {
    if (window.innerWidth >= 768) {
        popupMenu.classList.add('popup-menu_active');
    }
}

liSub.onmouseout = () => {
    if (window.innerWidth >= 768) {
        popupMenu.classList.remove('popup-menu_active');
        menu.classList.remove('menu-active_sub');
    }
}

// if (window.innerWidth < 768) {

// else if (window.innerWidth >= 768) {
//     popupMenu.classList.remove('popup-menu_active');
//     menu.classList.remove('menu-active_sub');
// }



// появления скрытие саб-меню при наведении указателя мыши
// liSub.onmouseenter = () => {
//     if (window.innerWidth < 768) {
//         menu.style.height = '45.1rem';
//         setTimeout(() => {
//             menu.style.height = 'fit-content';
//         }, 16);
//     }
// }
// liSub.ontouchstart = () => {
//     if (window.innerWidth < 768) {
//         menu.style.height = '45.1rem';
//         setTimeout(() => {
//             menu.style.height = 'fit-content';
//         }, 16); 
//     }
// }
// liSub.onmouseleave = () => {
//     if (window.innerWidth < 768) {
//         menu.style.height = '24.6rem';
//         // remove inline styles
//         setTimeout( ()=>{menu.style = 'none'}, 16)
//     }
// }


