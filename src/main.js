'use strict';

// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
window.addEventListener('scroll', headerScrollY )
function headerScrollY(){
    if(headerHeight < this.scrollY){
        // header.style.backgroundColor = 'pink';
        header.classList.add('header--dark')
    }else{
        // header.style.backgroundColor = 'black';
        header.classList.remove('header--dark')
    }
}
// Home 섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
window.addEventListener('scroll', homeChange );
function homeChange(){
    home.style.opacity = 1- window.scrollY / homeHeight;
}

//Home 섹션에 있을때 화살표 안 보이게 함
const arrow = document.querySelector('.arrow-up');
window.addEventListener('scroll', arrowChange);
function arrowChange(){
    if(window.scrollY / (homeHeight/2) < 1){
      arrow.style.display = 'none';
    }
    else{
        arrow.style.display = 'block';  
    }
};

// Navbar 토글버튼 클릭 처리
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click',()=>{
    navbarMenu.classList.toggle('open');
})

// Navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌
navbarMenu.addEventListener('click',()=>{
    navbarMenu.classList.remove('open');
})