$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 2,
        centerMode: true,
        speed: 1000,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});