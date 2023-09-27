let navigationMobile=document.querySelector('.navigation-mobile-content')
let navigationBtn=document.querySelector('.navigation-btn')
let closeBtn=document.querySelector('.close-btn')
let navSocials=document.querySelector('.navigation-mobile-socials')
let aboutMeArticle=document.querySelectorAll('.section-about-me-content article')






$(document).ready(function(){


    //Scrollmagic dla całej strony 
    //Scrollmagic dla całej strony 
    //Scrollmagic dla całej strony 
    let controller=new ScrollMagic.Controller();

    //Scrollmagic animacja nawigacji desktopowej

    let SecName=new ScrollMagic.Scene({
        triggerElement:'.section-name',
        triggerHook:'.9',
        reverse:false
    })
    .setClassToggle('.section-name','active')
    .addTo(controller);

    $(aboutMeArticle).each(function(){
        let SecName=new ScrollMagic.Scene({
            triggerElement:this,
            triggerHook:'.9',
            reverse:false
        })
        .setClassToggle(this,'active')
        .addTo(controller);
    })


    //Działanie Nawigacji mobilnej
    //Działanie Nawigacji mobilnej
    //Działanie Nawigacji mobilnej
    navigationBtn.addEventListener('click',()=>{
        if (navigationMobile.classList.contains('active')!==true){
            navigationBtn.classList.remove('nav-active')
            navigationMobile.classList.add('active')
            closeBtn.classList.add('nav-active')
            navSocials.classList.add('active-social-nav')
        }
        else{
            return 0;
        }
            
    })
    closeBtn.addEventListener('click',()=>{
        if (navigationMobile.classList.contains('active')===true){
            navigationBtn.classList.add('nav-active')
            navigationMobile.classList.remove('active')
            closeBtn.classList.remove('nav-active')
            navSocials.classList.remove('active-social-nav')
        }
        else{
            return 0;
        }
            
    })

});