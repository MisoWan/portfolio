
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
    console.log(home.style.opacity = 1 - window.scrollY / homeHeight);
    console.log(homeHeight, window.scrollY, window.scrollY / homeHeight )
    home.style.opacity = 1- window.scrollY / homeHeight;
}
