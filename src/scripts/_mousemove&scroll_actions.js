
        document.addEventListener("DOMContentLoaded", function () {
            let layer = document.querySelector('.balls');
            document.addEventListener('mousemove', (event) => {
                layer.style.transform = 'translate(' + (-(event.clientX * 0.1) / 8) + 'px,' + (-(event.clientY * 0.1) / 8) + 'px)';
            });
        });

        document.addEventListener("DOMContentLoaded", function () {
            let layer = document.querySelector('.oval-4');
            document.addEventListener('mousemove', (event) => {
                layer.style.transform = 'rotate(-136deg) translate(' + (-(event.clientX * 0.1) / 25) + 'px,' + (-(event.clientY * 0.1) / 25) + 'px)';
            });
            
            const elem = document.querySelector(".oval-1");
            document.addEventListener('scroll', () => {
                elem.style.transform = 'translate(' + ((-650 + window.scrollY * 0.3)) + 'px,' + (220 -(window.scrollY * 0.1)) + 'px) rotate(135deg) ';
            });
        });


        const ballVs = document.querySelectorAll('.video_section-ball');
        document.addEventListener('scroll', ()=> {
            for(let el of ballVs){
            el.style.transform = 'translate(' + ((Math.random()-0.5)*300) + 'px, ' + ((Math.random()-0.5)*200) + 'px)';
            }
        })
   
                // window.onresize = () => {
        // if (window.innerWidth >768) {
        //         menu.classList.remove('menu-active');
        //     }
        // }

        // const mq = window.matchMedia("(min-width: 768px)");
        // if (mq.matches) {
        //     alert("window width >= 768px");
        // }