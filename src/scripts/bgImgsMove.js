// 
//  двигаем картинки и фон в секциях Hero и Split движением указателя мыши
// 

if (window.innerWidth >= 1024) {
    const imgs = document.querySelectorAll('.img-on-bg');
    const imgBgs = document.querySelectorAll('.img-bg');
    const imgBgs226 = document.querySelectorAll('.img-bg226');
    const secWthImgs = document.querySelectorAll('.sec-wth-img');
    
    function callback (entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting === true) {
                // entry.target.style.background = 'red';
                // console.log(entry.target);
                entry.target.onmousemove = (event) => {
                    // двигаем сразу все картинки проходясь циклом - чтоб быстрее было описать.
                    for (let img of imgs) {
                        img.style.transform = 'translate(' + (-event.clientX * 0.001) + 'rem';
                    }
                    for (let imgBg of imgBgs) {
                        imgBg.style.transform = 'translate(' + (event.clientX * 0.002) + 'rem, ' + (event.clientY * 0.002 - (event.clientX * 0.001)) + 'rem) rotate(44deg)';
                    }
                    for (let imgBg of imgBgs226) {
                        imgBg.style.transform = 'translate(' + (event.clientX * 0.002) + 'rem, ' + (event.clientY * 0.002 - (event.clientX * 0.001)) + 'rem) rotate(-226deg)';
                    }
                    }
            }
            else {
                entry.target.onmousemove = null;
            }
        });
    }
    
    const observer3 = new IntersectionObserver(callback);
    
    for (let secWthImg of secWthImgs) {
        observer3.observe(secWthImg);
        // console.log(secWthImg);    
    }
}


// можно такжк создать отдельные методы для каждой секции и двигать только в ней картинки. Нужно будет сохранять в константы  все картинки ( или найти спсоб обращаться  к HTML детям блоков)
// const h = document.querySelector('.hero');
// h.start = () => {
//                 document.onmousemove = (event) => {
//                 for (let img of imgs) {
//                     img.style.transform = 'translate(' + (-event.clientX * 0.001) + 'rem';
//                 }
//                 for (let imgBg of imgBgs) {
//                     imgBg.style.transform = 'translate(' + (event.clientX * 0.002) + 'rem, ' + (event.clientY * 0.002 - (event.clientX * 0.001)) + 'rem) rotate(44deg)';
//                 }
//                 for (let imgBg of imgBgs226) {
//                     imgBg.style.transform = 'translate(' + (event.clientX * 0.002) + 'rem, ' + (event.clientY * 0.002 - (event.clientX * 0.001)) + 'rem) rotate(-226deg)';
//                 }
//                 }
// }
// const s = document.querySelector('.split');

// observer3.observe(h);
// observer3.observe(s);




// https://doka.guide/js/intersection-observer/