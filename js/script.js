"use strict"

const card = $('.cardContainer');
const container = $('.mainContainer');

//moving animation container

container.mousemove(function (e){
    console.log(e.pageX, e.pageY);
    let xAxis = (window.innerWidth/2 - e.pageX) / 10;
    let yAxis = (window.innerHeight/2 - e.pageY) / 10;
    card.css( 'transform',  `rotateY(${xAxis}deg)`, `rotateX(${yAxis}deg)`);

});