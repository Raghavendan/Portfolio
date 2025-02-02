const carouselImagesAUBinFinder = [
    "./images/a0.jpg","./images/a1.jpg", "./images/a2.jpg", "./images/a3.jpg", "./images/a4.jpg",
    "./images/a5.jpg", "./images/a6.jpg", "./images/a7.jpg", "./images/a8.jpg", "./images/a9.jpg", "./images/a10.jpg", "./images/a12.jpg"
];

const carouselImagesCTMR = [
    "./images/b1.jpg", "./images/b2.jpg", "./images/b3.jpg", "./images/b4.jpg",
    "./images/b5.jpg", "./images/b6.jpg", "./images/b7.jpg", "./images/b8.jpg"
];

let currentImageIndexAUBinFinder = 0;
let currentImageIndexCTMR = 0;

// Open Carousel
function openCarousel(index, type) {
    if (type === 'AUBinFinder') {
        currentImageIndexAUBinFinder = index;
        document.getElementById("carouselModalAUBinFinder").style.display = "flex";
        updateCarouselImage('AUBinFinder');
    } else if (type === 'CTMR') {
        currentImageIndexCTMR = index;
        document.getElementById("carouselModalCTMR").style.display = "flex";
        updateCarouselImage('CTMR');
    }
}

// Close Carousel
function closeCarousel(type) {
    if (type === 'AUBinFinder') {
        document.getElementById("carouselModalAUBinFinder").style.display = "none";
    } else if (type === 'CTMR') {
        document.getElementById("carouselModalCTMR").style.display = "none";
    }
}

// Update Image in Viewer
function updateCarouselImage(type) {
    if (type === 'AUBinFinder') {
        document.getElementById("carouselImageAUBinFinder").src = carouselImagesAUBinFinder[currentImageIndexAUBinFinder];
    } else if (type === 'CTMR') {
        document.getElementById("carouselImageCTMR").src = carouselImagesCTMR[currentImageIndexCTMR];
    }
}

// Change Image with Step Navigation
function changeImage(step, type) {
    if (type === 'AUBinFinder') {
        currentImageIndexAUBinFinder += step;
        if (currentImageIndexAUBinFinder >= carouselImagesAUBinFinder.length) currentImageIndexAUBinFinder = 0;
        if (currentImageIndexAUBinFinder < 0) currentImageIndexAUBinFinder = carouselImagesAUBinFinder.length - 1;
        updateCarouselImage('AUBinFinder');
    } else if (type === 'CTMR') {
        currentImageIndexCTMR += step;
        if (currentImageIndexCTMR >= carouselImagesCTMR.length) currentImageIndexCTMR = 0;
        if (currentImageIndexCTMR < 0) currentImageIndexCTMR = carouselImagesCTMR.length - 1;
        updateCarouselImage('CTMR');
    }
}




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

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [ "Developer",  "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [ "Developer",  "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
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
});