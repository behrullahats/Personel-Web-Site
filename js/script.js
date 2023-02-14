let sideNav = document.querySelector('#sideNav');
let menu = document.querySelector('.side-navbar');
let svgWrapper = document.querySelector('.wrapper .svg-wrapper');
var number = 1;

sideNav.addEventListener('click', () =>{
    if(number == 1){
        sideNav.classList.toggle('fa-times');
        menu.style.left = '0';
        svgWrapper.classList.toggle('marginLeft');
        number = 0;
    }else{
        sideNav.classList.remove('fa-times');
        menu.style.left = '-300px';
        svgWrapper.classList.remove('marginLeft');
        number = 1;
    }
    console.log(number);
});