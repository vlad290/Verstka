$(document).ready(function () {
    $('.slide-one').owlCarousel({
        loop:true,
        nav:false,
        mouseDrag: false,
        margin:20,
    })

    $('.slide-two').owlCarousel({
        loop:true,
        nav:false,
        items: 4,
        mouseDrag: false,
    })

    $('.slide-Three').owlCarousel({
        loop:true,
        nav:false,
        items: 1,
        mouseDrag: false,
    })
});

$('.Ready__Block__Two__InfooGrafica__Item__Control__Btn').on('click', function(){
    if($(this).hasClass('inactiv'))
    {

    }
    else
    {
        $('.Ready__Block__Two__InfooGrafica__Item__Two').removeClass('inactiv');
        $('.Ready__Block__Two__InfooGrafica__Item').addClass('inactiv');
    }
    return false;
});

$('.Ready__Block__Two__InfooGrafica__Item__Two__Control__Btn').on('click', function(){
    if($(this).hasClass('inactiv'))
    {

    }
    else
    {
        $('.Ready__Block__Two__InfooGrafica__Item').removeClass('inactiv');
        $('.Ready__Block__Two__InfooGrafica__Item__Two').addClass('inactiv');
    }
    return false;
});

$('.Reviews__Control__Display__Left').click(function() {
    $(".slide-one").trigger('prev.owl.carousel');
})
$('.Reviews__Control__Display__Right').click(function() {
    $(".slide-one").trigger('next.owl.carousel');
})

$('.Ready__Block__Two__Control__Arrows__Left').click(function() {
    $(".slide-Three").trigger('prev.owl.carousel');
})
$('.Ready__Block__Two__Control__Arrows__Rigth').click(function() {
    $(".slide-Three").trigger('next.owl.carousel');
})