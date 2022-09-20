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
    });

    const calcTriggers = document.querySelectorAll('.js-dropdown-trigger');
    calcTriggers.forEach(item => {
        item.addEventListener('click', () => {
            if(item.parentNode.classList.contains('active')) {
                item.parentNode.classList.remove('active');
            } else {
                document.querySelectorAll('.dropdown-item').forEach(el => {
                    el.classList.remove('active');
                });
                item.parentNode.classList.toggle('active');
            }
        });
    });

    document.querySelectorAll('.dropdown-selection_item').forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentNode.parentNode;
            parent.querySelector('.js-dropdown-trigger').innerHTML = item.innerHTML;
            parent.classList.remove('active');
        });
    });

    /*document.addEventListener('click', event => {
        const isClickInside = document.querySelector('.dropdown-item').contains(event.target)

        if (!isClickInside) {
            document.querySelectorAll('.dropdown-item').forEach(item => {
               item.classList.remove('active');
            });
        }
    })*/
});