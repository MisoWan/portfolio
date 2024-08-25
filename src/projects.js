'use strict';
// 프로젝트 필터링 관련 로직 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project')
const projectsContainer = document.querySelector('.projects');

categories.addEventListener('click', (event)=>{
    const filter = event.target.dataset.category;
    if(filter == null){
        return
    }
    handleActiveSelection(event.target)
    filterProjects(filter)

})

function handleActiveSelection(target){
    const active = document.querySelector('.category--selected');
    active.classList.remove('category--selected')
    target.classList.add('category--selected')   
}

function filterProjects(filter){
 projectsContainer.classList.add('anim-out')
 projects.forEach((project) =>{
     if(filter === 'all' || filter === project.dataset.type){
         project.style.display = 'block';
     }else{
         project.style.display = 'none';
     }
 });
 setTimeout(()=>{
     projectsContainer.classList.remove('anim-out')
 },250)
}

// const options ={
//     // rootMargin :'-100px',
//     threshold : 0.7,
// }

// let observer = new IntersectionObserver((sections)=>{
//     sections.forEach((section) =>{
//         if(section.isIntersecting){
//             console.log(section.target.id)
//             headerMenuItems.forEach(headerMenuItem=>{
//                 // console.log('data'+ headerMenuItem.dataset.type)
//                 if(section.target.id === headerMenuItem.dataset.type){
//                     console.log('id'+ section.target.id , 'data'+headerMenuItem.dataset.type)
//                     headerMenuItem.classList.add('active');
//                 }else{
//                     headerMenuItem.classList.remove('active')
//                 }
//             })
//         }else{
//             // console.log('bye')
//             return
//         }
//     }
//     )
// },  options );
// const sections = document.querySelectorAll('.section');
// let sectionActive = document.querySelector('.active');

// sections.forEach((section)=>{
//     observer.observe(section)
// })

// const headerMenuItems = document.querySelectorAll('.header__menu__item');
