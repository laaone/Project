const liEls = document.querySelectorAll('.menuItem');

liEls.forEach(function(liEl) {

    const subMenu = liEl.querySelector('.subMenu');

    liEl.addEventListener('mouseenter', function() {
        subMenu.style.display = 'block';
    });

    liEl.addEventListener('mouseleave', function() {
        subMenu.style.display = 'none';
    });

});

/*탭메뉴*/
const tabsEl = document.querySelectorAll('.tab')
const contentsEl = document.querySelectorAll('.content');

tabsEl.forEach( function( tab, index) {

    tab.addEventListener("click", function(){

        tabsEl.forEach(function(tab){
        tab.classList.remove("active");
    });

    contentsEl.forEach( function(content) {
         content.classList.remove('active');
    });

    this.classList.add('active');
    contentsEl[index].classList.add('active');


 });

});