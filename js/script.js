"use strict"

const card = document.querySelector('.cardContainer');
const container = document.querySelector('.mainContainer');

const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

//moving animation container
container.addEventListener("mousemove", function (e){
    // console.log(e.pageY);
    let xAxis = (window.innerWidth/2 - e.pageX) / 25;
    let yAxis = (window.innerHeight/2 - e.pageY) / 25;
    card.style.transform =  `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});

//Animate In
container.addEventListener('mouseenter', function (e){
    card.style.transition = 'none';
    //POPOUT
    title.style.transform = 'translateZ(90px)';
    sneaker.style.transform = 'translateZ(90px)';
    description.style.transform = 'translateZ(80px)';
    purchase.style.transform = 'translateZ(75px)';

});


//Animate Out
container.addEventListener('mouseleave', function (e){
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //POPBACK
    title.style.transform ='translateZ(0px)';
    sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
    description.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
});