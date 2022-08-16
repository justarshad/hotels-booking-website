var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
});

window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    if (window.pageYOffset > 0) {
        header.classList.add('scrolled');
    }
    else {
        header.classList.remove('scrolled');
    }
})

let menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', () => {
    let sideNav = document.querySelector('.sideNav');
    sideNav.classList.toggle('active');
    if (sideNav.classList.contains('active')) {
        menuBtn.setAttribute('name', 'close');
    }
    else {
        menuBtn.setAttribute('name', 'menu');
    }
})
