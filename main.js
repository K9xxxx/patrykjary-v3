let tittleOfSection=document.querySelectorAll('.tittle-of-section')
let SpecBox=document.querySelectorAll('.spec-box')
let project=document.querySelectorAll('.project')
let aboutMeP=document.querySelectorAll('.about-aboutme p')
let qaQuestion=document.querySelectorAll('.qa')
let qaAnswer=document.querySelectorAll('.qa-answer')
let qaiIconPlus=document.querySelectorAll('.qa-icon-plus')
let qA=document.querySelectorAll('.qa')
let navigationMobile=document.querySelector('.navigation-mobile-content')
let navigationBtn=document.querySelector('.navigation-btn')
let closeBtn=document.querySelector('.close-btn')
let navSocials=document.querySelector('.navigation-mobile-socials')
let activeTool=document.querySelector('.active-tool')





const tlInitial=new TimelineMax();
let tl=new TimelineMax();



tlInitial.to('.tittle-of-section',0,{opacity:0})

$(document).ready(function(){
    let tl=new TimelineMax();

    //animacje do animacji ozdoby 2xkwadratu w sekcji uzywanych narzędzi 
    document.querySelector('.square-ornament-absolute').addEventListener('click',()=>{
        if(document.querySelector('.square-ornament-absolute').classList.contains('active-orna'))
        {
            document.querySelector('.square-ornament-absolute').classList.remove('active-orna') 
            document.querySelector('.square-ornament-absolute.right-side').classList.add('active-orna') 
        }
        else{
            return 0;
        }

    })
    document.querySelector('.square-ornament-absolute.right-side').addEventListener('click',()=>{
        if(document.querySelector('.square-ornament-absolute.right-side').classList.contains('active-orna'))
        {
            document.querySelector('.square-ornament-absolute.right-side').classList.remove('active-orna') 
            document.querySelector('.square-ornament-absolute').classList.add('active-orna') 
        }
        else{
            return 0;
        }

    })

    //animacje oraz działanie Narzędzi do programowania i designu
    document.querySelector('.programming-tools').addEventListener('click',()=>{
        if (document.querySelector('.active-tool').classList.contains('right-tool'))
        {
            document.querySelector('.active-tool').classList.remove('right-tool')
            document.querySelector('.programming-tools').classList.add('active-tools')
            document.querySelector('.designing-tools').classList.remove('active-tools')
            document.querySelector('.my-tools-programming').classList.add('my-active-tools')
            document.querySelector('.my-tools-designing').classList.remove('my-active-tools')
        }
        else{
            return 0;
        }
    })
    document.querySelector('.designing-tools').addEventListener('click',()=>{
        if (document.querySelector('.active-tool').classList.contains('right-tool'))
        {
            return 0;
        }
        else{
            document.querySelector('.active-tool').classList.add('right-tool')
            document.querySelector('.programming-tools').classList.remove('active-tools')
            document.querySelector('.designing-tools').classList.add('active-tools')
            document.querySelector('.my-tools-programming').classList.remove('my-active-tools')
            document.querySelector('.my-tools-designing').classList.add('my-active-tools')
        }
    })


    //Do zmiany ten blok, który mowi o wysuwaniu odpowiedzi do pytan w sekcji Q&A
    qaQuestion[0].addEventListener('click',()=>{
        if(qaQuestion[0].classList.contains('qa-Active')){
            qaQuestion[0].classList.remove('qa-Active')
        }
        else{
            qaQuestion[0].classList.add('qa-Active')
            qaQuestion[1].classList.remove('qa-Active')
            qaQuestion[2].classList.remove('qa-Active')
            qaQuestion[3].classList.remove('qa-Active')
        }
    })
    qaQuestion[1].addEventListener('click',()=>{
        if(qaQuestion[1].classList.contains('qa-Active')){
            qaQuestion[1].classList.remove('qa-Active')
        }
        else{
            qaQuestion[1].classList.add('qa-Active')
            qaQuestion[0].classList.remove('qa-Active')
            qaQuestion[2].classList.remove('qa-Active')
            qaQuestion[3].classList.remove('qa-Active')
        }
    })
    qaQuestion[2].addEventListener('click',()=>{
        if(qaQuestion[2].classList.contains('qa-Active')){
            qaQuestion[2].classList.remove('qa-Active')
        }
        else{
            qaQuestion[2].classList.add('qa-Active')
            qaQuestion[0].classList.remove('qa-Active')
            qaQuestion[1].classList.remove('qa-Active')
            qaQuestion[3].classList.remove('qa-Active')
        }
    })
    qaQuestion[3].addEventListener('click',()=>{
        if(qaQuestion[3].classList.contains('qa-Active')){
            qaQuestion[3].classList.remove('qa-Active')
        }
        else{
            qaQuestion[3].classList.add('qa-Active')
            qaQuestion[0].classList.remove('qa-Active')
            qaQuestion[1].classList.remove('qa-Active')
            qaQuestion[2].classList.remove('qa-Active')
        }
    })



    //Scrollmagic dla całej strony 
    //Scrollmagic dla całej strony 
    //Scrollmagic dla całej strony 
    //Scrollmagic dla całej strony 
    let controller=new ScrollMagic.Controller();

    //Scrollmagic animacja nawigacji desktopowej
    let navScene=new ScrollMagic.Scene({
        triggerElement:'.header',
        triggerHook:'0',
        offset:0,
        reverse:true,
        duration:100
    })
    .setClassToggle('.desk-nav','active-nav')
    .addTo(controller);

    //Scrollmagic dla animacji kwadratu mojej osoby 
    let aboutMeOrna=new ScrollMagic.Scene({
        triggerElement:'.aboutme-content',
        triggerHook:'0.8',
        reverse:false
    })
    .setClassToggle('.orna-aboutme','active-orna-aboutme')
    .addTo(controller);

    let specTools=new ScrollMagic.Scene({
        triggerElement:'.spec-tools',
        triggerHook:'0.8',
        reverse:false
    })
    .setClassToggle('.spec-tools','active-spec-tools')
    .addTo(controller);

    //Scrollmagic dla zmieniania szerokosci obramowan w short-contact
    let shortContact=new ScrollMagic.Scene({
        triggerElement:'.short-contact',
        triggerHook:'0.6',
        reverse:false
    })
    .setClassToggle('.short-contact','active-short-contact')
    .addTo(controller);

    let aboutMeA=new ScrollMagic.Scene({
        triggerElement:'.about-aboutme a',
        triggerHook:'0.88',
        reverse:false
    })
    .setClassToggle('.about-aboutme a','active-aboutme-a')
    .addTo(controller);

    let moreRealizationButton=new ScrollMagic.Scene({
        triggerElement:'.more-realization',
        triggerHook:'0.88',
        reverse:false
    })
    .setClassToggle('.more-realization','active-more-realization')
    .addTo(controller);

    let faqAboutContentP=new ScrollMagic.Scene({
        triggerElement:'.faq-about-content',
        triggerHook:'0.82',
        reverse:false
    })
    .setClassToggle('.faq-about-content','faq-about-content-active')
    .addTo(controller);

    let faqAboutA=new ScrollMagic.Scene({
        triggerElement:'.faq-about-a',
        triggerHook:'0.82',
        reverse:false
    })
    .setClassToggle('.faq-about-a','faq-about-a-active')
    .addTo(controller);

    let allTypesContacts=new ScrollMagic.Scene({
        triggerElement:'.all-types-contacts',
        triggerHook:'0.82',
        reverse:false
    })
    .setClassToggle('.all-types-contacts','all-types-contacts-active')
    .addTo(controller);
    
    let contactForm=new ScrollMagic.Scene({
        triggerElement:'.contact-form',
        triggerHook:'0.82',
        reverse:false
    })
    .setClassToggle('.contact-form','contact-form-active')
    .addTo(controller);

    //Scrollmagic dla animacji tematów sekcji
    $(tittleOfSection).each(function(){

        let tittleOfSectionScene=new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook:'0.88',
            reverse:false
        })
        .setClassToggle(this,'active-tittle')
        .addTo(controller);
    })

    $(qA).each(function(){

        let questionAndAnswer=new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook:'0.82',
            reverse:false
        })
        .setClassToggle(this,'qa-active')
        .addTo(controller);
    })

    $(project).each(function(){

        let projectVar=new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook:'0.88',
            reverse:false
        })
        .setClassToggle(this,'active-project')
        .addTo(controller);
    })

    //Scrollmagic dla opisu mojej osoby
    $(aboutMeP).each(function(){

        let aboutMePar=new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook:'0.88',
            reverse:false
        })
        .setClassToggle(this,'active-aboutpar')
        .addTo(controller);
    })
    $(SpecBox).each(function(){

        let SpecBoxvar=new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook:'0.88',
            reverse:false
        })
        .setClassToggle(this,'active-spec-box')
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