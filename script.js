window.addEventListener('DOMContentLoaded', function() {
    const height = document.querySelector('.section-main').offsetHeight + 15;
    const fullHeight = height + (document.querySelector('.section-service').offsetHeight/2) + document.querySelector('.header').offsetHeight;
    const form = document.querySelector('.section-service-form');
    document.addEventListener('scroll', function (e) {
        console.log(window.pageYOffset > fullHeight);
        if(window.pageYOffset > height && window.pageYOffset < fullHeight) {
            form.classList.add('fixable');
            form.classList.remove('scrollable');
        } else if (height > window.pageYOffset) {
            form.classList.remove('fixable');
            form.classList.remove('scrollable');
        } else if (window.pageYOffset > fullHeight) {
            form.classList.remove('fixable');
            form.classList.add('scrollable');
        }
    })
});