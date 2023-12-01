// 
// Анимация движения овала в секции Video при скроллинге страницы и нахождении секции Video в области видимости
// 

if (window.innerWidth > 1024) {
    const vid = document.getElementById('video');
    const voval = document.querySelector('.video__oval-cont');
    
    // добавляем движения второго овала в секции с видео Youtube.
    //  const vid2 надо объявлять до observer2.observe(vid2); - иначе не работает
    
    const vid2 = document.getElementById('video2');
    const vovalYtb = document.getElementById('video__oval-cont_ytb');
    
    // Каждой отдельной секции пишем свою функцию и создаём отдельный листнер - чтобы они не мешали друг другу перекрёстно. Всё это добавляем в метод секции и вызываем циклом (у разных секций создаём  одинаковые имена методов, но разное содержание методов).
    
    function moveOval1() {
        if (window.innerWidth < 1024) {
            voval.style.transform = 'translate(' + ((-85 + window.scrollY * 0.03)) + 'rem,' + (27 - (window.scrollY * 0.01)) + 'rem)';
        } else {
            voval.style.transform = 'translate(' + ((-85 + window.scrollY * 0.03)) + 'rem,' + (20 - (window.scrollY * 0.01)) + 'rem)';
        }
    };
    vid.scrllstart = () => {
        document.addEventListener('scroll', moveOval1);
    };
    vid.scrllstop = () => {
        document.removeEventListener('scroll', moveOval1);
        // console.log('listener 1 removed');
    };
    
    function moveOval2() {
        if (window.innerWidth < 1024) {
            vovalYtb.style.transform = 'translate(' + ((-125 + window.scrollY * 0.03)) + 'rem,' + (37 - (window.scrollY * 0.01)) + 'rem)';
        } else {
            vovalYtb.style.transform = 'translate(' + ((-125 + window.scrollY * 0.03)) + 'rem,' + (35 - (window.scrollY * 0.01)) + 'rem)';
        }
    };
    vid2.scrllstart = () => {
        document.addEventListener('scroll', moveOval2);
    };
    vid2.scrllstop = () => {
        document.removeEventListener('scroll', moveOval2);
        // console.log('listener 2 removed');
    };
    
    const observer5 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting === true) {
                entry.target.scrllstart();
                // console.log(entry);
            } else {
                entry.target.scrllstop();
            }
        })
    })
    
    observer5.observe(vid);
    observer5.observe(vid2);
}





// .onscroll -  можно применять только если один элемент - есди несколько нужноы индивидуальные листнеры
// const observer2 = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             // voval.style.background = 'red';
//             document.onscroll = (event) => {
//                 if (window.innerWidth < 1024) {
//                     voval.style.transform = 'translate(' + ((-85 + window.scrollY * 0.03)) + 'rem,' + (27 - (window.scrollY * 0.01)) + 'rem)';
//                     // двигаем оба овала  - чтобы двигать по одному надо делать методы у entry с одинаковым названием но разным содержанием и запускать циклом выполнение этих методов при попадании entry в область видимости.
//                     vovalYtb.style.transform = 'translate(' + ((-125 + window.scrollY * 0.03)) + 'rem,' + (37 - (window.scrollY * 0.01)) + 'rem)';
//                 } else {
//                     voval.style.transform = 'translate(' + ((-85 + window.scrollY * 0.03)) + 'rem,' + (20 - (window.scrollY * 0.01)) + 'rem)';
//                     vovalYtb.style.transform = 'translate(' + ((-125 + window.scrollY * 0.03)) + 'rem,' + (35 - (window.scrollY * 0.01)) + 'rem)';
//                     // console.log(entry.target);
//                 }
//             }
//         }
//         else {
//             // убираем действие по событию .onscroll. возможно лучше всё-таки через removeEventListener (addEventListener c { once: true } - не подойдёт т.к. мы должны постоянно следить за событием scroll)
//             // document.onscroll = void(0);
//             document.onscroll = null;

//             // !! т.к. мы используем метод document.onscroll - чтобы его можно было убрать при уходе entry из поля видимости - при доюалвении 2-х entry в observer2.observe -  глюк на больших экранах, когда видны оба блока (из-за document.onscroll = null; при уходе из видимости).
//         }
//     }
//     )
// }
// )

// observer2.observe(vid);
// observer2.observe(vid2);