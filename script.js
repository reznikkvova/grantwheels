window.addEventListener('DOMContentLoaded', function() {
    const height = document.querySelector('.section-main').offsetHeight + 15;
    const fullHeight = height + (document.querySelector('.section-service').offsetHeight/2) + document.querySelector('.header').offsetHeight;
    const form = document.querySelector('.section-service-form');
    document.addEventListener('scroll', function (e) {
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
            parent.querySelector('.js-dropdown-trigger').dataset.selected = item.innerHTML;
            parent.classList.remove('active');
            CalcResult();
        });
    });

    /*document.addEventListener('click', event => {
        const isClickInside = document.querySelector('.dropdown-item').contains(event.target)

        if (!isClickInside) {
            document.querySelectorAll('.dropdown-item').forEach(item => {
               item.classList.remove('active');
            });
        }
    });*/


    const shampoviyDiskMatrix = [
        [13,30,40,35,45,380,500],
        [14,30,40,40,55,420,540],
        [15,40,45,50,60,500,600],
        [16,45,50,55,65,580,640],
        [17,50,55,65,70,640,700],
        [18,60,60,65,70,680,720],
        [19,65,65,75,85,780,840],
        [20,65,70,80,85,800,860],
        [21,65,70,85,90,860,920],
        [22,70,70,85,95,900,960]
    ];
    const litiyDiskMatrix = [
        [13,35,40,50,55,500,540],
        [14,35,40,50,55,500,540],
        [15,40,45,60,65,560,600],
        [16,45,50,60,70,640,720],
        [17,45,50,70,80,680,760],
        [18,60,60,75,95,760,880],
        [19,60,70,90,95,840,960],
        [20,60,70,90,100,880,980],
        [21,70,70,95,105,940,1000],
        [22,70,75,100,115,980,1100]
    ];


    function CalcResult() {
        const zamina = document.querySelector('.js-zamina-result'), balans = document.querySelector('.js-balans-result'),
            saving = document.querySelector('.js-save-result'), remont = document.querySelector('.js-remont-result');

        const diametr = document.querySelector('.js-diametr').dataset.selected,
            disk = document.querySelector('.js-disk').dataset.selected,
            type = document.querySelector('.js-typeCar').dataset.selected;
        if(diametr !== "-" && disk !== "-" && type !== "-") {
            let diam = Number(diametr);
            if(disk === 'Литий диск') {
                for(let j = 0; j < litiyDiskMatrix.length; j++) {
                    if(litiyDiskMatrix[j][0] === diam) {
                        if(type === 'SUV') {
                            zamina.innerHTML = `<span>${litiyDiskMatrix[j][6]}</span> гривень за 4 колеса`;
                            balans.innerHTML = `<span>${litiyDiskMatrix[j][4] + litiyDiskMatrix[j][2]}</span> гривень за 1 колесо`;
                        } else if (type === 'Легковий') {
                            zamina.innerHTML =  `<span>${litiyDiskMatrix[j][5]}</span> гривень за 4 колеса`;
                            balans.innerHTML = `<span>${litiyDiskMatrix[j][3] + litiyDiskMatrix[j][1]}</span> гривень за 1 колесо`;
                        }
                    }
                }
            } else if(disk === 'Стальний диск') {
                for(let j = 0; j < shampoviyDiskMatrix.length; j++) {
                    if(shampoviyDiskMatrix[j][0] === diam) {
                        if(type === 'SUV') {
                            zamina.innerHTML = `<span>${shampoviyDiskMatrix[j][6]}</span> гривень за 4 колеса`;
                            balans.innerHTML = `<span>${shampoviyDiskMatrix[j][4] + litiyDiskMatrix[j][2]}</span> гривень за 1 колесо`;
                        } else if (type === 'Легковий') {
                            zamina.innerHTML = `<span>${shampoviyDiskMatrix[j][5]}</span> гривень за 4 колеса`;
                            balans.innerHTML = `<span>${shampoviyDiskMatrix[j][3] + shampoviyDiskMatrix[j][1]}</span> гривень за 1 колесо`;
                        }
                    }
                }
            }
            if(diametr < 17) {
                saving.innerHTML = `<span>100</span> гривень на місяць за 4 колеса`
            } else {
                saving.innerHTML = `<span>130</span> гривень на місяць за 4 колеса`
            }
        }
    }
});