import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

const menu = document.querySelector('.menu');
const headerRight = document.querySelector('.header__right');
const body = document.querySelector('body');

menu.addEventListener('click', (e)=>{
    menu.classList.toggle('active')
    body.classList.toggle('hidden')
    headerRight.classList.toggle('active') 
})

const headerIcon = document.querySelectorAll('.header__icon');
const headerIconContent = document.querySelectorAll('.header__icon-content');
const headerIconClose = document.querySelector('.header__icon-close');

headerIcon.forEach(icon=>{
    icon.addEventListener('click', (e)=>{
        headerIconContent.forEach(contents=>{
            contents.classList.remove('active')
        })
        const content = icon.querySelector('.header__icon-content')
        content.classList.toggle('active')
        headerIconClose.classList.toggle('active')
    })
})

headerIconClose.addEventListener('click', (e)=>{
    headerIconContent.forEach(contents=>{
        contents.classList.remove('active')
    })
    headerIconClose.classList.remove('active')
})