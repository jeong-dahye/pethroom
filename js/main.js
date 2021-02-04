$(document).ready(function(){
     $('.con05List').slick({
        slidesToShow:3, //보이는 슬라디드
        slidesToScroll:1, //슬라이드 넘기는 수
        centerMode:true,//이미지를 가운데 정렬하여 잘린 이미지도 보이도록 해주는 역할
        centerPadding:'50px',
        arrows:true, //화살표
        prevArrow:$('.btnL'), //화살표 클래스 설정
		nextArrow:$('.btnR'),
        dots:true,
        dotsClass:'dotBtn',
        variableWidth:true,
        autoplay:false,//자동재생
        autoplaySpeed:2000,//재생속도
        infinite:true, //반복재생
        });

});