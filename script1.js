
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
         // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
        
    });

     // slide up script
     $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });


    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

//    owl script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    // typing animation script
    var typed = new Typed(".typing1", {
        // strings: ["Hello, how are you doing ?", "Hope you are doing well.", "Welcome to my Personal Website."],
        strings: ["NITK - NIRF Ranking"],
        typeSpeed: 100,
        backSpeed: 10,
        loop: true
    });
    var typed = new Typed(".typing2", {
        strings: ["NITK - NIRF Ranking"],
        typeSpeed: 100,
        backSpeed: 20,
        loop: true
    });
    var typed = new Typed(".typing3", {
        strings: ["National Institue of Technology Karnataka, Surathkal"],
        typeSpeed: 100,
        backSpeed: 30,
        loop: true
    });
    var typed = new Typed(".typing4", {
        strings: ["National Institue of Technology Karnataka, Surathkal","Home Page"],
        typeSpeed: 100,
        backSpeed: 30,
        loop: true
    });
    



   
});