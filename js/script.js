"use strict"

const card = document.querySelector('.cardContainer');
const container = document.querySelector('.mainContainer');

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
});


//Animate Out
container.addEventListener('mouseleave', function (e){
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
})