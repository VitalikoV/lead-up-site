$(function(){
    // AOS.init - for animating in second part of page
    AOS.init();

    let experience = $(".experience");
    let experienceCheckList = $(".experience__checklist");
    let modal = $("[data-modal]");
    let modalClose = $("[data-close]");

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        let element = $(this).data("scroll");     
         let elementOffSet = $(element).offset().top;
        
        $("html, body").animate({
            scrollTop: elementOffSet - 60 
        }, 700);
    });


// for appearing "done checklist" in period of time
    $(experienceCheckList).css("opacity","0");
    $(window).on("scroll resize", function(){
    if($(window).scrollTop()  >= experience.offset().top - 300){
            for(let i = 0; i < 7; i++){
                setTimeout(function(){
           $(experienceCheckList[i]).animate({
                opacity: 1,
            }, 500);
        }, 100 + i * 100);
        }
        
    }

});


modal.on('click', function(event){
    event.preventDefault();
    let $this = $(this);
    let modalId = $this.data('modal');
    $(modalId).addClass('show');
    $("body").addClass('no-scroll');

    addOpacity(modalId, ".modal__contact");
    addOpacity(modalId, ".modal__study");
    addOpacity(modalId, ".modal__training");

});


modalClose.on('click', function(event){
    event.preventDefault();
    let $this = $(this);
    let modalId = $this.data('close');
    $(modalId).removeClass('show');
    $("body").removeClass('no-scroll');


    removeOpacity(modalId, ".modal__contact");
    removeOpacity(modalId, ".modal__study");
    removeOpacity(modalId, ".modal__training");


});


// when you touch background of modal, it disappears. but it dont work.
// $(".modal").on('click', function(event){
//     event.preventDefault();
//     // let $this = $(this);
//     $(this).removeClass('show');
//     $("body").removeClass('no-scroll');
// });


function addOpacity(modalId, modalToAdd){
    setTimeout(function(){
        $(modalId).find(modalToAdd).css({
            opacity: "1"
        });
    },50);
}

function removeOpacity(modalId, modalToRemove){
    setTimeout(function(){
        $(modalId).find(modalToRemove).css({
            opacity: "0"
        });
    },50);
}



// nav burger
let burger = $(".burger");
let nav = $(".nav");

$(burger).on("click", function(event){
    event.preventDefault();
    nav.toggleClass("show");
});


// media
if($(window).width() <= 414){
$(".slick__prev").css("display", "block");
$(".slick__next").css("display", "block");

// slider for projects
    $(".projects").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '60px',
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: ".project__prev",
        nextArrow: ".project__next"

      });


    //   slider for cols
      $(".training__cols").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: ".training__prev",
        nextArrow: ".training__next"

      });
}
});
